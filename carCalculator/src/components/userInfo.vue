<template>
	<div class="userInfo">
		<div class="name">
			<span>姓名</span>
			<input type="text" :placeholder="namePlaceholder" :value="userName" name="userName" @input="writeInfo" @focus="gotFocus">
		</div>
		<div class="phone">
			<span>手机</span>
			<input type="text" :placeholder="phonePlaceholder" :value="userPhone" name="userPhone" @input="writeInfo" @focus="gotFocus">
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			writeInfo(event){
				this.$emit('writeInfo',event.target)
			},
			gotFocus(event){
				this.$emit('gotFocus',event.target)
			}
		},
		props:['userName','userPhone','namePlaceholder','phonePlaceholder']
	}
</script>

<style lang="less">
	.userInfo{
		position: relative;
		background: #fff;
		margin-top: 10px;
		padding-left: 15px;
		&.errorName{
			.name{
				::-webkit-input-placeholder{
					color:red;
				}
			}
		}
		&.errorPhone{
			.phone{
				::-webkit-input-placeholder{
					color:red;
				}
			}
		}
		.name,.phone{
			position: relative;
			padding-left: 47px;
			height: 50px;
			line-height: 50px;
			span{
				position: absolute;
				left: 0;
				top: 0;
				font-size: 16px;
				color: #333;
			}
			input{
				width: 100%;
				padding: 13px 0;
				font-size: 16px;
				outline: none;
			}
		}
		.name{
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
		}
	}
</style>
