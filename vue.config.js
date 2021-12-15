const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    lintOnSave: false,
    devServer: {
        port: 8888, // 端口号
        https: false, // true 配置之后可使用生成 https://localhost:8080/
        hotOnly: false,// 热更新（webpack已实现了，这里false即可）
        open: false, // 启动完自动打开浏览器
        proxy: {
            "/api": { //这里最好有一个/
                target: process.env.VUE_APP_REQUEST_URL, //根据不同环境自动匹配
                ws: false, //如果要代理 websockets，配置这个参数
                secure: false,  //如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    "^/api": "",
                },
            },
        },

        overlay: {
            warnings: false,
            errors: false
        },
    },
    chainWebpack: (config) => {
        //配置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
        // .set('utils', resolve('src/utils'));
    }
}