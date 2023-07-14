import { AxiosResponse } from "axios";

import axiosInstance from "./config";

interface IResponseData {
  message: "SUCCESS" | "ERROR";
}

export const removeFromFavourites = (
  favouriteId: number
): Promise<AxiosResponse<IResponseData>> =>
  axiosInstance.delete(`/favourites/${favouriteId}`);
