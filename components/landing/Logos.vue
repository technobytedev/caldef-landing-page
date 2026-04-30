<script setup>
const steps = [
  {
    step: "01",
    title: "Enter Your Stats",
    description: "Input your height, weight, age, and activity level. Caldef calculates your TDEE using the Mifflin-St Jeor formula.",
  },
  {
    step: "02",
    title: "Set Your Goal",
    description: "Choose your deficit mode: Low, Medium, or High. Get a personalized daily calorie target based on your BMI.",
  },
  {
    step: "03",
    title: "Log with AI",
    description: "Just describe what you ate in plain text. Our AI instantly breaks down every macro — no scanning required.",
  },
  {
    step: "04",
    title: "Track Progress",
    description: "Log your weight daily and watch your progress. Get AI-powered recommendations to stay on track.",
  },
];
</script>

<template>
  <div class="mt-24" id="how-it-works">
    <h2 class="text-3xl lg:text-4xl font-bold text-center text-text-light">
      How Caldef Works
    </h2>
    <p class="text-center text-muted mt-4 max-w-xl mx-auto">
      Four simple steps to start your weight loss journey
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <div
        v-for="item in steps"
        :key="item.step"
        class="bg-light-card border border-light-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
      >
        <div class="text-4xl font-bold text-accent/30 mb-3">{{ item.step }}</div>
        <h3 class="font-semibold text-base text-text-light">{{ item.title }}</h3>
        <p class="text-muted mt-2 text-sm leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
