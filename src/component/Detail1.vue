<template>
	<div class="detail-container">
		<h4 class="title">
			Sublime Text 3.0安装SublimeServer
		</h4>
		<div class="content">
			<p>
				第一步：打开Sublime Text 3.0；
			</p>
			<p>
				第二步：按下Ctrl+Shift+P,打开插件安装；
			</p>
			<p>
				第三步：输入SublimeServer,找到该项并选中安装；
			</p>
			<p>
				第四步：安装结束后，在菜单栏中Tools选项卡中可以找到SublimeServer；
			</p>
			<p>
				第五步：查看SublimeServer选项下的Setting，记住端口号（改为9090）；
			</p>
			<p>
				第六步：点击SublimeServer选项下的Start SublimeServer，启动项目；
			</p>
			<p>
				第七步：在浏览器中输入 http://localhost:9090即可。
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
</style>