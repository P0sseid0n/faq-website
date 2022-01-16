<template>
	<div>
		<header>
			<button @click="$store.dispatch('setView', 'categories')">
				<img src="../assets/images/arrow-left.svg" alt="Back" />
			</button>
			<h3>{{ question[0] }}</h3>
		</header>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, obcaecati vel suscipit exercitationem, eos
			perspiciatis voluptatibus fugit non cupiditate ad ipsum illum eum a, ipsam in magni facilis animi quidem!
		</p>
	</div>
</template>

<script>
export default {
	computed: {
		question() {
			return this.$store.getters.$question
		},
	},
}
</script>

<style scoped>
header {
	display: grid;
	grid-template-columns: 1fr 8fr;

	margin-bottom: 32px;
	padding: 0 16px;
}

header > button {
	padding: 8px 12px;
}

p {
	padding: 0 16px;
}
</style>