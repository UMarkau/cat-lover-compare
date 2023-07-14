import { AxiosResponse } from "axios";

import { IFavourite } from "./models";
import axiosInstance from "./config";

export const getFavourites = (): Promise<AxiosResponse<IFavourite[] | []>> => {
  return axiosInstance.get("/favourites");
};
