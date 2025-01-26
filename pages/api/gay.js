exports.handler = async (event, context) => {
  try {
    // Parse query parameters
    const params = event.queryStringParameters;
    const username = params.username || '';  // Ensure it defaults to an empty string if not provided

    // Check if username is "bacon"
    if (username.toLowerCase() === "bacon") {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/plain",
        },
        body: "hi",
      };
    } else {
      return {
        statusCode: 302,
        headers: {
          Location: "https://example.com", // Replace with the redirect URL
        },
      };
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
      
