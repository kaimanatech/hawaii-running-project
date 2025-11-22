import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, "../dist/public")));

// Handle SPA routing - all routes serve index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Production server running on port ${PORT}`);
});
