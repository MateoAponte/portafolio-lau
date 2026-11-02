import lumaCare from "./luma-care.json";

export type Project = Omit<typeof lumaCare, "prototype" | "tagline"> & { prototype?: { src: string; type: string } | null; tagline?: string };
export const projects: Project[] = [lumaCare];
