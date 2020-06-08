import GeneratorParticle from './modules/GeneratorParticle'

class SnowFlakesApp {
	constructor() {
		this.generatorParticle = new GeneratorParticle()

		this.renderCycle = null
		this.renderFramerate = 120

		this.canvas = document.querySelector('.canvas')
		this.ctx = this.canvas.getContext('2d')
	}

	render() {
		this.renderCycle = setInterval(() => {
			this.ctx.fillStyle = '#eee'
			this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
		}, this.renderFramerate)
	}

	renderStop() {
		clearInterval(this.renderCycle)
	}

	init() {
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		this.render()
	}
}

snowFlakes = new SnowFlakesApp()

snowFlakes.init() 