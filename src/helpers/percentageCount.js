export function percentageCount(maxValue, value) {
  return Math.round((Number(value) * 100) / Number(maxValue));
}

export function leftCount(maxValue, value) {
  const result = maxValue - value;

  return result < 0 ? 0 : result.toFixed(1);
}
