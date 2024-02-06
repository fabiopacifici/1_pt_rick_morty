<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter

  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>



<style scoped></style>