import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173"}));
app.use(express.json({ limit: "10mb" }));

console.log("Clarifai Key", !!process.env.CLARIFAI_PAT);

app.post("/detect-ingredients", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

const response = await axios.post(
    "https://api.clarifai.com/v2/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs",
  {
    user_app_id: {
      user_id: process.env.CLARIFAI_USER_ID,
      app_id: process.env.CLARIFAI_APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            base64: imageBase64.split(",")[1],
          },
        },
      },
    ],
  },
  {
    headers: {
        Authorization: `Key ${process.env.CLARIFAI_PAT}`,
        "Content-Type": "application/json",
      },
    }
  );
    const concepts =
      response.data.outputs[0].data.concepts;

    const ingredients = concepts
      .filter(item => item.value > 0.75)
      .map(item => ({
        name: item.name,
        confidence: (item.value * 100).toFixed(1),
      }));

    res.json({ ingredients });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Detection failed" });
  }
});

app.get("/ping", (req, res) => {
  res.json({ message: "Backend connected" });
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});



