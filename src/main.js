import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import '@/assets/css/style.css'
import './registerServiceWorker'

import google_auth from '@/config/google_service.js'

// setTimeout(() => {
//   console.log('auth2', auth2)
//   console.log('google_auth', google_auth.getAuthInstance())
// }, 1000);

// Vue.prototype.$auth2 = auth2
// Vue.prototype.$appName = 'My App'

// import GoogleAuth from '@/config/google_oAuth.js'
// const gauthOption = {
//   clientId: '213998058564-d4arh06ckgknnj6m3m0hgkf7hq8k0sqh.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')