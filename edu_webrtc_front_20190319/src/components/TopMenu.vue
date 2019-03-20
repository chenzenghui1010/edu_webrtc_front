<template>
  <div class="main">
    <div class="content">
      <div class="logo">
       <span></span><span>{{userType}}</span>  <span class="type-course"><slot></slot></span>
      </div>
      <!--<div @click="go(index)" class="user"  :class="{list:activeIndex == index}" v-for=" (item , index  ) in  list " :key="index">{{ item }}</div>-->
    </div>
    <div class="user-right">
      <span class="users"></span><span class="username">{{userName}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TopMenu',
    props:{
      userType:{
        type:String,
        default:''
      },
      list:{
        type: Array,
      }

    },
    data() {
      return {
        userName: 'admin',
        // userType:'管理员',
        // activeIndex:0
      }
    },
    methods:{
      // go(index){
      //   this.activeIndex = index
      //   console.log(index);
      // }
    }
  }
</script>


<style lang="less" scoped>
  @color: #6976F1;
  .main {
    position: absolute;
    z-index: 2;
    background: #fff;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 2px 10px 0 rgba(149,149,149,0.50);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0  33px 0  12px;
    .content {
      display: flex;
      align-items: center;
      .logo{
        .type-course{
          color: @color;
        }
        display: flex;
        justify-items: center;
        align-items: center;
        span{
          display: inline-block;
        }
        span:nth-child(1){
          width: 80.5px;
          height: 60px;
          background: url("../assets/logo@3x.png")  no-repeat center/100%;
        }
        span:nth-child(2){
          width: 50px;
          height: 18px;
          line-height: 20px;
          border-radius: 2px;
          background: @color;
          color: #fff;
          font-size: 10px;
          text-align: center;
          margin-right: 10px;
        }
      }
     .user{
       width: 137px;
       height: 25px;
       border-left: 1px solid #EFF0F6;
       text-align: center;
       line-height: 25px;
       font-size: 14px;
       font-family: PingFangSC-Medium;
       color: #BCBECF;
     }
      .user:last-child{
        border-right: 1px solid #EFF0F6;
        ont-family: PingFangSC-Regular;

        color: #BCBECF;
      }
      div:nth-child(1){
        border: none;
      }
    }
  }

  .user-right{
    display: flex;
    align-items: center;
  }
  .users{
    display: block;
    width: 30px;
    height: 30px;
    line-height: 60px;
    background: url("../assets/icon_user@3x.png") no-repeat center /100%;
    margin-right: 10px;

  }
  .username {
    display: block;
    font-family: Helvetica;
    font-size: 12px;
    color: #BCBECF;
    text-align: right;
  }
  .list{
    color: @color !important;
  }
</style>
