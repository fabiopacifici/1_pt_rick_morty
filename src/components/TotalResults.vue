<script>
import {store} from '../store.js';
export default {
  name: 'TotalResults',
  data(){
    return {
      store
    }
  },
  computed: {
    getResults() {
      //console.log(this.characters);
      return store.characters.results ? 'Total results:' + store.characters.results.length : 'no results yet'// 20
    }
  },
}
</script>
<template>
  <div>
    {{ getResults }}
  </div>
</template>


<style scoped></style>