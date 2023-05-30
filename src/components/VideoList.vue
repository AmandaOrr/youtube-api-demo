<template>
    <ul>
        <li v-for="video in videos" :key="video.etag">
            <button @click="$emit('switchMainVideo', video)">
                {{video.snippet.title}}
            </button>
        </li>
    </ul>
</template>



<script>
export default {
    name: "VideoList",
    props: ["videos"]
}
</script>