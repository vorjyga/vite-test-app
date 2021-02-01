<template >
  <div class="window-container" ref="container">
    <div class="mb-5 flex-initial border-solid border-4 border-black p-4 flex justify-between">

      <div @click="goBack">
        back
      </div >
      <h1 class="text-center font-bold font">
        Select contact
      </h1 >
      <div >
      </div >
    </div >

    <div class="mb-12 flex-auto">
      <div class="form-block">
        <label
            class=""
            for="firstName"
        >First name:</label >
        <input
            id="firstName"
            type="text"
            class="form-element"
            v-model="firstName"
        >
      </div >
      <div class="form-block">
        <label
            class=""
            for="lastName"
        >Last name:</label >
        <input
            id="lastName"
            type="text"
            class="form-element"
            v-model="lastName"
        >
      </div >
      <div class="form-block">
        <label
            class=""
            for="email"
        >Email:</label >
        <input
            id="email"
            type="text"
            class="form-element"
            v-model="email"
        >
      </div >
    </div >
    <div class="inline-flex flex-initial">
      <ground-button :action="addNewContact" :text="'Save'"></ground-button>
    </div >
  </div >
</template >

<script >
import {mapGetters, mapMutations} from "vuex";
import {PUSH_CONTACT, SET_NEW_CONTACT} from "@/store/mutation-types.js";
import GroundButton from '../view/ground-button.vue'

export default {
  name: "new-contact",
  components: {
    GroundButton
  },
  computed: {
    ...mapGetters({
      newContactData: 'newContactData',
    }),
    firstName: {
      get() {
        return this.newContactData.firstName;
      },
      set(data) {
        this.SET_NEW_CONTACT({
          ...this.newContactData,
          firstName: data,
        })
      }
    },
    lastName: {
      get() {
        return this.newContactData.lastName;
      },
      set(data) {
        this.SET_NEW_CONTACT({
          ...this.newContactData,
          lastName: data,
        })
      }
    },
    email: {
      get() {
        return this.newContactData.email;
      },
      set(data) {
        this.SET_NEW_CONTACT({
          ...this.newContactData,
          email: data,
        })
      }
    },

  },
  methods: {
    ...mapMutations({
      SET_NEW_CONTACT,
      PUSH_CONTACT,
    }),
    goBack() {
      this.$router.push({
        path: '/contacts'
      })
    },
    addNewContact() {
      this.PUSH_CONTACT();
      this.goBack();
    }
  },
}
</script >

<style scoped>

</style >
