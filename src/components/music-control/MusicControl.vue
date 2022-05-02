<template>
    <div>
        <img :src="playlist[0].al.picUrl" alt="" width="50" height="50" style="float: left">
        <h4 style="float: left">{{playlist[0].name}}</h4>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[0].id}.mp3`"></audio>
        <button @click="play">
            <!--                    暂停-->
            <svg v-if="paused" t="1651470824515" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2740" width="20" height="20">
                <path
                        d="M514 912c-219.9 0-398.9-178.9-398.9-398.9 0-219.9 178.9-398.8 398.9-398.8 219.9 0 398.8 178.9 398.8 398.8 0 220-178.9 398.9-398.8 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9s302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z"
                        fill="#BDD2EF" p-id="2741"></path>
                <path
                        d="M419.6 704.5c-32.5 0-58.8-26.3-58.8-58.8V381.4c0-32.5 26.3-58.8 58.8-58.8s58.8 26.3 58.8 58.8v264.4c0 32.4-26.3 58.7-58.8 58.7zM608.4 704.5c-32.5 0-58.8-26.3-58.8-58.8V381.4c0-32.5 26.3-58.8 58.8-58.8s58.8 26.3 58.8 58.8v264.4c-0.1 32.4-26.4 58.7-58.8 58.7z"
                        fill="#2867CE" p-id="2742"></path>
            </svg>
            <!--                    播放-->
            <svg v-else t="1650961035105" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4246" width="20" height="20">
                <path
                        d="M837.818182 93.090909c51.2 0 93.090909 41.890909 93.090909 93.090909v651.636364c0 51.2-41.890909 93.090909-93.090909 93.090909H186.181818c-51.2 0-93.090909-41.890909-93.090909-93.090909V186.181818c0-51.2 41.890909-93.090909 93.090909-93.090909h651.636364m0-93.090909H186.181818C83.781818 0 0 83.781818 0 186.181818v651.636364c0 102.4 83.781818 186.181818 186.181818 186.181818h651.636364c102.4 0 186.181818-83.781818 186.181818-186.181818V186.181818c0-102.4-83.781818-186.181818-186.181818-186.181818z"
                        fill="#1D2633" p-id="4247"></path>
                <path
                        d="M460.8 721.454545l230.4-162.90909c32.581818-23.272727 32.581818-72.145455 0-95.418182l-230.4-162.909091c-39.563636-27.927273-93.090909 0-93.090909 48.872727v325.818182c0 46.545455 53.527273 74.472727 93.090909 46.545454z"
                        fill="#176AFD" p-id="4248"></path>
            </svg>
        </button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "MusicControl",
        computed: {
            ...mapState(['playlist'])
            //监听到vuex里面数据发生的变化，则驱动UI界面
        },
        data() {
            return {
                paused: false
            }
        },
        methods: {
            play() {
                if (this.paused) this.$refs.audio.pause()
                else this.$refs.audio.play()
                this.paused = !this.paused
            }
        }
    }
</script>

<style scoped>
    div > button {
        border: 0;
        background: transparent;
    }
</style>