<template>
  <div class="row mt-4">
    <div class="col-sm-12 mb-2">
      <nuxt-link to="/directory" style="text-decoration: none;">&#x21e6; Back to the Directory</nuxt-link>
    </div>
    <div class="col-sm-3">
      <img :src="selectedPerson.img" class="mw-100">
    </div>
    <div class="col-sm-9">
      <h1>
        {{ selectedPerson.name }}
      </h1>
      <p>
        <strong>Email:</strong> <a :href="`mailto:${selectedPerson.email}`">{{ selectedPerson.email }}</a><br />
        <strong>Phone:</strong> {{ selectedPerson.phone }}<br/>
        <strong>Office:</strong> {{ selectedPerson.office }}
      </p>
      {{ selectedPerson.bio }}
      <p>
        <nuxt-link :to="`/directory/${selectedPerson.nameSlug}/edit`" class="btn">Edit</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectoryIndividual",
  props: ['selectedPerson']
}
</script>

<style scoped>
  .mw-100{
    max-width: 100%;
  }
</style>