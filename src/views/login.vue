<template>
  <div class="login-box">
    <div class="wrapper">
      <h3>登录系统</h3>
      <el-form :rules="rules" ref="formRef" :model="loginFrom">
        <el-form-item prop="username">
          <el-input type="text" v-model="loginFrom.username" auto-complete="false" placeholder="请输入登录名称" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginFrom.password" auto-complete="false" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item prop="code">
          <el-input type="text" v-model="loginFrom.code" style="width:180px;margin-right:5px" placeholder="请输入验证码"></el-input>
          <img :src="loginFrom.src" @click="getCode">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {setToken} from'../utils/auth'
import {login} from '../api'
export default {
    name:'login',
    data() {
      return {
        loginFrom:{
          username:'',
          password:'',
          code:'',
          src:'' || 'http://www.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/cnValidateImage?byString=65da'
        },
        rules:{
          username:[{required:true,message:'请填输入用户登录名',trigger:'blur'}],
          password:[{required:true,message:'请填输入登录密码',trigger:'blur'}],
          code:[{required:true,message:'请填输入验证码',trigger:'blur'}]
        }
      }
    },
    mounted() {
      this.getCode()
    },
    methods: {
      login() {
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            login().then(res=>{
              if(res.data.code == 200) {
                // 先进行接口请求请求成功后 再登录进入,登录进入时需要判断是访问的是非home页面 如果是去登录页就直接去登录页面  如果是输入错误页面直接去home页面  否则是进入想要进入的页面
                setToken(res.data.token)
                window.sessionStorage.setItem('token',res.data.token)
                let  path = this.$route.query.redirect
                this.$router.replace((path =='/' || path == undefined) ? '/home' : path)
              }
            })
          } else {
            this.$message.error('请填写完整')
            return false
          }
        })
      },
      getCode() {
        let str = ''
        for(let i=0 ;i<4;i++) {
          str += String.fromCharCode(Math.floor(Math.random()*25+65))
        }
        this.loginFrom.src = 'http://www.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/cnValidateImage?byString='+str
      }
    }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
}
.wrapper {
  width: 300px;
  height: 300px;
  border: 1px solid #eaeaea;
  padding: 10px;
  box-shadow: 0 0 15px #eaeaea;
  position: absolute;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 40%;
}
h3 {
  text-align: center;
  margin-top: 0px;
}
</style>
