<template >
  <div class="window-container text-center" ref="container">
    <div class="flex flex-col">
      <img
          alt="Success"
          class="m-10"
          src="./Check_green_icon.svg"
      >
      <h2 class="font-bold text-lg m-10">
        Payment completed successfully
      </h2 >
    </div >
    <div class="inline-flex flex-initial">
      <ground-button
          :action="goToMain"
          :text="'Make another one'"
      ></ground-button >
    </div >
  </div >
</template >

<script >
import GroundButton from '../view/ground-button.vue'
import {mapMutations} from "vuex";

export default {
  name: "payment-completed",
  components: {
    GroundButton
  },
  methods: {
    ...mapMutations([
    ]),
    goToMain() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script >

<style scoped>

</style >
