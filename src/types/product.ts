export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type CartItem = Product & {
  quantity: number;
};