import lumaCare from "./luma-care.json";
import folioBudget from "./folio-budget.json";
import raizMarket from "./raiz-market.json";

export type Project = Omit<typeof lumaCare, "prototype"> & { prototype?: { src: string; type: string } | null };
export const projects: Project[] = [lumaCare, folioBudget, raizMarket];
