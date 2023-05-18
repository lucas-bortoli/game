love.graphics.setDefaultFilter("nearest", "nearest");

const Assets = {
  Blocks: {
    Grass: love.graphics.newImage("/assets/Blocks/grass.png"),
    Dirt: love.graphics.newImage("/assets/Blocks/dirt.png"),
  },
  Filter: love.graphics.newImage("/assets/filter.png"),
};

export { Assets };
