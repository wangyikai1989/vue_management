<template>
  <div>
      <h1>首页</h1>
      <button @click="skipToUser">编程式-跳转到个人中心</button>
      <!-- <router-link to='/user'>声明式-跳转到个人中心</router-link> -->
      <!-- <router-link to='/u'>声明式-跳转到个人中心</router-link> -->
      <router-link :to='{name:"me"}'>声明式-跳转到个人中心</router-link>
      <hr>
      
  </div>
</template>

<script>
export default {
  methods:{
    skipToUser(){
      this.$router.push('/user')
      // this.$router.push('/u')
      // this.$router.push({name:'me'})
    }
  }
}
</script>

<style scoped>

</style>
