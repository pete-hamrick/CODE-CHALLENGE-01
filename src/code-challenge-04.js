export function getHouses(obj){
    const houses = obj.map(key => key.house)
    const house = Object.values(houses)
    return house;
}