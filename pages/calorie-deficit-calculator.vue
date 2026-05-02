<script setup lang="ts">
import { ref, computed } from "vue";

definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Calorie Deficit Calculator — Find Your Daily Calorie Target | Caldef",
  description:
    "Free calorie deficit calculator. Enter your height, weight, age, and activity level to find your TDEE and daily calorie target for weight loss. Powered by the Mifflin-St Jeor formula.",
  ogTitle: "Free Calorie Deficit Calculator | Caldef",
  ogDescription:
    "Calculate your TDEE and daily calorie target for weight loss in seconds. Free, accurate, and based on the Mifflin-St Jeor formula.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://caldefapp.com/calorie-deficit-calculator" }],
});

// ── Form state ─────────────────────────────────────────────────────────────
const age       = ref<number | null>(null);
const gender    = ref<"male" | "female">("male");
const weight    = ref<number | null>(null);
const height    = ref<number | null>(null);
const activity  = ref("1.375");
const goal      = ref("moderate");
const unit      = ref<"metric" | "imperial">("metric");
const calculated = ref(false);

const activityOptions = [
  { value: "1.2",   label: "Sedentary",       desc: "Little or no exercise" },
  { value: "1.375", label: "Lightly Active",   desc: "Light exercise 1-3 days/week" },
  { value: "1.55",  label: "Moderately Active",desc: "Moderate exercise 3-5 days/week" },
  { value: "1.725", label: "Very Active",       desc: "Hard exercise 6-7 days/week" },
  { value: "1.9",   label: "Extra Active",      desc: "Very hard exercise or physical job" },
];

const goalOptions = [
  { value: "maintain",  label: "Maintain Weight",  deficit: 0,   loss: "0 kg/week" },
  { value: "mild",      label: "Mild Loss",         deficit: 250, loss: "~0.25 kg/week" },
  { value: "moderate",  label: "Moderate Loss",     deficit: 500, loss: "~0.5 kg/week" },
  { value: "aggressive",label: "Aggressive Loss",   deficit: 750, loss: "~0.75 kg/week" },
];

// ── Calculations ────────────────────────────────────────────────────────────
const bmr = computed(() => {
  if (!age.value || !weight.value || !height.value) return 0;

  let w = weight.value;
  let h = height.value;

  if (unit.value === "imperial") {
    w = w * 0.453592;   // lbs to kg
    h = h * 2.54;       // inches to cm
  }

  if (gender.value === "male") {
    return Math.round(10 * w + 6.25 * h - 5 * age.value + 5);
  } else {
    return Math.round(10 * w + 6.25 * h - 5 * age.value - 161);
  }
});

const tdee = computed(() => {
  return Math.round(bmr.value * parseFloat(activity.value));
});

const selectedGoal = computed(() => {
  return goalOptions.find(g => g.value === goal.value) || goalOptions[2];
});

const dailyCalories = computed(() => {
  return tdee.value - selectedGoal.value.deficit;
});

const bmi = computed(() => {
  if (!weight.value || !height.value) return 0;
  let w = weight.value;
  let h = height.value;
  if (unit.value === "imperial") {
    w = w * 0.453592;
    h = h * 2.54;
  }
  return parseFloat((w / Math.pow(h / 100, 2)).toFixed(1));
});

const bmiCategory = computed(() => {
  const b = bmi.value;
  if (b < 18.5) return { label: "Underweight", color: "text-blue-400" };
  if (b < 25)   return { label: "Normal weight", color: "text-accent" };
  if (b < 30)   return { label: "Overweight", color: "text-yellow-400" };
  return { label: "Obese", color: "text-red-400" };
});

const proteinTarget = computed(() => {
  if (!weight.value) return 0;
  let w = weight.value;
  if (unit.value === "imperial") w = w * 0.453592;
  return Math.round(w * 1.8);
});

const weeklyLoss = computed(() => {
  return (selectedGoal.value.deficit * 7 / 7700).toFixed(2);
});

const isFormValid = computed(() => {
  return age.value && weight.value && height.value &&
         age.value > 0 && weight.value > 0 && height.value > 0;
});

const calculate = () => {
  if (!isFormValid.value) return;
  calculated.value = true;

  // Scroll to results
  setTimeout(() => {
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

const reset = () => {
  calculated.value = false;
  age.value = null;
  weight.value = null;
  height.value = null;
  activity.value = "1.375";
  goal.value = "moderate";
};
</script>

<template>
  <div class="max-w-3xl mx-auto px-5 py-16">

    <!-- Hero -->
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-bold text-text-light leading-tight">
        Calorie Deficit Calculator
      </h1>
      <p class="text-muted mt-4 text-lg max-w-xl mx-auto leading-relaxed">
        Find your daily calorie target for weight loss based on your body stats.
        Uses the scientifically validated Mifflin-St Jeor formula.
      </p>
    </div>

    <!-- Unit Toggle -->
    <div class="flex justify-center mb-8">
      <div class="bg-light-card border border-light-border rounded-xl p-1 flex gap-1">
        <button
          @click="unit = 'metric'"
          :class="[
            'px-5 py-2 rounded-lg text-sm font-semibold transition-colors',
            unit === 'metric'
              ? 'bg-accent text-bg-dark'
              : 'text-muted hover:text-text-light'
          ]"
        >
          Metric (kg, cm)
        </button>
        <button
          @click="unit = 'imperial'"
          :class="[
            'px-5 py-2 rounded-lg text-sm font-semibold transition-colors',
            unit === 'imperial'
              ? 'bg-accent text-bg-dark'
              : 'text-muted hover:text-text-light'
          ]"
        >
          Imperial (lbs, in)
        </button>
      </div>
    </div>

    <!-- Calculator Form -->
    <div class="bg-light-card border border-light-border rounded-2xl p-8 mb-8">

      <!-- Gender -->
      <div class="mb-6">
        <label class="block text-sm font-semibold text-text-light mb-3">Gender</label>
        <div class="flex gap-3">
          <button
            @click="gender = 'male'"
            :class="[
              'flex-1 py-3 rounded-xl border text-sm font-semibold transition-colors',
              gender === 'male'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-light-border text-muted hover:border-accent/50'
            ]"
          >
            Male
          </button>
          <button
            @click="gender = 'female'"
            :class="[
              'flex-1 py-3 rounded-xl border text-sm font-semibold transition-colors',
              gender === 'female'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-light-border text-muted hover:border-accent/50'
            ]"
          >
            Female
          </button>
        </div>
      </div>

      <!-- Age, Weight, Height -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label class="block text-sm font-semibold text-text-light mb-2">Age</label>
          <div class="relative">
            <input
              v-model.number="age"
              type="number"
              placeholder="25"
              min="10"
              max="100"
              class="w-full bg-bg-dark border border-light-border rounded-xl px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <span class="absolute right-3 top-3 text-xs text-muted">yrs</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-text-light mb-2">Weight</label>
          <div class="relative">
            <input
              v-model.number="weight"
              type="number"
              :placeholder="unit === 'metric' ? '70' : '154'"
              min="1"
              class="w-full bg-bg-dark border border-light-border rounded-xl px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <span class="absolute right-3 top-3 text-xs text-muted">
              {{ unit === 'metric' ? 'kg' : 'lbs' }}
            </span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-text-light mb-2">Height</label>
          <div class="relative">
            <input
              v-model.number="height"
              type="number"
              :placeholder="unit === 'metric' ? '170' : '67'"
              min="1"
              class="w-full bg-bg-dark border border-light-border rounded-xl px-4 py-3 text-text-light text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <span class="absolute right-3 top-3 text-xs text-muted">
              {{ unit === 'metric' ? 'cm' : 'in' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Activity Level -->
      <div class="mb-6">
        <label class="block text-sm font-semibold text-text-light mb-3">Activity Level</label>
        <div class="flex flex-col gap-2">
          <button
            v-for="opt in activityOptions"
            :key="opt.value"
            @click="activity = opt.value"
            :class="[
              'flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-colors text-left',
              activity === opt.value
                ? 'border-accent bg-accent/10'
                : 'border-light-border hover:border-accent/50'
            ]"
          >
            <span :class="activity === opt.value ? 'text-accent font-semibold' : 'text-text-light'">
              {{ opt.label }}
            </span>
            <span class="text-xs text-muted">{{ opt.desc }}</span>
          </button>
        </div>
      </div>

      <!-- Goal -->
      <div class="mb-8">
        <label class="block text-sm font-semibold text-text-light mb-3">Your Goal</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="opt in goalOptions"
            :key="opt.value"
            @click="goal = opt.value"
            :class="[
              'px-4 py-3 rounded-xl border text-sm transition-colors text-left',
              goal === opt.value
                ? 'border-accent bg-accent/10'
                : 'border-light-border hover:border-accent/50'
            ]"
          >
            <p :class="goal === opt.value ? 'text-accent font-semibold' : 'text-text-light'">
              {{ opt.label }}
            </p>
            <p class="text-xs text-muted mt-0.5">{{ opt.loss }}</p>
          </button>
        </div>
      </div>

      <!-- Calculate Button -->
      <button
        @click="calculate"
        :disabled="!isFormValid"
        :class="[
          'w-full py-4 rounded-xl font-bold text-base transition-colors',
          isFormValid
            ? 'bg-accent text-bg-dark hover:bg-accent/90'
            : 'bg-accent/30 text-bg-dark cursor-not-allowed'
        ]"
      >
        Calculate My Calorie Target →
      </button>
    </div>

    <!-- Results -->
    <div v-if="calculated" id="results" class="flex flex-col gap-4 mb-12">

      <!-- Main Result -->
      <div class="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
        <p class="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
          Your Daily Calorie Target
        </p>
        <p class="text-6xl font-black text-accent">{{ dailyCalories.toLocaleString() }}</p>
        <p class="text-muted mt-2 text-sm">calories per day to {{ selectedGoal.label.toLowerCase() }}</p>
        <p class="text-accent font-semibold mt-3 text-sm">
          Expected loss: {{ weeklyLoss }} kg per week
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-light-card border border-light-border rounded-2xl p-5 text-center">
          <p class="text-xs text-muted uppercase tracking-wider mb-1">BMR</p>
          <p class="text-2xl font-bold text-text-light">{{ bmr.toLocaleString() }}</p>
          <p class="text-xs text-muted mt-1">calories at rest</p>
        </div>
        <div class="bg-light-card border border-light-border rounded-2xl p-5 text-center">
          <p class="text-xs text-muted uppercase tracking-wider mb-1">TDEE</p>
          <p class="text-2xl font-bold text-text-light">{{ tdee.toLocaleString() }}</p>
          <p class="text-xs text-muted mt-1">maintenance calories</p>
        </div>
        <div class="bg-light-card border border-light-border rounded-2xl p-5 text-center">
          <p class="text-xs text-muted uppercase tracking-wider mb-1">BMI</p>
          <p class="text-2xl font-bold text-text-light">{{ bmi }}</p>
          <p :class="['text-xs mt-1 font-semibold', bmiCategory.color]">
            {{ bmiCategory.label }}
          </p>
        </div>
      </div>

      <!-- Deficit and Protein -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-light-card border border-light-border rounded-2xl p-5">
          <p class="text-xs text-muted uppercase tracking-wider mb-1">Daily Deficit</p>
          <p class="text-3xl font-bold text-yellow-400">
            {{ selectedGoal.deficit === 0 ? '—' : `-${selectedGoal.deficit}` }}
          </p>
          <p class="text-xs text-muted mt-1">calories below TDEE</p>
        </div>
        <div class="bg-light-card border border-light-border rounded-2xl p-5">
          <p class="text-xs text-muted uppercase tracking-wider mb-1">Protein Target</p>
          <p class="text-3xl font-bold text-blue-400">{{ proteinTarget }}g</p>
          <p class="text-xs text-muted mt-1">per day to preserve muscle</p>
        </div>
      </div>

      <!-- Breakdown Table -->
      <div class="bg-light-card border border-light-border rounded-2xl p-6">
        <h3 class="text-sm font-bold text-text-light mb-4 uppercase tracking-wider">
          Your Full Breakdown
        </h3>
        <div class="flex flex-col divide-y divide-light-border">
          <div v-for="row in [
            { label: 'Basal Metabolic Rate (BMR)', value: `${bmr.toLocaleString()} cal`, note: 'Calories burned at complete rest' },
            { label: 'Total Daily Energy Expenditure (TDEE)', value: `${tdee.toLocaleString()} cal`, note: 'Maintenance calories with activity' },
            { label: 'Daily Calorie Deficit', value: selectedGoal.deficit === 0 ? 'None' : `-${selectedGoal.deficit} cal`, note: 'Calories below your TDEE' },
            { label: 'Target Daily Calories', value: `${dailyCalories.toLocaleString()} cal`, note: 'Eat this amount to reach your goal' },
            { label: 'Expected Weekly Loss', value: `${weeklyLoss} kg`, note: 'Based on your deficit size' },
            { label: 'Recommended Protein', value: `${proteinTarget}g/day`, note: '1.8g per kg of body weight' },
          ]" :key="row.label" class="flex justify-between items-center py-3">
            <div>
              <p class="text-sm text-text-light font-medium">{{ row.label }}</p>
              <p class="text-xs text-muted">{{ row.note }}</p>
            </div>
            <p class="text-sm font-bold text-accent whitespace-nowrap ml-4">{{ row.value }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-light-card border border-accent/30 rounded-2xl p-8 text-center">
        <p class="text-xl font-bold text-text-light mb-2">
          Now track your calories automatically with AI
        </p>
        <p class="text-muted text-sm mb-6 leading-relaxed">
          You now know your daily calorie target — {{ dailyCalories.toLocaleString() }} calories.
          Caldef helps you stay within it effortlessly.
          Just describe your meal in plain text and AI calculates everything instantly.
        </p>
        
        <a
          href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
          target="_blank"
          class="inline-flex items-center gap-3 bg-accent text-bg-dark font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors text-sm"
        >
          <img src="/google-play-icon.png" alt="Google Play" class="w-5 h-5 shrink-0" />
          Track My {{ dailyCalories.toLocaleString() }} Cal Target in Caldef →
        </a>
        <p class="text-xs text-muted mt-3">7-day free trial · No charge until day 8 · Cancel anytime</p>
      </div>

      <!-- Reset -->
      <button
        @click="reset"
        class="text-sm text-muted hover:text-accent transition-colors text-center underline"
      >
        Recalculate with different values
      </button>
    </div>

    <!-- SEO Content -->
    <div class="flex flex-col gap-8 mt-4">

      <div class="bg-light-card border border-light-border rounded-2xl p-8">
        <h2 class="text-xl font-bold text-text-light mb-4">
          What is a Calorie Deficit?
        </h2>
        <p class="text-muted text-sm leading-relaxed mb-3">
          A calorie deficit occurs when you consume fewer calories than your body burns in a day.
          This forces your body to use stored fat as fuel — resulting in weight loss.
        </p>
        <p class="text-muted text-sm leading-relaxed">
          It is the single most scientifically proven method for weight loss. Regardless of which
          diet you follow — keto, low-carb, intermittent fasting, or balanced eating — they all
          work through the same mechanism: creating a calorie deficit.
        </p>
      </div>

      <div class="bg-light-card border border-light-border rounded-2xl p-8">
        <h2 class="text-xl font-bold text-text-light mb-4">
          What is TDEE?
        </h2>
        <p class="text-muted text-sm leading-relaxed mb-3">
          TDEE stands for Total Daily Energy Expenditure — the total number of calories your body
          burns in a day including all activity. It is calculated by multiplying your BMR
          (Basal Metabolic Rate) by an activity multiplier.
        </p>
        <p class="text-muted text-sm leading-relaxed">
          To lose weight, eat below your TDEE. To maintain weight, eat at your TDEE.
          To gain weight, eat above your TDEE. Knowing your TDEE is the foundation of
          any successful diet plan.
        </p>
      </div>

      <div class="bg-light-card border border-light-border rounded-2xl p-8">
        <h2 class="text-xl font-bold text-text-light mb-4">
          How Much of a Deficit Should You Eat?
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-light-border">
                <th class="text-left text-muted py-2 pr-4">Goal</th>
                <th class="text-left text-muted py-2 pr-4">Daily Deficit</th>
                <th class="text-left text-muted py-2">Expected Loss</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-light-border">
              <tr v-for="row in [
                { goal: 'Mild', deficit: '250 cal/day', loss: '~0.25 kg/week' },
                { goal: 'Moderate', deficit: '500 cal/day', loss: '~0.5 kg/week' },
                { goal: 'Aggressive', deficit: '750 cal/day', loss: '~0.75 kg/week' },
              ]" :key="row.goal">
                <td class="text-text-light py-3 pr-4 font-medium">{{ row.goal }}</td>
                <td class="text-muted py-3 pr-4">{{ row.deficit }}</td>
                <td class="text-accent py-3 font-semibold">{{ row.loss }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-muted text-xs mt-4 leading-relaxed">
          Never go below 1,200 calories/day for women or 1,500 calories/day for men
          without medical supervision. Extreme deficits cause muscle loss and metabolic adaptation.
        </p>
      </div>

      <div class="bg-light-card border border-light-border rounded-2xl p-8">
        <h2 class="text-xl font-bold text-text-light mb-4">
          How This Calculator Works
        </h2>
        <p class="text-muted text-sm leading-relaxed mb-3">
          This calculator uses the <strong class="text-text-light">Mifflin-St Jeor equation</strong> —
          the most accurate BMR formula recommended by nutritionists and used in clinical settings.
        </p>
        <div class="bg-bg-dark rounded-xl p-4 mb-3">
          <p class="text-xs text-muted mb-1 font-semibold">For Men:</p>
          <p class="text-sm text-accent font-mono">BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5</p>
        </div>
        <div class="bg-bg-dark rounded-xl p-4">
          <p class="text-xs text-muted mb-1 font-semibold">For Women:</p>
          <p class="text-sm text-accent font-mono">BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161</p>
        </div>
      </div>

    </div>

    <!-- Bottom CTA -->
    <div class="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
      <h2 class="text-2xl font-bold text-text-light mb-3">
        Ready to hit your calorie target every day?
      </h2>
      <p class="text-muted text-sm mb-6 leading-relaxed max-w-md mx-auto">
        Knowing your target is step one. Tracking it consistently is where most people struggle.
        Caldef makes it effortless — just describe your meal and AI does the rest.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
        target="_blank"
        class="inline-flex items-center gap-3 bg-accent text-bg-dark font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors"
      >
        <img src="/google-play-icon.png" alt="Google Play" class="w-5 h-5 shrink-0" />
        Download Caldef Free →
      </a>
      <p class="text-xs text-muted mt-3">Available on Google Play · 7-day free trial</p>
    </div>

  </div>
</template>