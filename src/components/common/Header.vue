<template>
  <div class="header">
    <h1>易外销云CRM</h1>
    <ul>
      <li v-for="menu in menus" >
       <router-link v-bind:to="menu.index">{{menu.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        menus: [
          {
            index: '/Bench',
            title: '工作台'
          },
          {
            index: '/Search',
            title: '搜客户'
          },
          {
            index: '/Baidu',
            title: '邮件'
          },
          {
            index: '/Market',
            title: '营销'
          },
          {
            index: '/Customer',
            title: '客户'
          },
          {
            index: '/Date',
            title: '数据'
          }
        ]
      }
    }
  }
</script>
<style>
  .header{
    display: block;
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    background-color: #2d8cf0;
  }
  .header .el-menu{
    background-color: #2d8cf0;
  }
  .el-menu-item, .el-submenu__title{
    font-size: 18px;
    color:#000000;
  }
  .header h1{
    width: 18%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #495060;
    float: left;
  }
  .header ul{
    float: left;
    width: 82%;
    overflow: hidden;
  }
  .header ul li {
    float: left;
  }
  .header ul li a{
    float: left;
    font-size: 18px;
    height: 27px;
    line-height: 27px;
    padding: 20px;
    cursor: pointer;
  }
  .header .router-link-exact-active{
    color: #000;
    background-color: #ecf5ff;
    border-bottom: 3px solid #fff;
  }
</style>
