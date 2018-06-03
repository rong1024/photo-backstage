<template>
  <el-container>
    <el-header>
      <span>照片墙后台管理系统</span>
      <span class="admin-name">管理员：{{admin_name}}</span>
    </el-header>
    <el-container class="main-container">
      <el-aside>
        <el-menu>
          <router-link to="/photocheck">
            <el-menu-item index="1">
              <i class="el-icon-picture"></i>
              <span>照片审核</span>
            </el-menu-item>
          </router-link>
          <router-link to="/rulechange">
            <el-menu-item index="2">
              <i class="el-icon-edit"></i>
              <span>规则修改</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      screenHeight: window.innerHeight - 50,
      admin_name: '张三',
    };
  },
  mounted() {
    const str = `${this.screenHeight}px`;
    document.getElementsByClassName('el-aside')[0].style.height = str;
    document.getElementsByClassName('el-main')[0].style.height = str;
    window.onresize = () =>
      (() => {
        this.screenHeight = window.innerHeight - 50;
      })();
    this.$ajax.get('/admins/token')
    // 这里要传参数limit和offset!!
      .then((response) => {
        this.admin_name = response.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    screenHeight() {
      document.getElementsByClassName('el-aside')[0].style.height = '`{this.screenHeight}px`';
      document.getElementsByClassName('el-main')[0].style.height = '`{this.screenHeight}px`';
    },
  },
};
</script>

<style>
/* 预设css */
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{
  margin:0;
  padding:0;
}
body{
  height: 100%;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


/* 头部 */
.el-header{
  margin-bottom: 9px;
  height: 40px ! important;
  background-color: #2c3e50;
}

.admin-name{
  float: right;
}

.el-header span{
  line-height: 40px;
  color: #ffffff;
}

/* 包含侧栏和路由页面的容器 */
.main-container{
  border-top: 1px solid #dddddd;
}

/* 侧栏 */
.el-aside{
  width: 220px ! important;
  background-color: #eeeeee;
}

.el-menu-item{
  border-bottom: 1px solid #dddddd;
  background-color: #eeeeee;
}


</style>
