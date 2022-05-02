import {createStore} from 'vuex'

export default createStore({
    state: {
        playlist: [
            {
                name: '彩券',
                id: 534542079,
                al: {
                    id: 96680121,
                    name: '彩券',
                    pic: 109951165386012146,
                    picUrl: 'http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg',
                    pic_str: '109951165386012146'
                }
            }
        ]
    },
    getters: {},
    mutations: {
        setPlaylist(state,newMusic) {
            //接收收到的新歌曲，替换掉原来的数据的第0条
            state.playlist[0]=newMusic
        }
    },
    actions: {},
    modules: {}
})
