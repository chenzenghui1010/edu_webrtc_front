<template>
  <div class="main">
    <!--<my-mask></my-mask>-->

    <TableBox></TableBox>
    <div class="title">
      <el-table :data="tableData" stripe style="width:100%"
                :row-style="{height:'24px'}"
                :cell-style="{padding:0}"
                :header-row-style="{height:'24px'}"
                :header-cell-style="{padding:0}"
      >
        <el-table-column prop="numbering" cell-click="cellClick" label="课程编号" align="center"></el-table-column>

        <el-table-column prop="name" label="课程名称" align="center">

          <template slot-scope="scope">
            <!--<span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>-->
            <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.name}}</span>
          </template>


        </el-table-column>


        <el-table-column prop="teacherName" label="执教教师" align="center"></el-table-column>
        <el-table-column prop="subjectType" label="学科类别" align="center"></el-table-column>
        <el-table-column prop="lesson" label="课时" align="center"></el-table-column>
        <el-table-column prop="max" label="上限人数" align="center"></el-table-column>
        <el-table-column prop="min" label="下限人数" align="center"></el-table-column>
        <el-table-column prop="signUpNum" label="已报名人数" align="center">

          <template slot-scope="scope">
            <!--<span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>-->
            <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.signUpNum}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="credit" label="学分" align="center"></el-table-column>
        <el-table-column prop="date" label="申请日期" align="center"></el-table-column>
        <el-table-column prop="clickNum" label="点击率" align="center"></el-table-column>
        <el-table-column prop="time" label="上课时间" align="center"></el-table-column>

        <el-table-column prop="openType" label="开班状态" align="center">
          <template slot-scope="scope">
            <span class="open-type" @click="handleUpdate(scope.row)">{{scope.row.openType}}</span>
          </template>
        </el-table-column>


        <el-table-column label="详情" align="center">
          <template slot-scope="scope">
            <div class="link-type" @click="rowClick(scope.$index, scope.row)"> 详情</div>
          </template>
        </el-table-column>
      </el-table>
      <table-details></table-details>
      <course-details @closeDetails="closeDetails" v-if="isShowDetails"></course-details>
    </div>
  </div>
</template>
<script>
  import TableBox from './TableBox'
  import {tableData} from '../lib/data.js'
  import CourseDetails from './teacher/courseSystem/courseManagement/CourseDetails'
  import TableDetails from './TableDetails'
  import TextBox from './TextBox'
  import MyMask from './MyMask'

  export default {
    name: 'TableTitle',
    components: {TableBox, CourseDetails, TableDetails, TextBox, MyMask},
    data() {
      return {
        tableData: tableData.tableData,
        showCourseDetails: false,
        data: {},
        loading: null,
        isShowDetails: false,
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
      rowClick(index, row) {
        this.showCourseDetails = true
        console.log(index, row.date);
        // this.$router.push({path: 'CourseDetails'})
      },
      cellClick(e) {

        console.log(e);
      },
      handleUpdate(row) {
        console.log(row);
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });

        this.isShowDetails = true
        // setTimeout(() => {
        //   loading.close();
        // }, 2000);

        // this.$message({
        //   type: 'success',
        //   message: '修改成功!'
        // });
      },
      closeDetails(e){
        this.isShowDetails = false
        this.loading.close()
        console.log(e);
      }
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

  .link-type {
    color: #0046FF;
  }

  .open-type {
    color: #71C063;
  }
</style>

