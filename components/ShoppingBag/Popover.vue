<template>
  <UPopover>
    <UButton
      icon="i-heroicons-shopping-bag"
      size="xl"
      color="primary"
      square
      variant="ghost"
    />
    <template #panel>
      <div class="w-[500px] p-4">
        <p class="font-semibold tracking-tighter">Shopping Bag</p>
        <div
          class="flex max-w-[450px] flex-col p-4"
          v-for="item in shoppingBag"
          :key="item.id"
        >
          <ShoppingBagItem :item="item" />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
  const { shoppingBag } = useShoppingBag();
</script>

<style scoped></style>
