<template>
	<footer @click="submitApply">
		提交申请
	</footer>
</template>

<script>
export default {
	methods:{
		submitApply(){
			this.$emit('submitApply')
		}
	}
}
</script>

<style lang="less">
	footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 48px;
		line-height: 48px;
		background: #f60;
		text-align: center;
		font-size: 16px;
		color: #fff;
	}
</style>
