import Product from "./models/Product";

const products: Product[] = [
  {
    name: "sponge",
    price: 2.5,
  },
  {
    name: "stuffed animal",
    price: 25,
  },
  {
    name: "scissors",
    price: 7,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length) {
    return array.reduce((ac, cv) => ac + cv.price, 0) / array.length;
  } else {
    return 0;
  }
};
