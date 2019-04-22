// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import FooterVue from "@/components/FooterVue"
Vue.component("FooterVue",FooterVue);

//全局引入字体图标
import "@/assets/fonts/iconfont.css"

Vue.filter("priceFormater",(val)=>{
  if(typeof val !=='number'){
    return '数据无效'
  }
  
  return '￥' + val.toFixed(2)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

