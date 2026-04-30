<script setup>
const features = [
  {
    title: "AI Food Logging",
    description: "Just type '2 cups of rice and grilled chicken' and our AI breaks down every macro instantly. It's the fastest way to track your meals.",
    icon: "heroicons:cpu-chip",
  },
  {
    title: "Daily AI Diet Analysis",
    description: "Get a personalized daily health summary powered by AI. Caldef analyzes your food logs and weight progress to give you actionable recommendations — every single day.",
    icon: "heroicons:chart-bar",
  },
  {
    title: "Calorie Deficit Planner",
    description: "Set your weight loss goal — Low, Medium, or High deficit. Caldef calculates your personalized daily calorie target based on your body stats using the Mifflin-St Jeor formula.",
    icon: "heroicons:fire",
  },
  {
    title: "Weight Tracker",
    description: "Log your weight daily and watch your progress on a beautiful chart. See your actual weight vs your expected loss curve side by side.",
    icon: "heroicons:scale",
  },
  {
    title: "Personalized Food Recommendations",
    description: "Get daily food suggestions tailored to your country and calorie goal. Discover local foods that fit your diet perfectly.",
    icon: "heroicons:light-bulb",
  },
  {
    title: "Smart Reminders",
    description: "Daily notifications remind you to log your weight every morning and your meals every evening — so you never fall behind.",
    icon: "heroicons:bell-alert",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0" id="features">
    <h2 class="text-3xl mt-12 lg:text-4xl font-bold lg:tracking-tight text-text-light">
      Everything you need to reach your goals
    </h2>
    <p class="text-lg mt-4 text-muted max-w-2xl">
      Caldef combines the power of AI with proven nutrition science to help you lose weight 
      — without the hassle of traditional calorie counting.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-8">
    <div v-for="item of features" class="flex gap-4 items-start bg-light-card border border-light-border rounded-xl p-6 hover:border-accent/50 transition-colors">
      <div class="mt-1 bg-accent/10 rounded-lg p-3 w-12 h-12 shrink-0 flex items-center justify-center">
        <Icon class="text-accent w-6 h-6" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg text-text-light">{{ item.title }}</h3>
        <p class="text-muted mt-2 leading-relaxed text-sm">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
