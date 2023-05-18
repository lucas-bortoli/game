type Color = [number, number, number];

export function fromRgb(this: void, r: number, g: number, b: number): Color {
  return [r / 255, g / 255, b / 255];
}
