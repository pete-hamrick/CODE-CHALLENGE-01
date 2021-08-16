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