<template>
  <div>
    <slot v-if="!isError"></slot>
    <h1 v-else>NOT Rendered!!!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
    }
  },
  errorCaptured(err, vm) {
    console.log(vm);
    this.isError = true
  }
}
</script>

<style>

</style>