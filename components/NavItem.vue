<template>
    <a href="javascript:;" class="nav-item" :class="{ active: active }">{{
        title
    }}</a>
</template>

<script lang="ts">
export default {
    name: 'NavItem',
    props: {
        data: {
            type: Object,
        },
        title: {
            type: String,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.nav-item {
    display: inline-block;
    font-size: 14px;
    color: #666;
    padding: 10px 20px;
    margin: 4px 14px;
    border-radius: 4px;
    text-decoration: none;
    background-color: #fdfdfd;
    transition: all 0.2s linear;

    &.active,
    &:hover {
        background-color: #f6f4f4;
        color: #000;
    }
}
</style>
