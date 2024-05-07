<template>
  <UTabs v-model="selected" :items="items" @change="onChange">
    <template #default="{ item, selected }">
      <p class="line-clamp-2 capitalize" :class="{ 'text-primary': selected }">
        {{ item.label }}
      </p>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'change', category: string): void;
  }>();

  const route = useRoute();
  const { categories } = useProduct();

  const items = computed(() => {
    return [
      { label: 'all' },
      categories.value.map((category) => ({
        label: category,
      })),
    ].flat();
  });

  const selected = computed({
    get() {
      const index = items.value.findIndex(
        (item) => item.label === route.query.category
      );
      if (index === -1) {
        return 0;
      }

      return index;
    },
    set(value) {},
  });

  const onChange = (index: number) => {
    const category = items.value.at(index)?.label;
    emit('change', category!);
  };
</script>

<style scoped></style>
