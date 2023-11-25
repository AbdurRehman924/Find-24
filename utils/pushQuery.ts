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
      category: route.query.category || undefined,
      category_type: route.query.category_type || undefined,
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
      category: route.query.category || undefined,
      category_type: route.query.category_type || undefined,
      rating: route.query.rating,
      price__gte: gte,
      price__lte: lte,
    },
  });
}

export function pushSearchQuery(
  category: string | undefined,
  lat: number | undefined,
  lng: number | undefined,
) {
  const router = useRouter();
  const route = useRoute();
  router.push({
    query: {
      category_type: category,
      rating: route.query.rating,
      price__gte: route.query.price__gte,
      price__lte: route.query.price__lte,
      lat,
      lng,
    },
  });
}
