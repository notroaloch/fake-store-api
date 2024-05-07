export const useProductStore = defineStore('product', () => {
  const categories: Ref<string[]> = useState('categories', () => []);
  const products: Ref<Product[]> = useState('products', () => []);

  return { categories, products };
});
