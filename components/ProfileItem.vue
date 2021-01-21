<template>
    <a
        class="profile-item"
        :href="profile.githubUrl"
        target="_blank"
        rel="nofollow"
    >
        <div class="mask">
            <h3 class="nickname">{{ profile.nickName }}</h3>
            <p class="desc">Capture Time: {{ formatCaptureTime }}</p>
        </div>
        <div class="gif" v-if="profile.hasGif">GIF</div>
        <img
            src="../assets/card-placeholder.png"
            v-lazyload="profile.previewImageUrl"
            :alt="profile.nickName"
            :style="{ '--image-height': `-${profile.height / 2}px` }"
        />
    </a>
</template>

<script lang="ts">
export default {
    data() {
        return {
            imageHeight: 0,
        }
    },
    props: {
        profile: Object,
    },
    computed: {
        formatCaptureTime() {
            let date = new Date(this.profile.timestamp)
            return date.toLocaleString()
        },
    }
}
</script>

<style lang="less">
:root {
    --profile-card-height: 226px;
}
.profile-item {
    position: relative;
    width: 400px;
    height: var(--profile-card-height);
    margin-bottom: 50px;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    overflow: hidden;
    background-color: #fff;
    transition: all 0.2s linear;
    overflow: hidden;
    cursor: pointer;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        transition: transform 1.5s;
    }

    .gif {
        position: absolute;
        right: 8px;
        top: 8px;
        padding: 4px;
        font-size: 12px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        z-index: 1;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 5px rgba(0, 0, 0, 0.02);

        .mask {
            opacity: 1;
        }

        img {
            --image-height: -271px;
            transform: translateY(
                calc((var(--image-height)) + var(--profile-card-height) - 50px)
            );
        }
    }

    .mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,#ffffff 50%);
        opacity: 0;
        transition: all 0.2s linear;
        padding-left: 26px;
        z-index: 1;

        .nickname {
            font-size: 14px;
            color: #333;
            margin-bottom: 0;
            margin-top: 42px;
        }
        .desc {
            color: #333;
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>
