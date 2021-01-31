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
          ? '' : 'flex flex-row flex-nowrap';
    }
  },

}
</script >

<style >
.window-container {
  @apply container mx-auto flex flex-col justify-between content-between flex-1 h-screen;
}

.form-block {
  @apply flex flex-col flex-nowrap justify-center content-center text-left m-4 mb-10;
}

.form-element {
  @apply flex-shrink border-solid border-2 text-left p-3;
}
</style >
