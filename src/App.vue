<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import LinkBase from './components/LinkBase.vue';
</script>

<template>
  <div class="flex justify-center">
    <LinkBase href="https://vitejs.dev" target="_blank">
      <img
        src="/vite.svg"
        class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="Vite logo"
      />
    </LinkBase>
    <LinkBase href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/vue.svg"
        class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]"
        alt="Vue logo"
      />
    </LinkBase>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
