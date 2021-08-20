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

export function stepActions(recipe){
  return recipe.steps.map(item => {
    return item.split(' ')[0]
  })
}

export function removeLastCharacters(str, numberOfCharacters){
    if (numberOfCharacters <= 0){
      return str
    }
    if (numberOfCharacters > str.length){
        return ''
    }
    return str.slice(0, -numberOfCharacters)
}

export function totalSumCSV(str){
  let splits = str.split(',');
  return splits.map(item => Number(item)).reduce((a, b) => a + b)
}

export function removeVowels(str){
  return str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')
}