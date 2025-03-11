class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n(.*)/);
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;