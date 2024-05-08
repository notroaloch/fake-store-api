export const useShoppingBag = () => {
  const productStore = useProductStore();
  const { shoppingBag } = storeToRefs(productStore);

  const addToBag = (product: Product) => {
    const index = shoppingBag.value.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const newItem: ShoppingBagItem = {
        id: product.id,
        data: product,
        qty: 1,
      };

      shoppingBag.value.push(newItem);
      return;
    }

    shoppingBag.value.at(index)!.qty += 1;
  };

  const removeFromBag = (item: ShoppingBagItem) => {
    shoppingBag.value = shoppingBag.value.filter((e) => e.id !== item.id);
  };

  return {
    shoppingBag,
    addToBag,
    removeFromBag,
  };
};
