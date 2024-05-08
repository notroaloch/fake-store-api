<template>
  <div class="flex h-[calc(100vh-80px)] flex-col">
    <div class="my-4">
      <ULink @click="$router.back()">< GO BACK</ULink>
    </div>
    <div class="grid flex-1 grid-cols-2">
      <div
        class="flex w-full flex-col items-center justify-center bg-white px-12"
      >
        <NuxtImg
          :src="product.image"
          fit="contain"
          height="300px"
          width="300px"
        />
      </div>
      <div class="mt-8 flex w-full flex-col gap-12 px-12">
        <div class="flex flex-col gap-4">
          <h1 class="text-lg font-semibold uppercase tracking-tight">
            {{ product.title }}
          </h1>
          <div class="flex items-center gap-3">
            <UBadge color="white" variant="solid" class="uppercase">{{
              product.category
            }}</UBadge>
            <div class="flex items-center gap-1 text-gray-400">
              <Icon name="heroicons:star-20-solid" class="size-[20px]" />
              <p>{{ product.rating?.rate }} ({{ product.rating?.count }})</p>
            </div>
          </div>
        </div>
        <h2 class="text-pretty text-justify tracking-tight text-gray-700">
          {{ product.description }}
        </h2>
        <p class="text-lg tracking-tight">${{ product.price }} USD</p>
        <UButton :ui="{ rounded: 'rounded-full' }" block @click="handleClick"
          >ADD TO BAG</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { getProductByID } = useProduct();
  const { addToBag } = useShoppingBag();

  const product: Ref<Product> = useState('product');

  product.value = await getProductByID(route.params.id as string);

  const handleClick = () => {
    addToBag(product.value);
  };
</script>

<style scoped></style>
