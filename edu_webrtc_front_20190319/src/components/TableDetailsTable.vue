<template>
  <div class="main">
    <div class="table-details-table">
      <el-table :data="tableData" stripe style="width:100%"
                :row-style="{height:'24px'}"
                :cell-style="{padding:0}"
                :header-row-style="{height:'24px'}"
                :header-cell-style="{padding:0
                }"
      >
        <el-table-column prop="numbering"     label="编号"></el-table-column>
        <el-table-column prop="teacherName"   label="姓名"></el-table-column>
        <el-table-column prop="subjectType"   label="学号"></el-table-column>
        <el-table-column prop="lesson"        label="班级"></el-table-column>
        <el-table-column prop="date"          label="申请日期"></el-table-column>
        <el-table-column prop="clickNum"      label="成绩"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import TableBox from './TableBox'
  import {tableData} from '../lib/data.js'
  import CourseDetails from './teacher/courseSystem/courseManagement/CourseDetails'
  import TableDetails from './TableDetails'
  import TextBox from './TextBox'

  export default {
    name: 'TableTitle',
    components: {TableBox,CourseDetails,TableDetails,TextBox},
    data() {
      return {
        tableData :tableData.tableData,
        showCourseDetails:false,
        data:{}
      }
    },
    mounted() {

    },
    props: {
      title: {
        type: String,
        default: ''
      },
    },
    methods: {

    }
  }
</script>
<style scoped lang="less">
  .main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .title {
  }

  tr {
    td {
      height: 23px;
    }
  }
</style>

