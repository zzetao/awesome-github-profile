<template>
  <div class="main">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import { useStoreProvide, useStoreInject } from './hooks/store'

export default {
  name: 'App',
  components: {
    Header,
    Content
  },
  setup() {
    useStoreProvide()
    const { fetchCategories } = useStoreInject()

    fetchCategories()

    return {}
  }
}
</script>

<style lang="less">
  body {
    background-color: #F9F9F9;
  }
</style>