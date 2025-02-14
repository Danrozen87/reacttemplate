
const isProduction = process.env.NODE_ENV === 'production';

export const errorTrackingService = {
  captureError: (error: Error | string, context?: Record<string, unknown>) => {
    if (isProduction) {
      console.warn('Error tracking service not implemented:', { error, context });
    }
  }
};
