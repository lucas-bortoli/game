export declare function rect_getNearestCorner(rect: IRect, px: number, py: number): ICoords;
export declare function rect_getSegmentIntersectionIndices(
  rect: IRect,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  ti1: number,
  ti2: number
): [number, number, number, number, number, number] | undefined;
export declare function rect_getDiff(rect: IRect, otherRect: IRect): IRect;
export declare function rect_containsPoint(rect: IRect, px: number, py: number): boolean;
export declare function rect_isIntersecting(
  x1: number,
  y1: number,
  w1: number,
  h1: number,
  otherRect: IRect
): boolean;
export declare function rect_getSquareDistance(rect: IRect, otherRect: IRect): number;
export declare function rect_detectCollision(
  rect: IRect,
  otherRect: IRect,
  goalX?: number,
  goalY?: number
): undefined | Partial<Collision>;
export declare type Response = (
  world: World,
  col: any,
  rect: IRect,
  goalX: number,
  goalY: number,
  filter: any
) => {
  x: number;
  y: number;
  collisions: Collision[];
};
export declare function touch(
  _world: World,
  column: {
    touch: ICoords;
    move: ICoords;
    normal: ICoords;
    slide: ICoords;
    item: any;
  },
  _rect: IRect,
  _goalX: number,
  _goalY: number,
  _filter: any
): ReturnType<Response>;
export declare function cross(
  world: any,
  column: {
    touch: ICoords;
    move: ICoords;
    normal: ICoords;
    slide: ICoords;
    item: any;
  },
  rect: IRect,
  goalX: number,
  goalY: number,
  filter: any
): ReturnType<Response>;
export declare function slide(
  world: World,
  column: {
    touch: ICoords;
    move: ICoords;
    normal: ICoords;
    slide: ICoords;
    item: any;
  },
  rect: IRect,
  goalX: number,
  goalY: number,
  filter?: any
): ReturnType<Response>;
export declare function bounce(
  world: World,
  collision: any,
  rect: IRect,
  goalX?: number,
  goalY?: number,
  filter?: any
): ReturnType<Response>;

declare type ResponseType = "bounce" | "slide" | "cross" | "touch";
declare type Filter = (item: string, other: string) => ResponseType;
interface IItemInfo {
  item: string;
  ti1: number;
  ti2: number;
  weight: number;
}
export interface IRect {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface ICoords {
  x: number;
  y: number;
}
export interface Collision {
  other: any | null | undefined;
  item: string | null | undefined;
  type?: ResponseType;
  overlaps: boolean;
  ti: number;
  move: ICoords;
  normal: ICoords;
  touch: ICoords;
  itemRect: IRect;
  otherRect: IRect;
  slide?: ICoords;
  bounce?: ICoords;
}
export declare type Cell = {
  ID: string;
  x: number;
  y: number;
  items: Set<string>;
};
export declare class World {
  responses: Record<ResponseType, Response>;
  cellSize: number;
  rows: Cell[][];
  rects: Map<string, IRect>;
  nonEmptyCells: Record<string, boolean>;
  constructor(input: {
    cellSize: number;
    rects: {};
    rows: [];
    nonEmptyCells: {};
    responses: Record<ResponseType, Response>;
  });
  addResponse(name: ResponseType, response: Response): void;
  getResponseByName(name: ResponseType): Response;
  project(
    itemID: string | null,
    rect: IRect,
    goalX?: number,
    goalY?: number,
    filter?: (item: string, other: string) => ResponseType | false
  ): Collision[];
  countCells(): number;
  hasItem(item: string): boolean;
  getItems(): IRect[];
  countItems(): number;
  private addItemToCell;
  getRect(itemID: string): IRect;
  private getItemsInCellRect;
  getItemsInCellPoint(x: number, y: number): IItemInfo["item"][];
  private removeItemFromCell;
  toWorld(cx: number, cy: number): [number, number];
  toCell(x: number, y: number): [number, number];
  queryRect(
    x: number,
    y: number,
    w: number,
    h: number,
    filter?: (other?: string) => boolean
  ): string[];
  queryPoint(x: number, y: number, filter?: (other?: string) => boolean): string[];
  querySegment(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    filter?: (other?: string) => boolean
  ): string[];
  querySegmentWithCoords(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    filter?: (other?: string) => boolean
  ): {
    item: string;
    ti1: number;
    ti2: number;
    weight: number | null;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }[];
  add(itemID: string, x: number, y: number, w: number, h: number): string;
  remove(itemID: string): void;
  update(itemID: string, x2: number, y2: number, w2?: number, h2?: number): void;
  move(itemID: string, goalX: number, goalY: number, filter?: Filter): ReturnType<Response>;
  check(itemID: string, goalX: number, goalY: number, filter?: Filter): ReturnType<Response>;
}
export const newWorld: (this: void, cellSize: number) => World;
export const rect: {
  getNearestCorner: typeof rect_getNearestCorner;
  getSegmentIntersectionIndices: typeof rect_getSegmentIntersectionIndices;
  getDiff: typeof rect_getDiff;
  containsPoint: typeof rect_containsPoint;
  isIntersecting: typeof rect_isIntersecting;
  getSquareDistance: typeof rect_getSquareDistance;
  detectCollision: typeof rect_detectCollision;
};
export const responses: {
  touch: typeof touch;
  cross: typeof cross;
  slide: typeof slide;
  bounce: typeof bounce;
};
