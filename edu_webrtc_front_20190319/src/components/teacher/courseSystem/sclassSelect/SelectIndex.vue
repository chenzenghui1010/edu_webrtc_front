<template>
  <div class="select-index">
    <text-box>
      <span  class="span"  @click="go">批量学课导入</span>
    </text-box>
    <table-box text="可开班课程信息" class="text"></table-box>
    <text-box>
      <div class="select">
        <p> 年度：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </p>
        <p> 学期：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p> 年级：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p>班级：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p> 选课门数：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p>查询 </p>
      </div>
    </text-box>

    <div class="text-select-index">
      <el-table :data="tableData" stripe style="width:100%"
                :row-style="{height:'24px'}"
                :cell-style="{padding:0}"
                :header-row-style="{height:'24px'}"
                :header-cell-style="{padding:0}"
                align="center"
      >
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div @click="rowClick(scope.$index, scope.row)">选择</div>
          </template>
        </el-table-column>
        <el-table-column prop="numbering" label="课程编号" align="center"></el-table-column>
        <el-table-column prop="name" label="课程名称" align="center"></el-table-column>
        <el-table-column prop="teacherName" label="执教教师" align="center"></el-table-column>
        <el-table-column prop="subjectType" label="学科" align="center"></el-table-column>
        <el-table-column prop="lesson" label="课时" align="center"></el-table-column>
        <el-table-column prop="credit" label="学分" align="center"></el-table-column>
        <el-table-column prop="clickNum" label="点击率" align="center"></el-table-column>
        <el-table-column prop="max" label="上限人数" align="center"></el-table-column>
        <el-table-column prop="min" label="下限人数" align="center"></el-table-column>
        <el-table-column prop="signUpNum" label="已报名人数" align="center"></el-table-column>
        <el-table-column prop="date" label="已报名人数" align="center"></el-table-column>
        <el-table-column prop="openType" label="每班人数限制" align="center"></el-table-column>
        <el-table-column prop="time" label="上课时间" align="center"></el-table-column>
      </el-table>
    </div>
    <!--<click-select ></click-select>-->
    <!--v-if="showClickSelect"-->
  </div>
</template>
<script>
  import TextBox from '../../../TextBox'
  import TableBox from '../../../TableBox'
  import {tableData} from '../../../../lib/data'
  import ClickSelect from './ClickSelect'

  export default {
    components: {TextBox, TableBox, ClickSelect},
    data() {
      return {
        showClickSelect: false,
        tableData: tableData.tableData,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      rowClick() {
        this.showClickSelect = true
      },

      go() {
        console.log(1);
      }
    }

  }
</script>
<style lang="less" scoped>

    .span {
      display: inline-block;
      height: 24px;
      width: 100px;
      background: #FFFFFF;
      border: 1px solid #6976F1;
      line-height: 24px;
      text-align: center;
      border-radius: 4px;
      color: #6976F1;
    }
    span:hover {
      border: 1px solid #fff;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
    }

  .select {
    display: flex;
    align-items: center;

    p {
      width: 170px;
    }

    p:last-child {
      height: 24px;
      width: 78px;
      background: #FFFFFF;
      border: 1px solid #6976F1;
      line-height: 24px;
      text-align: center;
      border-radius: 4px;
      color: #6976F1;
      margin-left: 30px;
    }
  }
</style>
