import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Nav } from "./components/Nav";

export default function App() {
  const isVisualizerRunningRef = useRef(false);
  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizerRunningRef={isVisualizerRunningRef} />
            <Grid isVisualizerRunningRef={isVisualizerRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}
