export const useProduct = () => {
  const productStore = useProductStore();
  const { categories, products } = storeToRefs(productStore);

  const getCategories = async () => {
    const data: string[] = await $fetch('/api/categories');
    categories.value = data;
    return data;
  };

  const getProducts = async (category: undefined | string) => {
    const data: Product[] = await $fetch('/api/products', {
      query: {
        category,
      },
    });
    products.value = data;
    return data;
  };

  const getProductByID = async (id: string) => {
    const data: Product = await $fetch(`/api/products/${id}`);
    return data;
  };

  return { categories, products, getCategories, getProducts, getProductByID };
};
