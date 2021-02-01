<template >
  <div class="window-container" ref="container">
    <div class="mb-5 flex-initial">
      <h1 class="text-center font-bold font">
        Make a payment
      </h1 >
    </div >
    <div class="mb-12 flex-auto">
      <div class="form-block">
        <label for="contact" class="">Select contact</label >
        <button
            id="contact"
            class="form-element"
            @click="selectContact"
        >{{ fullName || 'Tap to select' }}
        </button >
      </div >
      <div class="form-block">
        <label for="payment">Select payment method</label >
        <button
            id="payment"
            class="form-element"
        >
          {{'Tap to select'}}
        </button >
      </div >
      <div class="form-block">
        <label for="amount">Enter amount</label >
        <input
            id="amount"
            type="text"
            class="form-element"
        >
      </div >
    </div >
    <div class="inline-flex flex-initial">
      <ground-button :action="pay" :text="'Pay'"></ground-button>
    </div >
  </div >
</template >

<script >
import {mapGetters, mapMutations} from "vuex";
import GroundButton from '../view/ground-button.vue'


export default {
  name: "start-page",
  components: {
    GroundButton,
  },
  computed: {
    ...mapGetters({
      fullName: 'fullName'
    }),
  },
  methods: {
    ...mapMutations([
    ]),
    pay() {
      this.$router.push({
        path: '/success'
      })
    },
    selectContact() {
      this.$router.push({
        path: '/contacts'
      })
    },
  },
}
</script >

<style scoped>

</style >
