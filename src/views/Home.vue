<template>
  <div id="container" class="clearfix" v-bind:style="styles">
    <div id="viewer" v-bind:style="viewerStyle">
      <Viewer></Viewer>
    </div>
    <div id="thumbnail" v-bind:style="thumbnailStyle">
      <Thumbnail v-bind:align="isThumbnailColumnORRow"></Thumbnail>
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
        '--thumb-size': this.thumbnailSize
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
