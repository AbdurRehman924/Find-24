<template>
  <div>
    <div class="mb-6 flex justify-between">
      <div class="text-2xl font-semibold">Service Requests</div>
      <div class="flex gap-x-2">
        <div>Sort</div>
        <div>Most recent</div>
      </div>
    </div>
    <div class="border-ch flex flex-col bg-white">
      <div class="flex items-center p-6">
        <img
          class="mr-4 rounded-full"
          src="https://placehold.co/107x107"
          alt=""
        />
        <div class="flex flex-col gap-y-2 font-medium">
          <!-- Name stuff -->

          <div class="text-xl font-semibold">Wade Warren</div>
          <div class="flex gap-x-2">
            <IconsBriefcase /> Service:
            <span class="text-palma">Handy Man</span>
          </div>
          <div class="flex gap-x-2">
            <IconsPin class="h-6 w-6" /> Address:
            <span class="text-corduroy"
              >1901 Thornridge Cir. Shiloh, Hawaii 81063</span
            >
          </div>
          <div class="flex gap-x-2">
            <IconsBriefcase /> Booking Date:
            <span class="text-corduroy">8 Nov 2023 at 9:00 PM</span>
            <button class="font-normal text-palma underline">
              Reschedule
            </button>
          </div>
          <div class="flex">
            <!-- rating -->
            <div>
              <SharedRating :rating="4">
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
              421 Total reviews
            </div>
          </div>
          <div>
            Amount Paid: <span class="font-semibold">$219.78</span>
          </div>
        </div>
        <div>
          <!-- buttons -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
