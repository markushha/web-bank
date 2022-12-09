import { cards } from "../../../data";

export default function handler(req, res) {
  console.log(cards)
  res.status(200).json(cards.find(card => card.id === req.query.id))
}
