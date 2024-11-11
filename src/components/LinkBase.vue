<script setup lang="ts">
defineProps<{ href?: string; target?: string }>();
</script>

<template>
  <a
    class="font-medium text-[#646cff] no-underline hover:text-[#535bf2] light:hover:text-[#747bff]"
    :href="href"
    :target="target"
  >
    <slot></slot>
  </a>
</template>
