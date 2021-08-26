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


export function grandTotal(stores){
    let sum = []
    for (let store of stores) {
      for (let i in store) {
        if (sum[i]) {
            sum[i] += store[i]
        } else {
            sum[i] = store[i]
        }
      }
    } 
    return sum;
}

export function salesData(hours, data){
    // const data = [];
    // for (let hour of hours) {
        
    // }
}