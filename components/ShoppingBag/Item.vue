<template>
  <div class="flex gap-4">
    <NuxtImg
      :src="item.data.image"
      fit="contain"
      height="100px"
      width="100px"
    />
    <div class="flex flex-col gap-4">
      <p>{{ item.data.title }}</p>
      <div class="flex items-center gap-2">
        <UInput
          type="number"
          v-model="item.qty"
          class="w-[70px]"
          :step="1"
          :min="0"
        />
        <p>${{ totalPrice }} USD</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ item: ShoppingBagItem }>();
  const { item } = toRefs(props);

  const { removeFromBag } = useShoppingBag();

  const totalPrice = computed(() => {
    return (item.value.data.price * item.value.qty).toFixed(2);
  });

  watch(
    item.value,
    () => {
      if (item.value.qty < 0) {
        item.value.qty = 1;
      }

      if (item.value.qty === 0) {
        removeFromBag(item.value);
      }

      if (item.value.qty % 1 != 0) {
        item.value.qty = Math.round(item.value.qty);
      }
    },
    { immediate: true, deep: true }
  );
</script>

<style scoped></style>
