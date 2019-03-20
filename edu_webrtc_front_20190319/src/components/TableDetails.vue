<template>
  <div class="table-details">
    <TableBox text="电影设"></TableBox>
    <text-box>
      <div class="table-details-div">
        <p>电影社班级点名情况表</p>
        <p>教师：教师名</p>
        <p>上课时间：星期五第三节</p>
        <p>上课地点：三号楼学生报告厅1</p>
      </div>
    </text-box>
    <table-details-table></table-details-table>
  </div>
</template>
<script>
  import TableBox from "./TableBox";
  import TextBox from "./TextBox";
  import TableDetailsTable from './TableDetailsTable'
  export default {
    components:{TableBox,TableDetailsTable,TextBox},
    name:'tableDetails',
    data (){
      return{
        data:'',
      }
    }
  }
</script>
<style scoped lang="less">
  .table-details{
    /*background: rgba(0, 0, 0, 0.1);*/
    box-sizing: border-box;
    /*width: 100%;*/
    /*padding: 10px 100px 1000px 0px;*/
  }
  .table-details-div{
    display: flex;
  }
  p{
    margin-right: 56px;
  }
</style>
