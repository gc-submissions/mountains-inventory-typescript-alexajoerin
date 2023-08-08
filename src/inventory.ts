import InventoryItem from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  if (array.length) {
    return array.reduce((ac, cv) => ac + cv.quantity * cv.product.price, 0);
  } else {
    return 0;
  }
};
