const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  try {
    // หา path ที่แท้จริงของไฟล์ JSON
    const filePath = path.join(process.cwd(), "tarot_deck_78.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    const { name } = req.query;
    const decodedName = decodeURIComponent(name).toLowerCase();

    // ค้นหาการ์ดตามชื่อ
    const card = data.cards.find(
      (c) => c.name.toLowerCase() === decodedName
    );

    if (!card) {
      res.status(404).json({ error: "Card not found" });
      return;
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(card);
  } catch (error) {
    console.error("Error reading tarot_deck_78.json:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
}
