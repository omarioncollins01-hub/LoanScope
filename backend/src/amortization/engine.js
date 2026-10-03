export function generateAmortization(loanAmount, interestRate, loanTerm) {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  let balance = loanAmount;
  const schedule = [];

  for (let i = 1; i <= numberOfPayments; i++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    schedule.push({
      paymentNumber: i,
      payment: monthlyPayment,
      principal,
      interest,
      remainingBalance: Math.max(balance, 0),
    });
  }

  return { monthlyPayment, schedule };
}
