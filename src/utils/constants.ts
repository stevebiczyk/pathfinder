export const MAX_ROWS = 40;
export const MAX_COLS = 50;

export const START_TILE_CONFIG = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null,
};

export const END_TILE_CONFIG = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null,
};
