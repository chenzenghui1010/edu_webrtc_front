<template>
  <div class="main"  v-loading="loading">
    <div class="content">
      <div class="login">
        <div class="logo">
          <div>
          </div>
        </div>
        <div class="input">
          <p>
            <el-input placeholder="请输入账号" v-model="username" clearable></el-input>
          </p>
          <p class="pwd">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </p>
          <p>
            <el-button     type="primary" @click="login">登录</el-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {login} from "../api/locate";

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        loading:false,
      }
    },
    methods: {
      login() {
        // this.loading = true
        this.$router.push({path: 'StudentHome'})
        return
        console.log(1);
        login({
          name: this.username,
          pwd: this.password
        }).then(code => {
          this.loading = false
          console.log(1);
          console.log(code);

          // console.log(data);
        }).catch(e => {
          console.log(e);
        })
        return

      }
    }
  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;
    position: fixed;
    background: url("../assets/bk_pic@3x.png") no-repeat center/100% 100%;

    .content {
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .login {
        background: #FFFFFF;
        box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.31);
        border-radius: 6px;
        height: 364px;
        width: 300px;

        .logo {
          width: 100%;
          height: 118px;
          background: #6976F1;
          border-radius: 5px 5px 0 0;;
          position: relative;

          div {
            left: 0px;
            right: 0px;
            margin-left: auto;
            margin-right: auto;
            position: absolute;
            width: 100px;
            height: 66px;
            margin-top: 33px;
            background: url("../assets/logo.png") no-repeat center/100%;
          }
        }

        .input {
          text-align: center;
          background: #fff;
          box-sizing: border-box;
          padding: 40px 50px;
          border-radius: 0 0 5px 5px;
        }
      }
    }
  }

  .pwd {
    margin: 10px 0 30px 0;
    border: none;
  }

  button {
    width: 100%;
    height: 40px;
    background: #6976F1;
    box-shadow: 0 2px 10px 0 rgba(105, 118, 241, 1);
    border: none;
  }
</style>
