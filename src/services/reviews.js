const {Review} = require("../models/Review");

module.exports.create = async (user_id, movie, review, is_spoiler, grade, pool) => {
  try {
    let response = await pool.query("INSERT INTO REVIEWS(user_id,movie,review,is_spoiler,grade) VALUES($1,$2,$3,$4,$5) RETURNING *", [user_id, movie, review, is_spoiler, grade]);
    return response.rows[0];
  } catch (err) {
    throw Error(err);
  }
};

module.exports.get = async (user_id, pool) => {
  let reviews = await pool.query("SELECT * FROM REVIEWS WHERE user_id=$1 ORDER BY created_at", [
    user_id,
  ]);
  return reviews.rows.map(
    (review) => new Review(review.id, review.user_id, review.movie, review.review, review.is_spoiler, review.grade, review.created_at)
  );
};

module.exports.delete_ = async (user_id, id, pool) => {
  let review = await pool.query("DELETE FROM REVIEWS WHERE user_id=$1 AND id=$2 RETURNING *", [
    user_id,
    id,
  ]);
  review = review.rows[0]
  if (review === undefined) throw Error("Review not found");
  return
};

module.exports.show = async (user_id, id, pool) => {
  let review = await pool.query(
    "SELECT * FROM REVIEWS WHERE user_id=$1 AND id=$2",
    [user_id, id]
  );
  review = review.rows[0]
  if (review === undefined) throw Error("Review not found");
  return review
};

module.exports.update = async (movie, review, is_spoiler, grade, user_id, id, pool) => {
  let review_updated = await pool.query(
    "UPDATE REVIEWS SET movie=$1, review=$2, is_spoiler=$3, grade=$4 WHERE user_id=$5 AND id=$6 RETURNING *",
    [movie, review, is_spoiler, grade, user_id, id]
  );
  review_updated = review_updated.rows[0]
  if (review_updated === undefined) throw Error("Review not found");
  return review_updated
};