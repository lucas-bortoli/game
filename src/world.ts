import * as Bump from "./lib/bump/bump";
import { Assets } from "./assets";
import { fromRgb } from "./utils/Color";
import { Player } from "./player";

export class World {
  private blocks: number[][];
  private physics: Bump.World;
  private player: Player;

  constructor() {
    this.physics = Bump.newWorld(64);
    this.blocks = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 0, 1],
      [2, 1, 2],
    ];
    this.player = new Player();
  }

  public update(dt: number) {}

  public draw() {
    love.graphics.setBackgroundColor(...fromRgb(142, 180, 255));

    love.graphics.setColor(...fromRgb(255, 255, 255));

    for (let y = 0; y < this.blocks.length; y++) {
      for (let x = 0; x < this.blocks[y].length; x++) {
        const block = this.blocks[y][x];

        if (block === 0) {
        } else if (block === 1) {
          love.graphics.draw(Assets.Blocks.Grass, x * BLOCK_SIZE, y * BLOCK_SIZE);
        } else if (block === 2) {
          love.graphics.draw(Assets.Blocks.Dirt, x * BLOCK_SIZE, y * BLOCK_SIZE);
        }
      }
    }

    this.player.draw();
  }
}
