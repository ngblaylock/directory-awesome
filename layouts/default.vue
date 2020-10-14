<template>
  <div id="default">
    <NavBar />
    <main>
      <Nuxt />
    </main>
    <FooterBar />
  </div>
</template>

<style lang="scss">
  #default{
    display: flex;
    flex-direction: column;
    height: 100vh;
    main{
      flex: 1 1 auto;
    }
  }
</style>
