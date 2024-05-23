export async function postStarBoardHandler(req, res) {
  try {
    const { userId } = req.body;


  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}
