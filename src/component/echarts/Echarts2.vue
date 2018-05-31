<template>
	<div class="echarts-container">
		<h4 class="title">
			Echarts双轴拖动
		</h4>
		<p>
			echarts官网给出的例子只包有一个拖动轴，实现多个拖动轴需要创建多个x轴。<button @click="toDetail">详情</button>
		</p>
		<div class="ec__content" id="main-container">
			<div id="main" v-loading="loading" element-loading-text="拼命加载中"></div>
		</div>
	</div>
</template>

<script>
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
				var xData=[],
					data=[];
				for(let index=0;index<100;index++){
					data.push([index,Math.random()*10]);
					xData.push(index);
				}
				var dragOptionOne={
					type:'category',
					axisLine:{
		                show: false
		            },
		            axisTick:{
		                show: false
		            },
		            axisLabel:{
		                show: false
		            },
		            splitLine:{
		                show:false
		            },
		            position:'bottom',
					axisPointer: {
			            value: 50,
			            snap: true,
			            lineStyle: {
			                color: '#004E52',
			                opacity: 0.5,
			                width: 2
			            },
			            label: {
			                show: true,
			                backgroundColor: '#004E52',
			                formatter: function (params) {
		                        return parseFloat(data[parseInt(params.value)][1]).toFixed(2);
		                    }
			            },
			            handle: {
			                show: true,
			                color: '#004E52',
			                size:30,
			                margin:40
			            }
			        },
			        splitLine: {
			            show: false
			        },
			        data:xData
				};
				var dragOptionTwo=JSON.parse(JSON.stringify(dragOptionOne));
				dragOptionTwo.axisPointer.value=10;
				dragOptionTwo.axisPointer.label.formatter=function (params) {
		            return parseFloat(data[parseInt(params.value)][1]).toFixed(2);
		        }

				var myChart = echarts.init(document.getElementById('main'));
				myChart.setOption({
					title: {
					    text: 'ECharts 自适应'
					},
					tooltip:{
		                triggerOn:'axis'
		            },
					xAxis: [{
						type:'category'
					},
					dragOptionOne,
					dragOptionTwo
					],
					yAxis: {},
					series: [{
					    type: 'line',
					    data: data
					}]
				});

			},'echarts');
			_self.loading=false;
		},
		methods:{
			toDetail(){
				this.$router.push({name:'detail3'});
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
		border: 1px dashed lightpink;
		height: 300px;
	}
	#main {
		height: 100%;
		width: 100%;
	}
</style>