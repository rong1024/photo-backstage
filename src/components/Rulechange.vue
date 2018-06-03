<template>
  <el-form>
    <el-form-item label="规则编写">
      <div ref="editor" class="editor"></div>
    </el-form-item>
    <el-form-item label="是否提交">
      <el-button type="primary" @click="confirm">确认</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import E from 'wangeditor';

export default {
  name: 'editor',
  data() {
    return {
      editorContent: '',
    };
  },
  methods: {
    confirm() {
      this.$confirm('确定提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$ajax.post('http://localhost:8080/static/groups.json', this.editorContent)
        // 记得改成实际的url地址!!
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
  },
  mounted() {
    const editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
      this.editorContent = html;
    };
    editor.create();
    this.$ajax.get('http://localhost:8080/static/rule.json')
    // 要改成实际的url地址!!
      .then((response) => {
        editor.txt.html(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.el-form-item__content{
  display: inline-block;
  margin-left: 20px;
}

.editor{
  text-align:left;
  width: 1000px;
  z-index: 1;
}

.editor h1{
  font-size: 26px;
}
/* 对富文本的编辑内容高度设置 */
.w-e-text-container{
  height: 400px ! important;
}

/* 解决弹框被覆盖而无法点击的bug */
.w-e-text-container{
  z-index: 100 ! important;
}
</style>
