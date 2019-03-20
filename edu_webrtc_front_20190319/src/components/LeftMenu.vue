<template>
  <!--左侧菜单组件-->
  <div class="content">
    <div class="aa">
      <el-menu
        default-active="0"
        position="absolute"
        class="el-menu-vertical-demo"
        @select="menuSelected"
        @open="open"
        @close="close"
        :default-active="$route.path"
        router
        active-text-color="#555869"
        text-color="#BCBECF">
        <nav-menu :navMenus="leftMenus" :Icon="showIcon" :name="name"></nav-menu>
        <!--unique-opened="true"-->
      </el-menu>
    </div>
    <div></div>
  </div>

</template>

<script>
  import NavMenu from './NavMenu.vue'
  import {data1} from '../lib/data.js'

  export default {
    data() {
      return {
        leftMenus: data1.list,
        showIcon: false,
        name: '1'
      }
    },
    components: {
      NavMenu
    },
    created() {
      // console.log('数据信息', this.leftMenus)
    },
    methods: {
      open(data) {
        console.log(data);
        this.showIcon = !this.showIcon;
        // this.showIcon =false
        this.name = data
      },
      close(index) {
        this.showIcon = !this.showIcon;
        console.log(index + 'www');
      },
      menuSelected(index, data) {
        // if (data[1] == 'authManage') {
        //   this.$router.push({path: 'SelectIndex'})
        // }
        // if (data[1] == 'roleManage') {
        //   this.$router.push({path: 'CourseIndex'})
        // }
        console.log(data);
        // console.log('当前绑定的index值', index)
        // console.log('当前绑定的index与path值', indexPath)
      }
    }
  }
</script>
<style scoped>

  .content {
    /*position: fixed;*/
    width: 200px;
    min-height: 100%;
    border-right: 1px solid #E0E1E8;
  }

  .aa {
    margin-top: 2px;
    height: 100%;
  }
</style>
