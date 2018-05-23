<template>
  <el-container>
    <el-header>
      <span>照片墙后台管理系统</span>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu>
          <el-menu-item index="1">
            <router-link to="/photocheck">
              <i class="el-icon-picture"></i>
              <span>照片审核</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/rulechange">
              <i class="el-icon-edit"></i>
              <span>规则修改</span>
            </router-link>
          </el-menu-item>
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
    };
  },
  mounted() {
    const str = `${this.screenHeight}px`;
    document.getElementsByClassName('el-aside')[0].style.height = str;
    document.getElementsByClassName('el-main')[0].style.height = str;
    window.onresize = () =>
      (() => {
        this.screenHeight = window.innerHeight - 60;
      })();
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


.el-header{
  margin-bottom: 10px;
  height: 40px ! important;
  background-color: #2c3e50;
}


.el-header span{
  line-height: 40px;
  color: #ffffff;
}


.el-aside{
  width: 220px ! important;
  background-color: #eeeeee;
}

.el-menu-item{
  border-bottom: 1px solid #dddddd;
  background-color: #eeeeee;
}

.el-main{
  margin-left: 10px;
}

</style>
