<template>
  <li class="list-group-item apples media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailURL" />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailURL() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  }
};
</script>

<style scoped>
.list-group-item {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
.apples {
  background-color: green;
}
</style>
