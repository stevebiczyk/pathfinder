export type AlgorithmType = "dijkstra" | "aStar" | "bfs" | "dfs";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isStart: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
