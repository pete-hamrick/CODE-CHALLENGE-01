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