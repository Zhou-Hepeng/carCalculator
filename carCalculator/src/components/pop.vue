<template>
  <div class="success">
    <div class="content">
      <span class="icon"></span>
      <p>提交成功</p>
      <p>我们将及时联系您</p>
      <div class="confirm" @click="confirm">确定</div>
    </div>
  </div>
</template>

<script>
import router from '../router'
  export default {
    methods:{
      confirm(){
        router.push('/')
      }
    }
  }
</script>

<style lang="less">
.success{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  text-align: center;
  background-color:rgba(0,0,0,0.40);
  &.hide{
    display: none;
  }
  .content{
    position:absolute;
    top:50%;
    left:50%;
    width:280px;
    height:230px;
    margin-left:-140px;
    margin-top:-115px;
    background-color:#fff;
    &:before{
      content:'\6210';
      display: block;
      margin-top:30px;
      margin-bottom:20px;
      color:#54C50D;
      font-size:60px;
      font-family: 'calculator';
    }
    p{
      color:#333;
      line-height:24px;
    }
    .confirm{
      position:relative;
      height: 52px;
      font-size:18px;
      line-height: 52px;
      margin-top:20px;
      &:before{
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
      }
    }
  }
}
</style>
