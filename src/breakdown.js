const currency = [500, 200, 100, 50, 20, 10, 5, 2, 1];

export function breakdown(amount) {
  const result = [];

  for (const note of currency) {
    while (amount >= note) {
      result.push(note);
      amount -= note;
    }
  }

  return result;
}
