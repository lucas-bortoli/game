import * as Bump from "./lib/bump/bump";
import { Assets } from "./assets";
import { fromRgb } from "./utils/Color";
import { Player } from "./player";
import { Line } from "./line";

let q = love.graphics.newQuad(
	0,
	0,
	48,
	4,
	Assets.Level.Wall.getWidth(),
	Assets.Level.Wall.getHeight()
);

export class World {
	private blocks: number[][];
	private physics: Bump.World;
	private player: Player;

	public lines: Line[];

	constructor() {
		this.physics = Bump.newWorld(64);
		this.blocks = [
			[0, 0, 0],
			[0, 0, 0],
			[1, 0, 1],
			[2, 1, 2],
		];
		this.lines = [new Line(10, 10, 96, 4)];
		this.player = new Player();
	}

	public update(dt: number) {}

	public draw() {
		love.graphics.setBackgroundColor(...fromRgb(32, 32, 32));

		love.graphics.setColor(...fromRgb(255, 255, 255));

		for (const line of this.lines) {
			line.draw();
		}

		love.graphics.draw(Assets.Level.Wall, q, 10, 10);

		this.player.draw();
	}
}
