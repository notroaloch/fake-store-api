<template>
  <div class="">
    <!-- <NuxtImg :src="product.image" /> -->
    <div class="">
      <h2>{{ product.title }}</h2>
      <h2>{{ product.description }}</h2>
      <h2>{{ product.price }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ product: Product }>();
  const { product } = toRefs(props);
</script>

<style scoped></style>
