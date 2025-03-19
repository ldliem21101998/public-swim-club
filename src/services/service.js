import axiosConfig from "../configs/AxiosConfig";
export const apiCreatePublicSwimming = async (payload) => {
  const response = await axiosConfig({
    method: "POST",
    url: "/user-public-swimming",
    data: payload,
  });
  return response;
};

export const apiCreateChildrenSwimming = async (payload) => {
  const response = await axiosConfig({
    method: "POST",
    url: "/user-children-swimming",
    data: payload,
  });

  return response;
};
export const apiCreateAdultSwimming = async (payload) => {
  const response = await axiosConfig({
    method: "POST",
    url: "/user-adult-swimming",
    data: payload,
  });

  return response;
};
export const apiCreateClubSwimming = async (payload) => {
  const response = await axiosConfig({
    method: "POST",
    url: "/user-club-swimming",
    data: payload,
  });

  return response;
};
