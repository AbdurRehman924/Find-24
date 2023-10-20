<template>
  <div>
    <div class="mb-6 text-xl font-semibold">Login & Security</div>
    <div class="flex flex-col gap-y-6">
      <div class="flex items-center">
        <div
          class="mr-4 flex h-18 w-18 items-center justify-center rounded-full border-0.5 border-chinese-white bg-white"
        >
          <IconsLock class="h-8 w-8" />
        </div>
        <div class="flex w-full">
          <div class="flex w-full flex-col">
            <div class="font-semibold">Password</div>
            <div class="text-dark_corduroy">
              Last updated 4 months ago
            </div>
          </div>
          <button class="font-medium text-palma">Change</button>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="mr-4 flex h-18 w-18 items-center justify-center rounded-full border-0.5 border-chinese-white bg-white"
        >
          <IconsEmail class="h-8 w-8" />
        </div>
        <div class="flex w-full">
          <div class="flex w-full flex-col">
            <div class="font-semibold">Email Address</div>
            <div class="text-dark_corduroy">
              Sanuekpalchain42@gmail.com
            </div>
          </div>
          <button class="font-medium text-palma">Change</button>
        </div>
      </div>
      <div class="flex items-center">
        <div
          class="mr-4 flex h-18 w-18 items-center justify-center rounded-full border-0.5 border-chinese-white bg-white"
        >
          <IconsPhone class="h-8 w-8" />
        </div>
        <div class="flex w-full">
          <div class="flex w-full flex-col">
            <div class="font-semibold">Phone Number</div>
            <div class="text-dark_corduroy">(+44) 414 323 567</div>
          </div>
          <button class="font-medium text-palma">Change</button>
        </div>
      </div>
    </div>
  </div>
</template>
