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
    
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;