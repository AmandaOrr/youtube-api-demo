import axios from "axios"

const URL = "https://www.googleapis.com/youtube/v3/search";

function youTubeSearchAPI(options, callback) {
    const params = {
        key: options.key,
        q: options.searchTerm,
        part: 'snippet',
        type: 'video'
    }

    axios.get(URL, {params: params})
        .then(function(response){
            callback(response.data.items);
        })
}

export default youTubeSearchAPI;