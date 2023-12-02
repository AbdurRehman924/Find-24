<template>
  <div class="">
    <div class="mb-7 text-2xl font-semibold">
      Welcome back, Danish
    </div>

    <!-- Banner -->
    <div class="relative mb-8 flex h-56 rounded-2xl bg-palma p-6">
      <div class="lg:w-2/3">
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
      <div class="absolute bottom-0 right-0 hidden w-1/3 lg:block">
        <IconsServiceBanner />
      </div>
    </div>

    <!-- spendings and bookings cards -->
    <div
      class="mb-8 flex flex-col items-center gap-6 md:flex-row lg:h-36 lg:flex-row"
    >
      <div
        class="flex h-36 w-full items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6 md:w-1/2 lg:w-1/3"
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
        class="flex h-36 w-full items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6 md:w-1/2 lg:w-1/3"
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
        class="flex h-36 w-full items-center justify-start gap-x-4 rounded-2xl border-0.5 border-chinese-white bg-white px-6 md:w-1/2 lg:w-1/3"
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
    <div class="flex flex-col gap-6 lg:flex-row">
      <!-- upcomming bookings -->
      <div class="w-full lg:w-2/3">
        <div class="mb-6 text-lg font-semibold">
          Upcoming Bookings
        </div>

        <!-- table wrapper -->
        <table id="upcomming_table" class="">
          <!-- table body -->
          <tbody>
            <tr class="rounded-t-2xl bg-cultured">
              <th>
                <div>Service Provider</div>
                <IconsTogglesort />
              </th>
              <th>Service</th>
              <th>
                <div>Date & Time</div>
                <IconsTogglesort />
              </th>
              <th>Action</th>
            </tr>
            <div class="h-[420px] overflow-auto">
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
              <tr>
                <td class="name">
                  <img src="https://placehold.co/40x40" alt="" />
                  Ben houinard
                </td>
                <td class="service">Car Steam</td>
                <td class="date_time">
                  <div class="date">5 Jan, 2023</div>
                  <div class="time">4:00 AM</div>
                </td>
                <td class="actions">
                  <IconsBlackcal />
                  <IconsGreenchat />
                  <IconsRedcross />
                </td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>

      <!-- activity log -->
      <div class="w-full lg:w-1/3">
        <div class="mb-6 text-lg font-semibold">Activity Log</div>
        <div class="h-[368px]">
          <div class="activity">
            <div><img src="https://placehold.co/48x48" alt="" /></div>
            <div class="message">Message</div>
            <div class="date_time">
              <div class="date">Feb 9, 2024</div>
              <div class="time">11:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
  #upcomming_table {
    @apply w-full;
    tr {
      @apply flex items-center justify-between gap-x-4;
      @apply w-full px-6 py-3;
      th {
        @apply w-1/4;
        @apply flex items-center gap-x-2;
      }
      td {
        @apply w-1/4;
      }
      /* {
        @apply rounded-t-2xl bg-cultured px-6 py-4 text-sm font-semibold;
      } */
      .name {
        @apply flex items-center gap-x-2;
        img {
          @apply inline-block;
        }
      }
      .service {
        @apply text-palma;
      }
      .date_time {
        @apply text-sm font-medium text-dark_corduroy;
        .date {
        }
        .time {
        }
      }
      .actions {
        @apply flex gap-x-2;
      }
    }
  }
  .activity {
    @apply mb-6 flex h-[60px] items-center justify-between gap-x-4 text-sm text-corduroy;

    > img {
      @apply rounded-full;
    }
    .date,
    .time {
      @apply text-xs font-medium;
    }
  }
</style>
