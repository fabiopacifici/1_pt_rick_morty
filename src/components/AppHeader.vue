<script>
import AppLogo from './AppLogo.vue'
export default {
  name: 'AppHeader',
  components: {
    AppLogo
  }
}
</script>

<template>
  <header>

    <div class="container">

      <AppLogo></AppLogo>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Characters</a></li>
        </ul>
      </nav>
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

    > nav
    {
      > ul
      {
        list-style: none;
        display: flex;
        gap: 1rem;
      }

      & a
      {
        text-decoration: none;
        color: var(--rick-morty-dark)
      }
    }
  }

}
</style>