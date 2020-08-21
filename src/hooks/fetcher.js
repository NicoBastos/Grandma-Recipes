import axios from "axios";
const getFetcher = async (url) => {
  return await axios.get(url).then((res) => res.data.recipes);
};
export default getFetcher;
