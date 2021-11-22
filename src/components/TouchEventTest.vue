<template>
  <div>
    <v-touch class="main"
      tag="div"
      v-on:tap="onTap"
      v-on:swipeup="onSwipeTop"
      v-on:swiperight="onSwipeRight"
      v-on:swipedown="onSwipeBottom"
      v-on:swipeleft="onSwipeLeft"
      v-on:pinchin="onPinchIn"
      v-on:pinchout="onPinchOut">
      {{test}}
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'TouchEventTest',
  data() {
    return {
      test: 'test'
    }
  },
  methods: {
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
      console.log($event)
    },
    onSwipeBottom($event) {
      this.test = '↓ swiped'
      console.log($event)
    },
    onSwipeLeft($event) {
      this.test = '← swiped'
      console.log($event)
    },
    onPinchIn($event) {
      this.test = 'ピンチイン'
      console.log($event)
    },
    onPinchOut($event) {
      this.test = 'ピンチアウト'
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
div.main{
  width: 100vw;
  height: 100vh;
  background: #444;
  color: white;
}
</style>
