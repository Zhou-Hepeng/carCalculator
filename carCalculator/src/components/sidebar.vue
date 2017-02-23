<template lang="html">
  <aside @click="clickSidebar" >
    <NecessaryCost v-if="necessaryCost"></NecessaryCost>
    <GlassType v-if="glassType"></GlassType>
    <Compensate v-if="compensate"></Compensate>
    <SelectBrand v-else></SelectBrand>
  </aside>
</template>

<script>
import SelectBrand from './selectBrand'
import NecessaryCost from './necessaryCost'
import GlassType from './glassType'
import Compensate from './compensate'
export default {
  methods:{
    //点击sidebar
    clickSidebar(event){
      this.$emit('clickSidebar',event.target)
    },
  },
  props:['necessaryCost','compensate','glassType'],
  components:{SelectBrand,NecessaryCost,Compensate,GlassType}
}
</script>

<style lang="less">
</style>
