<template>
<div
 class="img-check">
  <h2 class="group-title">{{title}}</h2>
  <el-card
   v-for="(item, index) in imgs"
   :key="index"
   class="box-card">
    <div class="item">
      <img :src="item.url"
       alt="图片">
    </div>
  </el-card>
  <div class="group-description">
    <p>{{description}}</p>
  </div>
  <el-form
   ref="form"
   :model="form"
   class="group-form">
    <el-form-item>
      <el-input
       type="textarea"
       :rows="3"
       :cols="100"
       placeholder="输入驳回理由的提示"
       v-model="form.tips"
       class="tips"></el-input>
    </el-form-item>
    <el-form-item class="form-item-btn">
      <el-button
       type="primary"
       @click="onSuccess">通过</el-button>
      <el-button
       type="warning"
       @click="onFail">驳回</el-button>
      <el-button @click="onReturn">返回</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<style>
.group-title{
  padding-bottom: 20px;
  margin-bottom: 60px;
  border-bottom: 1px solid #dddddd;
  text-align: center;
}

.group-description{
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid #dddddd;
}

.group-description p{
  margin: 0 auto;
  width: 600px;
}
.el-card{
  margin: 0 auto;
  margin-bottom: 40px;
  width: 600px;
}

.item{
  text-align: center;
}

.item img{
  margin: 50px;
}

.img-check .el-form-item{
  margin: 0 auto;
  width: 600px;
}

.group-form{
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #dddddd;
}

.group-form .el-form-item{
  margin-top: 40px;
}

.form-item-btn{
  text-align: center;
}

.form-item-btn .el-button{
  margin-right: 20px;
  margin-left: 20px;
}
</style>

<script>

export default {
  data() {
    return {
      title: '图片组标题',
      description: '细节描述',
      form: {
        tips: '恭喜通过',
        status: '',
      },
      imgs: [],
      url: '',
    };
  },
  methods: {
    onSuccess() {
      this.$confirm('确定通过审核?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.form.status = '通过';
        this.$ajax.post(this.url, this.form)
          .catch((error) => {
            console.log(error);
          });
        this.$message({
          type: 'success',
          message: '操作成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消',
        });
      });
    },
    onFail() {
      this.$confirm('确定驳回请求?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.form.status = '驳回';
        this.$ajax.post(this.url, {
          tips: this.form.tips,
          status: this.form.status,
        })
          .catch((error) => {
            console.log(error);
          });
        this.$message({
          type: 'success',
          message: '操作成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消',
        });
      });
    },
    onReturn() {
      this.$router.push('/photocheck');
    },
  },
  mounted() {
    this.$ajax.get('http://localhost:8080/static/group.json')
    // 这里注意要换成实际url!!
      .then((response) => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.imgs = response.data.imgs;
      })
      .catch((error) => {
        console.log(error);
      });
    const url = `/group/${this.$route.params.id}`;
    this.url = url;
  },
};
</script>
