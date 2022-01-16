<template>
	<div>
		<header>
			<button @click="$store.dispatch('setView', 'categories')">
				<img src="../assets/images/arrow-left.svg" alt="Back" />
			</button>
			<h1>{{ category.name }}</h1>
			<p>Selecione uma pergunta</p>
			<img :src="category.icon" :alt="category.icon" />
		</header>
		<div>
			<button
				v-for="(question, index) in category.questions"
				:key="question"
				@click="$store.dispatch('setCurrentQuestion', index)"
			>
				<p>
					{{ question }}
				</p>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		category() {
			return this.$store.getters.$category
		},
	},
}
</script>

<style scoped>
header {
	width: 100%;

	display: grid;
	grid-template-columns: 1fr 6fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:
		'back title icon'
		'back subtitle icon';

	margin-bottom: 32px;
	padding: 0 16px;
}

header > button {
	grid-area: back;

	padding: 0 12px;
}

header > h1 {
	grid-area: title;
}

header > h3 {
	grid-area: subtitle;
}

header > img {
	grid-area: icon;
}

div > button {
	height: 56px;
	width: 100%;

	text-align: left;

	padding: 0 16px;
}
</style>