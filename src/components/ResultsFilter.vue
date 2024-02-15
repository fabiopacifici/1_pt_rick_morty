<script>
export default {
  name: 'ResultsFilter',
  emits: ['filtered'],
  data() {
    return {
      searchText: '',
      selectedStatus: '',
    }
  },
  methods: {
    /*     filterResults() {
          console.log(this.searchText);
          console.log(this.selectedStatus);
          this.$emit('filtered', [this.searchText, this.selectedStatus])
        } */
  }
}
</script>

<template>
  <div class="filters">
    <!-- add name filter input -->
    <input name="searchText" type="text" placeholder="Type a name to search" v-model="searchText">
    <!-- add a select status filter -->
    <select name="status" id="status" v-model="selectedStatus">
      <option value="" selected>All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>

    </select>

    <button @click="$emit('filtered', [searchText, selectedStatus])">Filter</button>

    <!-- <button @click="filterResults()"></button> -->
  </div>
</template>

<style scoped>
.filters
{

  margin-top: 1rem;

  input,
  select,
  button
  {
    padding: 1rem;
    margin: 0.1rem;
    border-radius: 0.25rem;
    border-style: none;
  }



}
</style>