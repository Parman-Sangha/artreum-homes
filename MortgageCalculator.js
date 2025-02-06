"use client";
import React, { useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Function to Calculate Mortgage Payment
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Convert annual interest to monthly
    const term = parseFloat(loanTerm) * 12; // Convert years to months

    if (!principal || !rate || !term) {
      alert("Please enter valid values.");
      return;
    }

    const payment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="bg-[#1A1A1A] text-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Mortgage Calculator</h3>
      
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount ($)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Loan Term (Years)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />

        <button
          onClick={calculateMortgage}
          className="w-full bg-[#CDB937] text-black font-bold px-4 py-2 rounded-md hover:bg-[#b49b2e] transition duration-200"
        >
          Calculate Mortgage
        </button>

        {monthlyPayment && (
          <div className="text-lg font-bold text-[#CDB937]">
            Monthly Payment: ${monthlyPayment}
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
