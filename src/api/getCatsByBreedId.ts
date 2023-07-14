import { AxiosResponse } from "axios";

import { ICat } from "./models";
import axiosInstance from "./config";

export const getCatsByBreedId = (
  breedId: string
): Promise<AxiosResponse<ICat[] | []>> =>
  axiosInstance.get(`images/search?limit=1000&breed_ids=${breedId}`);
