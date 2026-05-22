declare namespace CurrencyBreakdown {
  interface RenderOptions {
    element: string | HTMLElement;
    amount: number;
  }

  function render(options: RenderOptions): void;
}

declare const CurrencyBreakdown: {
  render: typeof CurrencyBreakdown.render;
};

export default CurrencyBreakdown;
