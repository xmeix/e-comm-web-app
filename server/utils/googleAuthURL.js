import querystring from "querystring";
import axios from "axios";
import CustomError from "./CustomError.js";

export function getGoogleAuthURL() {
  const rootURL = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  return `${rootURL}?${querystring.stringify(options)}`;
}

export async function getGoogleToken({ code }) {
  const url = "https://accounts.google.com/o/oauth2/token";
  const values = {
    code,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    grant_type: "authorization_code",
  };

  try {
    const res = await axios.post(
      url,
      querystring.stringify(values),

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new CustomError(400, "Failed to fetch google oauth tokens"); // Fixed the error variable
  }
}
