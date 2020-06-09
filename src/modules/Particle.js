class Particle {
	constructor(x, y, color) {
		this.x = x
		this.y = y

		this.width = 15
		this.height = 15

		this.maxXpos = this.x + 10
		this.minXpos = this.x

		this.color = color
	}
}

export default Particle