<template>
    <h2>发现好歌单
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i of musicList">
                <img :src="i.picUrl" alt="">
                <span>{{i.playCount}}</span>
                <p>{{i.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMusicList} from "@/api";
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    export default {
        name: "MusicList",
        data() {
            return {
                musicList: []
            }
        },
        mounted() {
            this.getMusicListData()
            const mySwiper = new Swiper('.swiper-music-list', {
                slidesPerView: 3,
                spaceBetween: 20,
            })
        },
        methods: {
            async getMusicListData() {
                const res = await getMusicList(10)//使用封装好的API去调取后台的歌单
                this.musicList = res.data.result
                console.log(this.musicList)
            }
        },


    }
</script>

<style scoped lang="less">
    button {
        float: right;
        width: 80px;
        height: 30px;
        background: #ffffff;
        border-radius: 15px;
        border: 1px solid #ebebeb;
    }

    .swiper-slide {
        width: 30vw;
        font-size: 12px;
        text-align: left;

        img {
            width: 100%;
        }

        span {
            position: absolute;
            top: 0;
            right: 10px;
            color: #FFF;
        }

        p {
            margin: 0;
            padding: 0;
        }
    }
</style>