<template>
  <div class="course-index">
    <text-box>
      <div class="add">
        <p class="course" :class="{select:activeIndex == index}" @click="select(index)" v-for=" (item , index) in list"
           :key="index">{{ item }}</p>
      </div>
    </text-box>
    <table-box text="课程查询"></table-box>
    <text-box>
      <div class="course-select">
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
      </div>
      <div class="course-select">
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
        <p>
          <el-button type="primary" plain size="mini">查询</el-button>
        </p>
      </div>
    </text-box>

    <div class="course-index-title">
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
              <span><el-button type="text" @click="update">修改</el-button></span>|
              <span><el-button type="text" @click="del">删除</el-button></span>|
              <span @click="limit"><el-button type="text">限制</el-button></span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import TextBox from '../../../TextBox'
  import TableBox from '../../../TableBox'
  import {tableData} from '../../../../lib/data.js'

  export default {
    components: {TextBox, TableBox},
    name: 'SelectCourse',
    data() {
      return {
        showOverflowTooltip:true,
        tableData: tableData.tableData,
        list: ['添加课程', '批量导入课程', '批量导出课程'],
        activeIndex: 0,
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
        value: '',
      }
    },
    methods: {
      select(index) {
        this.activeIndex = index
        if(index == 0){
          this.$router.push({path:'AddCourse',query:{name:this.list[index]}})
          return
        }
        if(index ==1){
          this.$router.push({path:'ImportCourse',query:{name:this.list[index]}})
          return
        }
        if(index ==2){
          this.$router.push({path:'ExportCourse',query:{name:this.list[index]}})
          return
        }
      },
      update() {
        this.$alert(`<strong class="aa">修改</strong>`, 'HTML 片段', {
          dangerouslyUseHTMLString: true,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      },


      del() {
        this.$confirm(`此操作将永久删除该文件, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      limit() {
        this.$alert(`<strong>限制</strong>`, 'HTML 片段', {
          dangerouslyUseHTMLString: true,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      }
    },
  }
</script>
<style scoped lang="less">
  .course-index {
    .add {
      display: flex;

      .course {
        width: 100px;
        height: 24px;
        /*background: #6976F1;*/
        /*border: 1px solid #6976F1;*/
        border-radius: 4px;
        color: #6976F1;
        border: 1px solid #6976F1;
        margin-right: 23px;
        line-height: 24px;
        text-align: center;
      }
    }
  }

  .select {
    background: #6976F1;
    color: #fff !important;
    border: none;
  }

  .course-select:first-child {
    margin-bottom: 14px;
  }

  .course-select {
    display: flex;
    justify-content: space-between;

    p {
      width: 20%;
    }

    .inquire {

    }
  }

  /*.operating {*/
  /*span {*/
  /*margin: 0 1px;*/
  /*}*/

  /*span:first-child,*/
  /*span:last-child {*/
  /*color: #0046FF;*/
  /*}*/

  /*span {*/
  /*color: #ff5151;*/
  /*}*/
  /*}*/

</style>
