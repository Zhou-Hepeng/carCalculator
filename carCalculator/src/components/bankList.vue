<template lang="html">
  <div class="bankList">
    <SelectLocation :title="title"></SelectLocation>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/BOC.png" bankName="招商银行车险通" bankType="无抵押，手续便捷" :isLoan="info"></BankModel>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/CGB.png" bankName="广发银行车易贷" bankType="可挂靠" :isLoan="info"></BankModel>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/SPDB.png" bankName="浦发银行易车贷" bankType="闪电批贷" :isLoan="info"></BankModel>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/BOC.png" bankName="中国银行新车贷" bankType="无抵押，手续便捷" :isLoan="info"></BankModel>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/PSBC.png" bankName="邮政银行车易贷" bankType="可挂靠" :isLoan="info"></BankModel>
    <BankModel imgSrc="http://frontendsvn.360che.com/icon-project/wap/m/detail/ZhpPreview/CCB.png" bankName="建设银行易车贷" bankType="闪电批货" :isLoan="info"></BankModel>
  </div>
</template>

<script>
import BankModel from './bankModel'
import SelectLocation from './selectLocation'
export default {
  props:['title','info'],
  components:{SelectLocation,BankModel}
}
</script>

<style lang="less">
</style>
