import Places from "~/types/mapbox";

export const useMapBox = () => {
  const { mapbox } = useRuntimeConfig().public;
  function searchPlaces(query: string) {
    return useFetch<Places>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?&access_token=${mapbox.token}`,
    );
  }

  return { searchPlaces };
};
