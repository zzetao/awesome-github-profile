<template>
	<Loading v-if="loading" />
	<!-- eslint-disable vue/valid-template-root -->
	<section class="content">
    <ProfileItem
        v-for="profile in profileList"
        :key="profile.githubUrl"
        :profile="profile"
    />
    <div class="no-results" v-if="profileList.length == 0 && !loading">
      No results found
    </div>

	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStoreInject } from '../hooks/store'
import Loading from './Loading.vue'
import ProfileItem from './ProfileItem.vue'

export default defineComponent({
	components: {
		Loading,
		ProfileItem
	},
	setup() {
		const { profileList, loading } = useStoreInject()

		return { profileList, loading }
	}
})
</script>

<style lang="less" scoped>
.content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 850px;
	margin: 0 auto;
	padding: 60px 0;
}
.no-results {
  font-size: 16px;
  color: #999;
  text-align: center;
  padding: 40px 0;
  width: 100%;
  text-transform: uppercase;
}
</style>