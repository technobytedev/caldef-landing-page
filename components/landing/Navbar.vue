<script setup>
import { ref } from 'vue';

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cedricdev.diettracker";

const menuitems = [
  // { title: "Features", path: "#features" },
  // { title: "How It Works", path: "#how-it-works" },
  // { title: "Reviews", path: "#reviews" },
  { title: "Blog", path: "/blog" },
  { title: "BMI Calculator", path: "/bmi-calculator" },
  { title: "Calorie Deficit Calculator", path: "/calorie-deficit-calculator" },
];

const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header
      class="flex flex-col lg:flex-row justify-between items-center my-5"
    >
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg flex items-center gap-2">
          <span class="font-bold text-text-light text-xl">Caldef</span>
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <svg
              fill="currentColor"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" :key="item.path">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-muted hover:text-accent transition-colors"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <a
            :href="PLAY_STORE_URL"
            target="_blank"
            rel="noopener"
            class="flex-1 inline-flex items-center justify-center gap-2 bg-text-light text-light-bg px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
           Download Caldef on Play Store
          </a>
        </div>
      </nav>
      <div class="hidden lg:flex items-center gap-4">
        <a
          :href="PLAY_STORE_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 bg-text-light text-light-bg px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <img src="/google-play-icon.png" alt="Google Play" class="w-4 h-4 shrink-0" />
          Download Caldef on Play Store
        </a>
      </div>
    </header>
  </LandingContainer>
</template>
