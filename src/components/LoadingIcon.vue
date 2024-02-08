<template>
  <div class="loader">
    <i class="fa-solid fa-spinner fa-spin"></i> 
    <div>loading...</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingIcon'

}
</script>

<style scoped>
  .loader {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>