require.config({
	baseUrl:"/js",
	paths:{
		"mui":"libs/mui.min",
		"index":"page/index",
		"picker":"libs/mui.picker.min"
	},
	shim:{
		"picker":{
			deps:['mui']//设置以来  deps加不加引号都行
		}
	}
})