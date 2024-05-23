import bcrypt from "bcrypt";
import Users from "../models/users.model.js";
import generateAccessToken from "../utils/token.util.js";

export const loginHandler = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    let findCredentials;

    if (email !== undefined) {
      findCredentials = await Users.findAll({
        where: {
          email: email.toLowerCase(),
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
    }

    if (username !== undefined) {
      findCredentials = await Users.findAll({
        where: {
          user_name: username.toLowerCase(),
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
    }

    if (findCredentials.length <= 0) return res.status(400).json({ message: "wrong credentials" });

    bcrypt.compare(password, findCredentials[0].password, (err, result) => {
      if (err) return res.status(500).json({ message: "An error occured" });
      if (!result) return res.status(400).json({ message: "Incorrect Password" });
      else {
        // delete encrypted pass from object
        findCredentials[0].password = undefined;
        const accessToken = generateAccessToken(findCredentials[0]);

        return res.status(200).json({
          message: "success",
          payload: {
            userDetails: findCredentials[0],
            accessToken,
          },
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const registrationHandler = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    // return if any of the variables are missing
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "one or more fields missing for registration" });
    }

    const user_name = `${first_name}_${last_name}`;

    // check is email already exists
    const accounts = await Users.findAll({
      where: {
        email: email.trim(),
      },
    });
    if (accounts?.length !== 0) {
      return res.status(400).json({ message: "email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { user_name, first_name, last_name, email };
    const token = generateAccessToken(user);

    const resp = await Users.create({
      user_name: user_name.trim().toLowerCase(),
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });

    // removing password hash from response body
    resp.password = undefined;

    res.status(200).json({ message: "success", token, result: resp });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
