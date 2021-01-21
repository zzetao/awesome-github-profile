<template>
    <section class="search">
      <input type="text" name="q" class="input" @input.lazy="setSearch($event.target.value)" placeholder="Search Nickname or Username...">
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
    padding-bottom: 30px;
    input {
        display: block;
        width: 400px;
        margin: 0px auto;
        height: 30px;
        padding: 6px 20px;
        border: 1px solid #ebebeb;
        border-radius: 4px;

        &:focus {
            outline: none;
            border-color: #ddd;
        }
    }
}
</style>