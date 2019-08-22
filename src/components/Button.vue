<template>
  <button>{{text}}</button>
</template>
<script>
  export default {
    data() {
      return {
        text: 'Hello Spec'
      }
    },
    created () {
      this.text = 'Bye Spec'
    }
  }
</script>