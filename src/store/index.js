import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isThumbOpen: true,
    index: 0,
    images: [
      {
        name: '1ページ目',
        src: 'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-000.jpg',
        download: 'ダウンロード1',
        print: 'プリント1',
        thumbnail:
          'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-000.jpg'
      },
      {
        name: '2ページ目',
        src: 'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-001.jpg',
        download: 'ダウンロード2',
        print: 'プリント2',
        thumbnail:
          'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-001.jpg'
      },
      {
        name: '3ページ目',
        src: 'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-002.jpg',
        download: 'ダウンロード3',
        print: 'プリント3',
        thumbnail:
          'http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-002.jpg'
      }
    ]
  },
  getters: {
    imagesCount(state) {
      return state.images.length
    },
    getIndex(state) {
      return state.index
    },
    getImagesAll(state) {
      return state.images
    },
    getCurrentImage(state) {
      return state.images[state.index]
    },
    getIsThumbOpen(state) {
      return state.isThumbOpen
    },
    isIndexWithInRange: (state) => (index) => {
      return (index >= 0 && index < state.images.length)
    },
    isIndexAfterTheFirstOfTheRange: (state) => (index) => {
      return (index >= 0)
    },
    isIndexBeforeTheLastOfTheRange: (state) => (index) => {
      return (index < state.images.length)
    }
  },
  mutations: {
    changeIndex(state, payload) {
      if (payload >= 0 && payload < state.images.length) {
        state.index = payload
      } else {
        if (!(payload >= 0)) {
          state.index = 0
        } else if (!(payload < state.images.length)) {
          state.index = state.images.length - 1
        }
        throw new Error('アクセスした先がページの範囲を超えています。')
      }
    }
  },
  actions: {
    changeIndex({ commit }, payload) {
      commit('changeIndex', payload)
    }
  },
  modules: {
  }
})
