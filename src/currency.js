export function calculateNewAmount(conversionRate, amount) {
  const answer = conversionRate * amount;
  return Number(Math.round(answer +'e2') + 'e-2');
}