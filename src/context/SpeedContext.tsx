import { createContext } from "react";
import { SpeedType } from "../utils/types";

interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: number) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);

export const SpeedProvider = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(50);
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
