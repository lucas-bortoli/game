love.graphics.setDefaultFilter("nearest", "nearest");

const chain = <T>(original: T, ...transformers: ((value: T) => void)[]): T => {
	for (const transform of transformers) {
		transform(original);
	}

	return original;
};

const Assets = {
	UI: {
		Cursor: love.mouse.newCursor("/assets/cursor.png"),
	},
	Level: {
		Wall: chain(love.graphics.newImage("/assets/Blocks/Wall.png"), image =>
			image.setWrap("mirroredrepeat", "mirroredrepeat")
		),
	},
	Filter: love.graphics.newImage("/assets/filter.png"),
};

export { Assets };
