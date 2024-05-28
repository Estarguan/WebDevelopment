const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const router = express.Router();

router.get("/questions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.opexams.com/questions-generator",
      {
        params: {
          "api-key": "your-api-key",
          type: "topicBased",
          difficulty: "medium",
          questionType: "MCQ",
        },
      }
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
