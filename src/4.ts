function filterArray<T>(arr: T[], condition: (value: T) => boolean): T[]{
    return arr.filter(condition);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

export {}