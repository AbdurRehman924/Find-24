<script setup lang="ts">
  import mapboxgl, {
    LngLatLike,
    Map,
    Marker,
    Popup,
  } from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { storeToRefs } from "pinia";
  import useServicesStore from "~/stores/services";

  const { token } = useRuntimeConfig().public.mapbox;

  const servicesStore = useServicesStore();

  const { coordinates } = storeToRefs(servicesStore);

  let map: Map | null = null;
  const markers: Marker[] = [];

  function addMarkers() {
    if (coordinates.value.length == 0) return;
    const markerBounds = new mapboxgl.LngLatBounds();
    coordinates.value.forEach((coordinates) => {
      const coords = coordinates as LngLatLike;

      const el = document.createElement("div");
      el.className = "marker";

      const marker = new mapboxgl.Marker(el)
        .setLngLat(coords)
        .addTo(map!);

      markers.push(marker);
      markerBounds.extend(coords);
    });
  }

  watch(coordinates, () => {
    if (map) {
      markers.forEach((marker) => marker.remove());
      addMarkers();
    }
  });

  onMounted(() => {
    mapboxgl.accessToken = token;
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 1,
      scrollZoom: true,
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showAccuracyCircle: false,
      }),
    );
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right",
    );
    map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
    addMarkers();
  });
</script>

<template>
  <div id="map" class="h-screen"></div>
</template>

<style lang="postcss">
  .marker {
    @apply h-10 w-10 cursor-pointer;
  }

  .marker.marker-active:after {
    @apply bg-malachite;
  }

  .marker:hover:before {
    @apply bg-opacity-40;
  }

  .marker:before,
  .marker:after {
    content: "";
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full;
  }

  .marker:before {
    @apply h-12 w-12  bg-palma bg-opacity-20 transition-colors;
  }

  .marker:after {
    @apply h-5 w-5 border-2 border-white bg-malachite transition-colors;
  }
</style>
