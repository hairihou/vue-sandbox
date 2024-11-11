<script setup lang="ts">
import { ref } from 'vue';
import CardBase from './CardBase.vue';
import ButtonBase from './ButtonBase.vue';
import LinkBase from './LinkBase.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="font-bold text-[3.2em] leading-[1.1]">{{ msg }}</h1>

  <CardBase>
    <ButtonBase @click="count++">count is {{ count }}</ButtonBase>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </CardBase>

  <p>
    Check out
    <LinkBase href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</LinkBase>, the official
    Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <LinkBase href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank"
      >Vue Docs Scaling up Guide</LinkBase
    >.
  </p>
  <p class="text-[#888]">Click on the Vite and Vue logos to learn more</p>
</template>
