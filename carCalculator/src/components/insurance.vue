<template lang="html">
  <div class="container">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <SumPrice needFul="true"></SumPrice>
    <Choose v-on:sidebarShow="sidebarShow"></Choose>
    <Necessary v-on:sidebarShow="sidebarShow" :insurance="true"></Necessary>
    <SafeSum text="商业保险" v-on:sidebarShow='sidebarShow'></SafeSum>
    <Sidebar class='sidebar' :class="{visible:fold,'sidebar-tab':necessaryCost}" v-on:clickSidebar='clickSidebar' :necessaryCost="necessaryCost" :glassType="glassType" :compensate="compensate"></Sidebar>
    <BankList title="保险推荐" class="notInfo"></BankList>
    <Total name="车险总价"></Total>
  </div>
</template>

<script>
import TopBar from './topBar'
import NavBar from './navBar'
import SumPrice from './sumPrice'
import Choose from './choose'
import Necessary from './necessary'
import SafeSum from './safeSum'
import Sidebar from './sidebar'
import BankList from './bankList'
import Total from './total'

export default {
  data () {
    return {
      fold:false,
      necessaryCost:false,
      glassType:false,
      compensate:false
    }
  },
  methods:{
    // 显示sidebar
    sidebarShow(options){
      this.fold = true;
      //是否是交强险
      if(options == 'necessaryCost'){
        this.necessaryCost = true;
      }else{
        this.necessaryCost = false;
      }
      //选择赔偿金额
      if(options == 'compensate'){
        this.compensate = true;
      }else{
        this.compensate = false;
      }
      //选择玻璃种类
      if(options == 'glassType'){
        this.glassType = true;
      }else{
        this.glassType = false;
      }

    },
    //点击sidebar
    clickSidebar(target){
      if(target.tagName == 'ASIDE' || target.classList.contains('close')){
        this.fold = false;
      }
    }
  },
  components:{TopBar,NavBar,SumPrice,Choose,Necessary,SafeSum,Sidebar,BankList,Total}
}
</script>

<style lang="less">
.type-title{
  margin-top: 10px;
  background-color:#fff;
  ul{
    li{
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #333;
      padding: 0 30px 0 5px;
      span{
        float:left;
      }
    }
  }
}
</style>
