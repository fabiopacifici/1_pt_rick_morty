<script>
import axios from 'axios';
import CharacterItem from './CharacterItem.vue';
export default {
  name: 'AppMain',
  components: {
    CharacterItem
  },
  data() {
    return {
      base_api_url: 'https://rickandmortyapi.com/api/character',
      characters: [],
      error: false
    }
  },
  mounted() {

    console.log(this.base_api_url);
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        console.log(response);
        console.log(response.data); // All data including pagination info
        console.log(response.data.results); // Only characters results
        //console.log(this); 
        this.characters = response.data;

      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
      })

  }
}
</script>

<template>
  <main>


    <div class="container">


      <div class="filters">
        <!-- add name filter input -->
        <input type="text" placeholder="Type a name to search">
        <!-- add a select status filter -->
        <select name="status" id="status">
          <option value="" selected>All</option>
          <option value="alive">Alive</option>
          <option value="death">Death</option>
          <option value="unkown">Unknown</option>

        </select>
      </div>


      <div class="row">

        <CharacterItem v-for="character in characters.results" :key="character.id + '_character'" :character="character">
        </CharacterItem>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

  </main>
</template>



<style scoped></style>