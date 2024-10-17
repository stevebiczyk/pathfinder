import { PathfinderProvider } from "./context/PathfinderContext";

export default function App() {
  return (
    <PathfinderProvider>
      <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
        Hello world!
      </h1>
    </PathfinderProvider>
  );
}
