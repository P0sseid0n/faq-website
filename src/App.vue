<template>
	<BoxBase />
</template>

<script>
import BoxBase from './components/BoxBase.vue'
export default {
	name: 'App',
	components: { BoxBase },
}
</script>

<style>
body {
	height: 100vh;
}

#app {
	display: grid;

	align-content: center;

	height: 100%;
	width: 100%;

	background-color: rgb(240, 240, 250);
}

h1 {
	font-size: 20px;
	font-weight: bold;
}

h3 {
	font-size: 16px;
	font-weight: normal;
}

p {
	font-size: 13px;
	font-weight: normal;
}

button {
	background: transparent;
	color: white;

	border: none;
	outline: none;

	cursor: pointer;

	transition: background 0.3s;
}

button:hover {
	background: rgba(255, 255, 255, 0.05);
}
</style>
