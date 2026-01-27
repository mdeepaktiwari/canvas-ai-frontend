import api from "../api";
import { IMAGE_GENERATE_URL, IMAGE_HISTORY_URL } from "./endpoints";

export const generateImage = (data) => {
  return api.post(IMAGE_GENERATE_URL, data);
};

export const imageHistory = () => {
  return api.get(IMAGE_HISTORY_URL);
};
