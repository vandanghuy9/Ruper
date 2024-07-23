import "server-only";
import { sendPostRequest } from "./requestService";
const UserServices = {
  async login(body) {
    return sendPostRequest("/user/login", body).catch((error) => {
      if (error.response && error.response.status === 401) {
        return { status: 401, message: error.response.data.message };
        // Handle unauthorized access (e.g., display error message)
      } else {
        // Handle other errors (network issues, etc.)
        console.error("Error fetching data:", error);
      }
    });
  },

  async register(body) {
    console.log(body);
  },
};

export default UserServices;
