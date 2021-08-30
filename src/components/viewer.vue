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
        <img v-bind:src="images[index].src" v-bind:alt="images[index].name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewer",
  data() {
    return {
      index: 0,
      isLeftOpening: true,
      images: [
        {
          name: "1ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-000.jpg",
          download: "ダウンロード1",
          print: "プリント1",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-000.jpg",
        },
        {
          name: "2ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-001.jpg",
          download: "ダウンロード2",
          print: "プリント2",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-001.jpg",
        },
        {
          name: "3ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/A-002.jpg",
          download: "ダウンロード3",
          print: "プリント3",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/A_najimishu/thumb/A-002.jpg",
        },
      ],
    };
  },
  computed: {
    isGoLeftBtnClickable: function () {
      if (this.isLeftOpening) {
        if (this.index == 0) {
          return false;
        }
      } else {
        if (this.index == this.images.length - 1) {
          return false;
        }
      }
      return true;
    },
    isGoRightBtnClickable: function () {
      if (this.isLeftOpening) {
        if (this.index == this.images.length - 1) {
          return false;
        }
      } else {
        if (this.index == 0) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    goRight: function () {
      if (this.isLeftOpening) {
        this.goNext();
      } else {
        this.goPrev();
      }
    },
    goLeft: function () {
      if (this.isLeftOpening) {
        this.goPrev();
      } else {
        this.goNext();
      }
    },
    close: function () {
      this.$emit("close");
      //console.log("close");
    },
    goNext() {
      this.index++;
      if (this.index > this.images.length - 1) {
        this.index = this.images.length - 1;
      }
    },
    goPrev() {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
    },
  },
};
</script>


<style scoped>
div#overlay {
  position: absolute;
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