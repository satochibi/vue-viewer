import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
// ここに使用するアイコンを書く
import { faInfoCircle, faTh, faSearchMinus, faSearchPlus, faExpandArrowsAlt, faUndo, faPrint, faFileImage, faExpand, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(Toasted, { position: 'top-right', duration: 1000, type: 'info' })
Vue.use(VueClipboard)

library.add(faInfoCircle, faTh, faSearchMinus, faSearchPlus, faExpandArrowsAlt, faUndo, faPrint, faFileImage, faExpand, faLink)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
