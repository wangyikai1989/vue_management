<template>
  <div class="qf-login">
      <div class="qf-login-wrap">
            <el-form :model="user" :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input v-model="user.password" show-password></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="loginSubmit">登录</el-button>
                </el-form-item>
            </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            user:{
                username:'',
                password:''
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { pattern:/^[a-zA-Z][a-zA-Z0-9]{1,9}$/, message: '用户名格式不对', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { pattern:/^[a-zA-Z][a-zA-Z0-9]{5,17}$/, message: '密码格式不对', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        loginSubmit(){
            console.log('user',this.user)
            this.$http.fetchLogin(this.user)
            .then(res=>{
                console.log('login res',res)
                localStorage.setItem('token',res.token)
                this.$router.history.replace('/')
            })
            // console.log('this.$http',this.http)
        }
    }

}
</script>

<style lang="scss" scoped>
.qf-login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(84, 92, 100, 1);
  .qf-login-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 550px;
    margin-left: -275px;
    background: white;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 10px;
    height: 214px;
    margin-top: -107px;
  }
}
</style>