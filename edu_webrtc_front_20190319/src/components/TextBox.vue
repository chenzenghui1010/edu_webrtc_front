<template>
  <div class="text-box">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name:'TextBox',
    props:{
      // list:{
      //   type:Object,
      // }
    },
    data(){
      return{}
    }
  }
</script>
<style lang="less" scoped>
  .text-box{
    margin-bottom: 10px;
    width: 100%;
    /*height: 48px;*/
    background: #FFFFFF;
    border: 1px solid #C6C8D6;
    /*display: flex;*/
    /*align-items: center;*/
    box-sizing: border-box;
    /*padding-left:30px;*/
    padding: 10px 30px;
    font-size: 12px;
    color: #71758D;
  }
</style>
