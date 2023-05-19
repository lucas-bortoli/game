export interface IGameState {
	name: string;
	update(dt: number): void;
	draw(): void;
}
