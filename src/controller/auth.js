import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/users.model.js";
import generateAccessToken from "../utils/token.util.js";

//* Normal Auth
export const normalLoginHandler = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    let findCredentials;
    let user_name = username;

    if (email !== undefined) {
      findCredentials = await Users.findAll({
        where: {
          email,
        },
      });
    }

    if (username !== undefined) {
      findCredentials = await Users.findAll({
        where: {
          user_name,
        },
      });
    }

    if (findCredentials.length <= 0) return res.status(200).json({ message: "wrong credentials" });

    bcrypt.compare(password, findCredentials[0].password, (err, result) => {
      if (err) return res.json({ message: "An error occured" });
      if (!result) return res.json({ message: "Incorrect Password" });
      else {
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
export const normalRegistrationHandler = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const user_name = `${first_name}_${last_name}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { user_name, first_name, last_name, email };
    const token = generateAccessToken(user);

    const resp = await Users.create({ user_name, first_name, last_name, email, password: hashedPassword });

    res.status(200).json({ message: "success", token, result: resp });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

//* Github Auth
export const githubLoginHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
export const githubRegistrationHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

//* Microsoft Auth
export const microsoftLoginHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
export const microsoftRegistrationHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

//* Google Auth
export const googleLoginHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const googleRegistrationHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
