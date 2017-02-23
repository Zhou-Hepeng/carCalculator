import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Sum from 'components/sum'
import Loan from 'components/loan'
import Insurance from 'components/Insurance'
import LoanInfo from 'components/loanInfo'
import InsuranceInfo from 'components/insuranceInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/sum',
      name:'sum',
      component:Sum
    },
    {
      path:'/loan',
      name:'loan',
      component:Loan
    },
    {
      path:'/insurance',
      name:'insurance',
      component:Insurance
    },
    {
      path:'/loanInfo',
      name:'loanInfo',
      component:LoanInfo
    },
    {
      path:'/insuranceInfo',
      name:'insuranceInfo',
      component:InsuranceInfo
    }
  ]
})
