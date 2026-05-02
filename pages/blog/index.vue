<script setup lang="ts">
definePageMeta({ layout: "landing" });

const { getAll } = useBlogPosts();
const posts = getAll();

const clusters = computed(() => {
  const order = ["Calorie Deficit", "Calorie Tracking"];
  const map: Record<string, typeof posts> = {};
  for (const post of posts) {
    if (!map[post.cluster]) map[post.cluster] = [];
    map[post.cluster].push(post);
  }
  return order.filter((c) => map[c]).map((c) => ({ name: c, posts: map[c] }));
});

useSeoMeta({
  title: "Blog — Caldef | AI Calorie Tracker Tips & Stories",
  description:
    "Real stories, weight loss tips, and insights from the Caldef team. Learn how AI-powered calorie tracking helps you lose weight without the frustration.",
  ogTitle: "Caldef Blog — AI Calorie Tracking Tips & Stories",
  ogDescription:
    "Real stories, weight loss tips, and insights from the Caldef team.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://caldef.app/blog" }],
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-5 py-16">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-text-light">Caldef Blog</h1>
      <p class="text-muted mt-3 text-lg">
        Stories, tips, and insights on weight loss and AI nutrition tracking.
      </p>
    </div>

    <div class="flex flex-col gap-14">
      <section v-for="cluster in clusters" :key="cluster.name">
        <div class="flex items-center gap-3 mb-6">
          <h2 class="text-lg font-bold text-text-light">{{ cluster.name }}</h2>
          <div class="flex-1 h-px bg-light-border"></div>
          <span class="text-xs text-muted">{{ cluster.posts.length }} articles</span>
        </div>

        <div class="flex flex-col gap-6">
          <article
            v-for="post in cluster.posts"
            :key="post.slug"
            class="bg-light-card border border-light-border rounded-2xl p-8 hover:border-accent/50 transition-colors"
          >
            <div class="flex items-center gap-2 text-xs text-muted mb-4">
              <span>{{ post.date }}</span>
              <span>·</span>
              <span>{{ post.readTime }}</span>
            </div>
            <h3 class="text-xl font-bold text-text-light leading-snug">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="hover:text-accent transition-colors"
              >
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="text-muted mt-3 text-sm leading-relaxed">
              {{ post.description }}
            </p>
            <div class="mt-5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xs"
                >
                  CI
                </div>
                <div>
                  <p class="text-sm font-medium text-text-light">{{ post.author }}</p>
                  <p class="text-xs text-muted">{{ post.authorRole }}</p>
                </div>
              </div>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="text-sm text-accent hover:underline font-medium"
              >
                Read more →
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
