import axios from "axios";

export const getCountry = async (url) => {
  try {
    const res = await axios.get(url);
    if (res.data && res.data.data) {
      return res.data.data.map((item) => item.country);
    }
    return [];
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
