import { usePathfinder } from "../hooks/usePathfinder";
import { MAZES } from "../utils/constants";
import { MazeType } from "../utils/types";
import { Select } from "./Select";

export function Nav() {
  return (
    const { maze, handleGenerateMaze, isDisabled } = usePathfinder();
    <div className="flex-items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px px-0">
      <div className="flex-items-center lg:justify-between juster-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            isDisabled={isDisabled}
            onChange={(e) => {
              //handleGenerateMaze(e.target.value as MazeType);
            }}
          />
        </div>
      </div>
    </div>
  );
}
