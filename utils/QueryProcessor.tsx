export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "My Andrew ID is ktaebuny.";
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  // Check for addition queries
  if (query.toLowerCase().includes("plus")) {
    // Extract numbers and compute the result
    const numbers = query.match(/\d+/g)?.map(Number); // Safely handle null
    if (numbers && numbers.length === 2) {
      return (numbers[0] + numbers[1]).toString();
    }
  }

  // Check for multiplication queries
  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number); // Safely handle null
    if (numbers && numbers.length === 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  // Check for largest number queries
  if (query.toLowerCase().includes("largest")) {
    // Extract numbers and find the largest
    const numbers = query.match(/\d+/g)?.map(Number); // Safely handle null
    if (numbers && numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  // Check for numbers that are both square and cube
  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number); // Safely handle null
    if (numbers && numbers.length > 0) {
      const results = numbers.filter((num) => isSquareAndCube(num));
      return results.length > 0 ? results.join(", ") : "None";
    }
  }

  return "";
}

// Helper function to check if a number is both a square and a cube
function isSquareAndCube(num: number): boolean {
  const cubeRoot = Math.cbrt(num);
  const squareRoot = Math.sqrt(num);
  return Number.isInteger(cubeRoot) && Number.isInteger(squareRoot);
}
