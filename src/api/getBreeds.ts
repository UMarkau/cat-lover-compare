import { AxiosResponse } from "axios";
import axiosInstance from "./config";
import { IBreed } from "./models";

export const getBreeds = (): Promise<AxiosResponse<IBreed[]>> =>
  axiosInstance.get(`/breeds`);
