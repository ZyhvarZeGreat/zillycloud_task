import axios, { AxiosError } from "axios";
import { LoginType, RegisterType } from "./types";

const baseURl = "https://zam.zilytst.com/api/v1";

export const getImages = async () => {
  try {
    const response = await axios.get(`${baseURl}/images`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
    }
  }
};

export const registerUsers = async (data: RegisterType) => {
  try {
    const response = await axios.post(`${baseURl}/register`, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
    }
  }
};

export const loginUsers = async (data: LoginType) => {
  try {
    const response = await axios.post(`${baseURl}/login`, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
    }
  }
};
