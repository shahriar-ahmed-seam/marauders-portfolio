"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { HouseId } from "@/data/houses";

interface HouseContextValue {
  house: HouseId | null;
  sorted: boolean;
  setHouse: (house: HouseId) => void;
  resort: () => void;
}

const HouseContext = createContext<HouseContextValue | null>(null);
const STORAGE_KEY = "wizarding-house";

export function HouseProvider({ children }: { children: ReactNode }) {
  const [house, setHouseState] = useState<HouseId | null>(null);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as HouseId | null;
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage
        setHouseState(saved);
        document.documentElement.dataset.house = saved;
      }
    } catch {
      /* storage unavailable — stay unsorted */
    }
  }, []);

  const setHouse = useCallback((next: HouseId) => {
    setHouseState(next);
    document.documentElement.dataset.house = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const resort = useCallback(() => {
    setHouseState(null);
    delete document.documentElement.dataset.house;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <HouseContext.Provider value={{ house, sorted: house !== null, setHouse, resort }}>
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse(): HouseContextValue {
  const ctx = useContext(HouseContext);
  if (!ctx) throw new Error("useHouse must be used within <HouseProvider>");
  return ctx;
}
