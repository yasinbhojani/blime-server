import Board from "../models/board.model.js";
import Workspace from "../models/workspace.model.js";
import { decodeAccessToken } from "../utils/token.util.js";

export const createWorkspaceHandler = async (req, res) => {
  try {
    const { workspace_name, user_id } = req.body;

    if (!workspace_name || !user_id) {
      return res.status(400).json({ message: "one or more fields missing" });
    }

    // see if workspace name already exists

    const resp = await Workspace.create({
      workspace_name: workspace_name.trim(),
      user_id,
    });

    res.status(200).json({ message: "success", result: resp });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getWorkspaceHandler = async (req, res) => {
  try {
    const authorization = req.header("Authorization");

    if (!authorization) {
      return res.status(400).json({ message: "one or more fields missing" });
    }

    const accessToken = authorization.split(" ")[1];
    const decodeToken = decodeAccessToken(accessToken);
    const user_id = decodeToken.user_id;

    const allWorkspaces = await Workspace.findAll({
      where: {
        user_id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const workspacesWithBoards = await Promise.all(
      allWorkspaces.map(async (workspace) => {
        const boards = await Board.findAll({
          where: {
            workspace_id: workspace.workspace_id,
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "workspace_id"],
          },
        });

        return {
          ...workspace.toJSON(),
          boards: boards.map((board) => board.toJSON()),
        };
      })
    );

    res.status(200).json({ message: "success", data: workspacesWithBoards });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
