import { fromRgb } from "./utils/Color";
import { World } from "./world";
import { Assets } from "./assets";
import { Editor } from "./editor";
import { IGameState } from "./IGameState";

// configurar valores globais
GAME_WIDTH = 320;
GAME_HEIGHT = 180;
GAME_SCALE = Assets.Filter.getHeight();
RENDER_CANVAS = love.graphics.newCanvas(GAME_WIDTH, GAME_HEIGHT);

const FILTER_CANVAS = love.graphics.newCanvas(GAME_WIDTH * GAME_SCALE, GAME_HEIGHT * GAME_SCALE);
let filtro_desenhado = false;

//@ts-ignore
BLOCK_SIZE = 16;

let gameState: IGameState;

love.load = () => {
	love.window.setMode(GAME_WIDTH * GAME_SCALE, GAME_HEIGHT * GAME_SCALE, { resizable: false });
	love.mouse.setCursor(Assets.UI.Cursor);

	gameState = new Editor();
};

love.draw = () => {
	if (!filtro_desenhado) {
		love.graphics.setCanvas(FILTER_CANVAS);
		love.graphics.clear();

		for (let y = 0; y < FILTER_CANVAS.getHeight(); y += Assets.Filter.getHeight()) {
			for (let x = 0; x < FILTER_CANVAS.getWidth(); x += Assets.Filter.getWidth()) {
				love.graphics.draw(Assets.Filter, x, y);
			}
		}

		filtro_desenhado = true;
	}

	love.graphics.setCanvas(RENDER_CANVAS);

	love.graphics.clear();

	// desenhar o mundo atual
	gameState.draw();

	love.graphics.setCanvas();

	love.graphics.setColor(...fromRgb(255, 255, 255));
	love.graphics.draw(RENDER_CANVAS, 0, 0, 0, GAME_SCALE, GAME_SCALE);

	love.graphics.draw(FILTER_CANVAS, 0, 0);
};

love.update = (dt: number) => {
	// atualizar o mundo atual
	gameState.update(dt);
};
