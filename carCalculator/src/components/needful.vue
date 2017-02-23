<template>
	<ul class="needful">
		<li>
			<span>必要花费</span>
			<var>31,835</var>
		</li>
		<li>
			<span>商业保险</span>
			<var>31,835</var>
		</li>
	</ul>
</template>

<script>
 export default {
	 data () {
			return {

		 	}
	 }
 }
</script>

<style lang="less">
	.needful{
		overflow: hidden;
		background: #026fee;
		display: -webkit-box;
		display: -ms-flexbox;
		display:flex;
		li{
			position: relative;
			float: left;
			height: 43px;
			line-height: 55px;
			-webkit-box-flex:1;
			-moz-box-flex: 1;
			-ms-flex:1;flex: 1;
			text-align: center;
			padding: 6px 0;
			color: #fff;
			&:last-child:before{
				position: absolute;
				top: 0;
				left: 0;
				content: "";
				width: 1px;
				height: 55px;
				background: rgba(255,255,255,0.10);
			}
			&:after{
				position: absolute;
				right: 25px;
				top: 0;
				content: "\8f6c";
				font-family: 'calculator';
				color: #fff;
				font-size: 16px;
			}
			span{
				display: block;
				line-height: 22px;
				font-size: 14px;
				opacity: 0.6;
			}
			var{
				display: block;
				line-height: 22px;
				font-size: 16px;
			}
		}
	}
</style>
