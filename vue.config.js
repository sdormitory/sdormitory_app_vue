const port = process.env.port || process.env.npm_config_port || 10004  // 端口
module.exports = {
	publicPath:"/sdormitoryapp/",
	outputDir: 'dist',
	lintOnSave: false, 
    runtimeCompiler: true,
	// lintOnSave: process.env.NODE_ENV === 'development',
	devServer: {
	  sockHost: 'http://localhost:9004', //如果你的浏览器，与NPM服务器，不是同一个机器（不是localhost），那么会导致这个报错
	  // sockHost: 'http://122.112.218.153:9004',
	  host: '0.0.0.0',
	  port: port,
	  proxy: {
	    // detail: https://cli.vuejs.org/config/#devserver-proxy
	    [process.env.VUE_APP_BASE_API]: {
	      target: `http://localhost:9004`,
		  // target: `http://122.112.218.153:9004`,
	      changeOrigin: true,
	      pathRewrite: {
	        ['^' + process.env.VUE_APP_BASE_API]: ''
	      }
	    }
	  },
	  disableHostCheck: true
	},
}
