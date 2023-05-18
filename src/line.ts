import { Quad } from "love.graphics";
import { Rectangle } from "./utils/Geometry";
import { Assets } from "./assets";

export class Line {
	public rect: Rectangle;

	private quad: Quad;

	constructor(x: number, y: number, width: number, height: number) {
		this.rect = new Rectangle(x, y, width, height);
		this.quad = love.graphics.newQuad(
			x,
			y,
			width,
			height,
			Assets.Level.Wall.getWidth(),
			Assets.Level.Wall.getHeight()
		);
	}

	public draw() {
		love.graphics.draw(Assets.Level.Wall, this.quad, this.rect.x, this.rect.y);
	}
}
