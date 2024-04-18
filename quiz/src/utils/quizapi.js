const axios = require("axios");

async function fetchTriviaQuestions(category, amount) {
  try {
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: amount,
        category: category,
        type: "multiple", // Specify multiple-choice questions
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
