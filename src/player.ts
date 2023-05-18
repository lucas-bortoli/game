import { Point } from "./utils/Point";
import { fromRgb } from "./utils/Color";

export class Player {
  public pos: Point;

  constructor() {
    this.pos = new Point(16, 24);
  }

  public draw() {
    love.graphics.setColor(...fromRgb(255, 0, 0));

    love.graphics.rectangle("fill", this.pos.x, this.pos.y, 16, 16);
  }
}
