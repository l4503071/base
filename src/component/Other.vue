<template>
	<div class="other-container">
		<p v-text="msg"></p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'其他页面，待补充...'
			};
		}
	}
</script>

<style>
	.other-container {
		height: 100%;
		display: flex;
    	align-items: center;
	    justify-content: space-around;
	}
	.other-container>p{
		font-size:30px;
	}
</style>