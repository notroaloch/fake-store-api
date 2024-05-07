export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig(event);
  const { category }: { category: string } = getQuery(event);

  const url =
    category === 'all' ? '/products' : `/products/category/${category}`;

  const products = await $fetch(url, {
    baseURL: apiBaseUrl,
  });

  return products;
});
