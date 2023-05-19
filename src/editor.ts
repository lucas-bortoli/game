import { WHITE, fromRgb, BLUE, RED } from "./utils/Color";
import { Player } from "./player";
import { Wall } from "./wall";
import { Assets } from "./assets";
import { IGameState } from "./IGameState";
import { Point } from "./utils/Geometry";

type DraggingObject = Wall;
type Tool = "pencil" | "select";

interface DraggingState {
	origin: Point;
	object: DraggingObject;
}

export class Editor implements IGameState {
	public name: string = "editor";
	private player: Player;

	public walls: Wall[];

	private tool: Tool = "select";
	private dragging: DraggingState | null;

	constructor() {
		this.walls = [new Wall(10, 10, 96, 8)];
		this.player = new Player();
		this.dragging = null;
	}

	public update(dt: number) {
		const [mouseX, mouseY] = love.mouse.getPosition().map(p => Math.floor(p / GAME_SCALE));
		const mouseDown = love.mouse.isDown(1);

		if (mouseDown) {
			const mousePosition = new Point(mouseX, mouseY);

			// Criar novo objeto
			if (this.dragging === null) {
				this.dragging = {
					origin: new Point(mouseX, mouseY),
					object: new Wall(mouseX, mouseY, 4, 4),
				};
			}

			const difference = mousePosition.subtract(this.dragging.origin);

			if (this.dragging.object instanceof Wall) {
				this.dragging.object.setDimensions(difference.x, difference.y);
			}
		} else {
			if (this.dragging !== null) {
				this.walls.push(this.dragging.object);
				this.dragging = null;
			}
		}
	}

	public draw() {
		const [mouseX, mouseY] = love.mouse.getPosition().map(p => Math.floor(p / GAME_SCALE));
		const mousePosition = new Point(mouseX, mouseY);

		love.graphics.setBackgroundColor(...fromRgb(32, 16, 16));

		love.graphics.setColor(...fromRgb(255, 255, 255));

		for (const wall of this.walls) {
			wall.draw();

			// destacar objetos com o mouse em cima
			if (wall.rect.hasPointInsideRectangle(mousePosition)) {
				love.graphics.setColor(...RED);
				love.graphics.rectangle(
					"line",
					wall.rect.x,
					wall.rect.y,
					wall.rect.width,
					wall.rect.height
				);
			}
		}

		if (this.dragging) {
			const difference = mousePosition.subtract(this.dragging.origin);

			this.dragging.object.draw();

			// desenhar borda em torno do objeto
			love.graphics.setColor(...BLUE);
			love.graphics.rectangle(
				"line",
				this.dragging.origin.x,
				this.dragging.origin.y,
				difference.x,
				difference.y
			);
		}

		love.graphics.setColor(...WHITE);
		this.player.draw();

		love.graphics.setFont(Assets.UI.Font);
		love.graphics.setColor(...WHITE);
		love.graphics.print("Hello World", mouseX, mouseY - 16);

		// desenhar interface

		love.graphics.setColor(...WHITE);
		love.graphics.draw(Assets.Editor.ToolSelect, 4, 4);
		love.graphics.draw(Assets.Editor.ToolPencil, 4, 8 + 16);
	}
}
