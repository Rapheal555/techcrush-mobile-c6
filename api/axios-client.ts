import axios from "axios";


// const baseUrl = "https://jsonplaceholder.typicode.com";
const baseUrl = "https://dummyjson.com";

 const axiosClient = axios.create({
  baseURL: baseUrl, // Replace with your API base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export const fetchPostsData = async (skip:number) => {
  try {
    const response = await axiosClient.get(`/posts?limit=30&skip=${skip}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


const postData = async (userData:any) => {
  try {
    const response = await axiosClient.post("/users", userData);
    return response.data;
  } catch (error) {
   console.error("Error fetching data:", error);
  }
};

const userData = { name: "John Doe", email: "john.doe@example.com" };

postData(userData);