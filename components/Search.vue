<template>
    <section class="search">
      <input type="text" name="q" class="input" @change="setSearch($event.target.value)" placeholder="Search..">
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useStoreInject } from '../hooks/store'

export default defineComponent({
    setup() {
        const {
            loading,
            search,
            setSearch,
        } = useStoreInject()

        return {
            loading,
            search,
            setSearch,
        }
    },
})
</script>

<style lang="less" scoped>
.search {
    background-color: #fdfdfd;
    border-bottom: 1px solid #ebebeb;
    padding: 30px;
    input {
      display: block;
      width: 700px;
      margin: 0px auto;
      height: 30px;
    }
}
</style>