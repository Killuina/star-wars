import { Starships } from "../data/types";
import { ApiResponse } from "./types";

const getShips = async (starships: Starships, pageIndex: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL_API}?page=${pageIndex}`
  );
  const apiResponse = (await response.json()) as ApiResponse;

  starships.push(...apiResponse.results);

  if (apiResponse.next) {
    pageIndex = pageIndex + 1;
    await getShips(starships, pageIndex);
  }
};

export default getShips;
