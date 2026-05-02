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
            <span v-html="item"></span>
          </li>
        </ul>

        <!-- Numbered list -->
        <ol
          v-else-if="section.type === 'numbered-list'"
          class="list-none flex flex-col gap-3 pl-1"
        >
          <li
            v-for="(item, idx) in section.items"
            :key="item"
            class="flex items-start gap-3 text-text-light"
          >
            <span
              class="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent font-bold text-xs flex items-center justify-center mt-0.5"
            >{{ idx + 1 }}</span>
            <span v-html="item"></span>
          </li>
        </ol>

        <!-- Table -->
        <div
          v-else-if="section.type === 'table'"
          class="overflow-x-auto my-2"
        >
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-light-card2">
                <th
                  v-for="header in section.headers"
                  :key="header"
                  class="text-left px-4 py-3 font-semibold text-text-light border border-light-border first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, ri) in section.rows"
                :key="ri"
                class="border-b border-light-border hover:bg-light-card2/50 transition-colors"
              >
                <td
                  v-for="(cell, ci) in row"
                  :key="ci"
                  class="px-4 py-3 text-muted border-x border-light-border first:font-medium first:text-text-light"
                >
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Callout / warning -->
        <div
          v-else-if="section.type === 'callout'"
          class="bg-warn-light/10 border border-warn-light/40 rounded-xl px-5 py-4 text-sm text-text-light leading-relaxed"
          v-html="section.html"
        ></div>

        <!-- Feature list -->
        <div
          v-else-if="section.type === 'feature-list'"
          class="grid sm:grid-cols-2 gap-4 my-2"
        >
          <div
            v-for="item in section.items"
            :key="item.title"
            class="bg-light-card2 border border-light-border rounded-xl p-4 flex gap-3"
          >
            <span class="text-2xl shrink-0">{{ item.icon }}</span>
            <div>
              <p class="font-semibold text-text-light text-sm">{{ item.title }}</p>
              <p class="text-muted text-xs mt-1 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>

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
            class="inline-flex items-center gap-3 bg-accent text-dark-bg px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-md"
          >
            <img src="/google-play-icon.png" alt="Google Play" class="w-6 h-6 shrink-0" />
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
