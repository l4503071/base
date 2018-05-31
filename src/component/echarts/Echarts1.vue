<template>
	<div class="echarts-container">
		<h4 class="title">
			Echarts自适应
		</h4>
		<p>
			拖动边框右下角的小三角，echarts图表大小会随之发生改变。<button @click="toDetail">详情</button>
		</p>
		<p>
			拖动插件为 css-element-queries，参考网址：<a href="https://github.com/marcj/css-element-queries" target="__blank">https://github.com/marcj/css-element-queries</a>
		</p>
		<div class="ec__content" id="main-container">
			<div id="main" v-loading="loading" element-loading-text="拼命加载中"></div>
		</div>
	</div>
</template>

<script>
	const ElementQueries=require('css-element-queries/src/ElementQueries');
	const ResizeSensor=require('css-element-queries/src/ResizeSensor');
	export default {
		data(){
			return {
				loading:true
			};
		},
		mounted(){
			let _self=this;
			require.ensure([], function(require){
				const echarts=require('echarts');
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
				_self.loading=false;
			},'echarts');
		},
		methods:{
			toDetail(){
				this.$router.push({name:'detail2'});
			}
		}
	}
</script>

<style scoped>
	.echarts-container {
		height: 100%;
		padding-left: 16px;
		padding-right: 16px;
	}
	.ec__content {
		resize: both;
		overflow: hidden;
		padding-bottom: 5px;
		border: 1px dashed lightpink;
		height: 300px;
	}
	#main {
		height: 100%;
		width: 100%;
	}
</style>