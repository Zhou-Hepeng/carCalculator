<template lang="html">
  <div class="container">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <SumPrice insuranceStep="true"></SumPrice>
    <Choose v-on:sidebarShow="sidebarShow"></Choose>
    <loanCount></loanCount>
    <Necessary v-on:sidebarShow="sidebarShow"></Necessary>
    <SafeSum text="商业保险" v-on:sidebarShow='sidebarShow'></SafeSum>
    <Sidebar class='sidebar' :class="{visible:fold,'sidebar-tab':necessaryCost}" v-on:clickSidebar='clickSidebar' :necessaryCost="necessaryCost" :glassType="glassType" :compensate="compensate"></Sidebar>
    <BankList title="贷款推荐" info="true"></BankList>
    <Total name="贷款总价"></Total>
  </div>
</template>

<script>
import TopBar from './topBar'
import NavBar from './navBar'
import SumPrice from './sumPrice'
import Choose from './choose'
import loanCount from './loanCount'
import Sidebar from './sidebar'
import Necessary from './necessary'
import SafeSum from './safeSum'
import SelectLocation from './selectLocation'
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
  components:{TopBar,NavBar,SumPrice,Choose,loanCount,Necessary,SafeSum,Sidebar,BankList,Total}
}
</script>

<style lang="css">

</style>
