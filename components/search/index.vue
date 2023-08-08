<script lang="ts" setup></script>

<template>
  <SearchMobileBar />
  <SearchBar />
  <div class="mt-14">
    <SearchResultsList v-show="false" />
    <SearchMap />
  </div>
</template>

<style scoped></style>
