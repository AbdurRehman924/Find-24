<template>
  <div>
    <!-- Dashboard⬇️ -->
    <div class="my-8">
      <p>Dashboard</p>
      <p>
        Welcome back, Mr Kaliya. You have 9 Tasks remaining today!
      </p>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="number in 3"
          class="h-60 w-full rounded-2xl border-[1px] border-chinese-white bg-white"
        >
          number
        </div>
      </div>
    </div>
    <div class="flex">
      <!-- Upcoming services⬇️ -->
      <div class="w-3/4">
        <p>Upcoming Services</p>
        <div>
          <div class="grid grid-cols-4 bg-cultured">
            <p>Customer Name</p>
            <p>Service</p>
            <p>Date & Time</p>
            <p>Action</p>
          </div>
          <div class="hide-scrollbar max-h-96 overflow-auto">
            <div v-for="number in 100" class="bg-white p-5">
              <div class="grid grid-cols-4">
                <span class="h-12 w-12 rounded-full bg-palma"></span>
                <p>Name</p>
                <p>Date</p>
                <p>action</p>
              </div>
              <hr class="h-[1px] text-chinese-white" />
            </div>
          </div>
        </div>
      </div>
      <!-- Activity Log⬇️ -->
      <div>
        <p>Activity Log</p>
        <div class="hide-scrollbar max-h-96 overflow-auto">
          <div v-for="activity in 100">
            {{ activity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
