const { predict } = require("../services/spoiler_model");

module.exports.predict = async (req, res) => {
  try {
    let review = req.body.review;
    let base_url = req.hostname;
    let pred = await predict(review, base_url, 1);
    return res.status(200).json(pred);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};
