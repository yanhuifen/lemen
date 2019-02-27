define(['mui', 'picker'], function(mui) {
	var month = document.querySelector('.month');
	var time = document.querySelector('.time');
	init(); //调用初始化函数
	//初始化函数
	function init() {
		mui.init();
		//区域滚动
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		//初始化picker组件
		var picker = new mui.PopPicker();
		//setData() 支持数据格式为: 数组
		picker.setData([{
				value: 'zz',
				text: '月'
			},
			{
				value: 'zz',
				text: '年'
			}
		]);
		//点击年显示列表
		month.addEventListener('tap', function() {
			picker.show(function(selectItems) {
				console.log(selectItems[0].text); //智子
				console.log(selectItems[0].value); //zz 
			})
		})
       //初始化年月的默认时间
	   time.innerHTML=
	   
	}



})
