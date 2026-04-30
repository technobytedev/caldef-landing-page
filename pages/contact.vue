<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>Have feedback or a question? I'd love to hear from you.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-text-light">Get in touch</h2>
        <p class="text-lg leading-relaxed text-muted mt-3">
          Whether it's a bug report, a feature request, or just saying hi —
          fill out the form or send an email directly.
        </p>
        <div class="mt-6">
          <div class="flex items-center mt-3 space-x-2 text-muted">
            <Icon class="text-accent w-4 h-4 shrink-0" name="uil:envelope" />
            <a
              href="mailto:cedricisubol@gmail.com"
              class="hover:text-accent transition-colors"
              >cedricisubol@gmail.com</a
            >
          </div>
        </div>
        <div class="mt-8 p-5 bg-light-card border border-light-border rounded-xl">
          <p class="text-sm font-semibold text-text-light mb-2">Download the app</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 text-accent text-sm hover:underline"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M3.18 23.76c.37.21.8.24 1.2.07l12.84-7.26-2.88-2.88-11.16 10.07zm-1.5-20.5v17.48c0 .55.28 1.03.72 1.32L14.46 12 2.4 2.44c-.44.3-.72.78-.72 1.32zm18.54 8.36L17.1 9.22 14.46 12l2.64 2.78 2.12-1.2c.6-.34.95-.95.95-1.58s-.35-1.24-.95-1.58zM4.38.17c-.4-.17-.83-.14-1.2.07l11.28 10.14 2.88-2.88L4.38.17z"
              />
            </svg>
            Caldef on Google Play
          </a>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
