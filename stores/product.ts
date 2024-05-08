export const useProductStore = defineStore('product', () => {
  const categories: Ref<string[]> = useState('categories', () => []);
  const products: Ref<Product[]> = useState('products', () => []);

  const shoppingBag: Ref<ShoppingBagItem[]> = useState('shoppingBag', () => []);
  const savedProducts: Ref<Product[]> = useState('savedProducts', () => []);

  return { categories, products, shoppingBag, savedProducts };
});
