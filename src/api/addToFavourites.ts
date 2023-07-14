import { AxiosResponse } from "axios";

import axiosInstance from "./config";

interface IResponseData {
  id: number;
  message: "SUCCESS" | "ERROR";
}

export const addToFavourites = (
  catId: string
): Promise<AxiosResponse<IResponseData>> =>
  axiosInstance.post(`/favourites`, {
    image_id: catId,
  });
