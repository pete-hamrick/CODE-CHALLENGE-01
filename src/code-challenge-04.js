export function getHouses(obj){
    const houses = obj.map(key => key.house)
    const house = Object.values(houses)
    return house;
}

export function updateNumbers(obj) {
    const arr = Object.entries(obj)
    return arr.map(item => `${item[0]}: ${item[1]}`)
}

export function totalCharacters(arr) {
    const names = Object.values(arr).map(item => item.name)
    const spouse = (Object.values(arr).map(item => item.spouse)).filter(function (thing) {return thing != null;})
    const children = (Object.values(arr).map(item => item.children))
    const kids = children.flat(1)
    console.log(names.length + spouse.length + kids.length)
    return names.length + spouse.length + kids.length
}

// export function hasChildrenEntries(arr, character) {
//     const array = Object.entries(arr);

// } 