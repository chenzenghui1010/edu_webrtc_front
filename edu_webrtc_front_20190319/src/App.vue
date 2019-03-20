<template>
  <div id="app">

    <router-view/>
    <!--<my-mask></my-mask>-->
  </div>
</template>
<script>
  import MyMask from './components/MyMask'

  export default {
    components: {MyMask},
    name: 'App'
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;

  }

  html {
    position: fixed;
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    height: 100%;
    /*position: absolute;*/

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }

  input {
    border: 0;
    outline: none;
  }

  .el-table th {
    background-color: #6976F1;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
  }

  //左菜单线条
  .el-submenu.is-active .el-submenu__title,
  .el-submenu__title,
  .el-menu-item {

    border-bottom: 1px solid #E0E1E8;
  }

  //管理员表格字体颜色
  /*.title {*/
    /*.el-table__row td:nth-child(13) {*/
      /*color: #71C063;*/
    /*}*/
  /*}*/

  //管理员表格字体颜色
  /*.title {*/
    /*.el-table__row td:last-child,*/
    /*.el-table__row td:nth-child(2),*/
    /*.el-table__row td:nth-child(8) {*/
      /*color: #0046FF;*/
    /*}*/
  /*}*/

  //班级批量选课表
  .text-select-index {
    .el-table__row td:nth-child(1),
    .el-table__row td:nth-child(3),
    .el-table__row td:nth-child(11) {
      color: #0046FF;
    }
  }

  .table-details-table {
    el-table__body-wrapper,
    .is-scrolling-none {
      table {
        tbody {
          tr {
            td {
              color: #606266 !important;
            }
          }
        }
      }
    }

  }

  //表格字体
  .el-table .cell {
    font-size: 12px;
  }

  //菜单行高
  .el-submenu .el-menu-item,
  .el-submenu__title {
    height: 42px;
    line-height: 42px;
  }

  //icon大小
  .i {
    .el-icon-close::before {
      font-size: 20px;
    }
  }

  .el-menu-item is-active {
    span {
      display: inline-block;
    }
  }

  //导航条子菜单
  .el-menu-item {
    padding-left: 52px !important;
  }

  .select {
    p {
      .el-select {
        width: 100px;
      }
    }
  }


  //班级批量选课
  .course-select {
    p {
      .el-select {
        width: 100px;
      }
    }
  }

  .course-select {
    p {
      .el-button--primary.is-plain {
        color: #6976F1;
      }
    }
  }

  .operating {
    /*line-height: 34px;*/

    span {
      color: #0046FF;
      font-size: 12px;

      button {
        height: 24px;
      }
    }
  }

  .aa {
    color: red;
  }

  /*添加课程*/
  .el-date-editor.el-input,
  .add-course-content-select .el-input__inner {
    width: 100px;
  }
  .el-input--prefix .el-input__inner{
    padding-right: 0px;
  }

  .el-checkbox-group {
    font-size: 0;
    display: unset;
  }

  .el-checkbox {
    margin-right: 10px;
  }

  .el-checkbox__label {
    padding-left: 5px;
    font-size: 12px;
  }
  .el-textarea__inner{
    border: none;
  }
</style>
