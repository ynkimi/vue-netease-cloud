<template>
    <router-view/>
    <MusicControl/>
</template>
<script>
    import MusicControl from "@/components/music-control/MusicControl";
    export default {
        name:'App',
        components:{MusicControl}
    }
</script>

<style lang="less">

</style>
