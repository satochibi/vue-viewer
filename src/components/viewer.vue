<template>
  <div
    id="overlay"
    v-on:keydown.left="goLeft()"
    v-on:keydown.right="goRight()"
    v-on:keydown.up="goPrev()"
    v-on:keydown.down="goNext()"
    tabindex="0"
  >
    <div id="contents">
      <div id="photoarea">
        <div class="navigation" id="nav-close">
          <button v-on:click="close()">X</button>
        </div>
        <div class="navigation" id="nav-left">
          <button v-on:click="goLeft()" v-bind:disabled="!isGoLeftBtnClickable">
            ←
          </button>
        </div>
        <div class="navigation" id="nav-right">
          <button
            v-on:click="goRight()"
            v-bind:disabled="!isGoRightBtnClickable"
          >
            →
          </button>
        </div>
        <img v-bind:src="getCurrentImage.src" v-bind:alt="getCurrentImage.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'viewer',
  data() {
    return {
      isLeftOpening: this.initIsLeftOpening
    }
  },
  props: {
    initIsLeftOpening: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isGoLeftBtnClickable: function() {
      if (this.isLeftOpening) {
        if (this.getIndex === 0) {
          return false
        }
      } else {
        if (this.getIndex === this.imagesCount - 1) {
          return false
        }
      }
      return true
    },
    isGoRightBtnClickable: function() {
      if (this.isLeftOpening) {
        if (this.getIndex === this.imagesCount - 1) {
          return false
        }
      } else {
        if (this.getIndex === 0) {
          return false
        }
      }
      return true
    },
    ...mapGetters(['getIndex', 'getImagesAll', 'imagesCount', 'getCurrentImage', 'getIsThumbOpen', 'isIndexWithInRange'])
  },
  methods: {
    goRight: function() {
      if (this.isLeftOpening) {
        this.goNext()
      } else {
        this.goPrev()
      }
    },
    goLeft: function() {
      if (this.isLeftOpening) {
        this.goPrev()
      } else {
        this.goNext()
      }
    },
    close: function() {
      this.$emit('close')
    },
    goNext() {
      if (this.isIndexWithInRange(this.getIndex + 1)) {
        this.changeIndex(this.getIndex + 1)
        this.$router.push('/' + this.getIndex, () => {})
      }
    },
    goPrev() {
      if (this.isIndexWithInRange(this.getIndex - 1)) {
        this.changeIndex(this.getIndex - 1)
        this.$router.push('/' + this.getIndex, () => {})
      }
    },
    ...mapActions(['changeIndex'])
  }
}
</script>

<style scoped>
div#overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

div#contents {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  background: transparent;
  /* 後で消す */
  background: white;
}

div#photoarea {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div#photoarea img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.navigation {
  position: absolute;
}

button {
  display: block;
}

#nav-close {
  right: 0;
  top: 0;
}

#nav-left {
  left: 0;
  top: 50%;
}
#nav-right {
  right: 0;
  top: 50%;
}
</style>
