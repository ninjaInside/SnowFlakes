import Particle from './Particle'

class GeneratorParticle {
	constructor(ctx) {
		this.particleList = []

		this.ctx = ctx

		this.s = 10

		this.toggleRock = false
	}

	generation() {
		if (this.particleList.length < 100) {
			this.particleList.push(new Particle(
				this.randomNumber(0, document.documentElement.clientWidth), 
				this.randomNumber(0, window.innerHeight / 3), 
				'white')
			)	
		} 

		this.particleList.map(item => {
			this.ctx.fillStyle = item.color
			this.ctx.fillRect(item.x, item.y, item.width, item.height)

			item.y += this.randomNumber(5, 10)

			if (item.y >= window.innerHeight) item.y = 0

			if (item.x >= window.innerWidth || item.x <= 0) {
				item.y = 0
				item.x = this.randomNumber(0, document.documentElement.clientWidth)
			}

			if (!this.toggleRock) {
			
				item.x += 1

				if (item.x >= item.maxXpos) this.toggleRock = true
			
			} else if (this.toggleRock) {

				item.x -= 1

				if (item.x <= item.minXpos) this.toggleRock = false
			}
		})
	}

	randomNumber(min, max) {
		return (Math.floor(Math.random() * max) + min)
	}
}

export default GeneratorParticle