<template class="">
  <div class="add-course">
    <div class="add-course-title">
      <top-menu userType="教师">
        <slot>{{typeCourse}}</slot>
      </top-menu>
    </div>

    <div class="add-course-content">
      <div class="add-course-content-select">
        <p> 课程名称：
          <input type="text" placeholder="请选择">
          <strong>*</strong>
        </p>
        <p> 部门：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p> 教师：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <strong>*</strong>
        </p>
      </div>
      <div class="add-course-content-select">
        <p> 学科类别：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <strong>*</strong>
        </p>
        <p> 申请学分：<input type="text" placeholder="请选择"> <strong>*</strong>
        </p>
        <p> 上课地点：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <strong>*</strong>
        </p>
      </div>
      <div class="add-course-content-select">
        <p> 课程性质：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <strong>*</strong>
        </p>
        <p>
          上课年级：
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="高一"></el-checkbox>
            <el-checkbox label="高二"></el-checkbox>
            <el-checkbox label="高三"></el-checkbox>
          </el-checkbox-group>
        </p>
        <p> 上课时间：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

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
      <div class="add-course-content-select">
        <p> 开始时间：
          <el-date-picker
            v-model="value1"
            type="date"
            size="mini"
            placeholder="选择日期">
          </el-date-picker>
          <strong>*</strong>
        </p>
        <p> 结束时间：
          <el-date-picker
            v-model="value2"
            type="date"
            size="mini"
            placeholder="选择日期">
          </el-date-picker>
          <strong>*</strong>
        </p>
        <p> 课时：
          <input class="index" type="text" placeholder="请选择">
          <strong>*</strong>
        </p>
      </div>
      <div class="add-course-content-select">
        <p> 人数上限：
          <input class="index" type="text" placeholder="请选择">
          <strong>*</strong>
        </p>
        <p> 人数下限：
          <input class="index" type="text" placeholder="请选择">
        </p>
        <p> 每班可报人数：
          <input class="index" type="text" placeholder="请选择">
          <strong>*</strong>
        </p>
      </div>
      <div class="add-course-content-select">
        <p> 是否添加更多条件限制：
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </p>
        <p> 助教设置：
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <input class="index" type="text" placeholder="请选择">
        </p>
      </div>
      <div class="add-course-content-select  dis">
        <div class="text">上课内容，特点概括以及其他内容</div>
        <div class="con">
          <p>【课程简介】</p>
          <el-input
            type="textarea"
            :rows="1"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <p>【教学内容】</p>
          <el-input
            type="textarea"
            :rows="3"
            border="none"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>
      </div>
      <div class="add-course-content-select img">
        <div class="img-p">课程缩略图：</div>
        <div>+</div>
      </div>
      <div class="add-course-content-select select-text">
        <span>附件：</span><span>选择文件</span>
      </div>
      <div class="btn">
        <button>取消</button>
        <button>确定</button>
      </div>

    </div>
  </div>
</template>
<script>
  import TopMenu from '../../../../components/TopMenu'

  export default {
    name: 'AddCourse',
    components: {TopMenu},
    data() {
      return {
        textarea: '',
        radio: '',
        value1: '',
        value2: '',
        cities: ['上海', '北京', '广州'],
        checkedCities: '',
        typeCourse: this.$route.query.name,
        checkList: '',
        input: '',
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }]
        //
      }
    },
    methods: {
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }

  }
</script>
<style lang="less" scoped>
  .add-course-title {
  }

  .add-course-content {
    box-sizing: border-box;
    padding: 74px 20px 20px;
    width: 100%;

    .add-course-content-select:nth-child(odd) {
      background: #EFF0F6;

    }

    .add-course-content-select {
      box-sizing: border-box;
      padding: 0 11px;
      height: 44px;
      display: flex;
      align-items: center;
      /*justify-content: space-between;*/

      p {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #71758D;
        width: 33%;
      }

      input {
        display: inline-block;
        height: 25px;
        background: #FFFFFF;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        padding-left: 12px;
      }

      input.index {
        width: 90px;
      }

      input::-webkit-input-placeholder {
        color: #DCDFE6;
      }

      strong {
        display: inline-block;
        margin-left: 5px;
        color: #ff5151;
      }
    }
  }

  .dis {
    height: 178px !important;
    box-sizing: border-box;
    width: 100%;

    div.text {
      width: 110px;
      font-size: 12px;
      color: #71758D;
      margin-right: 28px;
    }

    .con {
      box-sizing: border-box;
      padding: 10px;
      height: 159px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #C6C8D6;
      border-radius: 4px;
    }
  }

  .img {
    height: 88px !important;

    div.img-p {
      width: 100px !important;
      margin-right: 28px;
      color: #71758D;
      font-size: 12px;
    }

    div:last-child {
      height: 64px;
      width: 64px;
      background: #FFFFFF;
      border: 1px solid #C6C8D6;
      border-radius: 4px;
      font-size: 30px;
      color: #71758D;
      line-height: 64px;
      text-align: center;
    }
  }

  .select-text {
    span {
      display: inline-block;
      color: #71758D;
      font-size: 12px;
    }

    span:first-child {
      width: 100px;
      margin-right: 28px;
    }

    span:last-child {
      background: #71758D;
      border-radius: 4px;
      height: 24px;
      width: 73px;
      color: #fff;
      line-height: 24px;
      text-align: center;
    }
  }
  .btn{
    margin-top: 40px;
    text-align: center;
    button:focus{
      outline:0;
    }
    /*button:active{*/
      /*background: rgba(0,0,0,0.5);*/
    /*}*/
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
