let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*Podemos colocar assim:
console.log(valores) que vai aparecer como está acima...[8,,1,7,4,2,9]*/

/* Também podemos colocar assim, ocupando muitas linhas do código

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* Essa  maneira que está abaixo facilitou muito,porém, agora está melhor ainda

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*Agora essa é a melhor maneira que está abaixo*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
