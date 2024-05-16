import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const user_name = user.user_name;
  const first_name = user.first_name;
  const last_name = user.last_name;
  const email = user.email;
  return jwt.sign({ user_details: { user_name, first_name, last_name, email } }, process.env.SECRET_KEY);
};

export default generateAccessToken;
