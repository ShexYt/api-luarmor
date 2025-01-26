exports.handler = async (event, context) => {
  const params = event.queryStringParameters;
  const username = params.username;

  if (username === "bacon") {
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
        Location: "https://example.com", // Replace with the site you want to redirect to
      },
    };
  }
};
