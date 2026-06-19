import express from "express";

const app = express();
app.use(express.json());

const TOKEN = process.env.AUTH_TOKEN;

app.get("/", (req, res) => {
  res.send("MCP Gateway OK");
});

app.post("/mcp-server/http", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth || auth !== `Bearer ${TOKEN}`) {
    return res.status(401).json({ error: "unauthorized" });
  }

  res.json({
    ok: true,
    message: "gateway working"
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Gateway running on port 3000");
});