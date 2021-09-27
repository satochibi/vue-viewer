<template>
  <div id="container" class="clearfix">
    <div id="thumbnail">
      <Thumbnail align="column"></Thumbnail>
    </div>
    <div id="viewer">
      <Viewer></Viewer>
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
    }
  },
  created: function() {
    try {
      this.changeIndex(this.index)
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    ...mapActions(['changeIndex'])
  }
}
</script>

<style scoped>
#container{
  --thumb-width: 100px;
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
  width: var(--thumb-width);
  height: 100%;
  float: left;
  overflow: scroll;
}

#viewer{
  width: calc(100% - var(--thumb-width));
  height: 100%;
  float:right;
}
</style>
