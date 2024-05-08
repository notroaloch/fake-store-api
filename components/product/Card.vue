<template>
  <div
    class="group flex overflow-clip rounded-md border shadow-sm hover:shadow-md sm:flex-col"
  >
    <div
      class="flex h-[250px] min-h-[200px] min-w-[200px] justify-center bg-white p-3"
    >
      <NuxtImg
        :src="product.image"
        fit="contain"
        height="200px"
        width="200px"
        class="hover:cursor-pointer"
        @click="handleClick"
      />
    </div>
    <div class="flex flex-col gap-2 p-3">
      <h2
        class="hover:text-primary line-clamp-2 font-semibold tracking-tight transition-colors hover:cursor-pointer"
        @click="handleClick"
      >
        {{ product.title }}
      </h2>
      <h2 class="line-clamp-3 tracking-tight">
        {{ product.description }}
      </h2>
      <h2>${{ product.price }} USD</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ product: Product }>();
  const { product } = toRefs(props);

  const handleClick = async () => {
    await navigateTo(`/products/${product.value.id}`);
  };
</script>

<style scoped></style>
