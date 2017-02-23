<template>
	<div class="detail">
		<figure><img src="../img/truckInfo.jpg" alt=""></figure>
		<figcaption>一汽解放 J6P重卡 领航版 460马力6X4牵引车</figcaption>
		<span>厂家指导价：<var>352000</var><em>元</em></span>
	</div>
</template>

<script>

</script>

<style lang="less">
	.detail{
		position: relative;
		padding: 15px 15px 15px 125px;
		background: #fff;
		figure{
			position: absolute;
			top: 15px;
			left: 15px;
			width: 100px;
			height: 75px;
		}
		figcaption{
			height: 44px;
			line-height: 22px;
			font-size: 16px;
			color: #333;
			overflow: hidden;
		}
		span{
			display: inline-block;
			font-size: 14px;
			color: #999;
			margin-top: 10px;
			var{
				color: #f60;
				font-size: 16px;
			}
			em{
				font-size: 12px;
				margin-left: 5px;
			}
		}
	}
</style>
