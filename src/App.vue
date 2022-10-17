<template>
  <div class="wrapper">
    <LeftSidebar/>
    <BannerComponent/>
  </div>
</template>

<script>
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.vue";
import BannerComponent from "./components/Banner/BannerComponent.vue";

export default {
  name: 'App',
  components: {
    LeftSidebar,
    BannerComponent
  }
}
</script>

<style lang="scss">
@import url("./fonts.scss");


* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style-type: none;
}

.wrapper {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  
}
</style>
