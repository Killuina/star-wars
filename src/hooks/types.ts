import { Starships } from "../data/types";

export interface ApiResponse {
  next: string | null;
  count: number;
  results: Starships;
}
