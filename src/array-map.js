export function doubleNumbers(arr) {
    return arr.map(x => x * 2)
}; //passed

export function stringItUp(arr) {
    return arr.map(x => String(x));
}; //passed

export function capitalizeNames(arr){
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
} //passed

export function namesOnly(arr){
    return arr.map(person => person.name)
}

export function makeStrings(arr){
    return arr.map(person => {
        if (person.age > 17){
            return `${person.name} can go to The Matrix`
        } else {
            return `${person.name} is under age!!`
        }
    })
}

export function readyToPutInTheDOM(arr){
    return arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)
}