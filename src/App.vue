<template>
  <div id="app" v-bind:style="{ height: screenHeight}">
    <img src="static/app_top.jpg">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      screenHeight: "" // 屏幕高度
    };
  },
  // 钩子函数
  created() {
    this.screenHeight = document.documentElement.clientHeight+'px'
  }
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  div{
    flex: 1
  }
}
</style>
