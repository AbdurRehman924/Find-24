function pushQuery(
  updatedQuery: Record<string, string | number | undefined>,
) {
  const router = useRouter();
  const route = useRoute();
  router.push({
    query: {
      ...route.query,
      ...updatedQuery,
    },
  });
}

export function pushCategoryQuery(value: string | undefined) {
  pushQuery({ category: value, category_type: undefined });
}

export function pushRatingQuery(value: number | string | undefined) {
  pushQuery({ rating: value });
}

export function pushPriceQuery(
  gte: number | string | undefined,
  lte: number | string | undefined,
) {
  pushQuery({ price__gte: gte, price__lte: lte });
}

export function pushSearchQuery(
  category: string | undefined,
  lat: number | undefined,
  lng: number | undefined,
) {
  pushQuery({
    category_type: category,
    lat,
    lng,
    category: undefined,
  });
}
