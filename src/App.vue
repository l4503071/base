<template>
	<div class="container">
		<div class="top">
			<my-top></my-top>
		</div>
		<div class="bottom">
			<my-footer></my-footer>
		</div> 
	</div>
</template>

<script>
	import Top from '@/layout/Top';
	import Footer from '@/layout/Footer';
	export default {
		name:'app',
		data(){
			return {
			}
		},
		components:{
			'my-top':Top,
			'my-footer':Footer
		}
	}
</script>

<style scoped>
	.container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.container > div.top {
		flex:1;
	}
	.container > div.bottom {
		height: 50px;
		background-color: #d2d2d2;
	}
</style>