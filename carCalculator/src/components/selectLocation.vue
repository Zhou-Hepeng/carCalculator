<template>
	<header class="selectLocation">
		<em>{{title}}</em>
		<span>北京市</span>
	</header>
</template>

<script>
	export default {
		props:['title']
	}
</script>

<style lang="less">
	.selectLocation{
		position: relative;
		height: 45px;
		padding: 0 15px;
		margin-top: 10px;
		line-height: 45px;
		background: #fff;
		overflow: hidden;
		&:before{
			content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
		}
		em{
			float: left;
			font-size: 16px;
			color: #111;
			font-weight: bold;
		}
		span{
			float: right;
			font-size: 16px;
			color: #0083e6;
			&:before{
				display: inline-block;
			    content: "\4F4D";
			    font-family: 'calculator';
			    color: #0083e6;
			    margin-right: 5px;
			    font-size: 14px;
			}
		}
	}
</style>
