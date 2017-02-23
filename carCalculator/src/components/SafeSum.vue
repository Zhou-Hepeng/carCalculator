<template lang="html">
  <div class="safe" >
    <header class="type-title">
      <h4>{{text}}</h4>
      <span class="price">10,302</span>
      <em>元</em>
    </header>
    <Safe radio="true" type="第三者责任险" extra="赔付30万" money="2,176" options="compensate"  more="true" v-on:checkedToggle="checkedToggle"></Safe>
    <Safe radio="true" type="车辆损失险" money="7,629"></Safe>
    <Safe radio="true" type="全车抢盗险" money="1,890"></Safe>
    <Safe radio="true" type="玻璃破碎险" extra="进口玻璃" money="634" options="glassType"  more="true" v-on:checkedToggle="checkedToggle"></Safe>
    <Safe radio="true" type="不计免赔特约险" money="528"></Safe>
    <Safe radio="true" type="不计免赔特约险" money="1,959"></Safe>
    <Safe radio="true" type="无故责任险" money="433"></Safe>
    <Safe radio="true" type="车上人员责任险" money="100"></Safe>
  </div>
</template>

<script>
import Safe from'./safe'
export default {
  props:['text','money'],
  methods:{
    checkedToggle(options){
      this.$emit('sidebarShow',options)
    }
  },
  components:{Safe}
}
</script>

<style lang="less">
</style>
