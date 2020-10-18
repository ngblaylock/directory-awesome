<template>
  <div class="container">
    <div v-if="loading">
      <h1 style="text-align: center; color: #dbdbdb">Loading...</h1>
    </div>
    <nuxt-child v-else :selectedPerson="selectedPerson" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Directory",
  data: function () {
    return {
      people: [],
      loading: true,
    };
  },
  created: function () {
    axios
      .get("https://jsonbox.io/directoryawesome_asdfjkl1234567890?sort=name")
      .then((response) => {
        this.people = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    selectedPerson: function () {
      if (this.$route.params.slug) {
        return this.people.find((person) => {
          return person.nameSlug == this.$route.params.slug;
        });
      } else {
        return this.people;
      }
    },
  },
};
</script>

<style>
</style>