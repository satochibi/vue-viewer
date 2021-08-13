<template>
  <ul>
    <li v-for="(image, index) in images" v-bind:key="index">
      <div>
        <img
          v-bind:src="image.thumbnail"
          v-bind:alt="'サムネイル' + (index + 1) + 'ページ目'"
          v-on:click="onclick(index)"
        />
        <span>{{ index }}ページ</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "thumbnail",
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
  methods:{
    onclick: function(clickedIndex){
      this.index = clickedIndex;
      console.log(this.index);
    }
  },
};
</script>

<style scoped>
ul {
  font-size: 0;
  list-style: none;
  padding: 0;
  margin: 10px auto;
}
ul li {
  font-size: 14px;
  display: block;
  padding-bottom: 10px;
}

img{
  display: block;
  margin: 0 auto;
}

span {
  display: block;
  text-align: center;
}

</style>