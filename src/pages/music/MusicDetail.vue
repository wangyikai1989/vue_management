<template>
  <h1>音乐详情页</h1>
</template>

<script>
export default {
  // 使用props接收动态路由中的参数
  // props:{
  //   id:{
  //     type:String,
  //     required:true
  //   }
  // },
  mounted(){
    let id = this.$route.params.id
    // let id = this.id
    console.log('音乐id',id);
  }
}
</script>

<style>

</style>