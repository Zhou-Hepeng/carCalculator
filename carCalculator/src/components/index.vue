<template>
  <div class='container'>
    <TopBar></TopBar>
    <div class="title">
      请选择车型或输入价格
    </div>
    <Choose  @setPrice="handlePrice" @sidebarShow="sidebarShow"></Choose>
    <span class="count" :class="active" @click="skip">计算</span>
    <Sidebar :class="sidebarClassName" id="sidebar" @clickSidebar="clickSidebar"></Sidebar>
  </div>
</template>

<script>
  import TopBar from './topBar';
  import Choose from './choose';
  import Sidebar from './sidebar'
  import router from '../router'
  export default {
    name: 'title',
    data () {
      return {
        isSkip:false,
        count:'count',
        price:'',
        active:'',
        sidebarClassName:'sidebar',
      }
    },
    components:{TopBar,Choose,Sidebar},
    methods:{
      //输入价格
      handlePrice(price){
        if(price !== ''){
          this.active = 'active';
          this.isSkip  = true;
        }else{
          this.count = 'count';
          this.isSkip = false
        }
      },
      //显示sidebar
      sidebarShow(){
        this.sidebarClassName = 'sidebar visible';
      },
      clickSidebar(target){
        if(target.tagName == 'ASIDE' || target.classList.contains('close')){
          this.sidebarClassName = 'sidebar'
        }
      },
      //进入sum页
      skip(){
        if(this.isSkip){
          router.push('/sum')
        }
      }
    }
  }


</script>

<style lang="less">
.container{
  .title{
    height: 50px;
    line-height: 50px;
    background: #0083E6;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  .count{
    display: block;
    height: 45px;
    margin:20px 15px;
    text-align: center;
    color:#fff;
    line-height: 45px;
    background-color:rgba(255,102,0,.2);
    border-radius: 5px;
  }
  .count.active{
    background: #FF6600;
    box-shadow: 0 2px 6px 0 rgba(255,102,0,0.80);
    border-radius: 5px;
  }
}
</style>
