export function howMuchPencil(str) {
    let pencil = [];
    for (let i = 0; i <= str.length; i++) {
        pencil.push(str.slice(i))
    }
    return pencil
}

export function wordsToCharList(str) {
    return str.split('');
}

export function listFoods(recipe){
  return recipe.ingredients.map(item => {
      return item.split(' ').slice(2).join(' ')
  })

}