import { MAX_COLS, MAX_ROWS } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { destroyWall } from "../../../utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (isDisabled: boolean) => void,
  speed: SpeedType
) => {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROWS * MAX_COLS);
  for (const row of grid) {
    for (const tile of row) {
      if (tile.row % 2 === 0 || tile.col % 2 === 0) {
        if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
          tile.isWall = true;
        }
      }
    }
  }

  for (let row = 1; row < MAX_ROWS; row += 2) {
    // Iterate through odd rows starting from 1
    for (let col = 1; col < MAX_COLS; col += 2) {
      // Iterate through odd columns starting from 1
      if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
        // Skip the bottom-right corner
        continue;
      } else if (row === MAX_ROWS - 2) {
        // If it's the last row, destroy a wall to the right
        await destroyWall(grid, row, col, 1, speed);
      } else if (col === MAX_COLS - 2) {
        // If it's the last column, destroy a wall below
        await destroyWall(grid, row, col, 0, speed);
      } else {
        // Otherwise, randomly destroy a wall to the right or below
        await destroyWall(grid, row, col, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false); // Re-enable the UI
};
