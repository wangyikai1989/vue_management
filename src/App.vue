<template>
  <div id="qf-app">

    <router-view v-if='$route.path==="/login"' name='login'></router-view>
      <QfLayout v-else></QfLayout>
    
  </div>
</template>

<script>
    import {QfLayout} from '@/components/'

export default {
  name: 'App',
  components: {
    QfLayout,
    // Login
  },
  data:function(){
    return {
      foo:'hello world',
      // routes,
    }
  },
  watch:{
    // $route:function(to,from){
    //   console.log('url变化',to,from)
    // }
  }
}
</script>

<style lang="scss" >
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  // overflow: hidden;
  position: relative;
}
.qf-app {
  height: 100%;
}
/* 所有搜索和筛选的文字提示向右靠齐 */
.qf-filter-label {
  text-align: right;
  padding-right: 10px;
}
.el-row {
  margin-bottom: 25px;
}
</style>
