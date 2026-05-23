# Currency Breakdown UI

A lightweight visual Indian currency visualization library for JavaScript, React, Angular, Ionic, Vue and more.

Render beautiful animated currency stacks, bundles, wallets, peti, and khoka visuals based on amount.

---

## Preview

![Currency Breakdown UI](https://res.cloudinary.com/duj37krpb/image/upload/v1779431412/currency-breakdown-ui_ucj3vc.gif)

---

## Features

- Animated Indian currency stacks
- Loose notes and coins rendering
- Responsive overlap engine
- Auto visual modes based on amount
- Wallet / Bundle / Peti / Khoka visuals
- Lightweight and fast
- Framework agnostic
- Works with React, Angular, Ionic, Vue & Vanilla JS
- Zero heavy dependencies

---

## Installation

```bash
npm install currency-breakdown-ui
```

---

## Import Styles

```js
import "currency-breakdown-ui/style.css";
```

---

# React Example

```tsx
import { useEffect, useRef, useState } from "react";

import CurrencyBreakdown from "currency-breakdown-ui";

import "currency-breakdown-ui/style.css";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [amount, setAmount] = useState(500);

  useEffect(() => {
    if (!ref.current) return;

    CurrencyBreakdown.render({
      element: ref.current,
      amount,
    });
  }, [amount]);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "300px",
        }}
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value) || 0)}
      />
    </>
  );
}
```

---

# Vanilla JavaScript Example

```html
<div id="money"></div>
```

```js
import CurrencyBreakdown from "currency-breakdown-ui";

import "currency-breakdown-ui/style.css";

CurrencyBreakdown.render({
  element: "#money",
  amount: 25000,
});
```

---

# API

## render()

```ts
CurrencyBreakdown.render({
  element,
  amount,
  config,
});
```

---

## Parameters

| Property | Type                  | Required | Description                   |
| -------- | --------------------- | -------- | ----------------------------- |
| element  | string \| HTMLElement | ✅       | Target container              |
| amount   | number                | ✅       | Amount to visualize           |
| config   | object                | ❌       | Custom visualization settings |

---

## Config Options

| Option          | Default |
| --------------- | ------- |
| noteScale       | 0.75    |
| coinScale       | 0.08    |
| overlapRatio    | 0.35    |
| maxOverlapRatio | 0.85    |
| maxRotation     | 1       |

---

# Supported Frameworks

- React
- Angular
- Ionic
- Vue
- Next.js
- Vanilla JavaScript

---

# Notes

- Container should have a fixed height.
- Visualization automatically changes based on amount.
- Supports responsive rendering.

---

# Roadmap

- Multi-currency support
- More animations
- Smart denomination grouping
- Theme support
- Smaller bundle size

---

# Support

For support or feature requests:

📧 rishiraj7b9@gmail.com

---

# License

ISC
