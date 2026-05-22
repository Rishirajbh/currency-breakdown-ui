export const moneyVisuals = {
  emptyWallet:
    "https://res.cloudinary.com/duj37krpb/image/upload/v1779352870/empty-wallet_1_ljgpms.png",

  thickWallet:
    "https://res.cloudinary.com/duj37krpb/image/upload/v1779352870/thick-wallet_gikrzq.png   ",

  bundle500:
    "https://res.cloudinary.com/duj37krpb/image/upload/v1779352870/bundles_olenx5.png",

  peti: "https://res.cloudinary.com/duj37krpb/image/upload/v1779352870/peti_e2xsps.png",

  khoka:
    "https://res.cloudinary.com/duj37krpb/image/upload/v1779352870/khoka_gmyq8i.png",
};

export function getMoneyVisual(amount) {
  if (amount <= 0) {
    return {
      type: "wallet",
      image: moneyVisuals.emptyWallet,
    };
  }

  if (amount < 1000) {
    return {
      type: "notes",
    };
  }

  if (amount < 10000) {
    return {
      type: "wallet",
      image: moneyVisuals.thickWallet,
    };
  }

  if (amount < 100000) {
    return {
      type: "bundle",
      image: moneyVisuals.bundle500,
    };
  }

  if (amount < 10000000) {
    return {
      type: "peti",
      image: moneyVisuals.peti,
    };
  }

  return {
    type: "khoka",
    image: moneyVisuals.khoka,
  };
}
