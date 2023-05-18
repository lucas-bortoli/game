/**
 * Receber tipos da biblioteca que não estão exportados
 */
type Love2dCanvas = ReturnType<typeof import("love.graphics").newCanvas>;

/**
 * Define a escala em que o jogo estará renderizando.
 * A resolução interna é definida em GAME_WIDTH e GAME_HEIGHT.
 * O tamanho da janela do jogo é o produto da resolução interna e da escala.
 */
declare var GAME_SCALE: number;

/**
 * A largura interna da resolução do jogo.
 */
declare var GAME_WIDTH: number;

/**
 * A altura interna da resolução do jogo.
 */
declare var GAME_HEIGHT: number;

declare var RENDER_CANVAS: Love2dCanvas;

declare const BLOCK_SIZE: number;
