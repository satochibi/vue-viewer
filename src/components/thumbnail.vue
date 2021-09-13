<template>
  <ul v-bind:class="alignClass">
    <li v-for="(image, htmlIndex) in images" v-bind:key="htmlIndex">
      <div v-on:click="onclick(htmlIndex)">
        <img
          v-bind:src="image.thumbnail"
          v-bind:alt="'サムネイル' + (htmlIndex + 1) + 'ページ目'"
          v-bind:current="index == htmlIndex"
        />
        <span>{{ htmlIndex }}ページ</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "thumbnail",
  props: {
    align: {
      type: String,
      default: "column"
    }
  },
  data() {
    return {
      alignClass: this.align,
      index: 0,
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
  methods: {
    onclick: function (clickedIndex) {
      this.index = clickedIndex;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
  list-style: none;
  padding: 0;
  margin: 10px auto;
}

ul.row {
  flex-direction: row;
}

ul.column {
  flex-direction: column;
}

ul li {
  font-size: 14px;
  display: block;
}

img {
  display: block;
  margin: 0 auto;
}

img[current] {
  border: 3px solid pink;
}

span {
  display: block;
  text-align: center;
}
</style>