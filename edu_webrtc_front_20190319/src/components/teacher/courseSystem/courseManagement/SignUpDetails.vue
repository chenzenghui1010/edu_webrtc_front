<template>
  <div>
    <my-mask></my-mask>
    <div class="sign-up-details">
      <p @click="close"  class="i"><i class="el-icon-close"></i></p>
      <div class="content-top">
        <div>
          <p><span>课程名称</span><span>数学俱乐部</span></p>
          <p><span>上课年级</span><span>高一年级 , 高二年级</span></p>
        </div>
        <div><p><span>执教教授</span><span>老师名</span></p>
          <p><span>上课时间</span> <span>星期三第二节</span></p>
        </div>
        <div><p><span>开课学期</span><span>2018-2019上学期</span></p>
        </div>
      </div>
      <div class="sign-up-details-title">
        <el-table :data="tableData" stripe style="width:100%"
                  :row-style="{height:'24px'}"
                  :cell-style="{padding:0}"
                  :header-row-style="{height:'24px'}"
                  :header-cell-style="{padding:0}"
        >
          <el-table-column prop="numbering" label="学籍号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="teacherName" label="学号"></el-table-column>
          <el-table-column prop="subjectType" label="学科类别"></el-table-column>
          <el-table-column prop="lesson" label="班级"></el-table-column>
          <el-table-column prop="max" label="性别"></el-table-column>
          <el-table-column prop="min" label="学籍状态"></el-table-column>
          <!--<el-table-column prop="signUpNum" label="已报名人数"></el-table-column>-->
          <!--<el-table-column prop="credit" label="学分"></el-table-column>-->
          <!--<el-table-column prop="date" label="申请日期"></el-table-column>-->
          <!--<el-table-column prop="clickNum" label="点击率"></el-table-column>-->
          <!--<el-table-column prop="time" label="上课时间"></el-table-column>-->
          <!--<el-table-column prop="openType" label="开班状态"></el-table-column>-->
        </el-table>
        <!--<CourseDetails  v-if="showCourseDetails"></CourseDetails>-->
      </div>
      <div class="footer">
        <span><el-button type="primary" @click="myImport">导入</el-button></span>
        <span> <el-button type="primary" @click="print">打印</el-button></span>

      </div>
    </div>
  </div>
</template>
<script>
  import MyMask from '@/components/MyMask'
  import {tableData} from '../../../../lib/data.js'
  export default {
    components: {MyMask},
    data(){
      return{
        tableData :tableData.tableData,
      }
    },
    methods:{
      close(){
       this.$router.push({path:'AdminHome'})
      },
      myImport(){
        console.log(1);
      },
      print(){
        console.log(1);
      }
    }
  }
</script>
<style lang="less" scoped>
  .sign-up-details {
    position: absolute;
    z-index: 10;
    width: 780px;
    height: 700px;
    background: #fff;
    border: 1px solid #979797;
    border-radius: 6px;
    left: 50%;
    top: 50%;
    margin-top: -350px;
    /*margin-left: -30px;*/
    padding: 12px 17px 12px;

    .i {
      float: right;
    }

    .content-top {
      margin: 25px 0 12px;
      height: 60px;
      width: 100%;
      background: #71758D;
      display: flex;
      font-size: 12px;
      color: #FFFFFF;
      box-sizing: border-box;
      padding: 8px 20px;
      div:nth-child(2) {
        width: 250px;
      }
      div {
        width: 100%;

        p {
          span:first-child {
            margin-right: 30px;

          }
        }
        p:nth-child(2) {
          width: 230px;
        }

        p:first-child {
          width: 290px;
          margin-bottom: 10px;
        }
      }

      span {
        display: inline-block;
        margin-right: 5px;
      }

    }
  }
  .footer{
    position: absolute;
    height: 70px;
    bottom: 0;
    span{
      display: inline-block;
    }
    span:first-child{
      margin-left:280px ;
    }
    span:last-child{
      margin-left: 24px;
    }
  }
  button {
    line-height: 10px;
    width: 90px;
    height:32px;
    background:  #6976F1;
    box-shadow: 0 2px 10px 0 rgba(105,118,241,1);
    border: none;
  }
</style>
