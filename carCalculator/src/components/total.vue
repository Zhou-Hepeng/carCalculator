<template>
	<div class="total">
		{{name}}
		<span>411,077</span>
	</div>
</template>

<script>
	export default {
		props:['name']
	}
</script>

<style lang="less">
	.total{
		height: 48px;
		line-height: 48px;
		background: rgba(250,251,252,0.95);
		box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.10);
		font-size: 16px;
		color: #333;
		padding: 0 15px;
		overflow: hidden;
		margin-top: 20px;
		span{
			float: right;
			font-size: 20px;
			color: #f60;
			&:after{
				content:'元';
				font-size: 14px;
				margin-left: 5px;
			}
		}
	}
</style>
