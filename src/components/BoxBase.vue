<template>
	<div id="boxbase">
		<transition
			enter-active-class="animate__animated animate__fadeInRight animate__faster"
			leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
			mode="out-in"
		>
			<CategoriesList v-if="page == 'categories'" />
			<Category v-else-if="page == 'category'" />
			<Question v-else-if="page == 'question'" />
		</transition>
	</div>
</template>

<script>
import CategoriesList from './CategoriesList.vue'
import Category from './Category.vue'
import Question from './Question.vue'

import 'animate.css'

export default {
	components: { CategoriesList, Category, Question },
	computed: {
		page() {
			return this.$store.getters.$page
		},
	},
}
</script>

<style scoped>
#boxbase {
	background: linear-gradient(to bottom, #404451, #26282c);
	border-radius: 16px;

	width: 100%;
	max-width: 320px;

	color: #f5f6f8;

	padding-top: 16px;
	padding-bottom: 24px;
	margin: 0 auto;

	overflow: hidden;
}
</style>