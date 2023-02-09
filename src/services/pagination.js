const { ReviewView } = require("../models/Review");

module.exports.get_paginated = async (page, per_page, is_spoiler, pool) => {
  let last_page = 1;
  let total = await pool.query("SELECT COUNT(id) FROM REVIEWS");
  let reviews = [];
  if (total != 0) {
    last_page = total / per_page;
    let skip = (page - 1) * per_page;
    if (is_spoiler !== undefined) {
      reviews = await pool.query(
        "SELECT r.*, u.username FROM REVIEWS r INNER JOIN users u ON r.user_id = u.id WHERE is_spoiler=$3 ORDER BY created_at LIMIT $1 OFFSET $2",
        [per_page, skip, is_spoiler]
      );
    } else {
      reviews = await pool.query(
        "SELECT r.*, u.username FROM REVIEWS r INNER JOIN users u ON r.user_id = u.id ORDER BY created_at LIMIT $1 OFFSET $2",
        [per_page, skip]
      );
    }
  }
  return reviews.rows.map(
    (review) =>
      new ReviewView(
        review.id,
        review.user_id,
        review.username,
        review.movie,
        review.review,
        review.is_spoiler,
        review.grade,
        review.created_at
      )
  );
};
