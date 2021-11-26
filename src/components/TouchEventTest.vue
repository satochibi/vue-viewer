<template>
  <div v-bind:style="boxStyle">
    <v-touch class="main"
      tag="div"
      v-on:tap="onTap"
      v-on:swipeup="onSwipeTop"
      v-on:swiperight="onSwipeRight"
      v-on:swipedown="onSwipeBottom"
      v-on:swipeleft="onSwipeLeft"
      v-on:rotatestart="onRotateStart"
      v-on:rotatemove="onRotateMove"
      v-on:rotateend="onRotateEnd">
      <div class="box">{{test}}</div>
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'TouchEventTest',
  data() {
    return {
      test: 'test',
      box: {
        index: 0,
        height: 100,
        width: 100,
        rotation: 0,
        rotationOffset: 0,
        scale: 1,
        scaleOffset: 1,
        backgroundColor: [
          '#ff7f7f',
          '#ff7fbf',
          '#ff7fff',
          '#bf7fff',
          '#7f7fff',
          '#7fbfff',
          '#7fffff',
          '#7fffbf',
          '#7fff7f',
          '#bfff7f',
          '#ffff7f',
          '#ffbf7f'
        ]
      },
      touchStart: {
        rotation: 0,
        scale: 1
      }
    }
  },
  computed: {
    boxStyle() {
      return {
        '--box-height': this.box.height + 'px',
        '--box-width': this.box.width + 'px',
        '--box-scale': this.box.scale,
        '--box-rotation': this.box.rotation + 'deg',
        '--box-bgcolor': this.box.backgroundColor[this.box.index]
      }
    }
  },
  methods: {
    nextIndex() {
      this.box.index += 1
      this.box.index %= this.box.backgroundColor.length
    },
    prevIndex() {
      this.box.index -= 1
      this.box.index += this.box.backgroundColor.length
      this.box.index %= this.box.backgroundColor.length
    },
    onTap($event) {
      this.test = 'tapped'
      console.log($event)
    },
    onSwipeTop($event) {
      this.test = '↑ swiped'
      console.log($event)
    },
    onSwipeRight($event) {
      this.test = '→ swiped'
      this.nextIndex()
      console.log($event)
    },
    onSwipeBottom($event) {
      this.test = '↓ swiped'
      console.log($event)
    },
    onSwipeLeft($event) {
      this.test = '← swiped'
      this.prevIndex()
      console.log($event)
    },
    onRotateStart($event) {
      this.test = 'rotate start\n'
      this.touchStart.rotation = $event.rotation
      // this.touchStart.scale = $event.scale
      console.log($event)
    },
    onRotateMove($event) {
      this.test = 'rotate move\n'
      const deltaRotation = $event.rotation - this.touchStart.rotation
      this.box.rotation = deltaRotation + this.box.rotationOffset
      this.box.scale = $event.scale * this.box.scaleOffset
      console.log($event)
    },
    onRotateEnd($event) {
      this.test = 'rotate end\n'
      this.box.rotationOffset = this.box.rotation
      this.box.scale = $event.scale * this.box.scaleOffset
      this.box.scaleOffset = this.box.scale
      console.log($event)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>

<style scoped>
div.main {
  width: 100vw;
  height: 100vh;
  background: #444;
  color: white;
}

div.box {
  position: absolute;
  width: var(--box-width);
  height: var(--box-height);
  top: calc(50% - var(--box-width)/2);
  left: calc(50% - var(--box-height)/2);
  transform: scale(var(--box-scale)) rotate(var(--box-rotation));
  background: var(--box-bgcolor);
  text-shadow: 1px 2px 3px #000;
}
</style>
