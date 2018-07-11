<template>
	<div class="detail-container">
		<h4 class="title">
			Mac下使用命令行启动Sublime
		</h4>
		<div class="dc__content">
			<span>方法：</span>
			<p>
				1.默认Sublime Text的安装目录为:
				/Applications/Sublime\ Text.app/
			</p>
			<p>
				2.在安装目录找到启动文件，位于：
				/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
			</p>
			<p>
				3.使用软连接将其放到/usr/local/bin/subl
			</p>
			<p>
				4.在任何地方都可以愉快的使用subl启动Sublime Text
			</p>
			<p>
				P.S. <br/>
				subl 文件名 可以打开文件<br/>
				subl 文件夹 可以打开文件夹
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