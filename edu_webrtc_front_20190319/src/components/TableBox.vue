<template>
  <div>
    <span></span><span>{{ text }}</span>
  </div>
</template>
<script>
  export default{
    data(){
      return {
      }
    },
    props:{
      text:{
        default:'可选课程',
        type:String,
      }
    }
  }
</script>

<style lang="less" scoped>
 @color: #6976F1;
  div{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    span:first-child{
      width: 6px;
      height: 12px;
      background: @color;
      margin-right: 5px;
    }
    span{
      display: inline-block;
      font-size: 12px;
      color: @color;
    }
  }
</style>
