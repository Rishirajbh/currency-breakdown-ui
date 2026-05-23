declare module "currency-breakdown-ui" {
  export interface RenderConfig {
    noteScale?: number;
    coinScale?: number;
    overlapRatio?: number;
    maxOverlapRatio?: number;
    maxRotation?: number;
  }

  export interface RenderOptions {
    element: string | HTMLElement;
    amount: number;
    config?: RenderConfig;
  }

  export function render(options: RenderOptions): void;

  const CurrencyBreakdown: {
    render: typeof render;
  };

  export default CurrencyBreakdown;
}
