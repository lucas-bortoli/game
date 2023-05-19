import { Point } from "./utils/Geometry";
import { WHITE } from "./utils/Color";
import { Assets } from "./assets";

let i = 1;

export class Player {
	public pos: Point;

	constructor() {
		this.pos = new Point(16, 24);
	}

	public draw() {
		love.graphics.setColor(WHITE);
		i++;

		if (i === 12) i = 1;

		love.graphics.draw(Assets.Player.Frames[i], this.pos.x, this.pos.y);
	}
}
