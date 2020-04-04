import * as Axios from 'axios'


const instans = Axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',

})

export const searchAPI = {
    search(value, maxResults = 12) {
        return instans.get(`search?part=snippet&q=${value}&key=AIzaSyCM2IdPlSq_H0t_7068H1EvofvSk94DKRc&maxResults=${maxResults}`).then(response => response.data)

    }

}