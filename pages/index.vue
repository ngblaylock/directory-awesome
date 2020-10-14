<template>
  <div class="container-vh">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>A Directory <br />System, but <span>Awesome!</span></h1>
          <h2>A Nuxt.js Tutorial</h2>
        </div>
        <div class="col-sm-4">
          <img src="/directory.png" alt="directory image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container-vh{
  height: 100%;
  display: flex;
  align-items: center;
}
  h1{
    color: #35495C;
    font-size: 3em;
    line-height: 1.3em;
    font-weight: bold;
    border-bottom: 12px solid #dcdcdc;
    padding-left: 30px;
    span{
      font-size: 2em;
      color: #3F8576;
      line-height: 1.2em;
      display: block;
    }
  }
  h2{
    color: #35495C;
    padding-left: 30px;
  }
  img{
    max-width: 100%;
  }
</style>
