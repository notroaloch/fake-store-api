import { fakeStoreAPI } from '~/server/utils/api';

export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig(event);

  const categories = await $fetch(fakeStoreAPI.categories, {
    baseURL: apiBaseUrl,
  });

  return categories;
});
