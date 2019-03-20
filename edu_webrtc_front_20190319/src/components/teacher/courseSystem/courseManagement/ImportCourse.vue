<template>
  <div class="import-course">
    <top-menu userType="教师">
      <slot>{{typeCourse}}</slot>
    </top-menu>
    <div class="import-course-content">
      <text-box>
        <div class="select-text">
          <span>选择文件</span><span></span><span>导入模块</span><span>EXCEL 处理工具</span>
        </div>
      </text-box>
    </div>
    <div class="checkbox">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="textarea3">
      </el-input>
    </div>
    <div class="shili">实例</div>
    <div class="shili-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%;"
        size="mini"
        max-height="100"
      >
        <el-table-column
          prop="date"
          label="日期"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
         >
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        :show-overflow-tooltip="showOverflowTooltip"
        align="center"
      >
      </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        :show-overflow-tooltip="showOverflowTooltip"
        align="center"
      >
      </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        :show-overflow-tooltip="showOverflowTooltip"
        align="center"
      >
      </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
        >
        </el-table-column>


        <el-table-column
          label="简介"
          prop="address"
          :show-overflow-tooltip="showOverflowTooltip"
          align="center"
         >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import TopMenu from '../../../../components/TopMenu'
  import TextBox from '../../../../components/TextBox'

  export default {
    name: 'ImportCourse',
    components: {TopMenu, TextBox},
    data() {
      return {
        showOverflowTooltip:true,
        typeCourse: this.$route.query.name,
        textarea3: '',
        tableData: [
          {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
          {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
  }
</script>
<style lang="less" scoped>
  .import-course-content {
    box-sizing: border-box;
    padding: 85px 20px 20px;
    width: 100%;
  }

  .select-text {
    display: flex;
    box-sizing: border-box;
    padding: 22px 25px;

    span {
      font-family: PingFangSC-Regular;
      display: inline-block;
      height: 24px;
      line-height: 24px;
      text-align: center;
    }

    span:first-child {
      height: 24px;
      width: 73px;
      background: #71758D;
      border-radius: 4px;
      font-size: 12px;
      color: #fff;
      margin-right: 20px;
    }

    span:nth-child(2) {
      box-sizing: border-box;
      width: 259px;
      height: 24px;
      background: #FFFFFF;
      border: 1px solid #C6C8D6;
      border-radius: 4px;
    }

    span:nth-child(3) {
      color: #FF5E5E;
      margin: 0 32px 0 41px;
    }

    span:last-child {
      font-size: 12px;
      color: #0046FF;
      text-align: left;
    }
  }

  .checkbox {
    box-sizing: border-box;
    padding: 0 20px;
  }
  .shili{
    color: #ff5151;
    text-align: center;
    margin:  14px 0 35px 0 ;
  }
  .shili-table{
    padding: 0 20px ;
  }
</style>
