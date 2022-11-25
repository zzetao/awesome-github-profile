<template>
    <div class="main">
        <Header />
        <Content />
        <StarTip />
    </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import StarTip from './components/StarTip.vue'
import { useStoreProvide, useStoreInject } from './hooks/store'

export default {
    name: 'App',
    components: {
        Header,
        Content,
        StarTip,
    },
    setup() {
        useStoreProvide()
        const { fetchCategories } = useStoreInject()

        fetchCategories()

        return {}
    },
}
</script>

<style lang="less">
body {
    background-color: #f9f9f9;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@media screen and (orientation: portrait) and (hover: none) and (pointer: coarse) {
    .main {
        display: grid;
        place-items: center;
    }

    // "Buy me a coffee" button
    #bmc-wbtn {
        width: 100px !important;
        height: 100px !important;
        border-radius: 50% !important;
    }
}
</style>
