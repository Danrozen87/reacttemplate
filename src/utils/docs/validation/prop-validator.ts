
/**
 * @module PropValidator
 * @description Validates that documented props match actual component props
 */

import { ParsedProp } from './types';
import { Project, Node, Type, Symbol } from 'ts-morph';

interface PropValidationResult {
  isValid: boolean;
  mismatches: PropMismatch[];
}

interface PropMismatch {
  propName: string;
  documentedType: string;
  actualType: string;
  issue: 'type_mismatch' | 'missing_in_code' | 'missing_in_docs' | 'required_mismatch';
}

/**
 * Validates that documented props match the actual component props
 */
export function validatePropSync(
  sourceFile: string,
  documentedProps: ParsedProp[]
): PropValidationResult {
  const project = new Project();
  project.addSourceFileAtPath(sourceFile);
  const source = project.getSourceFileOrThrow(sourceFile);
  
  const interfaces = source.getInterfaces();
  const propsInterface = interfaces.find(i => i.getName().endsWith('Props'));
  
  if (!propsInterface) {
    return {
      isValid: false,
      mismatches: [{
        propName: 'Props Interface',
        documentedType: 'N/A',
        actualType: 'N/A',
        issue: 'missing_in_code'
      }]
    };
  }

  const actualProps = propsInterface.getProperties().map(prop => ({
    name: prop.getName(),
    type: prop.getType().getText(),
    required: !prop.hasQuestionToken(),
    description: prop.getJsDocs()[0]?.getDescription() || ''
  }));

  const mismatches: PropMismatch[] = [];

  // Check documented props exist in code
  documentedProps.forEach(docProp => {
    const codeProp = actualProps.find(p => p.name === docProp.name);
    if (!codeProp) {
      mismatches.push({
        propName: docProp.name,
        documentedType: docProp.type,
        actualType: 'undefined',
        issue: 'missing_in_code'
      });
      return;
    }

    if (docProp.type !== codeProp.type) {
      mismatches.push({
        propName: docProp.name,
        documentedType: docProp.type,
        actualType: codeProp.type,
        issue: 'type_mismatch'
      });
    }

    if (docProp.required !== codeProp.required) {
      mismatches.push({
        propName: docProp.name,
        documentedType: docProp.type,
        actualType: codeProp.type,
        issue: 'required_mismatch'
      });
    }
  });

  // Check code props exist in docs
  actualProps.forEach(codeProp => {
    if (!documentedProps.find(p => p.name === codeProp.name)) {
      mismatches.push({
        propName: codeProp.name,
        documentedType: 'undefined',
        actualType: codeProp.type,
        issue: 'missing_in_docs'
      });
    }
  });

  return {
    isValid: mismatches.length === 0,
    mismatches
  };
}
