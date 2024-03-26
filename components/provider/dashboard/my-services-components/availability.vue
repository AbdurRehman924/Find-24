<template>
  <p>Availability</p>
  <div class="h-96 overflow-auto">
    <div
      v-for="number in 100"
      class="flex w-full justify-between p-6"
    >
      <div class="flex w-full justify-evenly">
        <button class="h-4 w-12 rounded-full bg-frostee">
          Toggle
        </button>
        <p>All day</p>
        <div>Start Time</div>
        <div>End Time</div>
        <div>Delete</div>
      </div>
      <div class="flex w-full justify-end">
        <div>Copy</div>
        <div>Add</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
