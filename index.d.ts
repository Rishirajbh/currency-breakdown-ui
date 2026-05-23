declare module "currency-breakdown-ui" {
  export interface CurrencyBreakdownOptions {
    amount: number;
    currency?: string;
  }

  export function renderCurrencyBreakdown(
    element: HTMLElement,
    options: CurrencyBreakdownOptions,
  ): void;

  const CurrencyBreakdown: {
    renderCurrencyBreakdown: typeof renderCurrencyBreakdown;
  };

  export default CurrencyBreakdown;
}
