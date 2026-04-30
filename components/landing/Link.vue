<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-6 py-3",
  md: "px-4 py-2",
};

const styles = {
  outline: "bg-transparent border-2 border-accent text-accent hover:bg-accent/10",
  primary: "bg-accent text-dark-bg hover:bg-accent/90 border-2 border-transparent",
  inverted: "bg-dark-card text-text-dark border-2 border-dark-border hover:border-accent",
  muted: "bg-dark-card2 text-text-dark hover:bg-dark-card border-2 border-transparent",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'rounded-lg text-center transition focus-visible:ring-2 ring-offset-2 ring-accent font-medium',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className
    ]"
    ><slot />
  </NuxtLink>
</template>
