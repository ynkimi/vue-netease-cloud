<template>
    <div class="content">
        <img :src="data.playList.coverImgUrl" alt="">
        <div class="contentRight">
            <span class="name">{{data.playList.name}}</span>
            <br>
            <div class="nick">
                <img :src="data.playList.creator.avatarUrl" alt="">
                <span class="nickname">{{data.playList.creator.nickname}}</span>
            </div>
            <span class="message">{{data.playList.description}}</span>
        </div>
    </div>
    <ul class="contentList">
        <li>
            <svg t="1650953374156" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="24186" width="35" height="35">
                <path
                        d="M337.92 880.64a20.48 20.48 0 0 1-14.4384-34.9184l102.4-102.4A20.48 20.48 0 0 1 440.32 737.28h389.12a82.5344 82.5344 0 0 0 81.92-81.92V266.752a82.5344 82.5344 0 0 0-81.92-81.92H195.072a82.5344 82.5344 0 0 0-81.92 82.432V655.36a82.5344 82.5344 0 0 0 82.432 81.92H296.96a20.48 20.48 0 0 1 0 40.96h-101.888A123.5968 123.5968 0 0 1 71.68 655.36V266.752A123.5968 123.5968 0 0 1 195.072 143.36H829.44a123.5968 123.5968 0 0 1 122.88 123.392V655.36a123.5968 123.5968 0 0 1-122.88 122.88H448.8192l-96.4608 96.3584A20.48 20.48 0 0 1 337.92 880.64z"
                        p-id="24187" fill="#ffffff"></path>
                <path
                        d="M317.44 512a40.96 40.96 0 1 1 40.96-40.96 40.96 40.96 0 0 1-40.96 40.96z m0-40.96zM512 512a40.96 40.96 0 1 1 40.96-40.96 40.96 40.96 0 0 1-40.96 40.96z m0-40.96zM706.56 512a40.96 40.96 0 1 1 40.96-40.96 40.96 40.96 0 0 1-40.96 40.96z m0-40.96z"
                        p-id="24188" fill="#ffffff"></path>
            </svg>
            <br>
            <span>{{data.playList.commentCount}}</span>
        </li>
        <li>
            <svg t="1650953442154" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="30168" width="35" height="35">
                <path
                        d="M280 664c-83.8 0-152-68.2-152-152s68.2-152 152-152 152 68.2 152 152-68.2 152-152 152z m0-240c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zM754 412c-78.3 0-142-63.7-142-142s63.7-142 142-142 142 63.7 142 142-63.7 142-142 142z m0-220c-43 0-78 35-78 78s35 78 78 78 78-35 78-78-35-78-78-78zM754 896c-78.3 0-142-63.7-142-142s63.7-142 142-142 142 63.7 142 142-63.7 142-142 142z m0-220c-43 0-78 35-78 78s35 78 78 78 78-35 78-78-35-78-78-78z"
                        p-id="30169" fill="#ffffff"></path>
                <path
                        d="M389.8 488.2c-11.6 0-22.9-6.4-28.5-17.5-8-15.7-1.8-35 13.9-43.1L638.8 293c15.7-8 35-1.8 43.1 13.9 8 15.7 1.8 35-13.9 43.1L404.3 484.7c-4.6 2.4-9.6 3.5-14.5 3.5zM370.317 594.798l29.005-57.05 274.64 139.631-29.005 57.05z"
                        p-id="30170" fill="#ffffff"></path>
            </svg>
            <br>
            <span>{{data.playList.shareCount}}</span>
        </li>
        <li>
            <svg t="1650953515080" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="39596" width="35" height="35">
                <path
                        d="M512 741.877551c-11.493878 0-20.897959-9.404082-20.897959-20.897959V303.020408c0-11.493878 9.404082-20.897959 20.897959-20.897959s20.897959 9.404082 20.897959 20.897959v417.959184c0 11.493878-9.404082 20.897959-20.897959 20.897959z"
                        p-id="39597" fill="#ffffff"></path>
                <path
                        d="M512 741.877551c-5.22449 0-10.44898-2.089796-14.628571-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779592l169.273469-169.273469c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779592l-169.27347 169.273469c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                        p-id="39598" fill="#ffffff"></path>
                <path
                        d="M512 741.877551c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-169.27347-169.273469c-8.359184-8.359184-8.359184-21.420408 0-29.779592 8.359184-8.359184 21.420408-8.359184 29.779592 0l169.273469 169.273469c8.359184 8.359184 8.359184 21.420408 0 29.779592-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                        p-id="39599" fill="#ffffff"></path>
                <path
                        d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
                        p-id="39600" fill="#ffffff"></path>
            </svg>
            <br>
            <span>下载</span>
        </li>
        <li>
            <svg t="1650953662454" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="40552" width="35" height="35">
                <path
                        d="M430.8992 492.1344a32.2048 32.2048 0 0 1-23.8592-10.5472L261.12 321.5872a32.256 32.256 0 0 1 47.6672-43.4688l125.4912 137.5744 341.504-275.1488a32.256 32.256 0 0 1 40.448 50.2272L451.1232 484.9664a32.1536 32.1536 0 0 1-20.224 7.168zM802.5088 912.7424H378.0096a33.536 33.536 0 1 1 0-67.072h424.4992a43.9296 43.9296 0 0 0 43.8784-43.8784V475.3408a33.536 33.536 0 1 1 67.072 0v326.4512a111.104 111.104 0 0 1-110.9504 110.9504z"
                        p-id="40553" fill="#ffffff"></path>
                <path
                        d="M615.424 725.6576H232.192a111.104 111.104 0 0 1-110.9504-110.9504V231.4752a111.104 111.104 0 0 1 110.9504-110.9504H501.76a33.536 33.536 0 0 1 0 67.1232H232.192a43.9296 43.9296 0 0 0-43.8784 43.8784v383.232a43.9296 43.9296 0 0 0 43.8784 43.8784h383.232a43.9296 43.9296 0 0 0 43.8784-43.8784V475.3408a33.536 33.536 0 0 1 67.1232 0v139.3664a111.104 111.104 0 0 1-111.0016 110.9504z"
                        p-id="40554" fill="#ffffff"></path>
            </svg>
            <br>
            <span>多选</span>
        </li>
    </ul>

    <div class="list">
        <div class="listTop">
            <svg t="1650956232683" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2029" width="30" height="30">
                <path
                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                        p-id="2030" fill="#707070"></path>
                <path
                        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                        p-id="2031" fill="#707070"></path>
            </svg>
            <span>播放全部 <span>共{{data.playList.tracks.length}}首</span></span>
            <button>+收藏({{data.playList.subscribedCount}})</button>
        </div>
        <ul class="musics">
            <li v-for="(i,index) of data.playList.tracks">
                <div class="index">{{index+1}}</div>
                <div class="musicsName">
                    <span style="color: black;font-weight: bold">{{i.name}}</span>
                    <span style="color:lightgrey;">{{i.al.name}}</span>
                </div>
                <div class="svg">
                    <!--                    暂停-->
                    <!--                    点击按钮，把i传给方法-->
                    <button @click="changePlayMusic(i)">
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
                    <svg t="1650961068729" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5053" width="20" height="20">
                        <path
                                d="M66.488889 211.781818h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485 0-27.397172-22.768485-49.648485-50.980202-49.648485H66.488889C38.341818 112.484848 15.508687 134.723232 15.508687 162.133333s22.833131 49.648485 50.980202 49.648485z m891.009293 248.242424H66.488889C38.277172 460.024242 15.508687 482.262626 15.508687 509.672727s22.768485 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.410101-22.923636-49.648485-50.993131-49.648485z m0 351.63798H66.488889c-28.134141 0-50.980202 22.238384-50.980202 49.648485s22.833131 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.397172-22.781414-49.648485-50.993131-49.648485z m0 0"
                                p-id="5054"></path>
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListViewMiddle",
        props: {
            data: {
                type: Object
            }
        },
        data() {
            return {
                paused: false
            }
        },
        methods: {
            changePlayMusic(i) {
                //把i传给vuex
                this.$store.commit('setPlaylist', i)
            }
        }
    }
</script>

<style scoped>

    .contentList {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 0;
        list-style: none;
    }

    .contentList li {
        flex: 1 1 auto;
        margin: 0;
        padding: 0;
        width: 10vw;
        text-align: center;
    }

    .contentList span {
        color: #ffffff;
        font-size: 14px;
    }


    .content {
        width: 80vw;
        margin: 5vh auto;
        position: relative;
    }

    .content > img {
        display: inline-block;
        width: 40vw;
        height: 40vw;
        margin-right: 20px;
    }

    .contentRight {
        display: inline-block;
        width: 40vw;
        height: 40vw;
        position: absolute;
        top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .nick {
        width: 40vw;
        height: 10vw;
        margin-top: 1vh;
    }

    .nick .nickname {
        font-size: 12px;
        color: #ebebeb;
        margin-left: 2vw;
        vertical-align: center;
    }

    .nick img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        float: left;
    }

    .message {
        display: inline-block;
        width: 100%;
        font-size: 12px;
        color: lightcyan;
    }

    .contentRight > .name {
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
    }

    .list {
        background: #ffffff;
        border-radius: 10px 10px 0 0;
        overflow: hidden;
    }


    .listTop {
        width: 100%;
        height: 40px;
        overflow: hidden;
        display: inline-block;
    }

    .listTop svg {
        margin: 5px 0 0 10px;
    }

    .listTop > button {
        width: 30vw;
        height: 40px;
        border: 0;
        background: rgb(247, 73, 37);
        border-radius: 30px;
        color: #ffffff;
        float: right;
    }

    .musics {
        padding: 0;
        list-style: none;
    }

    .musics li {
        height: 50px;
        position: relative;
    }

    .musics .index {
        margin: 1vw;
        padding: 0;
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
    }

    .musics .musicsName {
        position: absolute;
        left: 12vw;
        top: 0;
        display: inline-block;
        margin-top: auto;
    }

    .musics .musicsName > span {
        display: inline-block;
        margin: 0;
        color: #000;
        width: 50vw;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
    }

    .musics .musicsName > span:last-child {
        font-size: 1vh;
    }

    .musics .svg {
        height: 100%;
        position: absolute;
        right: 10vw;
        top: 0;
        display: inline-block;

    }

    .musics .svg > svg {
        margin: 0 0 0 5vw;
        vertical-align: center;
    }

    button {
        border: 0;
        background: transparent;
    }
</style>