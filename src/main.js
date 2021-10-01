import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
// ここに使用するアイコンを書く
import { faInfoCircle, faTh, faSearchMinus, faSearchPlus, faExpandArrowsAlt, faUndo, faPrint, faFileImage, faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInfoCircle, faTh, faSearchMinus, faSearchPlus, faExpandArrowsAlt, faUndo, faPrint, faFileImage, faExpand)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
