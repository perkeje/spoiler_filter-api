const axios = require("axios").default;

module.exports.predict = async (review, base_url, version) => {
  let path =
    "http://" +
    base_url +
    ":8501" +
    "/v" +
    version +
    "/models/spoiler_filter_api:predict";
  let data = { inputs: [review] };
  try {
    const response = await axios.post(path, data);
    return response.data;
  } catch (error) {
    throw Error("Error when trying to predict");
  }
};
