<template>
    <nav>
        <router-link to="/login">
            <svg t="1650612890748" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2030" width="20" height="20">
                <path
                    d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                    p-id="2031"></path>
                <path
                    d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                    p-id="2032"></path>
                <path
                    d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                    p-id="2033"></path>
            </svg>
        </router-link>
        <div>
            <router-link to="/profile">我的</router-link>
            <router-link to="/">发现</router-link>
            <router-link to="/yun-cun">云村</router-link>
            <router-link to="/video">视频</router-link>
        </div>
        <router-link to="/search">
            <svg t="1650613077883" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2161" width="20" height="20">
                <path
                    d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z"
                    fill="#3D3D3D" p-id="2162"></path>
            </svg>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "HeaderCom",

    }
</script>

<style scoped lang="less">
    nav {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;

        div {
            width: 200px;
            display: flex;
            justify-content: space-between;

            a {
                color: #000000;
                text-decoration: none;
            }

            .router-link-active {
                font-weight: 700;
            }
        }

    }
</style>