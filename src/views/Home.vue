<template>
  <div id="container" class="clearfix" v-bind:style="styles">
    <div id="toolbar">
      <h1>子規選句稿「なじみ集」</h1>
      <hr />
      <div id="tooltip">
        <button class="icon">
          <font-awesome-icon icon="info-circle" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="th" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="search-minus" />
        </button>
        <button class="icon">
          <font-awesome-icon icon="search-plus" />
        </button>
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
        <button class="icon">
          <font-awesome-icon icon="expand" />
        </button>
      </div>
    </div>
    <div id="normalview">
      <div id="viewer" v-bind:style="viewerStyle">
        <Viewer></Viewer>
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

import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    Thumbnail,
    Viewer
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    toolbarSize: {
      type: String,
      default: '80px'
    },
    thumbnailAlign: {
      type: String,
      default: 'left'
    },
    thumbnailSize: {
      type: String,
      default: '100px'
    }
  },
  data() {
    return {
      isThumbnailColumnORRow: 'column',
      thumbnailStyle: {},
      viewerStyle: {}
    }
  },
  created: function() {
    try {
      this.changeIndex(this.index)
    } catch (error) {
      alert(error)
    }

    switch (this.thumbnailAlign) {
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
        '--toolbar-size': this.toolbarSize
      }
    }
  },
  methods: {
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
</style>
