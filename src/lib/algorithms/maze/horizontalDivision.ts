import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constants";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, TileType, SpeedType } from "../../../utils/types";
import recursiveDivision from "./recursiveDivision";

export async function horizontalDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  width,
  height,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  width: number;
  height: number;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) {
  const makeWallAt = row + getRandInt(0, height - 1) * 2 + 1;
  const makePassageAt = col + getRandInt(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i++) {
    if (makePassageAt !== col + i) {
      if (
        !isEqual(grid[makeWallAt][col + i], startTile) &&
        !isEqual(grid[makeWallAt][col + i], endTile)
      ) {
        grid[makeWallAt][col + i].isWall = true;

        document.getElementById(
          `${makeWallAt}-${col + i}`
        )!.className = `${WALL_TILE_STYLE} animate-wall`;
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
      }
    }
  }
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    width,
    height: (makeWallAt - row + 1) / 2,
    setIsDisabled,
    speed,
  });
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: makeWallAt + 1,
    col,
    width,
    height: height - (makeWallAt - row + 1) / 2,
    setIsDisabled,
    speed,
  });
}
