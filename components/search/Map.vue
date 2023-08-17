<script setup lang="ts">
  import mapboxgl, {
    LngLatLike,
    Map,
    Marker,
    Popup,
  } from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { storeToRefs } from "pinia";
  import Service from "~/types/service";
  import useServicesStore from "~/stores/services";
  import SearchResultCard from "./ResultCard.vue";

  const { token } = useRuntimeConfig().public.mapbox;

  const servicesStore = useServicesStore();
  const currentService = ref<Service | null>(null);

  const { coordinates } = storeToRefs(servicesStore);

  let map: Map | null = null;
  const markers: Marker[] = [];
  const popUpEl = ref<typeof SearchResultCard>();

  const popup: Popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: 12,
    maxWidth: "320px",
  });

  function flyToMarker(marker: Marker) {
    map?.flyTo({
      center: marker.getLngLat(),
      zoom: 15,
      offset: [0, -100],
    });
  }

  function updatePopUp(marker: Marker) {
    if (popUpEl.value) {
      popup
        .setLngLat(marker.getLngLat())
        .setDOMContent(popUpEl.value.$el)
        .addTo(map!);
    }
  }

  function removePopup() {
    popup.remove();
    map?.zoomTo(6, { duration: 5000 });
    currentService.value = null;
  }

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

      el.addEventListener("click", () =>
        onMarkerClick(marker, coordinates),
      );

      markers.push(marker);
      markerBounds.extend(coords);
    });
    map?.fitBounds(markerBounds, {
      padding: 100,
      maxZoom: 15,
      linear: true,
    });
  }

  function onMarkerClick(
    marker: Marker,
    coordinates: { lat: number; lng: number },
  ) {
    currentService.value = servicesStore.getServiceByCoords(
      coordinates,
    ) as Service;

    flyToMarker(marker);
    updatePopUp(marker);
  }

  watch(coordinates, () => {
    if (map) {
      popup.remove();
      markers.forEach((marker) => marker.remove());
      addMarkers();
    }
  });

  onMounted(() => {
    mapboxgl.accessToken = token;
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 2,
      scrollZoom: true,
    });
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right",
    );
    map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
    addMarkers();
  });
</script>

<template>
  <div id="map" class="h-screen rounded-2xl"></div>
  <ClientOnly>
    <SearchResultCard
      ref="popUpEl"
      v-show="currentService"
      :service="currentService"
    >
      <button
        class="absolute left-1.5 top-1.5 rounded-full bg-white"
        @click="removePopup"
      >
        <IconsCross class="h-4 w-4" />
      </button>
    </SearchResultCard>
  </ClientOnly>
</template>

<style lang="postcss">
  .mapboxgl-popup-content {
    @apply rounded-2xl p-0;
  }
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
