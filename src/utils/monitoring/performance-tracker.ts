
import { logger } from '@/utils/logger';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
}

class PerformanceTracker {
  private metrics: PerformanceMetrics[] = [];
  private readonly METRICS_LIMIT = 100;

  trackRender(componentName: string, renderTime: number): void {
    this.metrics.push({
      componentName,
      renderTime,
      timestamp: Date.now(),
    });

    if (this.metrics.length > this.METRICS_LIMIT) {
      this.flushMetrics();
    }
  }

  private flushMetrics(): void {
    const averageRenderTimes = this.calculateAverages();
    logger.info('Performance metrics:', { averageRenderTimes });
    this.metrics = [];
  }

  private calculateAverages(): Record<string, number> {
    const componentTotals: Record<string, { total: number; count: number }> = {};

    this.metrics.forEach((metric) => {
      if (!componentTotals[metric.componentName]) {
        componentTotals[metric.componentName] = { total: 0, count: 0 };
      }
      componentTotals[metric.componentName].total += metric.renderTime;
      componentTotals[metric.componentName].count += 1;
    });

    return Object.entries(componentTotals).reduce((acc, [name, { total, count }]) => ({
      ...acc,
      [name]: total / count,
    }), {});
  }
}

export const performanceTracker = new PerformanceTracker();
