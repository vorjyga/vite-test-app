<template >
  <div class="window-container">
    <div class="mb-12 flex-initial border-solid border-4 border-black p-4 flex justify-between">
      <div @click="goBack">
        back
      </div >
      <h1 class="text-center font-bold font">
        Select contact
      </h1 >
      <div @click="goNew">
        New
      </div >
    </div >
    <div
        v-if="contacts.length"
        class="flex flex-col flex-nowrap h-full"
    >
      <div
          v-for="({firstName, lastName, email}, index) in contacts"
          class="mb-3 border-solid border-2 p-4 m-4"
          @click="selectContact(index)"
      >
        <div >
          {{ firstName + ' ' + lastName }}
        </div >
        <div >
          {{ email }}
        </div >
      </div >
    </div >
    <div
        v-else
        class="flex m-auto"
    >
      <div class="text-center">
        You don't have any contacts yet
      </div >
    </div >
  </div >
</template >

<script >
import {mapGetters, mapMutations} from "vuex";
import {SELECT_CONTACT } from "@/store/mutation-types.js";

export default {
  name: "select-contact",
  computed: {
    ...mapGetters({
      contacts: 'contacts',
    })
  },
  methods: {
    ...mapMutations([
      SELECT_CONTACT,
    ]),
    selectContact(id) {
      this.SELECT_CONTACT(id);
      this.goBack();
    },
    goBack() {
      window.scroll(0, 0);
      this.$router.push({
        path: '/',

      })
    },
    goNew() {
      window.scroll(0, 0);
      this.$router.push({
        path: '/new-contact',
      })
    }
  }
}
</script >

<style scoped>

</style >
