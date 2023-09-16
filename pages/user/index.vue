<template>
  <div class="">
    <div class="mb-7 text-2xl font-semibold">
      Welcome back, Danish
    </div>

    <!-- Banner -->
    <div class="relative mb-8 flex h-56 rounded-2xl bg-palma p-6">
      <div class="w-2/3">
        <div class="mb-4 text-2xl font-bold text-white">
          Need Professionals? Your Ultimate Connection to Quality
          Services
        </div>
        <div class="mb-6 text-sm text-white">
          Discover skilled service providers for your needs. Explore
          now!
        </div>
        <button class="rounded-full bg-white px-6 py-3 text-palma">
          Explore Providers
        </button>
      </div>
      <div class="absolute bottom-0 right-0 w-1/3">
        <IconsServiceBanner />
      </div>
    </div>

    <!-- spendings and bookings cards -->
    <div class="mb-8 flex h-36 gap-x-6">
      <div
        class="flex w-1/3 items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6"
      >
        <IconsBookingsColored />
        <div class="flex flex-col gap-y-1">
          <div class="text-2xl font-bold text-ripe-lemon">123</div>
          <div class="text-sm font-medium text-dark_corduroy">
            Bookings
          </div>
        </div>
      </div>
      <div
        class="flex w-1/3 items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6"
      >
        <IconsSpendingColored />
        <div class="flex flex-col gap-y-1">
          <div class="text-2xl font-bold text-byzantine-blue">
            $200
          </div>
          <div class="text-sm font-medium text-dark_corduroy">
            Total Spend
          </div>
        </div>
      </div>
      <div
        class="flex w-1/3 items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6"
      >
        <IconsCompletedServicesColored />
        <div class="flex flex-col gap-y-1">
          <div class="text-2xl font-bold text-malachite">421</div>
          <div class="text-sm font-medium text-dark_corduroy">
            Completed Services
          </div>
        </div>
      </div>
    </div>

    <!-- upcomming bookings and activity log wrapper -->
    <div class="flex gap-x-6">
      <!-- upcomming bookings -->
      <div class="w-2/3">
        <div class="text-lg font-semibold">Upcoming Bookings</div>
        <div class="">

        </div>
      </div>

      <!-- activity log -->
      <div class="1/2">
        <div class="text-lg font-semibold">Activity Log</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
  .status_card {
  }
</style>
