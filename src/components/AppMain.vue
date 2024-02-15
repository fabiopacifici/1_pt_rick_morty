<script>
import {store} from '../store.js';
import CharacterItem from './CharacterItem.vue';
import LoadingIcon from './LoadingIcon.vue';
import ResultsFilter from './ResultsFilter.vue';
import TotalResults from './TotalResults.vue';
export default {
  name: 'AppMain',
  components: {
    CharacterItem,
    LoadingIcon,
    ResultsFilter,
    TotalResults
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    filterResults(data) {
      console.log('filtered', data);
      const [searchText, selectedStatus] = data;
      //?name=rick&status=dead
      const url = `${store.base_api_url}?name=${searchText}&status=${selectedStatus}`;
      console.log(url);

      store.getCharacters(url);

    }
  },

  created() {
    store.getCharacters(store.base_api_url)

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


      <ResultsFilter @filtered="filterResults"></ResultsFilter>
      <div v-if="store.error" style="color:red">{{ store.error }}</div>

      <div class="row" v-if="!store.loading">

        <CharacterItem v-for="character in store.characters.results" :key="character.id + '_character'" :character="character">
        </CharacterItem>

      </div>
      <!-- /.row -->
      <LoadingIcon v-else></LoadingIcon>

      <TotalResults></TotalResults>

    </div>
    <!-- /.container -->

  </main>
</template>



<style scoped></style>