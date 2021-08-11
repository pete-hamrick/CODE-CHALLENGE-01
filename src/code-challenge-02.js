export function fiveAndGreaterOnly(arr){
    return arr.filter(num => num >= 5);
}

export function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

export function fiveCharactersOrFewerOnly(arr){
    return arr.filter(word => word.length <= 5)
}

export function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(person => person.member === true)
}

export function ofAge(arr){
    return arr.filter(person => person.age > 17)
}
//SORT EXERCISES
export function leastToGreatest(arr){
    return arr.sort(function(a, b) {
        return a-b;
    })
}

export function greatestToLeast(arr){
    return arr.sort(function(a, b) {
        return b-a;
    })
}

export function lengthSort(arr){
    return arr.sort(function(a, b) {
        return a.length - b.length
    })
}

export function alphabetical(arr){
    return arr.sort();
}

export function byAge(arr){
    return arr.sort(function(a, b) {
        return a.age-b.age
    })
}