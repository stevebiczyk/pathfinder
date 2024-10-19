import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  const isVisualizerRunningRef = useRef(false);
  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid isVisualizerRunningRef={isVisualizerRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}
