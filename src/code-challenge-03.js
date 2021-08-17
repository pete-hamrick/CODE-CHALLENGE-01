export function capitalizeObjectKeys(obj){
    const arr = Object.keys(obj);
    return arr.map(str => str.toUpperCase())
}

export function sortedKeys(obj) {
    const arr = Object.keys(obj);
    return arr.sort(function(a, b) {
        return a.length - b.length;
    })
}

export function getFilteredKey(obj) {
    const arr = Object.keys(obj);
    return arr.filter(word => word === 'age')
}

export function getArrayOfKeysAndValues(obj){
    return Object.entries(obj)
}

export function sortedArraysByValuesLength(obj) {
    const arr = Object.entries(obj)
    return arr.sort(function(a, b) {
        return b[1].length - a[1].length; 
    })
}