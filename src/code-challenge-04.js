export function getHouses(obj){
    const houses = obj.map(key => key.house)
    const house = Object.values(houses)
    return house;
}

export function updateNumbers(obj) {
    const arr = Object.entries(obj)
    return arr.map(item => `${item[0]}: ${item[1]}`)
}