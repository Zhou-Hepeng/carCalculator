<template>
	<div class="sumPrice">
		<div class="price">
			<h4>全款总价（以实际到店为准）</h4>
			<p>411,077</p>
		</div>
		<ul v-if="insuranceStep" class="insurance-stages">
			<li>
				<span>首付</span>
				<em>65,995</em>
			</li>
			<li>
				<span>月供(24个月)</span>
				<em>10,272</em>
			</li>
			<li>
				<span>总利息</span>
				<em>35,995</em>
			</li>
		</ul>
		<NeedFul v-if="!needFul"></NeedFul>
	</div>
</template>

<script>
 import NeedFul from './needful'
	export default {
		data () {
			return {

			}
		},
		props:['insuranceStep','needFul'],
		components:{NeedFul}
	}
</script>

<style lang="less">
	.sumPrice{
		background-image: linear-gradient(0deg, #0059E6 0%, #008DF8 100%);
		overflow: hidden;
		.price{
			padding:20px 0 0 20px;
			h4{
				line-height: 22px;
				font-size: 14px;
				color: #fff;
			}
			p{
				line-height: 60px;
				height:60px;
				color: #fff;
				font-size: 42px;
				letter-spacing: 2px;
				&:after{
					content:'元';
					color: #fff;
					font-size: 14px;
				}
			}
		}
		.insurance-stages{
			padding:0 20px 15px;
			overflow: hidden;
			display: -webkit-box;
			display: -ms-flexbox;
			display:flex;
			justify-content: space-between;
			li{
				float: left;

				span{
					display: inline-block;
					font-size: 12px;
					color: #fff;
					opacity: 0.5;
				}
				em{
					display: inline-block;
					margin-left: 3px;
					font-size: 12px;
					color: #fff;
				}
			}
		}
	}
</style>
