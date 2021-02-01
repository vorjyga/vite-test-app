<template >
  <div :class="parentClass">
    <router-view v-slot="{ Component }">
      <transition :name="transition">
        <component :is="Component"/>
      </transition >
    </router-view >
  </div >
</template >

<script >
import {transitionsType} from "@/constants/transitions.js";

export default {
  computed: {
    transition() {
      return this.$route.meta?.transitionName || transitionsType.none;
    },
    parentClass() {
      return this.transition === transitionsType.upDown
      || this.transition === transitionsType.downUp
          ? 'app' : 'app flex flex-row flex-nowrap';
    }
  },
  mounted() {
    const appHeight = () => document.documentElement.style
        .setProperty('--app-height', `${window.innerHeight}px`)
    window.addEventListener('resize', appHeight)
    appHeight()
  }
}
</script >

<style >
html, body {
  height: 100%;
}
.app {
  height: 100%;
}
.window-container {
  @apply container mx-auto flex flex-col justify-between content-between;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: var(--app-height);
}

.form-block {
  @apply flex flex-col flex-nowrap justify-center content-center text-left m-4 mb-3;
}

.form-element {
  @apply flex-shrink border-solid border-2 text-left p-3;
}
</style >
