import jwt from "jsonwebtoken";

export const generateJWT = (user, exp, secret) => {
  const payload = {
    UserInfo: {
      id: user._id,
      email: user.email,
    },
  };

  const options = {
    expiresIn: exp,
  };

  return jwt.sign(payload, secret, options);
};

export const errorHandler = (error) => {
  const errorMessage = error.message;

  if (errorMessage.includes("::")) {
    const [status, message] = errorMessage.split("::");
    res.status(status).json({ error: message });
  } else res.status(500).json({ error: error.message });
};
