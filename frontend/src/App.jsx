import { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const response = await fetch(http:"//localhost:3000/api/calculate"
, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
        loanAmount,
        interestRate,
        loanTerm
      })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Loan Calculator</h1>

      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Loan Term (years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      {result && (
        <div>
          <h2>Monthly Payment: ${result.monthlyPayment.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
