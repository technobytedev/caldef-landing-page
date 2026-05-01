<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Free BMI Calculator — Body Mass Index Calculator | Caldef",
  description:
    "Calculate your Body Mass Index (BMI) instantly. Enter your height and weight to find out if you're underweight, normal weight, overweight, or obese — and what to do about it.",
  ogTitle: "Free BMI Calculator — Find Your Healthy Weight Range | Caldef",
  ogDescription:
    "Instantly calculate your BMI and find your healthy weight range. Supports metric and imperial units. Free tool by Caldef — the AI calorie tracker.",
  ogType: "website",
  ogImage: "https://caldef.app/main-image.png",
  ogUrl: "https://caldef.app/bmi-calculator",
  twitterCard: "summary_large_image",
  twitterTitle: "Free BMI Calculator | Caldef",
  twitterDescription:
    "Calculate your Body Mass Index in seconds. Metric & imperial. See your category and healthy weight range instantly.",
  twitterImage: "https://caldef.app/main-image.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://caldef.app/bmi-calculator" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "BMI Calculator by Caldef",
        url: "https://caldef.app/bmi-calculator",
        description:
          "A free online Body Mass Index (BMI) calculator. Enter height and weight in metric or imperial units to get your BMI score and weight category.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Person",
          name: "Cedric Isubol",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a healthy BMI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A BMI between 18.5 and 24.9 is considered normal or healthy weight. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is obese.",
            },
          },
          {
            "@type": "Question",
            name: "How is BMI calculated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "BMI is calculated by dividing your weight in kilograms by the square of your height in meters: BMI = kg / m². In imperial units: BMI = (lbs / in²) × 703.",
            },
          },
          {
            "@type": "Question",
            name: "Is BMI accurate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "BMI is a useful screening tool but has limitations. It does not directly measure body fat or account for muscle mass, age, or ethnicity. Consult a healthcare professional for a full assessment.",
            },
          },
        ],
      }),
    },
  ],
});

const unit = ref("metric");
const weightKg = ref("");
const heightCm = ref("");
const weightLbs = ref("");
const heightFt = ref("");
const heightIn = ref("");

const bmi = ref(null);
const category = ref("");
const healthyMin = ref(null);
const healthyMax = ref(null);

const categories = [
  { label: "Underweight", range: "< 18.5", color: "text-blue-500", bg: "bg-blue-500", min: 0, max: 18.5 },
  { label: "Normal", range: "18.5 – 24.9", color: "text-accent", bg: "bg-accent", min: 18.5, max: 25 },
  { label: "Overweight", range: "25 – 29.9", color: "text-yellow-500", bg: "bg-yellow-500", min: 25, max: 30 },
  { label: "Obese", range: "≥ 30", color: "text-red-500", bg: "bg-red-500", min: 30, max: 100 },
];

function getCategory(b) {
  if (b < 18.5) return categories[0];
  if (b < 25) return categories[1];
  if (b < 30) return categories[2];
  return categories[3];
}

function calculate() {
  let weightInKg, heightInM;

  if (unit.value === "metric") {
    weightInKg = parseFloat(weightKg.value);
    heightInM = parseFloat(heightCm.value) / 100;
  } else {
    weightInKg = parseFloat(weightLbs.value) * 0.453592;
    const totalInches = parseFloat(heightFt.value) * 12 + parseFloat(heightIn.value || 0);
    heightInM = totalInches * 0.0254;
  }

  if (!weightInKg || !heightInM || heightInM <= 0) return;

  const result = weightInKg / (heightInM * heightInM);
  bmi.value = Math.round(result * 10) / 10;
  category.value = getCategory(bmi.value).label;

  healthyMin.value = Math.round(18.5 * heightInM * heightInM * 10) / 10;
  healthyMax.value = Math.round(24.9 * heightInM * heightInM * 10) / 10;
}

function reset() {
  bmi.value = null;
  category.value = "";
  weightKg.value = "";
  heightCm.value = "";
  weightLbs.value = "";
  heightFt.value = "";
  heightIn.value = "";
  healthyMin.value = null;
  healthyMax.value = null;
}

const bmiPercent = computed(() => {
  if (!bmi.value) return 0;
  const clamped = Math.min(Math.max(bmi.value, 10), 40);
  return ((clamped - 10) / 30) * 100;
});

const categoryInfo = computed(() => (bmi.value ? getCategory(bmi.value) : null));
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>BMI Calculator</template>
      <template v-slot:desc>
        Find out your Body Mass Index in seconds. Enter your height and weight
        below — metric or imperial, your choice.
      </template>
    </LandingSectionhead>

    <div class="mx-auto max-w-2xl mt-12">
      <!-- Unit toggle -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex bg-light-card border border-light-border rounded-xl p-1">
          <button
            @click="() => { unit = 'metric'; reset(); }"
            :class="[
              'px-5 py-2 rounded-lg text-sm font-medium transition-all',
              unit === 'metric'
                ? 'bg-accent text-white shadow-sm'
                : 'text-muted hover:text-text-light',
            ]"
          >
            Metric (kg / cm)
          </button>
          <button
            @click="() => { unit = 'imperial'; reset(); }"
            :class="[
              'px-5 py-2 rounded-lg text-sm font-medium transition-all',
              unit === 'imperial'
                ? 'bg-accent text-white shadow-sm'
                : 'text-muted hover:text-text-light',
            ]"
          >
            Imperial (lbs / ft)
          </button>
        </div>
      </div>

      <!-- Input card -->
      <div class="bg-light-card border border-light-border rounded-2xl p-8">
        <div v-if="unit === 'metric'" class="grid sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-text-light mb-2">Weight (kg)</label>
            <input
              v-model="weightKg"
              type="number"
              min="1"
              max="500"
              placeholder="e.g. 70"
              class="w-full bg-light-bg border border-light-border rounded-xl px-4 py-3 text-text-light placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-text-light mb-2">Height (cm)</label>
            <input
              v-model="heightCm"
              type="number"
              min="50"
              max="300"
              placeholder="e.g. 175"
              class="w-full bg-light-bg border border-light-border rounded-xl px-4 py-3 text-text-light placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div v-else class="grid sm:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-text-light mb-2">Weight (lbs)</label>
            <input
              v-model="weightLbs"
              type="number"
              min="1"
              max="1000"
              placeholder="e.g. 154"
              class="w-full bg-light-bg border border-light-border rounded-xl px-4 py-3 text-text-light placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-text-light mb-2">Height (ft)</label>
            <input
              v-model="heightFt"
              type="number"
              min="1"
              max="9"
              placeholder="e.g. 5"
              class="w-full bg-light-bg border border-light-border rounded-xl px-4 py-3 text-text-light placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-text-light mb-2">Height (in)</label>
            <input
              v-model="heightIn"
              type="number"
              min="0"
              max="11"
              placeholder="e.g. 9"
              class="w-full bg-light-bg border border-light-border rounded-xl px-4 py-3 text-text-light placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <button
          @click="calculate"
          class="mt-8 w-full bg-accent text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
        >
          Calculate BMI
        </button>
      </div>

      <!-- Result card -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="bmi !== null" class="mt-6 bg-light-card border border-light-border rounded-2xl p-8">
          <div class="text-center mb-8">
            <p class="text-sm text-muted mb-1">Your BMI</p>
            <p class="text-6xl font-bold" :class="categoryInfo.color">{{ bmi }}</p>
            <p class="mt-2 text-lg font-semibold" :class="categoryInfo.color">{{ category }}</p>
            <p class="mt-2 text-sm text-muted">
              Healthy weight range for your height:
              <span class="text-text-light font-medium">{{ healthyMin }} – {{ healthyMax }} kg</span>
            </p>
          </div>

          <!-- BMI scale bar -->
          <div class="mb-6">
            <div class="relative h-3 rounded-full overflow-hidden flex">
              <div class="bg-blue-500 flex-1"></div>
              <div class="bg-accent flex-[1.3]"></div>
              <div class="bg-yellow-500 flex-1"></div>
              <div class="bg-red-500 flex-[2]"></div>
            </div>
            <div
              class="relative mt-1"
              style="height: 0"
            >
              <div
                class="absolute -top-5 -translate-x-1/2"
                :style="{ left: bmiPercent + '%' }"
              >
                <div class="w-3 h-3 rounded-full border-2 border-white shadow" :class="categoryInfo.bg"></div>
              </div>
            </div>
            <div class="flex justify-between text-xs text-muted mt-3">
              <span>10</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40+</span>
            </div>
          </div>

          <!-- Category legend -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div
              v-for="cat in categories"
              :key="cat.label"
              :class="[
                'rounded-xl p-3 text-center border transition-all',
                category === cat.label
                  ? 'border-current bg-opacity-10 ' + cat.color
                  : 'border-light-border',
              ]"
            >
              <p class="text-xs font-semibold" :class="cat.color">{{ cat.label }}</p>
              <p class="text-xs text-muted mt-0.5">{{ cat.range }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- App marketing section -->
    <div class="mx-auto max-w-2xl mt-16">
      <div class="bg-light-card border border-light-border rounded-2xl p-8 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-5">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span class="text-sm text-accent font-medium">AI-Powered Calorie Tracking</span>
        </div>
        <h2 class="text-2xl font-bold text-text-light mb-3">
          Now do something about it
        </h2>
        <p class="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
          Knowing your BMI is step one. Caldef helps you take action — log meals by just describing what you ate,
          get a personalized calorie deficit, and track your weight toward a healthy range.
        </p>

        <div class="grid sm:grid-cols-3 gap-4 mb-8 text-left">
          <div class="bg-light-bg border border-light-border rounded-xl p-4">
            <div class="text-2xl mb-2">🍲</div>
            <h3 class="font-semibold text-text-light text-sm mb-1">Describe Your Meal</h3>
            <p class="text-xs text-muted leading-relaxed">No barcode scanning. Type what you ate and AI breaks down every macro instantly.</p>
          </div>
          <div class="bg-light-bg border border-light-border rounded-xl p-4">
            <div class="text-2xl mb-2">⚖️</div>
            <h3 class="font-semibold text-text-light text-sm mb-1">Personal Deficit Target</h3>
            <p class="text-xs text-muted leading-relaxed">Caldef calculates exactly how many calories you need to reach your goal weight.</p>
          </div>
          <div class="bg-light-bg border border-light-border rounded-xl p-4">
            <div class="text-2xl mb-2">📊</div>
            <h3 class="font-semibold text-text-light text-sm mb-1">Watch Your Progress</h3>
            <p class="text-xs text-muted leading-relaxed">Log your weight daily and see your trend move toward a healthy BMI range.</p>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-3 bg-text-light text-light-bg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg"
        >
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.37.21.8.24 1.2.07l12.84-7.26-2.88-2.88-11.16 10.07zm-1.5-20.5v17.48c0 .55.28 1.03.72 1.32L14.46 12 2.4 2.44c-.44.3-.72.78-.72 1.32zm18.54 8.36L17.1 9.22 14.46 12l2.64 2.78 2.12-1.2c.6-.34.95-.95.95-1.58s-.35-1.24-.95-1.58zM4.38.17c-.4-.17-.83-.14-1.2.07l11.28 10.14 2.88-2.88L4.38.17z" />
          </svg>
          <div class="text-left">
            <div class="text-xs leading-none mb-0.5 opacity-70">Get it free on</div>
            <div class="text-sm font-bold leading-none">Google Play</div>
          </div>
        </a>
        <p class="text-xs text-muted mt-3">Free download · No credit card · Works offline</p>
      </div>
    </div>

    <!-- FAQ / Info section -->
    <div class="mx-auto max-w-2xl mt-20">
      <h2 class="text-2xl font-bold text-text-light mb-8">About BMI</h2>
      <div class="flex flex-col gap-6">
        <div class="bg-light-card border border-light-border rounded-xl p-6">
          <h3 class="font-semibold text-text-light mb-2">What is BMI?</h3>
          <p class="text-muted text-sm leading-relaxed">
            Body Mass Index (BMI) is a number calculated from your weight and height. It's a widely used
            screening tool to categorize whether a person is underweight, normal weight, overweight, or obese.
            The formula is: <span class="text-text-light font-medium">BMI = weight (kg) ÷ height² (m²)</span>.
          </p>
        </div>
        <div class="bg-light-card border border-light-border rounded-xl p-6">
          <h3 class="font-semibold text-text-light mb-2">What is a healthy BMI?</h3>
          <p class="text-muted text-sm leading-relaxed">
            For most adults, a BMI between <span class="text-accent font-medium">18.5 and 24.9</span> is considered
            a healthy weight. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is classified as
            obese. These ranges apply to adults aged 20 and older.
          </p>
        </div>
        <div class="bg-light-card border border-light-border rounded-xl p-6">
          <h3 class="font-semibold text-text-light mb-2">Is BMI accurate?</h3>
          <p class="text-muted text-sm leading-relaxed">
            BMI is a useful starting point but doesn't directly measure body fat. It can overestimate fat in
            muscular individuals and underestimate it in older adults who have lost muscle mass. Use it alongside
            other metrics and consult a healthcare professional for a complete picture.
          </p>
        </div>
        <div class="bg-light-card border border-light-border rounded-xl p-6">
          <h3 class="font-semibold text-text-light mb-2">What should I do after calculating my BMI?</h3>
          <p class="text-muted text-sm leading-relaxed">
            If your BMI is above the healthy range, the most effective approach is tracking your calorie intake
            and creating a moderate calorie deficit. Caldef calculates your personal deficit target and lets you
            log meals by simply describing what you ate — no barcode scanning required.
          </p>
        </div>
      </div>
    </div>

    <LandingCta />
  </LandingContainer>
</template>
