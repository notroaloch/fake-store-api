<template>
  <div class="flex h-[60px] items-center border-b-2 py-2">
    <h1 class="text-primary flex-1 text-xl font-bold">TheFakeStore API</h1>
    <div class="flex items-center gap-6">
      <UInput color="gray" variant="outline" placeholder="Search..." />
      <UButton
        icon="i-heroicons-shopping-bag"
        size="xl"
        color="primary"
        square
        variant="ghost"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
