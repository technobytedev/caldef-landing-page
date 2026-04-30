<script setup>
const reviews = [
  {
    name: "Kim Lomentigar",
    date: "April 24, 2026",
    text: "so far the best calorie tracker app. just add your meal and it instantly calculate the calories using AI.",
    avatar: "KL",
    reply: "Thank you so much, Kim! Glad you're enjoying the instant AI calorie tracking — that's exactly what we built it for. Appreciate the support!",
  },
  {
    name: "Martin (Mart)",
    date: "April 26, 2026",
    text: "simple yet effective. no distractions.",
    avatar: "MM",
    reply: "Thanks so much, Mart! Glad you like the simple, no-distraction approach — that's exactly what I'm aiming for. More improvements coming soon!",
  },
  {
    name: "Jenny Pedero",
    date: "April 20, 2026",
    text: "I really like this app, a good calorie tracker. love the AI analysis feature!",
    avatar: "JP",
    reply: null,
  },
];
</script>

<template>
  <div class="mt-24" id="reviews">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-text-light">
        What Users Are Saying
      </h2>
      <p class="text-muted mt-4 max-w-xl mx-auto">
        Real reviews from the Google Play Store
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="item in reviews"
        :key="item.name"
        class="bg-light-card border border-light-border rounded-2xl p-6 hover:border-accent/50 transition-colors flex flex-col"
      >
        <!-- Stars -->
        <div class="flex items-center gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-accent text-lg">★</span>
        </div>

        <!-- Review text -->
        <p class="text-muted leading-relaxed text-sm flex-1">"{{ item.text }}"</p>

        <!-- Reviewer -->
        <div class="mt-5 flex items-center gap-3">
          <div
            class="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xs shrink-0"
          >
            {{ item.avatar }}
          </div>
          <div>
            <p class="font-semibold text-text-light text-sm">{{ item.name }}</p>
            <p class="text-xs text-muted">{{ item.date }} · Google Play</p>
          </div>
        </div>

        <!-- Developer reply -->
        <div
          v-if="item.reply"
          class="mt-4 pt-4 border-t border-light-border"
        >
          <p class="text-xs font-semibold text-text-light mb-1">
            Response from developer
          </p>
          <p class="text-xs text-muted leading-relaxed">{{ item.reply }}</p>
        </div>
      </div>
    </div>

    <!-- Play Store badge -->
    <div class="mt-10 flex justify-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-3 bg-light-card border border-light-border px-6 py-3 rounded-full hover:border-accent transition-colors"
      >
        <div class="flex gap-0.5">
          <span v-for="i in 5" :key="i" class="text-accent">★</span>
        </div>
        <span class="text-text-light font-semibold">5.0</span>
        <span class="text-muted text-sm">on Google Play</span>
        <svg class="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M3.18 23.76c.37.21.8.24 1.2.07l12.84-7.26-2.88-2.88-11.16 10.07zm-1.5-20.5v17.48c0 .55.28 1.03.72 1.32L14.46 12 2.4 2.44c-.44.3-.72.78-.72 1.32zm18.54 8.36L17.1 9.22 14.46 12l2.64 2.78 2.12-1.2c.6-.34.95-.95.95-1.58s-.35-1.24-.95-1.58zM4.38.17c-.4-.17-.83-.14-1.2.07l11.28 10.14 2.88-2.88L4.38.17z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
