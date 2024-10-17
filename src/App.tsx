import { PathfinderProvider } from "./context/PathfinderContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  return (
    <PathfinderProvider>
      <TileProvider>
        <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
          Hello world!
        </h1>
      </TileProvider>
    </PathfinderProvider>
  );
}
