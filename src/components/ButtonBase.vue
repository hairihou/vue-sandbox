<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => emit('click', event);
</script>

<template>
  <button
    type="button"
    class="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium font-inherit bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-[#646cff] light:bg-[#f9f9f9]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
