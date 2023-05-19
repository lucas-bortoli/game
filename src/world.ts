import * as Bump from "./lib/bump/bump";
import { WHITE, fromRgb } from "./utils/Color";
import { Player } from "./player";
import { Wall } from "./wall";
import { Assets } from "./assets";
import { IGameState } from "./IGameState";

export class World implements IGameState {
	public name: string = "level";
	private blocks: number[][];
	private physics: Bump.World;
	private player: Player;

	public walls: Wall[];

	constructor() {
		this.physics = Bump.newWorld(64);
		this.blocks = [
			[0, 0, 0],
			[0, 0, 0],
			[1, 0, 1],
			[2, 1, 2],
		];
		this.walls = [new Wall(10, 10, 96, 8)];
		this.player = new Player();
	}

	public update(dt: number) {}

	public draw() {
		love.graphics.setBackgroundColor(...fromRgb(32, 16, 16));

		love.graphics.setColor(...fromRgb(255, 255, 255));

		for (const wall of this.walls) {
			wall.draw();
		}

		this.player.draw();

		love.graphics.setFont(Assets.UI.Font);
		love.graphics.setColor(...WHITE);
		love.graphics.print("Hello World", 16, 16);
	}
}
