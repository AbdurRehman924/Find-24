<script lang="ts" setup></script>

<template>
  <SearchMobileBar />
  <SearchBar />
  <div class="mt-14">
    <SearchResultsList />
    <SearchMap v-show="false" />
  </div>
</template>

<style scoped></style>
