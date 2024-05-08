<template>
  <div class="mb-20 mt-5 flex flex-col gap-3">
    <CategoryTabs @change="onCategoryChange" />
    <div
      v-if="!isLoading"
      class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      v-else
      class="flex h-[calc(100vh-80px)] animate-pulse flex-col items-center justify-center text-gray-500"
    >
      <Icon name="heroicons:cloud-arrow-down-16-solid" size="2em" />
      <p class="text-center">Loading</p>
      <p></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();
  const { products, getProducts, getCategories } = useProduct();

  const isLoading = useState('isLoading', () => true);

  await getCategories();

  watch(
    router.currentRoute,
    async () => {
      products.value = [];
      isLoading.value = true;

      const category = route.query.category
        ? (route.query.category as string)
        : 'all';

      await getProducts(category);
      isLoading.value = false;
    },
    { immediate: true }
  );

  const onCategoryChange = (category: string) => {
    return category.toLowerCase() === 'all'
      ? router.replace({ name: '' })
      : router.replace({ name: '', query: { category } });
  };
</script>

<style scoped></style>
