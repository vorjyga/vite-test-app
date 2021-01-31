import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {PUSH_CONTACT, SELECT_CONTACT, SET_NEW_CONTACT} from "@/store/mutation-types.js";

export const store = createStore({
  state () {
    return {
      contacts: [],
      newContact: {
        firstName: '',
        lastName: '',
        email: '',
      },
      activeContact: {
        firstName: '',
        lastName: '',
        email: '',
      }
    }
  },
  getters: {
    fullName(state) {
      if (state.activeContact.firstName) {
        return state.activeContact.firstName + ' ' + state.activeContact.lastName;
      }
      return '';
    },
    contacts(state) {
      return state.contacts;
    },
    newContactData(state) {
      return state.newContact;
    }
  },
  mutations: {
    [SET_NEW_CONTACT] (state, payload) {
      state.newContact = payload;
    },
    [PUSH_CONTACT] (state) {
      state.contacts.push(state.newContact);
      state.newContact = {
        firstName: '',
        lastName: '',
        email: '',
      }
    },
    [SELECT_CONTACT] (state, payload) {
      state.activeContact = state.contacts.find((contact, index) => index === payload)
    },
  },
  plugins: [createPersistedState()],
})
