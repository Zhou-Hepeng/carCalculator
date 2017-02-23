<template>
	<div class="necessary">
		<header class='type-title'>
			<h4>必要花费</h4>
			<span class="price">31,835</span>
			<em>元</em>
		</header>
		<ul>
			<li v-if="!insurance">
				<span>购置税</span>
				<em>30,085</em>
			</li>
			<li @click="sidebarShow">
				<span>交强险</span>
				<em>1,850</em>
				<var>营运 10吨以上</var>
				<i>转</i>
			</li>
			<li v-if="!insurance">
				<span>车船使用税</span>
				<em>576</em>
			</li>
			<li v-if="!insurance">
				<span>上牌费用</span>
				<em>4,480</em>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		methods:{
			sidebarShow(){
				this.$emit('sidebarShow',"necessaryCost")
			}
		},
		props:['insurance']
	}
</script>

<style lang="less">
	//公共小标题
	.type-title{
		position: relative;
		height: 45px;
		padding-left:15px;
		line-height: 45px;
		text-align: right;
		h4{
			float:left;
			color:#111;
			font-weight: 600;
		}
		.price{
			color:#F60;
			font-size:18px;
		}
		em{
			float:right;
			width:33px;
			color:#999;
			font-size:12px;
			text-align: center;
		}
		&:after{
			content: " ";
			position: absolute;
			left: 0;
			top: 100%;
			width: 100%;
			height: 1px;
			border-top: 1px solid #e5e5e5;
			color: #e5e5e5;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(.5);
			transform: scaleY(.5);
		}
	}
	.necessary{
		margin-top: 10px;
		background: #fff;
		overflow: hidden;
		ul{
			padding-left: 15px;
			overflow: hidden;
			li{
				position: relative;
				height: 50px;
				line-height: 50px;
				color: #333;
				padding:0 30px 0 5px;
				&:before{
					content: "";
	        position: absolute;
	        left: 0;
	        top: 100%;
	        width: 100%;
	        height: 1px;
	        border-top: 1px solid #e5e5e5;
	        color: #e5e5e5;
	        -webkit-transform-origin: 0 0;
	        transform-origin: 0 0;
	        -webkit-transform: scaleY(.5);
	        transform: scaleY(.5);
				}
				span{
					float: left;
				}
				em{
					float: right;
				}
				var{
					float: right;
					font-size: 14px;
					color: #999;
					margin-right: 10px;
				}
				i{
			    position: absolute;
			    right: 0;
			    top: 0;
			    width: 33px;
			    height: 49px;
			    line-height: 55px;
			    color: #999;
			    text-align: center;
			    font-family: 'calculator';
				}
			}
		}
	}
</style>
