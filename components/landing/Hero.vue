<script setup>
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cedricdev.diettracker";

const features = [
  { icon: "🍲", text: "AI Food Logging" },
  { icon: "🧠", text: "Daily AI Analysis" },
  { icon: "⚖️", text: "Calorie Deficit Planner" },
  { icon: "📊", text: "Weight Tracker" },
  { icon: "💡", text: "Personalized Tips" },
  { icon: "📋", text: "Create your own meal plan or let AI do it" },
];
</script>

<template>
  <main class="flex flex-col items-center text-center pt-10 pb-4 md:pt-10">
    <!-- Badge -->
    <div
      class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6"
    >
      <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
      <span class="text-sm text-accent font-medium">AI-Powered Diet Tracking</span>
    </div>

    <!-- Headline -->
    <h1
      class="text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-text-light leading-tight max-w-3xl"
    >
      Track Calories.<br />
      <span class="text-accent">Lose Weight.</span><br />
      Powered by AI.
    </h1>

    <!-- Subheadline -->
    <p class="text-lg mt-6 text-muted max-w-2xl leading-relaxed">
      Just describe what you ate — our AI instantly breaks down every macro.
      No barcode scanning. No food databases. Just you, your goals, and AI
      working together.
    </p>

    <!-- Social proof numbers -->
    <div class="mt-8 flex justify-center gap-8">
      <div>
        <p class="text-2xl font-bold text-text-light">1K+</p>
        <p class="text-xs text-muted">Downloads</p>
      </div>
      <div class="border-l border-light-border pl-8">
        <p class="text-2xl font-bold text-text-light">5★</p>
        <p class="text-xs text-muted">Play Store Rating</p>
      </div>
      <div class="border-l border-light-border pl-8">
        <p class="text-2xl font-bold text-accent">Free</p>
        <p class="text-xs text-muted">To Download</p>
      </div>
    </div>

    <!-- CTAs -->
    <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        :href="PLAY_STORE_URL"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-3 bg-accent text-dark-bg px-7 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-md"
      >
        <img src="/google-play-icon.png" alt="Google Play" class="w-6 h-6 shrink-0" />
        <div class="text-left">
          <div class="text-xs leading-none mb-0.5 opacity-70">Get it on</div>
          <div class="text-sm font-bold leading-none">Google Play</div>
        </div>
      </a>
      <a
        href="#how-it-works"
        class="inline-flex items-center justify-center gap-2 border-2 border-light-border text-text-light px-7 py-4 rounded-xl hover:border-accent hover:text-accent transition-colors font-medium"
      >
        How It Works
      </a>
    </div>

    <!-- Feature pills -->
    <div class="mt-8 flex flex-wrap justify-center gap-2">
      <span
        v-for="feature in features"
        :key="feature.text"
        class="px-3 py-1.5 bg-light-card2 border border-light-border rounded-full text-sm text-muted flex items-center gap-1.5"
      >
        <span>{{ feature.icon }}</span>
        {{ feature.text }}
      </span>
    </div>

    <!-- App banner image — full width below hero text -->
    <div class="mt-14 w-full">
      <img
        src="/main-image.png"
        alt="Caldef App Screenshots"
        class="w-full rounded-2xl shadow-xl border border-light-border"
      />
    </div>
  </main>
</template>
