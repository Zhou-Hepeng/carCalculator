<template>
	<div class="bankModel" @click="skipInfo" :data-isSkip="isLoan">
		<div class="insurance">
			<figure><img :src="imgSrc" alt=""></figure>
			<figcaption>{{bankName}}</figcaption>
			<span>{{bankType}}</span>
		</div>
		<ul v-if="isLoan">
			<li>
				<span>65995</span>
				<var>首付</var>
			</li>
			<li>
				<span>7800</span>
				<var>月供</var>
			</li>
			<li>
				<span>1470000</span>
				<var>总成本</var>
			</li>
		</ul>
	</div>
</template>

<script>
import router from '../router'
export default {
	props:['imgSrc','bankName','bankType','downPayment','monthPayment','sumCost','isLoan'],
	methods:{
		skipInfo(){
			if(this.$el.dataset['isskip']){
				router.push('/loanInfo')
			}else{
					router.push('/insuranceInfo')
			}
		}
	}
}
</script>

<style lang="less">
.bankList{
	&.notInfo{
		.bankModel{
      margin:0;
			&:last-of-type{
				.insurance:after{
					display: none;
				}
			}
    }
	}
}
.bankModel{
	margin-top: 10px;
	padding-left: 15px;
	background: #fff;
	overflow: hidden;
	&:first-of-type{
		margin-top: 0;

	}
	.insurance{
		position: relative;
		height: 50px;
		line-height: 50px;
		padding: 0 15px 0 34px;
		overflow: hidden;
		&:after{
			content: " ";
			position: absolute;
			left: 0;
			bottom:0;
			width: 100%;
			height: 1px;
			border-top: 1px solid #e5e5e5;
			color: #e5e5e5;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(.5);
			transform: scaleY(.5);
		}
		figure{
			position: absolute;
			top: 13px;
			left: 0;
			width: 24px;
			height: 24px;line-height: 24px;
			img{
				max-width: 100%;
				vertical-align: middle;
				border-radius: 50%;
			}
		}
		figcaption{
			display: inline-block;
			font-size: 16px;
			color: #333;
		}
		span{
			float: right;
			font-size: 14px;
			color: #666;
		}
	}
	ul{
		position: relative;
		padding: 13px 15px 10px 0;
		overflow: hidden;
		display: -webkit-box;
		display: -ms-flexbox;
		display:flex;
		li{
			float: left;
			-webkit-box-flex:1;
			-moz-box-flex: 1;
			-ms-flex:1;flex: 1;
			text-align: center;
			span{
				display: block;
				line-height: 18px;
				font-size: 18px;
				color: #333;
				&:after{
					content: "元";
					font-size: 12px;
					color: #666;
					margin-left: 3px;
				}
			}
			var{
				display: block;
				font-size: 12px;
				color: #999;
				line-height: 18px;
				margin-top: 5px;
			}
		}
	}
}
</style>
