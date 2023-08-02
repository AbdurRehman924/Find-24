<script lang="ts" setup></script>

<template>
  <div class="px-4 py-16 text-xs text-corduroy sm:px-8 lg:px-16">
    <div class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
      <div>
        <h4 class="mb-6 text-sm font-medium text-dark-jungle-green">Support</h4>
        <ul class="flex flex-col gap-6 text-corduroy">
          <li>Help Center</li>
          <li>Trust & safety</li>
          <li>Cacellation Options</li>
          <li>Report a problem</li>
        </ul>
      </div>
      <div>
        <h4 class="mb-6 text-sm font-medium text-dark-jungle-green">Services</h4>
        <ul class="flex flex-col gap-6 text-corduroy">
          <li>Service Categories</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Service Providers</li>
          <li>Service Area</li>
        </ul>
      </div>
      <div>
        <h4 class="mb-6 text-sm font-medium text-dark-jungle-green">Legal</h4>
        <ul class="flex flex-col gap-6 text-corduroy">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Copyright Notice</li>
          <li>Disclaimers</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h4 class="mb-6 text-sm font-medium text-dark-jungle-green">Resources</h4>
        <ul class="flex flex-col gap-6 text-corduroy">
          <li>Blog</li>
          <li>Guides and Tutorials</li>
          <li>Frequently Asked Questions</li>
          <li>Support Center</li>
          <li>Tips and Advice</li>
        </ul>
      </div>
    </div>
    <div class="my-18 h-[1px] bg-dark-jungle-green bg-opacity-30"></div>
    <div class="grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3">
      <span class="text-corduroy">&copy; Copyright 2023</span>
      <img
        src="~/assets/images/logo.svg"
        alt="Find24"
        class="justify-self-end sm:justify-self-center"
      />
      <div class="flex gap-6 sm:justify-self-end">
        <IconsTwitter />
        <IconsLinkedIn />
        <IconsFacebook />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
