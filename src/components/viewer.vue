<template>
  <div id="overlay">
    <div id="contents">
      <div id="photoarea">
        <div class="navigation" id="nav-close">
          <button>X</button>
        </div>
        <div class="navigation" id="nav-left">
          <button>←</button>
        </div>
        <div class="navigation" id="nav-right">
          <button>→</button>
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
      images: [
        {
          name: "1ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_001.jpg",
          download: "ダウンロード1",
          print: "プリント1",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/thumb1_001.jpg",
        },
        {
          name: "2ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_002.jpg",
          download: "ダウンロード2",
          print: "プリント2",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/thumb1_002.jpg",
        },
        {
          name: "3ページ目",
          src: "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/1_003.jpg",
          download: "ダウンロード3",
          print: "プリント3",
          thumbnail:
            "http://ehimestream.xsrv.jp/digital_archives/wp-content/themes/digitalarchives/image/najimi/thumb1_003.jpg",
        },
      ],
    };
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