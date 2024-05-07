<template>
  <CategoryTabs @change="onCategoryChange" />
</template>

<script setup lang="ts">
  const router = useRouter();
  const { getCategories } = useProduct();
  await getCategories();

  const onCategoryChange = (category: string) => {
    if (category === 'all') {
      router.replace({ name: '' });
      return;
    }

    router.replace({ name: '', query: { category } });
  };
</script>

<style scoped></style>
