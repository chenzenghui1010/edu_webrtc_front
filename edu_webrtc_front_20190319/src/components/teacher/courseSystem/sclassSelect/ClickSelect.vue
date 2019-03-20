<template>
  <div class="click-select">
      <p @click="close"  class="i"><i class="el-icon-close"></i></p>
      <div class="content-top">
        <div>
          <p><span>课程名称</span><span>数学俱乐部</span></p>
        </div>
        <div><p><span>执教教授</span><span>老师名</span></p>
        </div>
      </div>
      <div class="sign-up-details-title">
        <el-table :data="tableData" stripe style="width:100%"
                  :row-style="{height:'24px'}"
                  :cell-style="{padding:0}"
                  :header-row-style="{height:'24px'}"
                  :header-cell-style="{padding:0}"
        >
          <el-table-column label="选择" width="60" align="center">
          <template slot-scope="scope">
            <!--<div @click="rowClick(scope.$index, scope.row)">选择</div>-->
            <el-checkbox-group
              v-model="checkedCities1"
              :min="1"
              :max="2">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-table-column>
          <el-table-column label="是否报名"  width="80"align="center">
            <template slot-scope="scope">
              <div @click="rowClick(scope.$index, scope.row)">选择</div>
            </template>
          </el-table-column>
          <el-table-column prop="numbering" label="学籍号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="teacherName" label="学号"></el-table-column>
          <el-table-column prop="max" width="60" label="性别"></el-table-column>
          <el-table-column prop="lesson" label="班级"></el-table-column>
          <el-table-column prop="subjectType" label="学籍状态"></el-table-column>
          <el-table-column prop="min"  label="已选数量"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <div @click="rowClick(scope.$index, scope.row)">删除</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        <span><el-button type="primary" @click="go">确定</el-button></span>
      </div>
  </div>
</template>
<script>
  import {tableData} from '../../../../lib/data'
  const cityOptions = [""];
  export default {
    data() {
      return {
        tableData: tableData.tableData,
        checkedCities1: [" "],
        cities: cityOptions
      }
    },
    methods:{
      close(){
        console.log(1);
      },
      go(){
        console.log(1);
      }
    }
  }

</script>
<style lang="less" scoped>
  .click-select {
    height: 600px;
    width: 760px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin-top: -400px;
    margin-left: -580px;
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
    height: 60px;
    margin-left:  338px;
    bottom: 0;
    span{
      display: inline-block;
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
