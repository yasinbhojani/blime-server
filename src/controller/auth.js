export const normalLoginHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
export const normalRegistrationHandler = (req, res) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

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
