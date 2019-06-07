import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

const token = localStorage.getItem('token')
const API_URL = 'http://localhost:3000'

export default Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
