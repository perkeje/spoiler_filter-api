const { predict } = require("../services/spoiler_model");

module.exports.predict = async (req, res) => {
  try {
    let review = req.body.review;
    let base_url = req.hostname;
    let pred = await predict(review, base_url, 1);
    return res.status(200).json(pred);

    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.mapped() });
    //   }
    //   let found = await find_by_email(req.body.email, pool);
    //   if (found !== undefined)
    //     return res.status(400).json({ error: "User with that email already exists" });

    //   found = await find_by_username(req.body.username, pool);
    //   if (found !== undefined)
    //     return res.status(400).json({ error: "User with that username already exists" });

    //   let user = await create_new_user(req.body.username,req.body.email, req.body.pass, pool);
    //   return res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};
