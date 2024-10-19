import { Grid } from "./components/Grid";
import { PathfinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}
