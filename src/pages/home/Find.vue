<template>
<div>
  <h1>发现</h1>
  <hr>
      <div class="tab">
        <!-- <span @click="tabClick(1)" :class="{'on':index==1}">今日数据统计</span>
        <span @click="tabClick(2)" :class="{'on':index==2}">昨日数据统计</span> -->
        <router-link to="/find" tag="span" exact-active-class="on">今日</router-link>
        <router-link to="/find/t2" tag="span" exact-active-class="on">昨日</router-link>
      </div>


      <div class="content2">
          <router-view></router-view> 
      </div>
</div>
</template>

<script>
export default {
  data:function(){
    return{
      index:1
    }
  },
  methods:{
    tabClick(i){
      this.index=i;
      this.$router.history.push('/find/t'+i)
    },
  }
}
</script>

<style>
.tab{
  line-height: 35px;
  display: flex;
}
.tab span{
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.tab span.on{
  color: orange;
}
.content2 {
  line-height: 100px;
  text-align: center;
}
</style>