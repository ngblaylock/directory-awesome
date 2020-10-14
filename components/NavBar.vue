<template>
  <nav class="nav">
    <div class="logo">Directory Awesome</div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/directory">Directory</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    padding: 15px;
    font-weight: bold;
    color: #3F8576;
  }
  ul{
    list-style-type: none;
    display: flex;
    padding-right: 15px;
    li{
      a{
        color: #35495C;
        padding: 15px;
        text-decoration: none;
        &.nuxt-link-exact-active{
          border-bottom: 4px solid #3F8576;
        }
      }
    }
  }
</style>