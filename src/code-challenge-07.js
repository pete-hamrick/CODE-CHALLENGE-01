export function sortByChildren(arr){
    const sorted = arr.sort((a, b) => {
        return a.children.length - b.children.length
    })
    return sorted
};

export function containsW(str) {
    let re = /w/;
    return re.test(str)
};

export function isNum(input){
    let re = /\d/;
    return re.test(input)
}

export function containsWorld(input) {
    let re = /world/;
    return re.test(input)
}

export function isCapitalized(str){
    let re = /[A-Z][a-z]+/g 
    //needs some conditional to return [] if no cap letters
    let arr = str.match(re)
    if (arr === null){
        return []
    } else if (arr.length > 0) {
        return arr
    }
}