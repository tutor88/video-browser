<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
  name: 'VideoList',
  ///v-for will add a listitem for each item of the list
  components: {
    VideoListItem
  },
  ///received from v-bind of app.vue
  props: ['videos'],
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video);
    }
  }
};
</script>

<style scoped></style>
