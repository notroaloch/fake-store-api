<template>
  <div
    class="group min-w-[200px] rounded-md border p-3 shadow-sm hover:cursor-pointer"
  >
    <!-- <NuxtImg :src="product.image" /> -->
    <div class="grid transition-transform group-hover:translate-y-1">
      <h2 class="group-hover:text-primary line-clamp-2 font-semibold">
        {{ product.title }}
      </h2>
      <h2 class="line-clamp-2 text-pretty text-gray-700">
        {{ product.description }}
      </h2>
      <h2>{{ product.price }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ product: Product }>();
  const { product } = toRefs(props);
</script>

<style scoped></style>
