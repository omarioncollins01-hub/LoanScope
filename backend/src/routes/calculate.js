import express from "express";
import { generateAmortization } from "../amortization/engine.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { loanAmount, interestRate, loanTerm } = req.body;

  const result = generateAmortization(
    Number(loanAmount),
    Number(interestRate),
    Number(loanTerm)
  );

  res.json(result);
});

export default router;
