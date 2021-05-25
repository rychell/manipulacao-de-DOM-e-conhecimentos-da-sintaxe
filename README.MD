# Desenvolvedor WEB
Nesse teste iremos avaliar o seu conhecimento de javascript com situações que ocorrem no dia a dia.
O teste vai ser dividido em duas etapas, a primeira, manipulação de DOM e a segunda sintaxe e lógica.


## Manipulação de DOM
Na raiz deste repositório, abra a pasta manipulacao-de-DOM, lá você encontrará um arquivo html, pastas para css e js.
Na página inicial da aplicação, há algumas funcionalidades que precisam ser desenvolvidas e você deve usar javascript para implementa-las.

Há um arquivo em branco na pasta js chamado "seu-codigo.js" e você deve editar apenas esse arquivo para cumprir o desafio. Caso precise inserir CSS use o arquivo "seu-style.css" que está na pasta css.

⚠⚠⚠ A ALTERAÇÃO DE QUALQUER OUTRO ARQUIVO QUE NÃO SEJAM OS CITADOS ACIMA IRÁ INVALIDAR O SEU TESTE DE MANIPULAÇÃO DE DOM. ⚠⚠⚠

#### Tarefa 1 - Exibir carros por categoria
Na página há um select onde o usuário pode escolher qual categoria de carros ele quer visualizar. Ao selecionar uma opção do select a interface deve atualizar e deixar visível apenas a categoria escolhida pela o usuário.

#### Tarefa 2 - Filtar carros por preços
Na página há um input onde o usuário pode digitar um valor numérico e ao clicar no botão filtrar a interface deve atualizar e deixar visível apenas os carros com o valor maior ou igual ao que foi digitado.

#### Tarefa 3 - Os dois filtros devem funcionar em conjunto
Os dois filtros acima devem ser cumulativos. 
Exemplo: Visualizar itens da categoria X com valores a partir de Y.


## Sintaxe e lógica

Na raiz deste repositório, abra a parta sintaxe-e-logica, lá você encontrará um arquivo chamado index.js, abra este arquivo com seu editor, e escreva funções que resolvam as 3 tarefas a seguir. Suas funções devem ser escritas dentro do próprio index.js. Ah, você pode usar o NodeJS para processar/debugar seu script, use no terminal do VS Code o comando: `node ./sintaxe-e-logica/index.js`.

⚠⚠⚠ A ALTERAÇÃO DE QUALQUER OUTRO ARQUIVO QUE NÃO SEJA O index.js IRÁ INVALIDAR O SEU TESTE DE SINTAXE E LÓGICA. ⚠⚠⚠

#### Tarefa 1 
Crie uma função que receba o objeto `categories` dentro do arquivo index.js e retorne um array com o nome do carro mais antigo de cada categoria.

#### Tarefa 2
Crie uma função que receba o objeto `categories` dentro do arquivo index.js e retorne a média das avaliações dos carros que fazem parte da categoria.

#### Tarefa 3
Crie uma função que receba o objeto `categories` dentro do arquivo index.js e retorne um array com o nome de cada carro.  