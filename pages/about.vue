<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About Caldef</template>
      <template v-slot:desc
        >Built by someone who struggled with calorie tracking — just like
        you.</template
      >
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-3xl mt-16">
      <h2 class="font-bold text-3xl text-text-light">Why I built Caldef</h2>
      <p class="text-lg leading-relaxed text-muted">
        Every calorie tracking app I tried required me to scan barcodes or find
        exact items in a food database. But I don't eat packaged foods with
        barcodes — I eat homemade meals and local dishes that aren't in any
        database. I gave up every time.
      </p>
      <p class="text-lg leading-relaxed text-muted">
        So I built Caldef: an app where you just
        <span class="text-text-light font-medium"
          >describe what you ate in plain text</span
        >
        and AI does the rest. No scanning, no searching, no frustration.
      </p>
      <p class="text-lg leading-relaxed text-muted">
        Caldef calculates your personal calorie deficit target using the
        scientifically proven Mifflin-St Jeor formula, tracks your weight daily,
        and gives you an AI-generated progress summary every morning.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 mx-auto max-w-3xl mt-16">
      <div
        class="bg-light-card border border-light-border rounded-xl p-6 text-center"
      >
        <p class="text-3xl font-bold text-accent">1K+</p>
        <p class="text-muted mt-1 text-sm">Active Users</p>
      </div>
      <div
        class="bg-light-card border border-light-border rounded-xl p-6 text-center"
      >
        <p class="text-3xl font-bold text-accent">5★</p>
        <p class="text-muted mt-1 text-sm">Play Store Rating</p>
      </div>
      <div
        class="bg-light-card border border-light-border rounded-xl p-6 text-center"
      >
        <p class="text-3xl font-bold text-accent">Free</p>
        <p class="text-muted mt-1 text-sm">To Download</p>
      </div>
    </div>

    <div class="text-center mt-16 mb-8">
      <a
        href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-3 bg-text-light text-light-bg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg"
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M3.18 23.76c.37.21.8.24 1.2.07l12.84-7.26-2.88-2.88-11.16 10.07zm-1.5-20.5v17.48c0 .55.28 1.03.72 1.32L14.46 12 2.4 2.44c-.44.3-.72.78-.72 1.32zm18.54 8.36L17.1 9.22 14.46 12l2.64 2.78 2.12-1.2c.6-.34.95-.95.95-1.58s-.35-1.24-.95-1.58zM4.38.17c-.4-.17-.83-.14-1.2.07l11.28 10.14 2.88-2.88L4.38.17z"
          />
        </svg>
        Download Caldef Free on Google Play
      </a>
    </div>
  </LandingContainer>
</template>
