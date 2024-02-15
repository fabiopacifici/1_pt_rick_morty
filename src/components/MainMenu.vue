<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      menu: [
        {
          url: '#',
          text: 'Home'
        },
        {
          url: '#',
          text: 'Characters'
        },
      ]
    }
  }
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in menu"><a :href="item.url">{{ item.text }}</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav
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
</style>