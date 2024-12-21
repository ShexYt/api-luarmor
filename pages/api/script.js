export default function handler(req, res) {
  const luaCode = 'print("hi")'; // Lua script
  const encodedCode = Buffer.from(luaCode).toString('base64'); // Base64 encode the Lua script

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`loadstring(game:GetService("HttpService"):Base64Decode("${encodedCode}"))()`);
}
