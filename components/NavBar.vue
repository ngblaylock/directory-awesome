<template>
  <nav class="nav">
    <div class="logo"><nuxt-link to="/">Directory Awesome</nuxt-link></div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/directory">Directory</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  padding: 12px;
  padding-top: 15px;
  font-weight: bold;
  color: #3f8576;
  a {
    text-decoration: none;
  }
}
ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding-top: 12px;
  padding-right: 12px;
  li {
    a {
      display: inline-block;
      color: #35495c;
      padding: 8px 12px;
      text-decoration: none;
      &.nuxt-link-exact-active {
        border-bottom: 4px solid #3f8576;
      }
    }
    &:hover {
      background: #3f85761a;
    }
  }
}
</style>
