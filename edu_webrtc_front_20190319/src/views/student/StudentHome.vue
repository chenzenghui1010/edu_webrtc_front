<template>
  <div class="main">
    <top-menu userType="教 师" :list="list">
    </top-menu>
    <div class="content-left">
      <left-menu></left-menu>
    </div>
    <div class="content-right">

      <router-view>

      </router-view>
      <!--<course-index></course-index>-->
    </div>
  </div>
</template>
<script>

  import TopMenu from '@/components/TopMenu'
  import LeftMenu from '@/components/LeftMenu'
  import TableTitle from '@/components/TableTitle'
  // import CourseDerails from '@/components/teacher/CourseDetails'
  // import CourseIndex from '@/components/teacher/courseSystem/courseManagement/CourseIndex'
  // import MyMask from '../../components/MyMask'
  export default {
    components: {TopMenu, LeftMenu, TableTitle},
    data() {
      return {
        list: ['选课系统', '在线直播管理'],
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
  .main {
  }

  .content-left {
    position: fixed;
    width: 220px;
    top: 60px;
    bottom: 0;
  }

  .content-right {
    position: fixed;
    left: 200px;
    top: 60px;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 220px 0 20px;
    background: rgba(0, 0, 0, 0.1);
    bottom: 0px;
    height: 100%;
  }
</style>
