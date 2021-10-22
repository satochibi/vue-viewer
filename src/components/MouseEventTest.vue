<template>
  <div class="container"
    v-on:mousedown.prevent="touchstart($event)"
    v-on:mousemove.prevent="touchmove($event)"
    v-on:mouseup.prevent="touchend($event)"
    v-on:mouseleave.prevent="touchend($event)"
  >
    <img
      v-bind:src="img.URL"
      v-bind:style="imgTransformStyle"
      alt="dummyImage"
    />
  </div>
</template>

<script>
export default {
  name: 'mouseEventTest',
  data() {
    return {
      img: {
        URL: 'https://placehold.jp/200x150.png',
        transform: {
          position: {
            x: 0,
            y: 0
          },
          prevPosition: {
            x: 0,
            y: 0
          },
          scale: 1
        }
      },
      mouse: {
        downPosition: {
          x: 0,
          y: 0
        },
        isPress: false
      }
    };
  },
  computed: {
    imgTransformStyle: function() {
      return {
        transform: `translate(${this.img.transform.position.x}px, ${this.img.transform.position.y}px) scale(${this.img.transform.scale})`
      }
    }
  },
  methods: {
    touchstart: function(e) {
      this.img.transform.prevPosition.x = this.img.transform.position.x
      this.img.transform.prevPosition.y = this.img.transform.position.y

      // もし範囲内にマウスカーソルがあったら
      this.mouse.downPosition.x = e.pageX
      this.mouse.downPosition.y = e.pageY
      this.mouse.isPress = true
    },
    touchmove: function(e) {
      this.calcMousePosition(e);
    },
    touchend: function(e) {
      this.calcMousePosition(e);
      this.mouse.isPress = false
    },
    calcMousePosition: function(e) {
      if (this.mouse.isPress) {
        this.img.transform.position.x = e.pageX - this.mouse.downPosition.x + this.img.transform.prevPosition.x
        this.img.transform.position.y = e.pageY - this.mouse.downPosition.y + this.img.transform.prevPosition.y
      }
    }
  },
};
</script>

<style scoped>
div.container {
  border: solid 1px black;
  height: 80vh;
}

img {
  display: block;
}
</style>