import {createRouter, createWebHashHistory} from 'vue-router'
import StartPage from './components/start-page.vue'
import PaymentCompleted from './components/payment-completed.vue'
import SelectContact from './components/select-contact.vue'
import NewContact from './components/new-contact.vue'
import {transitionsType} from "@/constants/transitions.js";

const routes = [
  {
    path: '/',
    component: StartPage,
    meta: {
      deep: 0,
    }
  },
  {
    path: '/success',
    component: PaymentCompleted,
    meta: {
      deep: 0,
    }
  },
  {
    path: '/contacts',
    component: SelectContact,
    meta: {
      deep: 1,
    }
  },
  {
    path: '/new-contact',
    component: NewContact,
    meta: {
      deep: 2,
    }
  },
]

export const router = new createRouter({
  routes,
  history: createWebHashHistory(),
  strict: true,
})

router.beforeEach((to, from) => {
  if (from.meta.deep === undefined) {
    to.meta.transitionName = transitionsType.none;
  } else if (to.path === '/success') {
    to.meta.transitionName = transitionsType.downUp;
  } else if (from.path === '/success') {
    to.meta.transitionName = transitionsType.upDown;
  } else {
    const toDepth = to.meta.deep;
    const fromDepth = from.meta.deep;
    to.meta.transitionName = toDepth < fromDepth ? transitionsType.rightLeft : transitionsType.leftRight;
  }
  console.log('transitionName:', to.meta.transitionName);
})
