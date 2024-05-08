interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ShoppingBagItem {
  id: number;
  data: Product;
  qty: number;
}
