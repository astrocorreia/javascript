let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)  
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Ovalor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}