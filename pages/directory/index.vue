<template>
  <div>
    <h1>Directory</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Office</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in selectedPerson" :key="person.slug">
          <td><strong>
            <nuxt-link :to="`/directory/${person.nameSlug}`">
              {{ person.name }}
            </nuxt-link>
          </strong></td>
          <td><a :href="`mailto:${person.email}`">{{ person.email }}</a></td>
          <td>{{ person.phone }}</td>
          <td>{{ person.office }}</td>
        </tr>
      </tbody>
    </table>
      <p class='text-right'>
        <nuxt-link class="btn" to="/directory/new/edit">Add Person</nuxt-link>
      </p>
  </div>
</template>

<script>
export default {
  name: 'DirectoryIndex',
  props: ['selectedPerson']
}
</script>

<style>

</style>