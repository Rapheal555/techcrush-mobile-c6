

const baseUrl = "https://jsonplaceholder.typicode.com";


export const fetchPosts = async () => {
  try {
    // const response = await fetch(baseUrl+"posts");
    const response = await fetch(`${baseUrl}/posts`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
};
