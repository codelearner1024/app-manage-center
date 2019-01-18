<template>
  <div class="managecenter">
     
    <div class="aside"></div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'ManageCenter',
  data () {
    return {
      msg: 'Welcome to Managecenter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.managecenter{
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
  .aside{
    width: 200px;
    height: 100%;
    background: #03ccbb;
  }
}
</style>
