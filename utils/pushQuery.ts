export function pushCategoryQuery(value: string | undefined) {
  const router = useRouter();
  const route = useRoute();
  router.push({
    query: {
      category: value,
      rating: route.query.rating,
      price__gte: route.query.price__gte,
      price__lte: route.query.price__lte,
    },
  });
}

export function pushRatingQuery(value: number | string | undefined) {
  const router = useRouter();
  const route = useRoute();
  router.push({
    query: {
      category: route.query.category,
      rating: value,
      price__gte: route.query.price__gte,
      price__lte: route.query.price__lte,
    },
  });
}

export function pushPriceQuery(
  gte: number | string | undefined,
  lte: number | string | undefined,
) {
  const router = useRouter();
  const route = useRoute();
  router.push({
    query: {
      category: route.query.category,
      rating: route.query.rating,
      price__gte: gte,
      price__lte: lte,
    },
  });
}
