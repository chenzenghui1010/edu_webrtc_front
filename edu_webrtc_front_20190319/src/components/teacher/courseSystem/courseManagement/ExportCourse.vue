<template>
  <div class="export-course">

    <top-menu userType="教师"><slot>{{typeCourse}}</slot></top-menu>
    <div class="export-course-content">
      <div class="export-course-table">
        <el-table :data="tableData" stripe style="width:100%"
                  :row-style="{height:'24px'}"
                  :cell-style="{padding:0}"
                  :header-row-style="{height:'24px'}"
                  :header-cell-style="{padding:0}"
        >
          <el-table-column prop="numbering"  :show-overflow-tooltip="showOverflowTooltip"  label="课程编号"  align="center"></el-table-column>
          <el-table-column prop="name" label="课程名称" align="center"></el-table-column>
          <el-table-column prop="teacherName" label="执教教师" align="center"></el-table-column>
          <el-table-column prop="subjectType" label="学科类别" align="center"></el-table-column>
          <el-table-column prop="lesson" label="课时"  align="center"></el-table-column>
          <el-table-column prop="max" label="上限人数"  align="center"></el-table-column>
          <el-table-column prop="min" label="下限人数" align="center"></el-table-column>
          <el-table-column prop="signUpNum" label="已报名人数"   align="center"></el-table-column>
          <el-table-column prop="credit" label="学分" align="center"></el-table-column>
          <el-table-column prop="clickNum" label="点击率" align="center"></el-table-column>
          <el-table-column prop="time"     :show-overflow-tooltip="showOverflowTooltip"  label="上课时间" align="center"></el-table-column>
          <el-table-column prop="openType" label="开班状态" align="center"></el-table-column>
          <el-table-column label="操作" align="center" width="150">
            <template slot-scope="scope">
              <div class="operating">
                <span><el-button type="text">修改</el-button></span>|
                <span><el-button type="text" >删除</el-button></span>|
                <span ><el-button type="text">限制</el-button></span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="count">总共 <span>{{ count }}</span>个课程 其中 </div>
    <div class="btn">
      <button> 取消</button>
      <button>导入</button>
    </div>
  </div>
</template>
<script>
  import TopMenu from '../../../../components/TopMenu'
  import {tableData} from '../../../../lib/data.js'
  export default{
    name:'ExportCourse',
    components:{TopMenu},
    data(){
      return{
        count:30,
        typeCourse:this.$route.query.name,
        tableData: tableData.tableData,
        showOverflowTooltip:true
        //
      }
    }
  }
</script>
<style lang="less" scoped>
  .export-course-content{
    box-sizing: border-box;
    padding: 74px 20px 20px;
    width: 100%;
    .export-course-table{
      border: 1px solid #E0E1E8;;
    }
  }
  .count{
    margin-left: 20px;
    font-size: 12px;
    color: #555869;
    span{
      color: #ff5151;
    }
  }
  .btn{
    width: 100%;
    position: absolute;
    bottom: 30px;
    height: 32px;
    text-align: center;
    button{
      height: 100%;
      margin-right: 20px;
      width: 90px;
      background: #FFFFFF;
      border: 1px solid #6976F1;
      border-radius: 4px;
    }
    button:focus{
      outline:0;
    }
    button{
      margin-right: 16px;
      height: 32px;
      width: 90px;
      background: #FFFFFF;
      border: 1px solid #6976F1;
      border-radius: 4px;
      font-size: 12px;
      color: #6976F1;
    }
    button:last-child{
      background:  #6976F1;
      color: #fff;
    }
  }
</style>
