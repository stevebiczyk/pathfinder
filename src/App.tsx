import { PathfinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  return (
    <PathfinderProvider>
      <TileProvider>
        <SpeedProvider>
          <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
            Hello world!
          </h1>
        </SpeedProvider>
      </TileProvider>
    </PathfinderProvider>
  );
}
