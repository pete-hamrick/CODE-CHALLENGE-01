export function fiveAndGreaterOnly(arr){
    return arr.filter(num => num >= 5);
}

export function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

export function fiveCharactersOrFewerOnly(arr){
    return arr.filter(word => word.length <= 5)
}