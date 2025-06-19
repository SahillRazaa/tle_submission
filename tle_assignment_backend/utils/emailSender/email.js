const axios = require("axios");
require("dotenv").config();

const sendBrevoEmail = async ({ userData, subject }) => {
  const BREVO_API_KEY = process.env.BREVO_API;

  if (!BREVO_API_KEY) {
    throw new Error("API key is missing!");
  }

  const results = [];

  for (let i = 0; i < userData.length; i++) {
    const user = userData[i];

    const emailData = {
      sender: {
        name: "TLE Eliminators",
        email: "connectwithsahil007@gmail.com",
      },
      to: [{ email: user.email, name: user.name }],
      subject,
      htmlContent: user.message,
    };

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": BREVO_API_KEY,
          },
        }
      );
      console.log(`Email sent to ${user.email}:`, response.data);
      results.push({
        email: user.email,
        status: "success",
        response: response.data,
      });
    } catch (error) {
      console.error(
        `Error sending to ${user.email}:`,
        error.response?.data || error.message
      );
      results.push({
        email: user.email,
        status: "error",
        error: error.response?.data || error.message,
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return {
    totalEmails: userData.length,
    results,
    message: `Processed ${userData.length} personalized emails.`,
  };
};

module.exports = sendBrevoEmail;
