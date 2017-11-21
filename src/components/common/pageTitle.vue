<template>
  <div class="page-title">
    <div>
      <p class="pt-l">{{vtitle}}</p>
      <p class="pt-r">（共 <span>{{nemail}}</span>封）</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vtitle'],
    data () {
      return {
        nemail: '3476'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-title{
    display: block;
    padding: 0 18px;
    border-bottom: 1px solid #8c939d;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .page-title{
    height: 30px;
    color: #000000;
  }
  .page-title{
    font-weight: bold;
    clear: both;
  }
  .page-title p{
    float: left;
    height: 30px;
    line-height: 30px;
  }
  .page-title .pt-l{
    font-size: 18px;
  }
  .page-title span{
    font-size: 14px;
    font-weight: lighter;
    color: #409EFF;
  }
</style>
