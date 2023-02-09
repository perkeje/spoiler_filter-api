const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports.find_by_email = async (email, pool) => {
  try {
    let user = await pool.query("SELECT * FROM USERS WHERE EMAIL=$1", [email]);
    return user.rows[0];
  } catch (err) {
    throw Error(err);
  }
};

module.exports.find_by_username = async (username, pool) => {
  try {
    let user = await pool.query("SELECT * FROM USERS WHERE username=$1", [
      username,
    ]);
    return user.rows[0];
  } catch (err) {
    throw Error(err);
  }
};

module.exports.create_new_user = async (username, email, pass, pool) => {
  const salt = await bcrypt.genSalt(10);
  const hashed_pass = await bcrypt.hash(pass, salt);
  let user = await pool.query(
    "INSERT INTO USERS(username,email,pass) VALUES($1,$2,$3) RETURNING *",
    [username, email, hashed_pass]
  );
  user = user.rows[0];
  return new User(user.id, user.email);
};
