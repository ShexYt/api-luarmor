exports.handler = async (event) => {
  const userAgent = event.headers['user-agent'];

  // Check if the request is from a browser (Mozilla in user-agent)
  if (userAgent && userAgent.includes('Mozilla')) {
    return {
      statusCode: 403,  // Forbidden error for browser access
      headers: {
        'Content-Type': 'text/html',
      },
      body: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Forbidden Access</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(135deg, #ff5555, #ff0000);
                font-family: Arial, sans-serif;
                color: white;
              }
              .container {
                text-align: center;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.1);
                padding: 30px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                animation: fadeIn 1.5s ease-out;
              }
              h1 {
                font-size: 3em;
                margin-bottom: 15px;
              }
              p {
                font-size: 1.5em;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Forbidden</h1>
              <p>You are not authorized to view this content.</p>
            </div>
          </body>
        </html>
      `,
    };
  }

  // Serve Lua code for Roblox HTTP Requests (when using game:HttpGet)
  const luaCode = `print("hi")`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain', // Return the Lua code as plain text
    },
    body: luaCode,  // This will be executed via loadstring in Roblox
  };
};
