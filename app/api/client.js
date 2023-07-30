import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://108.20.21.75:9000/api",
});

export default apiClient;
