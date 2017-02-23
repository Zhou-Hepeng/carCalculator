<template lang="html">
  <div class="glassType">
    <header class="header-gobal">
			 <span class='close'>关</span>
			玻璃种类
		</header>
    <ul>
      <li>国产玻璃</li>
      <li class="selected">进口玻璃</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.sidebar{
  .glassType{
    height: 100%;
    ul{
      height: 100%;
      background-color: #F7F9FA;
      li{
        position: relative;
        height: 50px;
        padding-left:15px;
        color: #333;
        line-height: 50px;
        background-color:#fff;
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
        &:last-of-type{
          &:after{
            display: none;
          }
        }
        &.selected{
          color:#0083e6;
          &:before{
            position: absolute;
            right: 16px;
            top: 0;
            content: "\5BF9";
            font-family: 'calculator';
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
