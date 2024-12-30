const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// O Splice tem três parâmetros.
// O primeiro é a posição, partindo de 0 no array
// O segundo é a quantidade de itens a partir da posição
// O terceiro é a inserção de um elemento no lugar do que está sendo retirado
listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);