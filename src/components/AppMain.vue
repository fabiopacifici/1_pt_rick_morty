<script>
import axios from 'axios';
import CharacterItem from './CharacterItem.vue';
import LoadingIcon from './LoadingIcon.vue';
export default {
  name: 'AppMain',
  components: {
    CharacterItem,
    LoadingIcon
  },
  data() {
    return {
      base_api_url: 'https://rickandmortyapi.com/api/character',
      characters: [],
      loading: true,
      error: false
    }
  },
  methods: {
    getCharacters(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          console.log(response.data); // All data including pagination info
          console.log(response.data.results); // Only characters results
          //console.log(this); 
          this.characters = response.data;
          this.loading = false;

        })
        .catch((error) => {
          console.error(error);
          this.error = error.message;
        })
    }
  },
  computed: {
    getResults() {
      //console.log(this.characters);
      return this.characters.results ? 'Total results:' + this.characters.results.length : 'no results yet'// 20
    }
  },
  created() {
    this.getCharacters(this.base_api_url)

    // Use a timeout to test your loading icon
    // the timeout is used for slow down the request and 
    // simulate a slow network request
    // disable the time out once the loader is ready
/*     setTimeout(() => {
      this.getCharacters(this.base_api_url)

    }, 3000) */
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


      <div class="row" v-if="!loading">

        <CharacterItem v-for="character in characters.results" :key="character.id + '_character'" :character="character">
        </CharacterItem>

      </div>
      <!-- /.row -->
      <LoadingIcon v-else></LoadingIcon>

      <div>
        {{ getResults }}
      </div>

    </div>
    <!-- /.container -->

  </main>
</template>



<style scoped></style>