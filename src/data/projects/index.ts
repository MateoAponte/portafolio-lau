import lumaCare from "./luma-care.json";
import ecogiro from "./ecogiro.json";

export type Project = Omit<typeof lumaCare, "prototype" | "tagline"> & { prototype?: { src: string; type: string } | null; tagline?: string };
export const projects: Project[] = [ecogiro, lumaCare];
