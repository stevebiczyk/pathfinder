import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTyles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversed = [base];

  while (unTraversed.length) {
    const tile = unTraversed.shift()!;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    traversedTyles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbours = getUntraversedNeighbours(grid, tile);
    for (let i = 0; i < neighbours.length; i++) {
      if (!isInQueue(unTraversed, neighbours[i])) {
        const neighbour = neighbours[i];
        neighbour.distance = tile.distance + 1;
        neighbour.parent = tile;
        unTraversed.push(neighbour);
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
  return { traversedTyles, path };
};
