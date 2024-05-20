import { IMockUserDataRes } from "../interface/userMockup";
import axios from "axios";

const fetchUserMockup = async (): Promise<IMockUserDataRes> => {
  const url = "https://dummyjson.com/users";
  const response = await axios.get<IMockUserDataRes>(url);
  return response.data;
};

export const getUserMockup = async () => {
  try {
    return await fetchUserMockup();
  } catch (error) {
    throw error;
  }
};
