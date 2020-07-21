<template>
    <a class="profile-item" :href="profile.githubUrl" target="_blank">
        <div class="mask">
			<h3 class="nickname">{{ profile.nickName }}</h3>
			<p class="desc">Capture Time: {{ formatCaptureTime }}</p>
        </div>
		<div class="gif" v-if="profile.hasGif">GIF</div>
        <img v-lazyload="profile.previewImageUrl" :alt="profile.nickName">
    </a>
</template>

<script lang="ts">
export default {
    props: {
        profile: Object
	},
	computed: {
		formatCaptureTime() {
			let date = new Date(this.profile.timestamp);
			return date.toLocaleString()
		}
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

	.gif {
		position: absolute;
		right: 8px;
		top: 8px;
		padding: 4px;
		font-size: 12px;
		color: #fff;
		background-color: rgba(0, 0, 0, .4);
		border-radius: 4px;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 5px rgba(0,0,0,0.02);

		.mask {
			opacity: 1;
		}
	}

	.mask {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100px;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) -10%, #FFFFFF 50%);
		opacity: 0;
		transition: all .2s linear;
		padding-left: 26px;

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