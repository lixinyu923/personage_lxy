// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 定义全局组件
import FooterVue from '@/components/FooterVue'
Vue.component("FooterVue", FooterVue)
//全局引入font字体图标
import '@/assets/font/iconfont.css'

// 配置全局过滤器
Vue.filter('priceFormater', (val) => {
  
  if (typeof val !== 'number'){
    return '数据无效'
  }

  return "￥" + val.toFixed(2)
})
// 定义总线
Vue.prototype.$bus= new Vue()
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})