
import { logger } from '@/utils/logger';

interface PerformanceTestResult {
  componentName: string;
  renderCount: number;
  averageRenderTime: number;
  maxRenderTime: number;
}

export class PerformanceTestUtils {
  private static renderTimes: Map<string, number[]> = new Map();

  static trackRender(componentName: string, renderTime: number): void {
    const times = this.renderTimes.get(componentName) || [];
    times.push(renderTime);
    this.renderTimes.set(componentName, times);
  }

  static getPerformanceReport(): PerformanceTestResult[] {
    const results: PerformanceTestResult[] = [];

    this.renderTimes.forEach((times, componentName) => {
      const result = {
        componentName,
        renderCount: times.length,
        averageRenderTime: times.reduce((a, b) => a + b, 0) / times.length,
        maxRenderTime: Math.max(...times),
      };

      results.push(result);
      logger.info(`Performance report for ${componentName}:`, {
        data: result
      });
    });

    return results;
  }

  static clearMetrics(): void {
    this.renderTimes.clear();
  }
}
