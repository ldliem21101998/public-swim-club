import axiosConfig from "../configs/AxiosConfig";

export const apiPostQuiz = async (payload) => {
  try {
    const response = await axiosConfig({
      method: "POST",
      url: `/user-quiz-result`,
      data: payload,
    });

    return response;
  } catch (error) {
    return error;
  }
};
