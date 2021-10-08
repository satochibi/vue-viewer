<template>
  <div id="container" class="clearfix" v-bind:style="styles">
    <div id="toolbar">
      <h1>子規選句稿「なじみ集」</h1>
      <hr />
      <div id="tooltip">
        <button class="icon">
          <font-awesome-icon icon="info-circle" />
        </button>
        <button class="icon" v-on:click="thumbnailToggle()">
          <font-awesome-icon icon="th" />
        </button>
        <div id="page">
          <label>
            Page: <input type="number" min="0" v-bind:max="this.imagesCount-1" v-bind:value="this.getIndex" v-on:input="onPageChange($event, $event.target.value)" />/{{this.imagesCount}}
          </label>
        </div>
        <div id="zoom">
          <button class="icon">
            <font-awesome-icon icon="search-minus" />
          </button>
          <label>
            100%
          </label>
          <button class="icon">
            <font-awesome-icon icon="search-plus" />
          </button>
        </div>
        <button class="icon">
          <font-awesome-icon icon="expand-arrows-alt" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="undo" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="print" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="file-image" />
        </button>
        <button class="icon" v-on:click="clipBoardCopy()">
          <font-awesome-icon icon="link" />
        </button>
        <button class="icon" v-on:click="fullScreenToggle()">
          <font-awesome-icon icon="expand" />
        </button>
      </div>
    </div>
    <div id="normalview">
      <div id="viewer" v-bind:style="viewerStyle">
        <Viewer v-bind:initIsLeftOpening="false" v-bind:initIsFullScreen="isFullScreen"></Viewer>
      </div>
      <div id="thumbnail" v-bind:style="thumbnailStyle">
        <Thumbnail v-bind:align="isThumbnailColumnORRow"></Thumbnail>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue'
import Viewer from '@/components/Viewer.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Thumbnail,
    Viewer
  },
  props: {
    initIndex: {
      type: Number,
      default: 0
    },
    initToolbarSize: {
      type: String,
      default: '80px'
    },
    initThumbnailAlign: {
      type: String,
      default: 'left'
    },
    initThumbnailSize: {
      type: String,
      default: '100px'
    },
    initThubmnailOpen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isThumbnailOpen: this.initThubmnailOpen,
      isThumbnailColumnORRow: 'column',
      isFullScreen: false,
      thumbnailStyle: {},
      viewerStyle: {}
    }
  },
  created: function() {
    this.onPageChange(null, this.initIndex)

    switch (this.initThumbnailAlign) {
      case 'left':
        this.thumbnailStyle = { float: 'left' }
        this.viewerStyle = { float: 'right' }
        this.isThumbnailColumnORRow = 'column'
        break
      case 'right':
        this.thumbnailStyle = { float: 'right' }
        this.viewerStyle = { float: 'left' }
        this.isThumbnailColumnORRow = 'column'
        break
      case 'bottom':
        this.isThumbnailColumnORRow = 'row'
        break
      default:
        throw new Error('thumbnailAlignプロパティが不正です。')
    }
  },
  computed: {
    styles() {
      return {
        '--thumb-size': this.thumbnailSize,
        '--toolbar-size': this.initToolbarSize
      }
    },
    thumbnailSize: function() {
      return this.isThumbnailOpen ? this.initThumbnailSize : '0px'
    },
    ...mapGetters(['imagesCount', 'getIndex'])
  },
  methods: {
    thumbnailToggle: function() {
      // サムネイルをトグルさせる
      if (this.isFullScreen) {
        this.isFullScreen = false
        document.exitFullscreen()
      }
      this.isThumbnailOpen = !this.isThumbnailOpen
    },
    fullScreenToggle: function() {
      this.isFullScreen = !this.isFullScreen

      this.isThumbnailOpen = false

      if (this.isFullScreen) {
        document.body.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    },
    clipBoardCopy: function() {
      const that = this
      this.$copyText(location.href).then(function(e) {
        that.$toasted.show('クリップボードにURLをコピーしました!')
      }, function(e) {
        that.$toasted.show('エラーが発生しました')
      })
    },
    onPageChange: function(event, index) {
      if (!index) {
        return
      }
      try {
        const indexNum = parseInt(index, 10)
        this.changeIndex(indexNum)
        this.$router.push('/' + this.getIndex, () => {})
      } catch (error) {
        alert(error)
        if (event) {
          event.target.value = ''
        }
        this.$router.push('/' + this.getIndex, () => {})
      }
    },
    ...mapActions(['changeIndex'])
  }
}
</script>

<style scoped>
#container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.clearfix::after{
  content: "";
  display: block;
  clear: both;
}

#toolbar {
  width: 100%;
  height: var(--toolbar-size);
  margin: 0;
  padding: 0;
  background: white;
}

#toolbar hr{
  margin: 2px 0;
  padding: 0;
}

#tooltip {
  display: flex;
  justify-content: center;
  overflow-x: scroll;
}

#tooltip button.icon{
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 24px;
  width: 48px;
  height: 42px;
}

#toolbar h1{
  padding: 0;
  margin: 0;
  font-size: 20px;
  text-align: center;
}

#normalview {
  width: 100%;
  height: calc(100% - var(--toolbar-size));
  margin: 0;
  padding: 0;
}

#thumbnail{
  width: var(--thumb-size);
  height: 100%;
  overflow: scroll;
}

#viewer{
  width: calc(100% - var(--thumb-size));
  height: 100%;
}

#page {
  font-size: 27px;
}

#page input {
  width: 3em;
  font-size: 27px;
}
</style>
