import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
  // State (unique source of truth)
  
  base_api_url: 'https://rickandmortyapi.com/api/character',
  characters: [],
  loading: true,
  error: false,


  // Actions
  getCharacters(url) {
    axios
      .get(url)
      .then((response) => {
        //console.log(response);
        //console.log(response.data); // All data including pagination info
        //console.log(response.data.results); // Only characters results
        //console.log(this); 
        this.characters = response.data;
        this.loading = false;
        // reset the error message to false if 
        // on the previous call we got an error
        this.error = false;
      })
      .catch((error) => {
        console.error(error.response.data.error);
        this.error = error.response.data.error;
      })
  },
})
