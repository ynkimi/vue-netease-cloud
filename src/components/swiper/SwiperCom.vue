<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    export default {
        name: "SwiperCom",
        data() {
            return {//这个用法不标准，网页上的图片应该来自后端，不应该是前端本地的图片
                imgs: [
                    {pic: require('../../assets/img/swiper1.jpg'), id: 0},
                    {pic: require('../../assets/img/swiper2.jpg'), id: 1},
                    {pic: require('../../assets/img/swiper3.png'), id: 2},
                ]
            }
        },
        created() {
            //通过axios向后端要数据，其中包括swiper中的图片路径，把图片路径修改成this.imgs
        },
        mounted() {
            //以下代码要操作dom
            //create，项目创建后
            //mounted，挂载之后（vue实例挂载到真实dom对象上）
            //当vue实例挂载dom后，在实例中才有真实dom存在

            const mySwiper = new Swiper('.swiper-home', {
                //引号里面可以用id名，class名皆可，只要能找到
                loop: true,
                autoplay: true
            })
        }
    }
</script>

<style scoped>
    .swiper-slide {
        width: 100%
    }
</style>
