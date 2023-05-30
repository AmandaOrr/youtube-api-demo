<script>
import SearchBar from './components/SearchBar.vue';
import Video from './components/Video.vue';
import VideoList from './components/VideoList.vue';
import youTubeSearchAPI from './youTubeSearchAPI';

export default {
  components: {
    SearchBar: SearchBar,
    Video: Video,
    VideoList: VideoList
  },
  data: function() {
    return {
      searchTerm: "hello",
      videos: [],
      video: null
    }
  },
  created: function(){
    this.fetchVideoAPI();
  },
  methods: {
      fetchVideoAPI: function() {
        
        youTubeSearchAPI({
          key: "",
          searchTerm: this.searchTerm,
        }, (results) => {
          this.videos = results;
          this.video = results[0];
        });
      },
      showMainVideo: function(video) {
        this.video = video;
      }
  },
  watch: {
    searchTerm: function() {
      this.fetchVideoAPI();
    }
  }
}
</script>

<template>
  <strong>Make sure to update the API Key in file src/App.vue with your own key, line 27</strong>
  <header>
    <SearchBar v-model="searchTerm" />
  </header>
  <div class="page">
    <div><Video :video="video" /></div>
    <aside><VideoList :videos="videos" @switchMainVideo="showMainVideo" /></aside>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page {
  display: grid;
  grid-template-columns: 1fr minmax(300px, 15%);
}
sidebar {
  background-color: #ccc;
}
strong {
  color: red;
}
</style>
