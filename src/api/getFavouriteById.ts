import { AxiosResponse } from "axios";

import { IFavourite } from "./models";
import axiosInstance from "./config";

export const getFavouriteById = (
  catId: string
): Promise<AxiosResponse<IFavourite[] | []>> =>
  axiosInstance.get(`/favourites?image_id=${catId}`);
