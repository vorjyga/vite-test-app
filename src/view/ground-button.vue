<template>
  <button
      class="margin-auto flex-grow border-solid border-black border-2 p-6 m-4 bg-green-500 active:bg-green-700"
      type="button"
      @click="action"
  >{{text}}
  </button >
</template >

<script >
export default {
  props: ['action', 'text']
}
</script >
