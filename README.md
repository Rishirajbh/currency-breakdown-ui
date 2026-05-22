# Currency Breakdown UI

A lightweight visual money breakdown library for JavaScript, React, Ionic, Angular and more.

Render beautiful animated Indian currency stacks, bundles, wallets, peti and khoka visuals based on amount.

## Features

- Animated currency stacks
- Responsive note overlap engine
- Loose notes + coins
- Auto money visualization
- Wallet / Bundle / Peti / Khoka modes
- Framework agnostic
- Works with React, Angular, Vanilla JS, Ionic
- Tiny package
- Zero heavy dependencies

## Installation

Install currency-breakdown-ui with npm

```bash
  npm i currency-breakdown-ui
```

## Usage/Examples

```javascript
import {
  useEffect,
  useRef,
  useState,
} from "react";

import CurrencyBreakdown
  from "currency-breakdown-ui";

import "currency-breakdown-ui/style.css";

export default function App() {
  const ref =
    useRef<HTMLDivElement>(null);

  const [amount, setAmount] =
    useState(500); // initial amount to be displayed

  useEffect(() => {
    if (!ref.current) return;

    CurrencyBreakdown.render({
      element: ref.current,
      amount,
    });
  }, [amount]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "300px",
      }}
    />
    <IonInput
        label="Enter amount"
        labelPlacement="stacked"
        placeholder="Enter amount"
        value={amount}
        onIonInput={(e) => {
            const value =
            Number(e.detail.value) || 0;

            setAmount(value);
        }}
        />
  );
}
```

## Support

For support, email rishiraj7b9@gmail.com.
