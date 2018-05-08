<template>
	<div class="footer-container">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'by sunshine'
			};
		}
	}
</script>

<style scoped>
	.footer-container {
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		font-style: italic;
	}
</style>