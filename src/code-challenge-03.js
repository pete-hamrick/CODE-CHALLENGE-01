export function capitalizeObjectKeys(obj){
    const arr = Object.keys(obj);
    return arr.map(str => str.toUpperCase())
}