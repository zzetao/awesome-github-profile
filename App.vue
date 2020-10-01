<template>
    <div class="main">
        <Header />
        <Search />
        <Content />
        <StarTip />
    </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Content from './components/Content.vue'
import StarTip from './components/StarTip.vue'
import { useStoreProvide, useStoreInject } from './hooks/store'

export default {
    name: 'App',
    components: {
        Header,
        Search,
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
</style>
