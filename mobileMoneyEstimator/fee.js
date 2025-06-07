function estimateTransactionFee(amountToSend) {
  const minimumFee = 10; // in KES
  const maximumFee = 70; // in KES
  const feePercentage = 0.015; // 1.5 /100 in percentage

  // calculation of transcation fee
  let transcationFee = amountToSend * feePercentage;

  if (transcationFee < minimumFee) {
    transcationFee = minimumFee;
  } else if (transcationFee > maximumFee) {
    transcationFee = maximumFee;
  }

  // total amount to be debited
  const amountDebited = amountToSend + transcationFee;

  // Output results to console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transcationFee}`);
  console.log(`Total amount to be debited: KES ${amountDebited}`);
  console.log(`Send Money Securely!`);
}

// Prompt user for input
const userPromptFee = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseInt(userPromptFee, 10);