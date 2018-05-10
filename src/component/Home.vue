<template>
	<div class="home-container">
		<div class="left">
			<h4 v-text="title" v-once></h4>
			<ul>
				<router-link v-for="list in lists" :to="{name:'detail'+list.id}" :key="list.id" active-class="active" tag="li">{{list.name}}</router-link>
			</ul>
		</div>
		<div class="right">
			<router-view name="default"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:'文章列表：',
				lists:[
					{
						id:1,
						name:'Sublime Text 3.0安装SublimeServer'
					},{
						id:2,
						name:'echarts图表大小自适应'
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
	div.left > ul > li {
		margin-bottom: 8px;
	}
	div.left > ul > li:before {
		content: "\A0";
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: black;
		display: inline-block;
		line-height: 8px;
		margin-right: 8px;
	}
	div.left > ul > li.active {
		color:darkblue;
	}
	.home-container > div.right {
		height: 100%;
		flex: 1;
	}
</style>