love.graphics.setDefaultFilter("nearest", "nearest");

const chain = <T>(original: T, ...transformers: ((value: T) => void)[]): T => {
	for (const transform of transformers) {
		transform(original);
	}

	return original;
};

const Assets = {
	UI: {
		Font: love.graphics.newImageFont(
			"/assets/font.png",
			" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.!?;:-_/|\\!'\"+=*()[]{}<>~^&%$#@âêôûãáàéèẽóòõíìúùçÂÊÔÛÃÁÀÉÈẼÓÒÕÍÌÚÙÇ°ª¹²³"
		),
		Cursor: love.mouse.newCursor("/assets/cursor.png"),
	},
	Editor: {
		ToolSelect: love.graphics.newImage("/assets/tool_select.png"),
		ToolPencil: love.graphics.newImage("/assets/tool_pencil.png"),
	},
	Level: {
		Wall: chain(love.graphics.newImage("/assets/Blocks/Wall.png"), image =>
			image.setWrap("mirroredrepeat", "mirroredrepeat")
		),
	},
	Player: {
		Frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e =>
			love.graphics.newImage("/assets/Player/" + e + ".png")
		),
	},
	Filter: love.graphics.newImage("/assets/filter.png"),
};

export { Assets };
