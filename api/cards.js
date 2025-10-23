import fs from "fs";

export default function handler(req, res) {
  const data = JSON.parse(fs.readFileSync("tarot_deck_78.json", "utf-8"));
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data.cards);
}