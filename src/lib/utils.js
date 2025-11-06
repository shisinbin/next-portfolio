export function delay(seconds) {
  return new Promise((res) => setTimeout(res, seconds * 1000));
}
