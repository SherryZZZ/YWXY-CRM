<template>
  <div class="mWrap">
    <v-Head></v-Head>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHead from '../common/Header.vue'
  export default {
    components: {
      vHead
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mWrap .content{
    display: block;
    width: 100%;
    padding:20px;
    position: absolute;
    top: 70px;
    bottom: 0;
    background-color: #f9f7f7;
  }
</style>
