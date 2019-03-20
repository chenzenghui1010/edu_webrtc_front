<template>
  <div  v-if="showMask" class="mask">
  </div>
</template>
<script>
  export default {
    name:'MyMask',
    props:{
      showMask:{
        type:Boolean,
        default:true
      }
    }
  }
</script>
<style scoped>
  .mask{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
</style>
