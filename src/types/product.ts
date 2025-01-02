export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  availableImmediately: boolean;
};

export type CartItem = Product & {
  quantity: number;
};