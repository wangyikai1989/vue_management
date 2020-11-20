// 只要修改了vue.config.js这个配置文件，都要重启项目
module.exports = {
    devServer:{
        // 用代理方式解决同源问题对ajax的限制
        proxy:{
            '/soso':{
                target:'https://c.y.qq.com',
                ws:true,
                changeOrigin: true
            },
            '/api':{
                target:'http://10.20.158.29:9000',
                changeOrigin:true
            }
        }
    }
}