export type AlgorithmType = "dijkstra" | "aStar" | "bfs" | "dfs";

export type MazeType =
  | "none"
  | "binary_tree"
  | "recursiveDivision"
  | "randomMaze";

export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isStart: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];
