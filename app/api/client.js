import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.68.102:9000/api",
});

export default apiClient;
