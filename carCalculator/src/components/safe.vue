<template>
    <div class="safe-item" :class="{more:more,checked:isChecked}"  @click="checkedToggle">
      <em v-if="radio" class="icon"></em>
      <div class="type">{{type}}</div>
      <div v-if="extra" class="extra">{{extra}}</div>
      <div class="money">{{money}}</div>
    </div>
</template>

<script>

  export default{
    props:['radio','more','type','money','extra','options']
    ,
    data(){
      return {
        isChecked: true
      }
    },
    methods:{
      checkedToggle(event){
        if(this.$el.classList.contains('more') && this.$el.classList.contains('checked') && !event.target.classList.contains('icon')){
          this.$emit('checkedToggle',this.options)
        }

        if(event.target.classList.contains('icon')){
          this.isChecked = !this.isChecked;
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .safe{
    margin-top:10px;
    background-color: #fff;
    .safe-item{
      display: flex;
      position: relative;
      height:50px;
      line-height: 50px;
      padding: 0 31px 0 5px;
      margin-left: 15px;
      &.more{
        &:before{
          content: "\8F6C";
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
      &.checked{
        .icon{
          &:before{
            color: #0082F4;
          }
        }
      }
      &:after{
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
      .icon{
        width: 28px;
        height: 50px;
        &:before{
          position: relative;
          top: 2px;
          font-size: 18px;
          content: "\9009";
          color: #D4D4D4;
          font-family: "calculator";
        }
      }
      .type{
        flex: 1;
        display: inline-blcok;
        font-size: 16px;
        color: #333333;
      }
      .extra{
        margin-right: 10px;
        font-size: 14px;
        color: #999;
      }
      .money{
        display: inline-block;
        font-size: 16px;
      }
      .check-more{
        position: absolute;
        right: 10px;
        width: 16px;
        height: 16px;
        &:before{
          position: relative;
          top: 2px;
          font-size: 14px;
          color: #999;
          content: "\8f6c";
          font-family: "calculator";
        }
      }
    }
  }
</style>
