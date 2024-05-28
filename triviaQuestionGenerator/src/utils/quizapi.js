//const axios = require("axios");
import axios from "axios";

async function fetchTriviaQuestions(category) {
  try {
    const response = await axios.get("https://api.opexams.com", {
      params: {
        "api-key": "e22rXXo43vmsNIPN8zmgSWyUI8aoJ5I",
        type: "topicBased",
        difficuly: "medium",
        topic: category,
        questionType: "MCQ", // Specify multiple-choice questions
      },
    });

    // Handle the response data
    console.log(response.data.results);
    return response.data.results;
    // Process the questions here...
  } catch (error) {
    console.error("Error fetching trivia questions:", error);
  }
}

// Usage example: Fetch 10 trivia questions in the 'Science: Computers' category
// fetchTriviaQuestions(23, 10); // Category ID 18 represents 'Science: Computers'

export default fetchTriviaQuestions;
