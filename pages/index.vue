<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Caldef — AI Calorie Tracker & Calorie Deficit Planner for Android",
  description:
    "Track calories by describing your meal in plain text. Caldef uses AI to instantly calculate every macro — no barcode scanning needed. Free on Google Play.",
  ogTitle: "Caldef — AI Calorie Tracker & Calorie Deficit Planner",
  ogDescription:
    "Just describe what you ate and our AI breaks down every macro instantly. Personalized calorie deficit, weight tracker, daily AI analysis. Free on Google Play.",
  ogType: "website",
  ogImage: "https://caldef.app/main-image.png",
  ogUrl: "https://caldef.app",
  twitterCard: "summary_large_image",
  twitterTitle: "Caldef — AI Calorie Tracker for Android",
  twitterDescription:
    "Describe your meal, get the full macro breakdown instantly. No scanning. No databases. Just AI. Free on Google Play.",
  twitterImage: "https://caldef.app/main-image.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://caldef.app" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Caldef",
        operatingSystem: "Android",
        applicationCategory: "HealthApplication",
        description:
          "AI-powered calorie tracker and calorie deficit planner. Describe your meals in plain text and get an instant macro breakdown — no barcode scanning required.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "3",
        },
        author: {
          "@type": "Person",
          name: "Cedric Isubol",
        },
        url: "https://caldef.app",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.cedricdev.diettracker",
      }),
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingLogos></LandingLogos>
    <LandingTestimonials></LandingTestimonials>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
