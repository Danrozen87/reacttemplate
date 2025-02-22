
import * as React from 'react';
import { animations } from '../constants/animation-classes';
import { interactionAnimations } from '../constants/interaction-classes';

/**
 * @description Hooks for managing hover and focus animations
 */
export const useHoverAnimation = (variant: keyof typeof interactionAnimations.interaction.hover) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const hoverClass = React.useMemo(() => 
    interactionAnimations.interaction.hover[variant],
    [variant]
  );

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: hoverClass,
  };

  return { isHovered, hoverProps };
};

export const useFocusAnimation = (variant: keyof typeof interactionAnimations.interaction.focus) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  const focusClass = React.useMemo(() => 
    interactionAnimations.interaction.focus[variant],
    [variant]
  );

  const focusProps = {
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: focusClass,
  };

  return { isFocused, focusProps };
};
