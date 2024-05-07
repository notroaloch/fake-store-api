export const useProduct = () => {
  const productStore = useProductStore();
  const { categories, products } = storeToRefs(productStore);

  const getCategories = async () => {
    const data: string[] = await $fetch('/api/categories');
    categories.value = data;
    return data;
  };

  return { categories, products, getCategories };
};
