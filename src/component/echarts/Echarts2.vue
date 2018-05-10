<template>
	<div class="echarts-container">
		<h4 class="title">
			Echarts双轴拖动
		</h4>
		<p>
			。。。<button @click="toDetail">详情</button>
		</p>
		<div class="ec__content" id="main-container">
			<div id="main"></div>
		</div>
	</div>
</template>

<script>
	const echarts=require('echarts');
	export default {
		data(){
			return {
				data:[]
			};
		},
		mounted(){
			var $self=this;
			var xData=[];
			for(let index=0;index<100;index++){
				this.data.push([index,Math.random()*10]);
				xData.push(index);
			}
			var dragOption={
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
                            return parseFloat($self.data[parseInt(params.value)]).toFixed(2);
                        },
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
				{...dragOption,...{axisPointer:{value:10}}},
				{...dragOption}
				],
				yAxis: {},
				series: [{
				    type: 'line',
				    data: this.data
				}]
			});
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