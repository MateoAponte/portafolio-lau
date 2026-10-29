import { useSyncExternalStore } from "react";

const subscribe = (notify: () => void) => {
  window.addEventListener("scroll", notify, { passive: true });
  return () => window.removeEventListener("scroll", notify);
};
const getSnapshot = () => window.scrollY > 48;
const getServerSnapshot = () => false;

export function useScrollControlsVisible() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
