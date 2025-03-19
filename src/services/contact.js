import axiosConfig from "../configs/AxiosConfig";

export const apiPostContact = async (payload) => {
  try {
    const response = await axiosConfig({
      method: "POST",
      url: `/user-contact`,
      data: payload,
    });

    return response;
  } catch (error) {
    return error;
  }
};
