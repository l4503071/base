<template>
	<div class="detail-container">
		<h4 class="title">
			Echarts双轴拖动
		</h4>
		<div class="dc__content">
			<span>思路：</span>
			<p>
				1.创建多个xAxis
			</p>
			<p>
				2.在每个xAxis轴中分别添加一个axisPointer
			</p>
			<p>
				<em>注意：</em>
				需要同时指定tooltip:{triggerOn:'axis'}，否则鼠标进入图表后，不点击鼠标，双轴也会随鼠标移动。
			</p>
			<p>
				参考：
				<a href="http://echarts.baidu.com/examples/editor.html?c=line-tooltip-touch" target="__blank">点击</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
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