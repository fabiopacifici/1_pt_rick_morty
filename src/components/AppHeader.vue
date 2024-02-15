<script>
import AppLogo from './AppLogo.vue';
import MainMenu from './MainMenu.vue';
export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    MainMenu
  },
}
</script>

<template>
  <header>

    <div class="container">

      <AppLogo></AppLogo>
      <MainMenu></MainMenu>
      
    </div>

  </header>
</template>



<style scoped>
header
{
  background-color: var(--rick-morty-lighter);
  padding: 1rem 0;

  > .container
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}
</style>