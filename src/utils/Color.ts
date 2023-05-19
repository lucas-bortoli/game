type Color = [number, number, number];

export function fromRgb(this: void, r: number, g: number, b: number): Color {
	return [r / 255, g / 255, b / 255];
}

export const WHITE = fromRgb(255, 255, 255);
export const BLACK = fromRgb(0, 0, 0);
export const BLUE = fromRgb(0, 0, 255);
export const RED = fromRgb(255, 0, 0);
