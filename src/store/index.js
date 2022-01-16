import { createStore } from 'vuex'

export default createStore({
	state: {
		view: 'categories',
		question: 0,
		category: '',
		categories: {
			Basecamp: {
				icon: require('../assets/images/rocket.svg'),
				questions: [
					['Basecamp é gratuito?', ''],
					['Posso iniciar o Basecamp?', ''],
					['Basecamp é pra mim?', ''],
					['Oferece certificado?', ''],
					['Como se inscrever no Basecamp?', ''],
					['Não recebi o acesso por e-mail', ''],
				],
			},
			Bootcamp: {
				icon: require('../assets/images/astronaut-helmet.svg'),
				questions: [],
			},
			Cataline: {
				icon: require('../assets/images/student-hat.svg'),
				questions: [],
			},
			Parcerias: {
				icon: require('../assets/images/partnership.svg'),
				questions: [],
			},
		},
	},
	mutations: {
		SET_PAGE(state, newView) {
			state.view = newView
		},
		SET_CATEGORY(state, newCategory) {
			state.category = newCategory
		},
		SET_QUESTION(state, newQuestion) {
			state.question = newQuestion
		},
	},
	actions: {
		setView(context, newView) {
			context.commit('SET_PAGE', String(newView))
		},
		setCurrentCategory(context, newCategory) {
			console.log(newCategory)
			context.commit('SET_CATEGORY', String(newCategory))
			context.commit('SET_PAGE', 'category')
		},
		setCurrentQuestion(context, question) {
			context.commit('SET_QUESTION', Number(question))
			context.commit('SET_PAGE', 'question')
		},
	},
	getters: {
		$page(state) {
			return state.view
		},
		$categories(state) {
			const toReturn = []

			Object.entries(state.categories).forEach(([category, { icon }]) => {
				toReturn.push({
					name: category,
					icon,
				})
			})

			return toReturn
		},
		$category(state) {
			const currentCategory = state.categories[state.category]
			return {
				name: state.category,
				icon: currentCategory.icon,
				questions: currentCategory.questions.map(q => q[0]),
			}
		},
		$question(state) {
			return [...state.categories[state.category].questions[state.question]]
		},
	},
})
