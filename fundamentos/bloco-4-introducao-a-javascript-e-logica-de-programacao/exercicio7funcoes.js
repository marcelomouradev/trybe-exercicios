let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        
      },
    ],
  };
leitor.livrosFavoritos.push( 
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
);
console.log(leitor.nome +' '+'tem 2 livros favoritos:'+' '+ leitor.livrosFavoritos[1].titulo + ' e '+ leitor.livrosFavoritos[0].titulo);


console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

