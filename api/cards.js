const fs = require("fs");

export default function handler(req, res) {
  try {
    const json = fs.readFileSync("tarot_deck_78.json", "utf-8");
    const data = JSON.parse(json);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data.cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
