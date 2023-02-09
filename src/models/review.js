class Review {
  constructor(id, user_id, movie, review, is_spoiler, grade, created_at) {
    this.id = id;
    this.user_id = user_id;
    this.movie = movie;
    this.review = review;
    this.is_spoiler = is_spoiler;
    this.grade = grade;
    this.created_at = created_at;
  }
}

class ReviewView {
  constructor(
    id,
    user_id,
    username,
    movie,
    review,
    is_spoiler,
    grade,
    created_at
  ) {
    this.id = id;
    this.user_id = user_id;
    this.username = username;
    this.movie = movie;
    this.review = review;
    this.is_spoiler = is_spoiler;
    this.grade = grade;
    this.created_at = created_at;
  }
}

module.exports = { Review, ReviewView };
