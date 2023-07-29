import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://108.20.21.75:9000/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
