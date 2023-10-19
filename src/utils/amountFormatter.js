export function amountFormatter(amount) {
  return (
    parseFloat(parseFloat(amount && amount).toFixed(2)).toLocaleString("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " sats"
  );
}

export function numberFormatter(amount) {
  return parseFloat(parseFloat(amount && amount).toFixed(2)).toLocaleString(
    "en",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
}

export function amountToNumber(amount) {
  return parseFloat(amount.replaceAll(",", ""));
}

export function dollarFormat(amount) {
  return "$ " + (amount.toFixed(2)).toLocaleString("en");
}
