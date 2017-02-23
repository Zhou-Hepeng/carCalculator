<template>
  <div class="topbar">
    <a href="javascript:history.back()" class="back">
      回
    </a>
    <h1 v-if="title">{{ title }}</h1>
    <h1 v-else>购车计算器</h1>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    props:['title']
  }
</script>
<style lang="less">
  .topbar{
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color:#f9f9f9;
    &:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
    .back{
      position: absolute;
      top:0;
      left:0;
      width: 40px;
      text-align: center;
      font-family: 'calculator';

    }
    h1{
      font-size: 18px;
      font-weight: 400;
    }
  }
</style>
