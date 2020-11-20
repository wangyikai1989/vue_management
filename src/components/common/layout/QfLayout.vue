<template>
  <div class="qf-layout">

      <el-container>

        <el-aside width="150px">
          <QfAside></QfAside>
        </el-aside>

        <el-container class="qf-container">
            <el-header>
              <QfHeader></QfHeader>
            </el-header>
            <el-main>
              <QfMian></QfMian>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  components:{
    QfAside:()=>import('./QfAside.vue'),
    QfHeader:()=>import('./QfHeader.vue'),
    QfMian:()=>import('./QfMain.vue')
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  background: #eee;
}
.qf-layout {
  height: 100%;
}
// 左侧菜单
.el-aside {
  height: 100%;
  padding: 0;
  background-color: #545c64;
  .qf-aside {
    height: 100%;
    color: #ddd;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
  }
}
// 顶部操作栏
.el-header {
  padding: 0;
  width: 98%;
  .qf-header {
    background-color: white;
    line-height: 60px;
    padding-left: 20px;
    width: 100%;
    position: relative;
  }
}
// 主体内容
.el-main {
  // height: 100%;
  width: 100%;
  display: block;
  position: relative;
  // overflow: hidden;
  padding: 15px;
  padding-bottom: 10px;
  padding-right: 10px;
  .qf-main {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    // position: absolute;
    background-color: white;
    min-width: 900px;
    padding-bottom: 50px;
  }
}
</style>