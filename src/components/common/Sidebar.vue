<template>
  <div class="sidebar">
    <el-menu v-bind:default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router unique-opened>
      <template v-for="menu in menus">
        <template v-if="menu.submenus">
          <el-submenu v-bind:index="menu.index">
            <template slot="title"><i class="el-icon-message"></i>{{menu.title}}</template>
            <el-menu-item v-for="(submenu, i) in menu.submenus" v-bind:key="i" v-bind:index="submenu.index">{{submenu.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item v-bind:index="menu.index">{{menu.title}}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        menus: [
          {
            index: '1',
            title: '收件箱',
            submenus: [
              {
                index: 'Baidu',
                title: '百度'
              },
              {
                index: 'Google',
                title: '谷歌'
              },
              {
                index: 'Microsoft',
                title: '微软'
              }
            ]
          },
          {
            index: '2',
            title: '发件箱',
            submenus: [
              {
                index: 'Outbox',
                title: '发件箱一'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style>
  .sidebar{
    display: block;
    position: absolute;
    width: 18%;
    left: 0;
    top: 70px;
    bottom: 0;
    background-color: #fff;
  }
  .el-menu-item, .el-submenu__title{
    font-size: 18px;
    color: #495060;
  }
</style>
