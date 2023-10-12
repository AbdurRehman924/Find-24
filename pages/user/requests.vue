<template>
  <div>
    <div class="mb-6 flex justify-between">
      <div class="text-2xl font-semibold">Service Requests</div>
      <div class="flex gap-x-2">
        <div>Sort</div>
        <div>Most recent</div>
      </div>
    </div>
    <div
      class="border-ch flex flex-col rounded-2xl border-0.5 border-chinese-white bg-white"
    >
      <div
        v-for="(request, index) in requests"
        class="flex flex-wrap items-center gap-y-4 p-6 lg:flex-nowrap"
        :class="[
          index === requests.length - 1
            ? ''
            : 'border-b border-chinese-white',
        ]"
      >
        <img
          class="mr-4 rounded-full"
          src="https://placehold.co/107x107"
          alt=""
        />
        <div class="flex w-full flex-col gap-y-2 font-medium">
          <!-- Name stuff -->

          <div class="text-xl font-semibold">{{ request.name }}</div>
          <div class="flex gap-x-2">
            <IconsBriefcase /> Service:
            <span class="text-palma">{{ request.service }}</span>
          </div>
          <div class="flex gap-x-2">
            <IconsPin class="h-6 w-6" /> Address:
            <span class="text-corduroy">{{ request.address }}</span>
          </div>
          <div class="flex flex-wrap gap-x-2 gap-y-2">
            <IconsBriefcase /> Booking Date:
            <span class="text-corduroy">{{
              request.bookingDate
            }}</span>
            <button class="font-normal text-palma underline">
              Reschedule
            </button>
          </div>
          <div class="flex">
            <!-- rating -->
            <div>
              <SharedRating :rating="request.rating">
                <template #active>
                  <IconsStar class="h-5 w-5 text-ripe-lemon" />
                </template>
                <template #inactive>
                  <IconsStar class="h-5 w-5 text-chinese-white" />
                </template>
              </SharedRating>
            </div>
            <div class="px-2">.</div>
            <div class="font-medium text-dark_corduroy">
              {{ request.totalReviews }} Total reviews
            </div>
          </div>
          <div>
            Amount Paid:
            <span class="font-semibold"
              >${{ request.amountPaid }}</span
            >
          </div>
        </div>
        <div class="flex items-center gap-x-2 lg:w-1/3">
          <!-- buttons -->
          <button
            class="flex h-11 w-[133px] items-center justify-center gap-x-1 rounded-full bg-frostee text-sm font-medium text-palma"
          >
            <IconsChatDots /> Message
          </button>
          <button
            class="flex h-11 w-[119px] items-center justify-center gap-x-1 rounded-full bg-provincial-pink text-sm font-medium text-grenadier"
          >
            <IconsCrossCircle /> Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const requests = ref([
    {
      img: "https://placehold.co/107x107",
      name: "Wade Warren",
      service: "Handy Man",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      bookingDate: "8 Nov 2023 at 9:00 PM",
      rating: 4,
      totalReviews: 421,
      amountPaid: 219.78,
    },
    {
      img: "https://placehold.co/107x107",
      name: "Wade Warren",
      service: "Handy Man",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      bookingDate: "8 Nov 2023 at 9:00 PM",
      rating: 4,
      totalReviews: 421,
      amountPaid: 219.78,
    },
  ]);
</script>
<style scoped></style>
