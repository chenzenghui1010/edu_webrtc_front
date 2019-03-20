<template>
  <div class="admin-home">
    <!--<CourseDerails></CourseDerails>-->
    <top-menu userType="管理员" :list="list"></top-menu>
    <div class="content-left">
      <left-menu></left-menu>
    </div>
    <div class="content-right">
      <table-title></table-title>
    </div>
  </div>
</template>
<script>
  import TopMenu from '@/components/TopMenu'
  import LeftMenu from '@/components/LeftMenu'
  import TableTitle from '@/components/TableTitle'
  // import CourseDerails from '@/components/teacher/CourseDetails'
  import TableDetails from '@/components/TableDetails'


  export default {
    components: {TopMenu, LeftMenu, TableTitle, TableDetails},
    data() {
      return {
        list: ['选课系统管理', '在线直播管理'],
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {},
    computed: {}
  }
</script>
<style lang="less" scoped>
  .admin-home{
    position: relative;
  }
    .content-left {
      position: absolute;
      width: 200px;
      margin-top: 62px;
      /*top: 60px;*/
      /*bottom: 0;*/
      height: 100%;
      background: #fff;
      z-index: 2;
    }

    .content-right {
      /*position: relative;*/
      left: 200px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 74px 20px 1000px 220px;
      background: rgba(0,0,0,0.1);
      bottom: 0px;

    }
</style>
