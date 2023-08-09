<script setup lang="ts"></script>

<template>
  <div
    class="relative mx-16 hidden max-w-4xl rounded-4xl border-0.5 border-chinese-white py-3 pl-8 pr-3 shadow-variant1 sm:flex sm:items-center sm:gap-6 xl:mx-auto"
  >
    <SearchCategoriesAutoComplete class="grow" />
    <span class="h-11 w-[0.5px] bg-chinese-white"></span>
    <SearchLocationAutoComplete class="grow" />
    <button
      class="font-semi flex items-center gap-2 whitespace-nowrap rounded-4xl bg-palma px-4 py-3.5 text-sm text-white hover:bg-islamic-green focus:bg-islamic-green"
    >
      <IconsSearch />
      <span>Find Providers</span>
    </button>
  </div>
</template>

<style scoped></style>
