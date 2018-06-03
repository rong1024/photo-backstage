<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="check"
      label="审核">
      <template slot-scope="scope">
        <el-button size="small"
         @click="goCheck(scope.$index, scope.row)">
        去审核
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    goCheck(index, row) {
      this.$router.push(`/group/:${row.id}`);
    },
  },
  created() {
    this.$ajax.get('/groups?limit=10&lpage=1')
    // 这里要传参数limit和offset!!
      .then((response) => {
        const tableData = [];
        console.log(response.data);
        response.data.forEach((element) => {
          const obj = {};
          obj.title = element.title;
          obj.status = element.status;
          obj.id = element.id;
          tableData.push(obj);
        });
        this.tableData = tableData;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
