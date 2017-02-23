<template>
  <div class="loanCount">
    <div class="item" @click="tab" >
      <span class="text" >首付比例</span>
      <span class="option checked">30%</span>
      <span class="option">40%</span>
      <span class="option">50%</span>
    </div>
    <div class="item" @click="tab">
      <span class="text">货款年限</span>
      <span class="option checked">1年</span>
      <span class="option">2年</span>
      <span class="option">3年</span>
    </div>
    <div class="item">
      <span class="type">贷款年利率</span>
      <span class="money">6.65%</span>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        money: Number
      }
    },
    methods:{
      tab: function(event){
        if(event.target.classList.contains('checked')) return;

        let currentItem = event.target.parentNode.querySelector('.checked');
        currentItem && currentItem.classList.remove('checked');
        event.target.classList.add('checked');
      }
    },
    components:{
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .loanCount{
    position: relative;
    background: #fff;
    &:before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
    .item{
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: 13px 31px 13px 15px;
      line-height: 24px;
      font-size: 16px;
      letter-spacing: 0;
      overflow: hidden;
      &:after{
        content: "";
        position: absolute;
        left: 15px;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
      &:last-child:after{
        display: none;
      }
      .type{
        flex: 1;
      }
      .option{
        display: inline-block;
        width: 16vw;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #999;
        border: 1px solid #999;
        border-radius: 100px;
        box-sizing: border-box;
        &.checked{
          color: #0078F0;
          border: 1px solid #0078F0;
        }
      }
      .extra{
        margin-right: 10px;
        font-size: 14px;
        color: #999;
      }
      .money{}
      .check-more{
        position: absolute;
        right: 10px;
        width: 16px;
        height: 16px;
        &:before{
          position: relative;
          font-size: 15px;
          color: #999;
          content: "\8f6c";
          font-family: "iconfont";
        }
      }
    }
  }

</style>
