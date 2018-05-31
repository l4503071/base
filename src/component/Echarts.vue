<template>
	<div class="home-container">
		<div class="left">
			<h4 v-text="title" v-once></h4>
			<ul>
				<router-link v-for="list in lists" :to="{name:'echarts'+list.id}" :key="list.id" active-class="active" tag="li">{{list.name}}</router-link>
			</ul>
		</div>
		<div class="right">
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:'子模块：',
				lists:[
					{
						id:1,
						name:'echarts自适应'
					},{
						id:2,
						name:'echarts双轴拖动'
					}
				]
			};
		}
	}
</script>

<style>
	.home-container {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
	.home-container > div.left {
		width: 300px;
		height: 100%;
		background-color: #a5a5a7;
	}
	div.left > h4 {
		margin-left: 8px;
	}
	div.left > ul {
		list-style: none;
		padding-left: 8px;
		cursor: pointer;
	}
	div.left > ul > li.active {
		color:darkblue;
	}
	.home-container > div.right {
		height: 100%;
		flex: 1;
	}
</style>