export function returnTen(str) {
    return str.split('').slice(-10)
}

export function findMax(matrix) {
    return Math.max(...matrix.flat(2))
}

export function totalSum(matrix) {
    let arr = matrix.flat(2)
    return arr.reduce((a, b) => a + b, 0)
}