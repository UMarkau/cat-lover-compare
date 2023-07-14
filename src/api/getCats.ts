import { AxiosResponse } from "axios";
import axiosInstance from "./config";
import { ICat } from "./models";

export const getCats = (page = 0): Promise<AxiosResponse<ICat[]>> =>
  axiosInstance.get(`/images/search?limit=10&page=${page}`);
