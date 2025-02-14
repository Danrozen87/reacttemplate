
import { ToastActionElement, ToastAction } from '@/components/ui/toast';
import { toast } from '@/hooks/use-toast';
import { ToastOptions } from './types';

export const DEFAULT_TOAST_DURATION = 5000;

export const createToastAction = (action: ToastOptions['action']): ToastActionElement | undefined => {
  if (!action) return undefined;
  
  // Using JSX factory function instead of JSX syntax since this is a .ts file
  return ToastAction({
    onClick: action.onClick,
    altText: `Action: ${action.label}`,
    children: action.label
  }) as ToastActionElement;
};

export const showToast = (
  message: string,
  options?: ToastOptions,
  variant: 'default' | 'destructive' = 'default'
) => {
  toast({
    title: message,
    description: options?.description,
    duration: options?.duration ?? DEFAULT_TOAST_DURATION,
    action: options?.action ? createToastAction(options.action) : undefined,
    variant
  });
};
