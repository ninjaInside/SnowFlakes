import GeneratorParticle from './modules/GeneratorParticle'

class SnowFlakesApp {
	constructor() {
		this.renderCycle = null
		this.renderFramerate = 60

		this.canvas = document.querySelector('.canvas')
		this.ctx = this.canvas.getContext('2d')
		
		this.generatorParticle = new GeneratorParticle(this.ctx)
	}

	render() {
		this.renderCycle = setInterval(() => {
			this.ctx.fillStyle = '#eee'
			this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

			this.generatorParticle.generation()
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

let snowFlakes = new SnowFlakesApp()

snowFlakes.init() 