<template>
  <CategoryTabs @change="onCategoryChange" />
  <div class="">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();
  const { products, getProducts, getCategories } = useProduct();

  await getCategories();

  watch(
    router.currentRoute,
    async () => {
      const category = route.query.category
        ? (route.query.category as string)
        : 'all';
      await getProducts(category);
    },
    { immediate: true }
  );

  const onCategoryChange = (category: string) => {
    return category === 'all'
      ? router.replace({ name: '' })
      : router.replace({ name: '', query: { category } });
  };
</script>

<style scoped></style>
