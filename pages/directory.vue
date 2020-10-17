<template>
  <div class="container">
    <nuxt-child :selectedPerson="selectedPerson" />
  </div>
</template>

<script>
export default {
  name: "Directory",
  data: function(){
    return {
      people: [
        {
          name: 'Martin Berger',
          nameSlug: 'martin-berger',
          email: 'berger.martin@mail.com',
          phone: '999-555-1234',
          office: 'Building 124 Room 102',
          bio: 'Lorem Ipsum ...',
          img: '/people/berger-martin.png'
        },
        {
          name: 'Robyn Carney',
          nameSlug: 'robyn-carney',
          email: 'carney-robyn@mail.com',
          phone: '999-555-2345',
          office: 'Building 124 Room 108',
          bio: 'Lorem Ipsum ...',
          img: '/people/carney-robyn.png'
        }
      ]
    }
  },
  computed: {
    selectedPerson: function(){
      if(this.$route.params.slug){
        return this.people.find( person => {
          return person.nameSlug == this.$route.params.slug
        })
      }
      else {
        return this.people
      }
    }
  }
}
</script>

<style>

</style>