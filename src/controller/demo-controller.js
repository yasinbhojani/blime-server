import db from "../configs/db.config.js";

import { demoTable } from "../schema/schema.js";

export const demoController = async (req, res) => {
  try {
    const getDemos = await db
      .select({
        kuchBhi: demoTable.demoName,
      })
      .from(demoTable);

    return res.status(200).json({
      message: "blime bruh",
      demoName: getDemos,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
