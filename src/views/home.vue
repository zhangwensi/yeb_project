<template>
  <div>
    <el-header>
      <div class="title">云办公系统</div>
      <div class="userInfo">
        <div class="avatar">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            用户姓名
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="per-setting">个人设置</el-dropdown-item>
            <el-dropdown-item command="sys-setting">系统设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="navSide" :default-active="activeIndex" :unique-opened="true" router>
          <el-submenu  v-for="(item,index) in routes" :index="index+''" :key="index">
             <template slot="title" v-if="!item.hiddern">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
                <el-menu-item v-for="childItem  in item.children" :index="childItem.path" :key="childItem.id">{{childItem.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="homeTitle" v-if="this.$router.currentRoute.path ==='/home'">欢迎使用云办公系统</div>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-else>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view class="homeRoute"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from '../utils/auth'
export default {
  name:'home',
  data() {
    return {
      isHome:''
    }
  },
  computed: {
    routes(){
      return this.$store.state.routes
    },
    activeIndex() {
      if(this.$router.currentRoute.path == '/home') {
        console.log('1111')
        return
      } else {
        console.log('22222')
        return  this.$router.currentRoute.path
      }
    }
  },
  mounted() {

  },
  methods: {
    handleCommand(command) {
      if(command === 'logout') {
        removeToken()
        window.sessionStorage.removeItem('token')
        this.$store.commit('deletRoute',[]) //清除内存数据
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #0284ee;
  box-sizing: border-box;
  display: flex;
  line-height: 60px;
  justify-content: space-between;
  .title {
    font-size: 30px;
    color: aliceblue;
    font-family: 华文楷体;
  }
  .el-dropdown {
    color: aliceblue;
    i {
      cursor: pointer;
    }
  }
  .userInfo {
    display: flex;
    .avatar {
      margin: 10px;
    }
  }
}
aside {
  padding: 0px;
  .navSide {
    i {
      color: #3086cc;
      margin-right: 5px;
    }
  }
}
.homeTitle {
  font-size: 60px;
  color: #2468a0;
  font-family: 隶书;
  text-align: center;
}
.homeRoute {
  margin-top: 10px;
}
</style>
