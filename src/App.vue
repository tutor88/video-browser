<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyC1kQmCPOvC5yzIen3Y-NiJUv6bsNYuers';
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  ///data needs to be a function that returns an object
  //otherwise a component would modify the data info
  data() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    ///problem is returning a proxy?
    onVideoSelect(video) {
      this.selectedVideo = video;
      console.log(video);
    },

    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    }
  }
};
</script>
