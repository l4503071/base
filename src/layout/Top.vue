<template>
	<div class="top-container">
		<div class="header-container">
			<div v-for="list in lists" class="header-item">
				<router-link :to="{name:list.name}" tag="span" active-class="active">{{list.name}}</router-link>
			</div>
		</div>
		<div class="content-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				lists:[{
					path:'/home',
					name:'home'
				},{
					path:'/other',
					name:'other'
				}]
			};
		}
	}
</script>

<style>
	.top-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.header-container {
		height: 50px;
		background-color: #555;
		display: flex;
	}
	.header-item {
		width: 100px;
		text-align: center;
	}
	.header-item>span {
		color: white;
		line-height: 50px;
	}
	.header-item>span.active {
		color:red;
	}
	.header-item>span:hover {
		cursor: pointer;
	}
	.content-container {
		flex: 1;
	}


</style>