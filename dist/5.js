function paginate(arr, pageNum, pageSize = 10) {
    if (pageNum < 1) {
        return [];
    }
    return arr.slice((pageNum - 1) * pageSize, pageNum * pageSize);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(paginate(arr, 1)); // [1,2,3,4,5,6,7,8,9,10]
console.log(paginate(arr, 2)); // [11,12]
console.log(paginate(arr, 3));
console.log(paginate(arr, 0));
export {};
