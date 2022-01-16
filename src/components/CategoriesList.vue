<template>
	<div>
		<div class="container">
			<img src="../assets/images/astronaut.svg" alt="Astronaut" />
			<h1>Perguntas frequentes</h1>
			<p>Escolha a categoria desejada</p>
		</div>
		<div>
			<button v-for="category in categories" :key="category.name" @click="goToCategory(category.name)">
				<img :src="category.icon" :alt="category.icon" />
				<span>{{ category.name }}</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: this.$store.getters.$categories,
		}
	},
	methods: {
		goToCategory(category) {
			this.$store.dispatch('setCurrentCategory', category)
		},
	},
}
</script>

<style scoped>
.container {
	padding: 0 32px;
}

p {
	margin-bottom: 24px;
}

button {
	height: 56px;
	width: 100%;

	text-align: left;

	padding: 0 32px;
}

button > img {
	height: 24px;
}

button > span {
	vertical-align: super;

	font-family: Lato;

	margin-left: 16px;
}
</style>