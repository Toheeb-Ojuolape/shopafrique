export function shortenText(string) {
  if (string.length > 20) {
    return string.slice(0, 15) + "...";
  } else {
    return string;
  }
}
