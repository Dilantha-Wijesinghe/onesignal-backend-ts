import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Endpoint to send push notification
app.post("/send-notification", async (req: Request, res: Response) => {
  const { title, message, userId } = req.body;

  if (!title || !message) {
    return res.status(400).send("Missing title or message");
  }

  try {
    const response = userId
      ? await sendPushNotificationToUser(title, message, userId)
      : await sendPushNotificationToAll(title, message);
    console.log("Response from OneSignal:", response.data); // Log response
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error sending notification:",
      (error as any).response
        ? (error as any).response.data
        : (error as any).message
    ); // Log error
    res.status(500).json({
      error: (error as any).response
        ? (error as any).response.data
        : (error as any).message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to send push notification to a specific user using OneSignal
async function sendPushNotificationToUser(
  title: string,
  message: string,
  userId: string
) {
  const ONE_SIGNAL_APP_ID = process.env.ONE_SIGNAL_APP_ID;
  const ONE_SIGNAL_API_KEY = process.env.ONE_SIGNAL_API_KEY;

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
  };

  const payload = {
    app_id: ONE_SIGNAL_APP_ID,
    headings: { en: title },
    contents: { en: message },
    include_player_ids: [userId],
  };

  return axios.post("https://onesignal.com/api/v1/notifications", payload, {
    headers,
  });
}

// Function to send push notification to all users using OneSignal
async function sendPushNotificationToAll(title: string, message: string) {
  const ONE_SIGNAL_APP_ID = "dcce0754-e658-48e5-a1a8-b3a234c5b2d8";
  const ONE_SIGNAL_API_KEY = "ZTEwZDg1MzgtZmNkYS00OGI4LWJmN2QtZTQxMDJmNTgwOWQy";

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
  };

  const payload = {
    app_id: ONE_SIGNAL_APP_ID,
    headings: { en: title },
    contents: { en: message },
    included_segments: ["All"],
  };

  return axios.post("https://onesignal.com/api/v1/notifications", payload, {
    headers,
  });
}
