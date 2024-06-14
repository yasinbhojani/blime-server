import Board from "../models/board.model.js";

export const createBoardHandler = async (req, res) => {
  try {
    const { board_name, workspace_id, background } = req.body;

    if (!board_name || !workspace_id || !background) {
      return res.status(400).json({ message: "one or more fields missing" });
    }

    const resp = await Board.create({
      board_name: board_name.trim(),
      workspace_id,
      background,
    });

    res.status(200).json({ message: "success", result: resp });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
