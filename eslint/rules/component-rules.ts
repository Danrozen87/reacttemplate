
export const componentRules = {
  // File Structure & Naming
  "filename-rules/match": ["error", {
    "pattern": "^[a-z0-9-]+$",
    "message": "Use kebab-case for file names"
  }],
  "folder-rules/unique-names": ["error", {
    "message": "Folder names must be unique across the project"
  }],
  "folder-rules/atomic-structure": ["error", {
    "atoms": "src/components/atoms",
    "molecules": "src/components/molecules",
    "organisms": "src/components/organisms",
    "message": "Components must be in their appropriate atomic design folders"
  }],
  
  // Component Size & Structure
  "max-lines": ["error", {
    "max": 68,
    "skipBlankLines": true,
    "skipComments": true
  }],
  "max-depth": ["error", 3],
  "complexity": ["error", 10],
};
