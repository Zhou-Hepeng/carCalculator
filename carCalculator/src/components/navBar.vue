<template>
	<div class="navbar">
		<router-link to="/sum">全款计算</router-link>
		<router-link to="/loan">贷款计算</router-link>
		<router-link to="/insurance">保险计算</router-link>
	</div>
</template>

<script>

</script>

<style lang="less">
	.navbar{
		position: relative;
		height: 44px;
		line-height: 44px;
		background-color: #F9F9F9;
		display: -webkit-box;
		display: -ms-flexbox;
		display:flex;
		&:before{
			content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
		}
		a{
			font-size: 15px;
			-webkit-box-flex:1;
			-moz-box-flex: 1;
			-ms-flex:1;flex: 1;
			overflow: hidden;
			text-align: center;
			&.router-link-active{
				font-size: 18px;
				color: #1571e5;
			}
		}
	}
</style>
