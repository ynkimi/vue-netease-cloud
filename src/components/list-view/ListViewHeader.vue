<template>
    <div class="container">
        <div>
            <button @click="back">
                <svg t="1651026583607" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2069" width="25" height="25">
                    <path
                        d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                        fill="#ffffff" p-id="2070"></path>
                </svg>
            </button>
            <span style="color:#FFFFFF;">歌单</span>
        </div>
        <div>
            <router-link to="/search">
                <svg t="1650613077883" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2161" width="25" height="25">
                    <path
                        d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z"
                        fill="#ffffff" p-id="2162"></path>
                </svg>
            </router-link>
            &nbsp;
            <router-link to="/login">
                <svg t="1650612890748" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2030" width="25" height="25">
                    <path
                        d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                        fill="#ffffff"  p-id="2031"></path>
                    <path
                        d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                        fill="#ffffff"  p-id="2032"></path>
                    <path
                        d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                        fill="#ffffff"  p-id="2033"></path>
                </svg>
            </router-link>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script>
    export default {
        name: "ListViewHeader",
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;

    }

    button {
        border: 0;
        outline: none;
        background-color: transparent;
        vertical-align: center;
    }

    .gap {
        height: 30px;
    }
</style>