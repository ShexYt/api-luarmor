export default function handler(req, res) {
  const secretKey = "FREE"; // Replace this with your secret key
  const token = req.query.token; // Get token from URL

  if (token !== secretKey) {
    return res.status(403).send("Forbidden");
  }

  const encodedScript = Buffer.from('print("hi")').toString('base64');
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`local decode = game.HttpService:JSONDecode; loadstring(decode([=[${encodedScript}]=]))()`);
}
