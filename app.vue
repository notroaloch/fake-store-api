<template>
  <NuxtLoadingIndicator />
  <UContainer>
    <UiNavbar />
    <div class="mt-5">
      <NuxtPage />
    </div>
  </UContainer>
</template>

<style>
  body {
    @apply bg-gray-100 dark:bg-gray-900;
  }
</style>
