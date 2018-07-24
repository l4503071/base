<template>
	<div class="detail-container">
		<h4 class="title">
			如何使用搬瓦工实现翻墙（Mac版本）
		</h4>
		<div class="dc__content">
			<span>方法：</span>
			<p>
				1. 打开  <a href="https://bwh1.net/" target="__blank">搬瓦工网站</a>
			</p>
			<p>
				2. 点击右上角（Register）个账号
				<br/>PS: 填写正确邮箱，需要使用指定邮箱激活账号
			</p>
			<p>
				3. 激活之后，点击右上角（Client Area）登陆账号
			</p>
			<p>
				4. 点击（Services），选择（Order New Services）
			</p>
			<p>
				5. 选择最便宜的 <span style="color:red;">SPECIAL 10G KVM PROMO V3 - LOS ANGELES - CN2 </span>(中国专线)即可，点击 Order Now，然后按照指示付款即可
				<br/>PS: 输入优惠码 BWH1ZBPVK 即可优惠6%
			</p>
			<p>
				6. 点击（Services），选择（My Services)，点击刚下的订单中的	<button>KiwiVM Control Panel</button>即可进入VPS管理界面
			</p>
			<p>
				7. 如果当前也做左侧菜单最下方没有 Shadowsocks Server 选项，则改变当前页面网址为： https://kiwivm.64clouds.com/main-exec.php?mode=extras_shadowsocks , 点击 Install
			</p>
			<p>
				8. 安装完成之后按照提示下载 Shadowsocks 并配置Chrome代理即可（建议保存该页面，我在Mac操作之后，左侧菜单栏同样没有出现Shadowsocks Server，每次只能通过url进入）
			</p>
			<p>
				9. Mac版本下载：<a href="https://github.com/l4503071/ShadowsocksX/releases" target="__blacnk">https://github.com/l4503071/ShadowsocksX/releases</a>
			</p>
			<p>
				10.Chrome代理配置（插件：Proxy SwitchyOmega），根据需求进行代理，其中：
				<ul>
					<li>Proxy type: SOCKS v5</li>
					<li>Proxy IP (Socks Host): 127.0.0.1</li>
					<li>Port: 1080</li>
				</ul>
			</p>
			<p>
				之后就可以遨游世界了...
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