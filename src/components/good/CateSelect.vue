<template>
<div class="qf-cate-select">
    <el-select 
    v-model="cate" 
    placeholder="请选择品类"
    @change='change'
    :size="size"
    :clearable="clearable"
    >
        <el-option
        v-for="item in cateArr"
        :key="item._id"
        :label="item.cate_zh"
        :value="item.cate">
        </el-option>
    </el-select>
</div>
  
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            required:false,
            dafault:''
        },
        size:{
            type: String,
            required: false,
            default: 'medium'
        },
        clearable: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function() {
        return {
        cate: '',
        cateArr: []
    }
  },
  mounted(){
      this.$http.fetchAllCates().then(res=>{
          console.log('商品品类',res)
          this.cateArr = res.list
      })
  },
  methods:{
      change(){
          this.$emit("input",this.cate)
          this.$emit("change")
      }
  }
}
</script>

<style lang="scss" scoped>

</style>