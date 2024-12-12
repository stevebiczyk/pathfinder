import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversedTiles = [base];

  while (untraversedTiles.length) {
    const tile = untraversedTiles.shift() as TileType;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbours = getUntraversedNeighbours(grid, tile);
    for (let i = 0; i < neighbours.length; i += 1) {
      if (!isInQueue(neighbours[i], untraversedTiles)) {
        const neighbour = neighbours[i];
        neighbour.distance = tile.distance + 1;
        neighbour.parent = tile;
        untraversedTiles.push(neighbour);
      }
    }
  }
  const path = [];
  let tile = grid[endTile.row][endTile.col];
  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }
  return { traversedTiles, path };
};

// export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
//   // Check for undefined or invalid startTile
//   if (
//     !startTile ||
//     startTile.row === undefined ||
//     startTile.col === undefined
//   ) {
//     throw new Error("Invalid startTile: row and col must be defined");
//   }

//   const base = grid[startTile.row]?.[startTile.col];
//   if (!base) {
//     throw new Error(
//       `Start tile (${startTile.row}, ${startTile.col}) is outside the grid bounds.`
//     );
//   }

//   base.distance = 0;
//   base.isTraversed = true;

//   const traversedTiles: TileType[] = [];
//   const untraversedTiles = [base];

//   while (untraversedTiles.length) {
//     const tile = untraversedTiles.shift() as TileType;

//     if (tile.isWall) continue;
//     if (tile.distance === Infinity) break;

//     tile.isTraversed = true;
//     traversedTiles.push(tile);

//     if (isEqual(tile, endTile)) break;

//     const neighbours = getuntraversedNeighbours(grid, tile) || [];
//     for (let i = 0; i < neighbours.length; i += 1) {
//       if (!isInQueue(neighbours[i], untraversedTiles)) {
//         const neighbour = neighbours[i];
//         neighbour.distance = tile.distance + 1;
//         neighbour.parent = tile;
//         untraversedTiles.push(neighbour);
//       }
//     }
//   }

//   const path = [];
//   let tile = grid[endTile.row]?.[endTile.col];
//   while (tile !== null && tile.parent) {
//     tile.isPath = true;
//     path.unshift(tile);
//     tile = tile.parent;
//   }

//   return { traversedTiles, path };
// };
