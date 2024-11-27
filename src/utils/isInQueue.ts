import { isEqual } from "./helpers";
import { TileType } from "./types";

export function isInQueue(queue: TileType[], tile: TileType) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(queue[i], tile)) return true;
  }
  return false;
}
