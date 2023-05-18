export class Point {
	public x: number;
	public y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
}

export class Rectangle extends Point {
	public width: number;
	public height: number;

	constructor(x: number = 0, y: number = 0, width: number = 16, height: number = 16) {
		super(x, y);

		this.width = width;
		this.height = height;
	}
}
