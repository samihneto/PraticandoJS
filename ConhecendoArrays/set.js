const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const nomesAtualizados = new Set(nomes);

console.log(nomesAtualizados);

// O set é um conjunto, um tipo de dado que armazena valores únicos. Parece um array, mas não é um array.
// É necessário transformar para um array.

const listaNomesAtualizados = [...nomesAtualizados];

// Poderia simplificar deixando em uma linha:
// const listaNomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);