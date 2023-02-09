const pool = require("../services/pool");
const { validationResult } = require("express-validator");
const { create, get, show, delete_, update } = require("../services/reviews");
const { get_paginated } = require("../services/pagination");
const { config } = require("../configs/pagination.config");
const { predict } = require("../services/spoiler_model");

module.exports.create_new_review = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const user = req.user;
    let base_url = req.hostname;
    let pred = await predict(req.body.review, base_url, 1);
    pred = pred.outputs[0][0];
    console.log(pred);
    let is_spoiler;

    if (pred < 0.4) {
      is_spoiler = false;
    } else {
      is_spoiler = true;
    }

    let review = await create(
      user.sub,
      req.body.movie,
      req.body.review,
      is_spoiler,
      req.body.grade,
      pool
    );
    return res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

module.exports.get_all_reviews_paginated = async (req, res) => {
  try {
    let page = req.query.page || config.page;
    let per_page = req.query.per_page || config.per_page;
    let is_spoiler = req.query.is_spoiler || config.is_spoiler;
    let reviews = await get_paginated(page, per_page, is_spoiler, pool);
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

module.exports.get_all_users_reviews = async (req, res) => {
  try {
    const user = req.user;
    let reviews = await get(user.sub, pool);
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

module.exports.show_review = async (req, res) => {
  try {
    const user = req.user;
    let review = await show(user.sub, req.params.id, pool);
    return res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

module.exports.update_review = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let base_url = req.hostname;
    let pred = await predict(req.body.review, base_url, 1).outputs[0][0];
    let is_spoiler;

    if (pred > 0.4) {
      is_spoiler = true;
    } else {
      is_spoiler = false;
    }

    const user = req.user;
    let review = await update(
      req.body.movie,
      req.body.review,
      is_spoiler,
      req.body.grade,
      user.sub,
      req.params.id,
      pool
    );
    return res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

module.exports.delete_review = async (req, res) => {
  try {
    const user = req.user;
    await delete_(user.sub, req.params.id, pool);
    return res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};
