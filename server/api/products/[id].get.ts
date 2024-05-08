import { fakeStoreAPI } from '~/server/utils/api';

export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, 'id');

  const product = await $fetch(fakeStoreAPI.product + id, {
    baseURL: apiBaseUrl,
  });

  return product;
});
