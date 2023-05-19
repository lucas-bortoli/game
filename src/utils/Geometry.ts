export class Point {
	public x: number;
	public y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	public add(b: Point): Point {
		return new Point(this.x + b.x, this.y + b.y);
	}

	public subtract(b: Point): Point {
		return new Point(this.x - b.x, this.y - b.y);
	}

	/**
	 * Aplica o teorema de Pitágoras para descobrir a distância deste ponto a
	 * outro ponto no plano cartesiano.
	 */
	public distance2d(other: Point): number {
		const difference = this.subtract(other);

		return Math.sqrt(Math.pow(difference.x, 2) + Math.pow(difference.y, 2));
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

	public setWidth(width: number) {
		this.width = Math.max(width, 0);
	}

	public setHeight(height: number) {
		this.height = Math.max(height, 0);
	}

	public hasPointInsideRectangle(point: Point): boolean {
		if (
			point.x >= this.x &&
			point.x <= this.x + this.width &&
			point.y >= this.y &&
			point.y <= this.y + this.height
		) {
			return true;
		}

		return false;
	}
}
