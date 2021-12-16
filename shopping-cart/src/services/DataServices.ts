import axios from "axios";
const fetchData = async (url: string) => {
  try {
    const res = await axios.get(url);
    const respJson = await res.data;
    return respJson;
  } catch (e) {
    console.log("Error:", e);
    return null;
  }
};

export default fetchData;
