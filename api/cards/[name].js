import fs from "fs";

export default function handler(req, res) {
  const { name } = req.query;
  const data = JSON.parse(fs.readFileSync("tarot_deck_78.json", "utf-8"));
  const card = data.cards.find(
    (c) => c.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );
  if (!card) return res.status(404).json({ error: "Card not found" });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(card);
}