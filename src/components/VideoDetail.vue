<template>
  <div class="col-md-8" v-if="video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        style="width:865px; height:400px;"
        :src="videoURL"
      />
    </div>

    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
  <div class="col-md-8" v-else>
    <img
      src="http://www.vetcentercity.com/wp-content/uploads/2015/09/happy-cat-1024.jpg"
    />
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: ['video'],
  computed: {
    videoURL() {
      const videoID = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoID}`;
    }
  }
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
