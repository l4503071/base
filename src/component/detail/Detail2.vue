<template>
	<div class="detail-container">
		<h4 class="title">
			Echarts图标大小自适应
		</h4>
		<div class="dc__content">
			<div>
				<div>html代码：</div>
				<textarea cols="50" rows="3" v-model="htmlCode" disabled></textarea>
			</div>
			<div>
				<div>js代码：</div>
				<textarea cols="75" rows="20" v-model="jsCode" disabled></textarea>
			</div>
			<div class="dcc__article">
				<span>思路：</span>
				<p>
					1.echarts实例(id="main")的标签外层需要包括一层宽高自适应的标签；
				</p>
				<p>
					2.echarts实例标签的宽高需要指定为100%；
				</p>
				<p>
					3.监测外层标签的resize时间，调用echarts实例的resize方法;
				</p>
				<p>
					4.如果需要进一步控制echarts图标的自适应，请使用media配置项，参考：
					<a href="http://echarts.baidu.com/tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94" target="__blank">点击</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				htmlCode:`<div class="ec__content" id="main-container">
	<div id="main"></div>
</div>`,
				jsCode:`const echarts=require('echarts');
const ElementQueries=require('css-element-queries/src/ElementQueries');
const ResizeSensor=require('css-element-queries/src/ResizeSensor');
export default {
	data(){
		return {
		};
	},
	mounted(){
		ElementQueries.listen();
		ElementQueries.init();
		const mainContainer=document.getElementById('main-container');
		var myChart = echarts.init(document.getElementById('main'));
		new ResizeSensor(mainContainer,function(){
			myChart.resize({
			});
		});
		myChart.setOption({
			title: {
			    text: 'ECharts 自适应'
			},
			tooltip: {},
			xAxis: {
			    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
			},
			yAxis: {},
			series: [{
			    name: '销量',
			    type: 'bar',
			    data: [5, 20, 36, 10, 10, 20]
			}]
		});
	}
}`
			};
		}
	}
</script>

<style>
	.detail-container {
		height: 100%;
		padding-left: 16px;
		padding-right: 16px;
	}
	.dc__content {
		position: relative;
	}
	.dcc__article {
		position: absolute;
		right: 0;
		top:0;
		width: 300px;
		height: 300px;
		border: 1px darkblue dashed;
	}
</style>