function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // in ksh.
  const chargePerKm = 15; // in ksh.

  // calculation of total estimated fare
  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  // Output results to console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`Panda Pikipiki!`);
}

// Prompt user for input
const userPromptFare = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm = parseInt(userPrompt, 10);