<script lang="ts" setup>
  import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";

  const experienceLevel = ["Beginner", "Intermediate", "Expert"];
  const selectedPerson = ref("Expertise Level");
</script>

<template>
  <Listbox v-model="selectedPerson">
    <div class="relative text-dark_corduroy">
      <ListboxButton
        class="flex w-full items-center justify-between rounded-lg border border-chinese-white p-4"
        id="experience"
      >
        <span class="block truncate">{{ selectedPerson }}</span>
        <IconsChevronupdown aria-hidden="true" />
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          as="ul"
          class="absolute inset-x-0 z-10 mt-2 rounded-lg border border-chinese-white bg-white py-2"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="(experience, index) in experienceLevel"
            :key="index"
            :value="experience"
            as="template"
          >
            <li
              :class="[
                active
                  ? 'bg-frostee font-medium text-palma'
                  : 'text-dark_corduroy',
                selected ? 'border-l border-palma text-palma' : '',
                'p-4',
              ]"
            >
              <span>{{ experience }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
