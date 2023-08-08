<script setup lang="ts">
  import mapboxgl, {
    LngLatLike,
    Map,
    Marker,
    Popup,
  } from "mapbox-gl";

  const { token } = useRuntimeConfig().public.mapbox;

  let map: Map | null = null;

  onMounted(() => {
    mapboxgl.accessToken = token;
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 1,
    });
  });
</script>

<template>
  <div id="map" class="h-screen"></div>
</template>

<style scoped></style>
