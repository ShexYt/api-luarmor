// index.js (for the home page)
exports.handler = async (event) => {
  const userAgent = event.headers['user-agent'];

  // Check if accessed via a web browser
  if (userAgent && userAgent.includes('Mozilla')) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>Access Denied</title>
            <style>
              /* General Body Styling */
              body {
                margin: 0;
                padding: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(135deg, #007bff, #00d4ff);
                font-family: Arial, sans-serif;
                overflow: hidden;
              }

              /* Animated Container */
              .container {
                position: relative;
                padding: 30px;
                width: 80%;
                max-width: 500px;
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                animation: fadeIn 1.5s ease-out;
                text-align: center;
                color: white;
              }

              /* Heading and Notes */
              h1 {
                font-size: 2em;
                margin-bottom: 10px;
                animation: bounce 1s infinite alternate;
              }

              p {
                font-size: 1.2em;
                margin: 0;
              }

              /* Animations */
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.9);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes bounce {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-10px);
                }
              }

              /* Warning Emoji */
              .emoji {
                font-size: 4em;
                margin-bottom: 10px;
                animation: shake 1s infinite;
              }

              @keyframes shake {
                0%, 100% {
                  transform: rotate(0deg);
                }
                25% {
                  transform: rotate(-5deg);
                }
                75% {
                  transform: rotate(5deg);
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="emoji">⚠️</div>
              <h1>Unauthorized User</h1>
              <p>You are not allowed to view this content directly.</p>
            </div>
          </body>
        </html>
      `,
    };
  }

  // Serve Lua code for Roblox HTTP Requests
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: `print("hi")`, // Replace this with your Lua code
  };
};
