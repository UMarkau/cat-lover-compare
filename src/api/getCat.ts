import { AxiosResponse } from "axios";

import axiosInstance from "./config";
import { ICat } from "./models";

export const getCat = (catId: string): Promise<AxiosResponse<ICat>> =>
  axiosInstance.get(`/images/${catId}`);
