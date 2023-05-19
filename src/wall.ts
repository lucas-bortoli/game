import { Quad } from "love.graphics";
import { Rectangle } from "./utils/Geometry";
import { Assets } from "./assets";
import { BLACK, WHITE } from "./utils/Color";

export class Wall {
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

	public setDimensions(width: number | null, height: number | null) {
		width = Math.max(width ?? this.rect.width, 0);
		height = Math.max(height ?? this.rect.height, 0);

		this.rect.width = width;
		this.rect.height = height;
		this.quad.setViewport(this.rect.x, this.rect.y, width, height);
	}

	public draw() {
		love.graphics.setColor(...WHITE);
		love.graphics.draw(Assets.Level.Wall, this.quad, this.rect.x, this.rect.y);
	}
}
