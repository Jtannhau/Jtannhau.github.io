// Declare variables to store the ice cream flavor, number of scoops, temperature, and price.
// Update the values of these variables to get each condition to run.
var flavor = "chocolate";
var numberScoops = 3;
var outsideTemperature = 75;
var price = 3.5;

console.log(flavor);
console.log(numberScoops);
console.log(outsideTemperature);
console.log(price);


if (price <= 2.5 || outsideTemperature >= 80 && flavor === "chocolate chip" && numberScoops === 1) {
  console.log("Buy that ice cream cone!!");

} else if (price <= 2.5 || outsideTemperature >= 70 && flavor === "chocolate" && numberScoops > 1) {
  console.log("Ice cream does sound nice right now.");

} else {
  console.log("No ice cream today.");
}
