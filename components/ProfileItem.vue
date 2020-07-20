<template>
    <div class="profile-item">
        <div class="mask">
            <div class="left-area">
                <span class="icon-zoom"></span>
            </div>
            <a class="right-area link-area" :href="profile.githubUrl" target="_blank">
                <span class="icon-link"></span>
            </a>
        </div>
        <img :src="profile.previewImageUrl" :alt="profile.nickName">
    </div>
</template>

<script lang="ts">
export default {
    props: {
        profile: Object
    }
}
</script>

<style lang="less">
.profile-item {
	position: relative;
	width: 400px;
	height: 226px;
	margin-bottom: 50px;
	border-radius: 4px;
	border: 1px solid #EBEBEB;
	overflow: hidden;
	background-color: #fff;
	transition: all .2s linear;
	cursor: pointer;

	img {
		width: 100%;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 5px rgba(0,0,0,0.02);

		.mask {
			opacity: 1;
		}
	}

	.mask {
		display: flex;
		flex-direction: row;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 44px;
		background-color: rgba(0, 0, 0, .3);
		opacity: 0;
		transition: all .2s linear;

		.left-area, .right-area {
			flex: 1;

			&:hover {
				background-color: rgba(255, 255, 255, .1);
			}
		}

		.link-area {
			display: block;
			text-decoration: none;
		}
	}
}
</style>