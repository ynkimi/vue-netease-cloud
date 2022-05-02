<template>
    <div class="bg">
        <ListViewHeader></ListViewHeader>
        <ListViewMiddle :data="data"></ListViewMiddle>
        <img :src=data.playList.coverImgUrl alt="">
    </div>

</template>

<script>
    import {getPlayListDetail} from "@/api"
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    import ListViewMiddle from "@/components/list-view/ListViewMiddle"

    export default {
        name: "ListView",
        components: { ListViewHeader, ListViewMiddle},

        data() {
            return {
                data: {
                    playList: {
                        creator:{
                            avatarUrl:'',
                            nickname:''
                        },
                        tracks:{}
                    },
                },
                musicsObj: {},
            }
        },
        created() {
            //通过id向后台要数据
            this.getPlayListMusic()
        },
        methods: {
            async getPlayListMusic() {
                //使用this.$route.query来接受前组件传来的参数
                //根据参数id向后台查找对应的歌单里的歌曲信息
                const res = await getPlayListDetail(this.$route.query.id)
                this.data.playList = res.data.playlist
                //更新自己的data
            },
        }
    }
</script>

<style scoped>
    .bg {
        width: 100%;
        height: auto;
    }

    .bg > img {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 400px;
        filter: blur(4px);
    }

</style>