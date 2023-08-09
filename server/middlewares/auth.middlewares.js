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

export const errorHandler = (res, error) => {
  const errorMessage = error.message;

  console.log(errorMessage);
  if (errorMessage.includes("::")) {
    const [status, message] = errorMessage.split("::");
    const statusCode = parseInt(status, 10); // Parse status as an integer
    res.status(statusCode).json({ error: message });
  } else res.status(500).json({ error: error.message });
};
