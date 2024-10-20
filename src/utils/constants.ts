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

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";
