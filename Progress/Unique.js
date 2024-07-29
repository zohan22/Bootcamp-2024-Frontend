const arr3 = [1,7,4,2,4,2,1]
const arr4 = [2,5,3,8,9,2,5,3,9]

function encontrarElementoUnico(arr) {
    return arr.filter(elemento => arr.indexOf(elemento) === arr.lastIndexOf(elemento))[0];
}

const elementoUnico = encontrarElementoUnico(arr3);
console.log(elementoUnico);