<template>
  <footer class="w-full bg-light-bg border-t border-light-border pt-12 pb-6 mt-20">
    <div class="max-w-screen-xl mx-auto px-5">
      <div class="grid md:grid-cols-4 gap-8 mb-10">
        <div class="col-span-2">
          <a href="/" class="text-lg flex items-center gap-2">
            <span class="font-bold text-text-light text-xl">Caldef</span>
          </a>
          <p class="text-muted mt-2 text-sm max-w-xs leading-relaxed">
            The simplest way to track your calorie count and calorie deficit —
            powered by AI.
          </p>
          <div class="mt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 bg-text-light text-light-bg px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <img src="/google-play-icon.png" alt="Google Play" class="w-4 h-4 shrink-0" />
              Get it on Google Play
            </a>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-text-light mb-3">Product</h4>
          <ul class="space-y-2 text-sm text-muted">
            <li>
              <a href="#features" class="hover:text-accent transition-colors"
                >Features</a
              >
            </li>
            <li>
              <a
                href="#how-it-works"
                class="hover:text-accent transition-colors"
                >How It Works</a
              >
            </li>
            <li>
              <a href="#reviews" class="hover:text-accent transition-colors"
                >Reviews</a
              >
            </li>
            <li>
              <a href="/bmi-calculator" class="hover:text-accent transition-colors"
                >BMI Calculator</a
              >
            </li>
            <li>
              <a href="/calorie-deficit-calculator" class="hover:text-accent transition-colors"
                >Calorie Deficit Calculator</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-text-light mb-3">Company</h4>
          <ul class="space-y-2 text-sm text-muted">
            <li>
              <a href="/about" class="hover:text-accent transition-colors"
                >About</a
              >
            </li>
            <li>
              <a href="/blog" class="hover:text-accent transition-colors"
                >Blog</a
              >
            </li>
            <li>
              <a href="/contact" class="hover:text-accent transition-colors"
                >Contact</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-accent transition-colors"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-light-border pt-6">
        <p class="text-center text-sm text-muted">
          Copyright &copy; {{ new Date().getFullYear() }} Caldef. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
