/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

let newVelocityKmh, newDistanceKm, remainingFuelKg;

try {
//Convert acceleration from m/s^2 to km/h^2
const accelerationKmh2 = accelerationMs2 * 12960;

//Convert time from seconds to hours
const timeHours = timeSeconds / 3600;

//Convert fuel burn rate from kg/s to kg/h
const fuelBurnRateKgPerHour = fuelBurnRateKgPerSecond * 3600;

//Calculate new distance 
newDistanceKm = initialDistanceKm + (initialVelocityKmh * timeHours);

//Calculate remaining fuel
remainingFuelKg = initialFuelKg - (fuelBurnRateKgPerHour * timeHours);

//Calculate new Velocity
newVelocityKmh = initialVelocityKmh + (accelerationKmh2 * timeHours);

} catch (error) {
  console.error(`Error in calculations: ${error.message}`);
  return;
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






