// import db from "../configs/db.config.js";

export const demoController = async (req, res) => {
  try {
    return res.status(200).json({
      message: "blime bruh",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
