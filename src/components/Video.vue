<template>
    <iframe width="100%" :src="url"></iframe>
</template>

<script>

export default {
    props: ['video'],
    computed: {
        url: function() {
            if(!this.video) return;
            const videoId = this.video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;
            return url;
        }
    }
}
</script>

<style scoped>
iframe {
    aspect-ratio: 16/9;
}
</style>