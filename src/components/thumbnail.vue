<template>
  <ul v-bind:class="alignClass">
    <li v-for="(image, htmlIndex) in getImagesAll" v-bind:key="htmlIndex">
      <div v-on:click="onclick(htmlIndex)">
        <img
          v-bind:src="image.thumbnail"
          v-bind:alt="'サムネイル' + (htmlIndex + 1) + 'ページ目'"
          v-bind:current="getIndex == htmlIndex"
        />
        <span>{{ htmlIndex }}ページ</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'thumbnail',
  props: {
    align: {
      type: String,
      default: 'column'
    }
  },
  data() {
    return {
      alignClass: this.align
    }
  },
  computed: {
    ...mapGetters(['getIndex', 'getImagesAll'])
  },
  methods: {
    onclick: function(clickedIndex) {
      this.changeIndex(clickedIndex)
    },
    ...mapActions(['changeIndex'])
  }
}
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
