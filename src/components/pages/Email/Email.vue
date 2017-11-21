<template>
  <div class="Wrap">
    <v-Head></v-Head>
    <v-Sidebar></v-Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHead from '../../common/Header.vue'
  import vSidebar from '../../common/Sidebar.vue'
  export default {
    components: {
      vHead, vSidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    display: block;
    width: 82%;
    padding:20px;
    position: absolute;
    top: 70px;
    left: 18%;
    bottom: 0;
    background-color: #f9f7f7;
    overflow: scroll;
  }
</style>
