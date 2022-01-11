import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';//本地
Vue.use(Vant);

import { Notify } from 'vant';
Vue.prototype.Notify = Notify

import mixin from '@/libs/mixin';
Vue.mixin(mixin)

import axios from '@/libs/axios'
Vue.prototype.$api = axios

Vue.config.productionTip = false

import tHeader from "@/components/t-header"
Vue.component('tHeader', tHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
