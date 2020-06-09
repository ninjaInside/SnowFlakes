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
				'black')
			)	
		} 

		this.particleList.map(item => {
			this.ctx.fillStyle = item.color
			this.ctx.fillRect(item.x, item.y, item.width, item.height)

			item.y += this.randomNumber(5, 10)

			if (item.y >= window.innerHeight) item.y = 0

			if (item.x < item.maxXpos && !this.toggleRock) {
			
				item.x += 3

				if (item.x + 3 === item.maxXpos) this.toggleRock = !this.toggleRock
			
			} else if (item.x > item.maxXpos && this.toggleRock) {

				item.x -= 3

				if (item.x === item.minXpos) this.toggleRock = !this.toggleRock
			}
		})
	}

	randomNumber(min, max) {
		return (Math.floor(Math.random() * max) + min)
	}
}

export default GeneratorParticle