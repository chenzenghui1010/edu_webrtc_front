<template>
  <div  class="course">
    <!--<my-mask></my-mask>-->
    <div class="details">
      <div class="course-details">
        <p @click="close"  class="i"><i class="el-icon-close"></i></p>
        <div class="content-top">
          <div>
            <p><span>课程名称</span><span>数学俱乐部</span></p>
            <p><span>上课年级</span><span>高一年级 , 高二年级</span></p>
          </div>
          <div><p><span>执教教授</span><span>老师名</span></p>
            <p><span>上课时间</span> <span>星期三第二节</span></p>
          </div>
        </div>
        <div class="content-details">
          <div class="details1">
            <p><span>上课地点</span><span>高一18班3</span></p>
            <p><span>课时</span><span>10</span></p>
            <p><span>批复学分</span><span>2</span></p>
          </div>
          <div class="details1">
            <p><span>上课地点</span><span>高一18班3</span></p>
            <p><span>课时</span><span>10</span></p>
            <p><span>批复学分</span><span>2</span></p>
          </div>
          <div class="details1">
            <p><span>上课地点</span><span>高一18班3</span></p>
            <p><span>课时</span><span>10</span></p>
            <p><span>批复学分</span><span>2</span></p>
          </div>
          <div class="details1">
            <p><span>上课地点</span><span>高一18班3</span></p>
            <p><span>课时</span><span>10</span></p>
            <p><span>批复学分</span><span>2</span></p>
          </div>
          <div class="details2"><p><span>特长生要求</span><span>无</span></p></div>
          <div class="details2"><p class="no"><span>是否关联三加三选课</span><span>否</span></p></div>
          <div class="details3">
            <div>上课内容，特点概括，及其他要求</div>
            <div>内容</div>
          </div>
          <div class="details4">
            <div>课程缩略图</div>
            <div>img</div>
          </div>
          <div class="details5">
            <div>附件</div>
            <div>文件.ppt</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyMask from '@/components/MyMask'

  export default {
    components: {MyMask},
    props: {
      // detailsData: {
      //   type: Object,
      //   required: true,
      // },
      // showDetails:{
      //   type: Boolean,
      //   default:false,
      // }
    },
    data() {
      return {
        closeDetails:false
      }
    },
    methods:{
      close(){
        this.$emit('closeDetails',this.closeDetails)
      }
    }
  }
</script>

<style lang="less" scoped>
.course{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  right: 0px;
  /*bottom: 0;*/
  top: 0;
}
  .details {
    font-family: PingFangSC-Regular;
    position: relative;
    .course-details {
      position: fixed;
      z-index: 2010;
      width: 620px;
      height: 550px;
      background: #fff;
      border: 1px solid #979797;
      border-radius: 6px;
      left: 50%;
      top: 50%;
      margin-top: -300px;
      margin-left: -310px;
      padding: 12px 17px 12px;

      .i {
        float: right;
      }

      .content-top {
        margin-top: 25px;
        height: 60px;
        width: 100%;
        background: #71758D;
        display: flex;
        font-size: 12px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 8px 20px;

        div {
          width: 100%;

          p {
            span:first-child {
              margin-right: 30px;

            }
          }

          p:last-child {
            width: 300px;
            margin-top: 10px;
          }
        }

        span {
          display: inline-block;
          margin-right: 5px;
        }

      }
    }
  }

  .content-details {
    margin-top: 6px;
  }

  .details1 {
    width: 100%;
    display: flex;
    p:first-child {
      width: 40%;
    }
    p:nth-child(2){
      width: 30%;
    }
    P:last-child{
      width: 30%;
    }
    p {
      height: 24px;
      span:first-child{
        display: inline-block;
        width: 100px;
        padding-left: 10px;
      }
      span {
        display: inline-block;
        height: 24px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
      }
      span:first-child {
        color: #71758D;
      }

      span:last-child {
        color: #171926;
      }
    }
  }

  .details2 {
    .no{
      span:first-child{
        width: 150px;
      }
    }
    p {
      span {
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #171926;
      }
      span:first-child {
        padding-left: 10px;
        width: 100px;
        color: #71758D;
      }
    }
  }

  .details3{
    height: 112px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 8px 10px ;
    div:first-child{
      width: 120px;
      margin-right: 20px;
      font-size: 12px;
      color: #71758D;
    }
    div:last-child{
      box-sizing: border-box;
      padding: 5px;
      background: #FFFFFF;
      border: 1px solid #E0E1E8;
      border-radius: 4px;
      width: 450px;
      height: 92%;
    }
  }

  .details4{
    margin-top: 5px;
    height: 112px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 8px 10px ;
    color: #71758D;
    div:first-child{
      width: 140px;
      background: #fff !important;
    }
    div:last-child{
      width: 96px;
    }
  }

  .details5{
    margin-top: 8px;
    height: 60px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 8px 10px ;
    color: #71758D;
    div:first-child{
      width: 140px;
    }
  }

  .content-details{
    div{
      margin-top: 5px;
    }
    div:nth-child(odd){
      background: #EFF0F6;

    }
  }
</style>
