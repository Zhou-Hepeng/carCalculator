<template lang="html">
  <ul class="choose">
    <li>
      <span class="optionName">车型</span>
      <input type="hidden">
      <span class="model" @click="sidebarShow">请选择</span>
    </li>
    <li class="price">
      <span class="optionName">价格</span>
      <label>
        <input v-model="price" type="number" @input="setPrice" placeholder="请输入">
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        price:''
      }
    },
    methods: {
    　setPrice () {
    　　　this.$emit('setPrice',this.price)
      },
      sidebarShow(){
        this.$emit('sidebarShow')
      }
    }
  }
</script>

<style lang="less">
.choose{
  padding-left: 15px;
  overflow: hidden;
  background: #fff;
  li{
    position: relative;
    height: 50px;
    line-height: 49px;
    font-size: 16px;
    color: #333;
    padding-left:47px;
    text-align: right;
    overflow: hidden;
    &:after{
      content: "";
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
    &:last-of-type{
      &:after{
        display: none;
      }
    }
    .optionName{
      position: absolute;
      top: 0;
      left: 0;
    }
    .model{
      display: block;
      padding-right:33px;
      color: #999;
      &:before{
        content: "\8f6c";
        position:absolute;
        right:0;
        top:0;
        width: 33px;
        height:49px;
        line-height: 55px;
        color:#999;
        text-align: center;
        font-family: 'calculator'
      }
    }
  }
  .price{
    label{
      display: block;
      padding-right: 33px;
      &:before{
        content: "\8f6c";
        position:absolute;
        right:0;
        top:0;
        width: 33px;
        height:49px;
        line-height: 55px;
        color:#999;
        text-align: center;
        font-family: 'calculator'
      }
    }
    input{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      text-align: right;
      outline: none;
    }
    em{
      position: absolute;
      right: 12px;
      top: 0;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
