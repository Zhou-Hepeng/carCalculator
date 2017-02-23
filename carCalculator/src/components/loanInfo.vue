<template lang="html">
  <div class="container">
    <TopBar title="贷款产品详情"></TopBar>
    <TruckInfo></TruckInfo>
    <BankModel class="productInfo" isLoan="true" imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/BOC.png" bankName="招商银行车险通" bankType="闪电赔付"></BankModel>
    <UserInfo :class="{errorName:errorName,'errorPhone':errorPhone}" v-on:writeInfo="writeInfo" v-on:gotFocus="gotFocus" :userName="userName" :userPhone="userPhone" :namePlaceholder="namePlaceholder" :phonePlaceholder="phonePlaceholder"></UserInfo>
    <Apply v-on:submitApply="submitApply"></Apply>
    <Pop :class="popHide"></Pop>
  </div>
</template>

<script>
import router from '../router'
import TopBar from './topBar'
import TruckInfo from'./truckInfo'
import BankModel from './bankModel'
import UserInfo from './userInfo'
import Apply from './apply'
import Pop from './pop'
export default {
  data () {
    return {
      userName:'',
      userPhone:'',
      namePlaceholder:'请输入姓名',
      phonePlaceholder:'请输入手机号',
      errorName:'',
      errorPhone:'',
      popHide:'hide',
    }
  },
  methods:{
    //输入姓名和电话
    writeInfo(target){
      if(target.name == 'userName'){
        this.userName = target.value;
      }else{
        this.userPhone = target.value;
      }
    },
    //获取焦点
    gotFocus(target){
      if(target.name == 'userName' && this.errorName == 'errorName'){
        this.errorName = '';
        this.namePlaceholder = '请输入姓名';
        this.userName = '';
      }
      if(target.name == 'userPhone' && this.errorPhone == 'errorPhone'){
        this.errorPhone = '';
        this.phonePlaceholder = '请输入手机号';
        this.userPhone = '';
      }
    },
    //提交申请
    submitApply(){
      var name = /^[\u4e00-\u9fa5]+$/;
      var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if(this.userName == '' || !name.test(this.userName) || this.userName.length > 6){
        this.namePlaceholder = '请填写您的真实姓名（1-6位汉字）';
        this.errorName = 'errorName';
        this.userName = '';
        return
      }
      if(this.userPhone == '' || !phone.test(this.userPhone)){
        this.phonePlaceholder = '请填写您的11位手机号码';
        this.errorPhone = 'errorPhone';
        this.userPhone = '';
        return
      }
      console.log(this.userName)
      console.log(this.userPhone)
      this.popHide = '';
    }
  },
  components:{TopBar,TruckInfo,BankModel,UserInfo,Apply,Pop}
}
</script>

<style lang="less">
.productInfo{
  ul{
    &:after{
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
  }
}
</style>
