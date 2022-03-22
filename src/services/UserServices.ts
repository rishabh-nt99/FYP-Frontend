const axios = require("axios");

export async function createUser(data) {
  const response = await axios.post(`/api/user`, { user: data });
  return response.data;
}
