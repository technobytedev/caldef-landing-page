<script setup lang="ts">
definePageMeta({ layout: "landing" });

const route = useRoute();
const { getBySlug } = useBlogPosts();

const post = getBySlug(route.params.slug as string);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useSeoMeta({
  title: `${post.title} — Caldef Blog`,
  description: post.description,
  ogTitle: post.title,
  ogDescription: post.description,
  ogType: "article",
  ogImage: "https://caldef.app/main-image.png",
  articlePublishedTime: post.dateISO,
  articleAuthor: post.author,
  twitterCard: "summary_large_image",
  twitterTitle: post.title,
  twitterDescription: post.description,
});

useHead({
  link: [
    { rel: "canonical", href: `https://caldef.app/blog/${post.slug}` },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.dateISO,
        author: {
          "@type": "Person",
          name: post.author,
          url: "https://caldef.app/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Caldef",
          url: "https://caldef.app",
          logo: {
            "@type": "ImageObject",
            url: "https://caldef.app/favicon.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://caldef.app/blog/${post.slug}`,
        },
        image: "https://caldef.app/main-image.png",
      }),
    },
  ],
});

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cedricdev.diettracker";
</script>

<template>
  <div class="max-w-2xl mx-auto px-5 py-16">
    <!-- Back link -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
    >
      ← Back to Blog
    </NuxtLink>

    <!-- Header -->
    <header class="mb-10">
      <div class="flex items-center gap-2 text-xs text-muted mb-4">
        <span>{{ post.date }}</span>
        <span>·</span>
        <span>{{ post.readTime }}</span>
      </div>
      <h1 class="text-3xl lg:text-4xl font-bold text-text-light leading-tight">
        {{ post.title }}
      </h1>
      <div class="mt-6 flex items-center gap-3">
        <div
          class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm shrink-0"
        >
          CI
        </div>
        <div>
          <p class="font-semibold text-text-light text-sm">{{ post.author }}</p>
          <p class="text-xs text-muted">{{ post.authorRole }}</p>
        </div>
      </div>
    </header>

    <div class="border-t border-light-border mb-10"></div>

    <!-- Article body -->
    <article class="flex flex-col gap-5">
      <template v-for="(section, i) in post.sections" :key="i">
        <!-- Paragraph -->
        <p
          v-if="section.type === 'paragraph'"
          class="text-text-light leading-relaxed"
          v-html="section.html"
        ></p>

        <!-- H2 -->
        <h2
          v-else-if="section.type === 'h2'"
          class="text-2xl font-bold text-text-light mt-6"
        >
          {{ section.text }}
        </h2>

        <!-- H3 -->
        <h3
          v-else-if="section.type === 'h3'"
          class="text-lg font-semibold text-text-light mt-2"
        >
          {{ section.text }}
        </h3>

        <!-- Bullet list -->
        <ul
          v-else-if="section.type === 'list'"
          class="list-none flex flex-col gap-2 pl-1"
        >
          <li
            v-for="item in section.items"
            :key="item"
            class="flex items-start gap-3 text-text-light"
          >
            <span class="mt-1.5 w-2 h-2 bg-accent rounded-full shrink-0"></span>
            <span>{{ item }}</span>
          </li>
        </ul>

        <!-- CTA block -->
        <div
          v-else-if="section.type === 'cta'"
          class="my-6 bg-light-card border border-light-border rounded-2xl p-8 flex flex-col items-center text-center"
        >
          <p class="font-bold text-text-light text-xl mb-2">
            Download Caldef Free on Google Play
          </p>

          <a
            :href="PLAY_STORE_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3 bg-text-light text-light-bg px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-md"
          >
            <svg
              class="w-6 h-6 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M3.18 23.76c.37.21.8.24 1.2.07l12.84-7.26-2.88-2.88-11.16 10.07zm-1.5-20.5v17.48c0 .55.28 1.03.72 1.32L14.46 12 2.4 2.44c-.44.3-.72.78-.72 1.32zm18.54 8.36L17.1 9.22 14.46 12l2.64 2.78 2.12-1.2c.6-.34.95-.95.95-1.58s-.35-1.24-.95-1.58zM4.38.17c-.4-.17-.83-.14-1.2.07l11.28 10.14 2.88-2.88L4.38.17z"
              />
            </svg>
            <div class="text-left">
              <div class="text-xs leading-none mb-0.5 opacity-70">Get it on</div>
              <div class="text-sm font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        <!-- Disclaimer -->
        <p
          v-else-if="section.type === 'disclaimer'"
          class="text-xs text-muted border-t border-light-border pt-6 mt-4 leading-relaxed"
        >
          {{ section.text }}
        </p>
      </template>
    </article>
  </div>
</template>

<style scoped>
article :deep(strong) {
  color: theme("colors.text.light");
  font-weight: 600;
}
article :deep(em) {
  font-style: italic;
  color: theme("colors.muted");
  border-left: 3px solid theme("colors.accent.DEFAULT");
  padding-left: 1rem;
  display: block;
  margin: 0.5rem 0;
}
</style>
