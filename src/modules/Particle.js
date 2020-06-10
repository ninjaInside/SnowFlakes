class Particle {
	constructor(x, y, color) {
		this.x = x
		this.y = y

		this.width = 3
		this.height = 3

		this.maxXpos = this.x + 12
		this.minXpos = this.x

		this.color = color
	}
}

export default Particle