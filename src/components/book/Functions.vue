<template>
<page>
<wip />
<h1>4. Descobrindo o poder das funções</h1>
<label entry="capitulo-funcoes" />

<chapter-quote author="Alan Perlis" work=", primeiro ganhador do Turing Award">É melhor termos 100 funções operando em uma estrutura de dados do que 10 funções operando em dez estruturas</chapter-quote>

<h2>4.1. O que são funções</h2>

<p class="text-justify">Na Matemática, <i>uma função é uma relação entre dois conjuntos, onde há uma relação entre cada um de seus elementos</i><bib entry="conceito-funcao" />. Traduzindo isso para programadores, significa que uma função é uma caixa preta que devolve resultados de acordo com os argumentos, ou parâmetros, passados a ela.</p>

<index entry="programação orientada a objetos" />

<p class="text-justify">Para quem está chegando de uma linguagem orientada a objetos, temos classes e objetos como as construções fundamentais. Você pode passar objetos como parâmetros para outros objetos, pode ter objetos que criam objetos, e pode tratar objetos como valores comuns, guardando-os em variáveis se for necessário. Nesse caso, dizemos que objetos são <i>cidadãos de primeira classe</i>.</p>

<p class="text-justify">Uma aplicação criada utilizando Programação Orientada a Objetos é, basicamente, uma rede de pequenos objetos especializados trabalhando juntos para que dados de entrada sejam <i>modificados</i> até que tenhamos a informação esperada no final.</p>

<index entry="programação funcional" />
<p class="text-justify">Em uma linguagem funcional, como é o caso do Clojure, as funções são as construções fundamentais. Você pode passar funções por parâmetros para outras funções, escrever funções que retornam funções e também pode tratá-las como valores comuns. Por isso dizemos que funções são cidadãs de primeira classe.</p>

<p class="text-justify">Em uma aplicação desenvolvida de maneira funcional, temos uma série de funções que <i>transformam</i> os dados de entrada até que tenhamos a informação que queremos.</p>

<box title="O coração do Clojure">
<p class="text-justify">Usando um pouco de licença poética, podemos dizer que funções são o coração da linguagem, e esse capítulo é fundamental para que você consiga aproveitar todo o restante do livro.</p>

<p class="text-justify">O conteúdo está recheado de códigos em Clojure e em JavaScript, com um pouquinho de Ruby e Java, e comprovadamente você vai conseguir absorver melhor o conhecimento se tentar digitar os exemplos ao mesmo tempo em que for lendo.</p>
</box>

<h2>4.2. Transformando dados</h2>

<p class="text-justify">Em Clojure você não modifica dados, mas os transforma. Essa diferença sutil nos força a pensar de uma forma diferente à que estamos acostumados ao resolvermos problemas de forma funcional.</p>

<index entry="JavaScript" />

<p class="text-justify">Para calcularmos a soma de 1 a 10 em JavaScript, precisamos criar uma iteração usando a instrução <code>for</code>, uma variável de controle que vai guardar o número a ser somado em cada iteração e uma variável contadora, que vai guardar o resultado da soma.</p>

<box title="Executando os exemplos">
<p class="text-justify">Para executar os exemplos deste capítulo, utilize o console do Chrome ou do Firebug para os códigos escritos em JavaScript, e o REPL para as instruções escritas em Clojure.</p>

<p class="text-justify">Tanto JavaScript quanto Clojure tem um antepassado em comum, chamado Scheme, o que nos permite usar uma linguagem conhecida para ilustrar os exemplos da linguagem que estamos aprendendo.</p>
</box>

<p class="text-justify">Vamos demonstrar isso usando JavaScript no código a seguir:</p>

<snippet language="javascript">
var soma = 0;

for(var numero = 1; numero &lt; 11; numero++) {
  soma = soma + numero;
}

console.log("Resultado: ", soma);
// Resultado:  55
</snippet>

<p class="text-justify">Perceba que os valores de <code>numero</code> e <code>soma</code> foram modificados pelo menos dez vezes até que tivessemos um resultado final. Pelo fato de seus valores <i>variarem</i> durante a execução do programa, chamamos essas estruturas de <i>variáveis</i>.</p>

<index entry="imutabilidade" />
<p class="text-justify">Em Clojure não temos o conceito de <i>variável</i>. Como regra, uma vez que um valor seja atribuido, ele não pode mais ser alterado. Essa característica é chamada de <i>imutabilidade</i>. No decorrer do livro vamos entender as vantagens de fazermos com que as estruturas de dados sejam imutáveis por padrão.</p>

<p class="text-justify">Para que possamos calcular a soma dos números inteiros de 1 a 10 em Clojure, vamos precisar de uma lista com os números de 1 a 10, que vamos <i>transformar</i> em um número, que será a soma que precisamos.</p>

<index entry="range" />
<p class="text-justify">Vamos usar a função <code>range</code>, que vem na biblioteca padrão do Clojure, que recebe dois parâmetros e retorna uma lista de números inteiros contidos entre o primeiro parâmetro, inclusive, e o menor inteiro anterior ao segundo parâmetro.</p>

<box title="Imutabilidade">

<p class="text-justify">Basicamente, um valor imutável é aquele que não pode ser alterado depois de criado.</p>

<p class="text-justify">Uma estrutura imutável é <i>thread-safe</i>, o que significa que pode ser compartilhada entre diferentes processos sem a necessidade de <i>locks</i> e outros recursos que rapidamente se tornam complicados de gerenciar.</p>

<p class="text-justify">A imutabilidade também torna a aplicação menos sujeita a erros, já que sabemos exatamente onde o valor é criado e qual seu ciclo de vida, reduzindo efeitos colaterais causado por modificações indesejadas ou inesperadas.</p>

<p class="text-justify">Por fim, você pode usar um valor imutável como chave em um <i>hashmap</i> sem medo de ver o <i>hashcode</i> ser alterado durante a execução da aplicação, o que acaba sendo um erro muito comum nas demais linguagens.</p>

</box>

<index entry="var" /><index entry="def" />

<p class="text-justify">Vamos <i>atribuir</i> essa lista a uma construção chamada <code>var</code>, que é criada com a forma especial <code>def</code>, que podemos entender por enquanto como uma variável global. Em seguida vamos exibir o valor do <i>var</i> chamado <code>numeros</code> para que você possa ver que cara tem uma lista em Clojure.</p>

<snippet language="clojure">
(def numeros (range 1 11))

numeros
; (1 2 3 4 5 6 7 8 9 10)
</snippet>

<index entry="reduce" />
<p class="text-justify">Agora vamos utilizar a função <code>reduce</code> para calcularmos a somatória dos itens da lista. Essa função recebe dois parâmetros, sendo o primeiro a função que será aplicada e a segunda a lista que será transformada.</p>

<p class="text-justify">Vamos utilizar a função <code>+</code> para efetuarmos essa soma e nosso código ficará assim:</p>

<snippet language="clojure">
(reduce + numeros)
; 55
</snippet>

<index entry="+" />
<p class="text-justify">O sinal de <code>+</code> é um nome válido de função, simplificando muito a forma como a linguagem é construída. Imagine que, ao invés de tratarmos os sinais aritméticos como se fosse operadores especiais, podemos tratá-los como se fossem funções comuns. Sendo uma função comum, podemos passá-la por parâmetro para outra função, que no nosso caso é <code>reduce</code>.</p>

<index entry="reduce" />
<p class="text-justify">A função <code>reduce</code> pega o primeiro item da lista, <i>1</i>, aplica a função <code>+</code> com o próximo, <i>2</i>. O resultado, <i>3</i> é somado ao próximo item da lista, também o número <i>3</i>. O resultado, <i>6</i> é somado ao próximo item, e assim por diante, até que a lista termine.</p>

<box title="Se você conhece Ruby...">
<p class="text-justify">Em Ruby existem os métodos <code>inject</code> e <code>reduce</code> para objetos <code>Enumerable</code> que fazem a mesma coisa que o <code>reduce</code> do Clojure.</p>

<p class="text-justify">O código em Clojure que apresentamos é o equivalente a <code>(1..10).reduce(:+)</code> em Ruby.</p>
</box>

<index entry="apply" />
<p class="text-justify">Você pode usar também a função <code>apply</code>, que também recebe uma função e uma lista como parâmetros, mas transforma todos os itens da lista em argumentos para a função.</p>

<p class="text-justify">Nesse caso, escreveríamos <code>(apply + numeros)</code>, que internamente será transformado em <code>(+ 1 2 3 4 5 6 7 8 9 10)</code>.</p>

<p class="text-justify">Apesar de <code>reduce</code> e <code>apply</code> serem funções que fazem coisas diferentes, o nosso resultado será o mesmo.</p>

<p class="text-justify">Compare o código completo, exibido a seguir, com o equivalente em JavaScript que exibimos anteriormente:</p>

<snippet language="clojure">
(def numeros (range 1 11))

(println (reduce + numeros))
; 55
</snippet>

<index entry="high order function" />
<p class="text-justify">Quando uma função recebe outra como parâmetro, a chamamos de <i>High Order Function</i> e, apesar do nome pomposo, você vai ver que é algo muito comum quando você utiliza programação funcional.</p>

<p class="text-justify">Caso você queira somar apenas os números pares entre 1 e 10, teríamos que utilizar um <code>if</code> no nosso código JavaScript:</p>

<snippet language="javascript">
var soma = 0;

for(var numero = 1; numero &lt; 11; numero++) {
  if(numero % 2 == 0) {
    soma = soma + numero;
  }
}

console.log("Resultado: ", soma);
// Resultado:  30
</snippet>

<index entry="filter" /><index entry="predicado" />
Em Clojure existe uma função chamada <code>filter</code>, que recebe como parâmetros um <i>predicado</i> e uma lista. Um predicado é uma função que retorna <code>true</code> ou <code>false</code> de acordo com o parâmetro utilizado. A função <code>filter</code> retorna uma nova lista contendo apenas os itens que fizerem o predicado retornar <code>true</code>.

<index entry="even?" />

Como queremos somar apenas os números pares, vamos utilizar uma função chamada <code>even?</code>, que retorna <code>true</code> caso o parâmetro passado seja um número par.

<snippet language="clojure">
(def numeros (range 1 11))

(filter even? numeros)
; (2 4 6 8 10)

numeros
; (1 2 3 4 5 6 7 8 9 10)
</snippet>

<index entry="filter" />

Perceba que, mesmo que <code>filter</code> retorne uma lista de números pares, o valor de <code>numeros</code> continua inalterado. Quando lidamos com imutabilidade, as funções retornam um novo valor, deixando o valor original intacto.

<index entry="reduce" />

Agora que temos nossa lista de números pares, vamos usar o já conhecido <code>reduce</code> para calcular a somatória dos itens:

<snippet language="clojure">
(def numeros (range 1 11))

(println
  (reduce +
    (filter even? numeros)))
; 30
</snippet>

Novamente, compare com o código escrito em JavaScript e note a simplicidade da versão em Clojure.

<h2>4.3. Funções anônimas</h2>

Tanto a função <code>+</code> quanto a função <code>even?</code> fazem parte da biblioteca padrão do Clojure, que nos ajuda a resolver boa parte dos problemas. Mas, e se precisarmos de algo específico, que não existe na biblioteca padrão e em nenhuma biblioteca de terceiros? Nesse caso precisaremos criar nossas próprias funções.

Vamos supor que, ao invés de calcularmos a soma dos números pares entre 1 e 10, precisássemos calcular os múltiplos de 3 dentro dessa faixa de números.

Se for o caso de usarmos essa lógica apenas uma vez, podemos criar uma função anônima para usarmos como predicado e selecionar apenas os múltiplos de 3:

<snippet language="clojure">
(def numeros (range 1 11))

(filter
  (fn [num] (= 0 (mod num 3)))
  numeros)
</snippet>

<index entry="fn" />

Uma função anônima é definida através da macro <code>fn</code>, recebendo em seguida um vetor com os parâmetros, delimitador por colchetes e, finalmente, a sequência de instruções a serem executadas. Funções anônimas também são chamadas de <i>lambdas</i> ou <i>funções lambda</i> em outras linguagens.

Em Clojure não existe a palavra chave <code>return</code>, como acontece no JavaScript, e a função retorna o valor da última expressão avaliada, como acontece em Ruby.

<box title="Formas especiais">
Nos dialetos LISP, uma <i>forma especial</i> é uma construção primitiva da linguagem, avaliada de forma diferente das demais pelo compilador. A partir das formas especiais é possível construir macros e funções que formam a biblioteca padrão da linguagem.

<index entry="source" />

Em Clojure é possível ver o código fonte de funções e macros através da macro <code>source</code>, disponível no namespace <code>clojure.repl</code>, mas você não consegue ver o código fonte das formas especiais a menos que olhe o código fonte do compilador.
</box>

Quando utilizamos funções anônimas, é importante que façam o mínimo necessário, para que o nosso código não fique amontoado e difícil de entender.

<index entry="#( )" />
Existe uma forma mais concisa de escrevemos funções anônimas, onde usamos <code>#( )</code> ao invés de <code>fn</code>.

Reescrevendo nosso código, teríamos:

<snippet language="clojure">
(def numeros (range 1 11))

(filter
  #(= 0 (mod % 3))
  numeros)
</snippet>

Perceba que não precisamos definir a lista de parâmetros para a função e podemos utilizá-los através do símbolo <code>%</code> quando temos apenas um parâmetro, ou <code>%1</code>, <code>%2</code> e assim por diante quando tivermos mais de um argumento.

<index entry="=" /><index entry="mod" />

Perceba também que tanto <code>=</code>, que compara a igualdade de dois ou mais valores, e <code>mod</code>, que retorna o resto de divisão entre dois números, também são funções.

<h2>4.4. Dando nomes às funções</h2>

Normalmente precisamos usar uma função mais de uma vez, e para isso ela precisa de um nome. Para isso basta criarmos um <i>var</i> e atribuir uma função anônima a ele.

Para demonstrar isso, vamos criar um código que calcule a soma dos dobros dos números entre 1 e 10.

Podemos criar um <i>var</i> chamado <code>dobro</code> e atribuir uma função anônima que multiplica o valor recebido por dois:

<snippet language="clojure">
(def dobro (fn [x] (* x 2)))
</snippet>

<index entry="defn" />

Essa forma acaba deixando o código longo demais desnecessariamente. Então foi criada uma forma reduzida <code>defn</code>, que deixa a declaração de função mais parecida com o que já estamos habituados:

<snippet language="clojure">
(defn dobro [x] (* x 2))
</snippet>

<index entry="map" />
Para transformarmos nossa lista de números de 1 a 10 em uma lista de dobros, vamos utilizar a função <code>map</code>, que aplica a função que você informar a cada um dos itens da lista, retornando uma nova lista modificada. Vamos passar a função <code>dobro</code> e nossa já conhecida lista de números como parâmetro.

Nosso código completo ficaria assim:

<snippet language="clojure">
(def numeros (range 1 11))

(defn dobro [x] (* x 2))

(reduce + (map dobro numeros))
</snippet>

<box title="Transformando valores">
As funções <code>map</code>, <code>reduce</code>, <code>filter</code> e <code>apply</code> são, sem dúvida, as mais importantes quando precisamos transformar ou calcular informações em uma linguagem funcional.

Boa parte das funções utilizadas em Clojure usam alguma dessas funções internamente para chegar ao resultado esperado.
</box>

<h2>4.5. Sobrecarga de função e parâmetros opcionais</h2>

No nosso exemplo anterior, criamos uma função chamada <code>dobro</code> que recebe um número e retorna seu dobro. Se você tentar executar <code>dobro</code> sem passar parâmetro nenhum, ou se passar mais de um parâmetro, receberemos um erro do compilador.

<snippet language="clojure" title="Chamando dobro sem parâmetros" label="cap04-dobro-0">
(dobro)

; ArityException Wrong number of args (0) passed to: user$dobro
</snippet>

E se quisermos escrever uma função que receba vários nomes e nos retorne o que tiver mais letras?

<index entry="sobrecarga de funções" />
Podemos escrever a nossa primeira versão usando <i>sobrecarga de funções</i>. A sobrecarga ocorre quando você tem um mesmo nome de função com diferentes <i>assinaturas</i>.

<index entry="Java" />
A assinatura de uma função, em Clojure, é a quantidade de parâmetros que a função recebe. Em Java, a assinatura depende da quantidade de parâmetros e de seus respectivos tipos.

Por exemplo, nesse código em Java:

<snippet language="java">
public class Sobrecarga {
  public void metodo( ) {
    System.out.println("Não tenho parâmetros");
  }

  public void metodo(String texto) {
    System.out.println("Eu recebi uma String");
  }

  public void metodo(int numero) {
    System.out.println("Eu recebi um numero");
  }

  public void metodo(String texto, int numero) {
    System.out.println("Eu recebi uma String e um numero");
  }
}
</snippet>

Agora vamos usar a própria função <code>main</code> para exibir o resultado:

<snippet language="java">
public void static main(String[] args) {
  Sobrecarga objeto = new Sobrecarga();

  objeto.metodo();
  // imprime: Não tenho parãmetros

  objeto.metodo("Plínio");
  // imprime: Eu recebi uma String

  objeto.metodo(42);
  // imprime: Eu recebi um numero

  objeto.metodo("Douglas Adams", 42);
  // imprime: Eu recebi uma String e um numero
}
</snippet>

Perceba que foram executados blocos diferentes de código de acordo com o tipo e a quantidade de argumentos.

<index entry="aridade" />

Como não declaramos o tipo do parâmetro de uma função em Clojure, a única coisa que diferencia um bloco de outro é sua <i>aridade</i>. Aridade nada mais é do que a quantidade de parâmetros que uma função recebe.

Para utilizar sobrecarga de funções em Clojure, declaramos a função uma única vez, separando os blocos de acordo com suas respectivas aridades.

Colocando a mão na massa, nossa função teria essa cara:

<snippet language="clojure">
(defn maior-nome
  ([a]
    a)
  ([a b]
    (if (> (count a) (count b)) a b)))
</snippet>

Não é bonito, mas funcionou bem com um ou dois nomes. E se quisermos colocar três nomes? E com oito nomes?

<index entry="função variádica" /><index entry="&amp;" />

Aí entra em cena o conceito de <i>função variádica</i>, ou <i>função de aridade variável</i>. Esses nomes bonitões querem dizer que a função aceita um número variável de argumentos.

Para isso, basta utilizar o símbolo <code>&amp;</code> antes do argumento na declaração da função:

<snippet language="clojure">
(defn funcao
  ([]
    (println "Não tenho parâmetros"))
  ([&amp; b]
    (println "Tenho um ou mais parâmetros" b)))
</snippet>

E, em seguida, vamos testar a função:

<snippet language="clojure">
(funcao)

(funcao 1 2 3 4)
</snippet>

No nosso exemplo, quando você usa um ou mais argumentos, <code>b</code> guarda um array contendo os itens que foram passados por parâmetro. A partir daí você pode transformá-los ou <i>consumí-los</i>, conforme a sua necessidade.

<box title="Consumindo itens">
<i>Consumir</i> uma lista significa que você vai processar o primeiro item e passar o resto da lista por parâmetro para que seja processada novamente, de maneira recursiva.

Mais para frente vamos aprender recursão e você vai perceber que essa é uma estratégia muito comum quando lidamos com estruturas imutáveis.
</box>

Voltando à nossa função <code>maior-nome</code>, vamos escrever uma segunda versão de forma mais simples e elegante:

<snippet language="clojure">
(defn maior-nome [& nomes]
  ; aqui vem o código
  )
</snippet>

Sabemos que <code>nomes</code> contém uma lista de <i>strings</i>, contendo os nomes que passarmos para a função.

<index entry="sort" /><index entry="sort-by" />

Existem duas funções para ordenar listas em Clojure: <code>sort</code> e <code>sort-by</code>. Vamos criar uma lista chamada <code>lista-nomes</code> para simularmos o conteúdo de <code>nomes</code> enquanto não escrevemos o código da função.

Primeiro vamos tentar ordenar usando <code>sort</code>:

<snippet language="clojure">
(def lista-nomes ["Plínio" "Paulo" "Igor" "Gustavo"])

(sort lista-nomes)
; ("Gustavo" "Igor" "Paulo" "Plínio")
</snippet>

A lista foi ordenada alfabeticamente, e não pelo tamanho dos nomes. Fica claro que a função <code>sort</code> não serve para o que queremos.

<index entry="count" />

Já a função <code>sort-by</code> permite que você informe a função que será usada para ordenar a lista. Vamos usar a função <code>count</code>, que retorna a quantidade de caracteres em um texto.

<snippet language="clojure">
(count "Um texto qualquer")
; 17

(sort-by count lista-nomes)
; ("Igor" "Paulo" "Plínio" "Gustavo")
</snippet>

Agora temos a nossa lista ordenada do menor nome, Igor, para o maior nome, Gustavo.

Para extrairmos o último item da lista, podemos escolher qual estratégia utilizar.

<index entry=">" />

Podemos informar à função <code>sort-by</code> que devemos ordenar a lista de forma decrescente, passando a função <code>></code> como parâmetro, ao invés do padrão crescente e então selecionar apenas o primeiro item através da função <code>first</code>.

A função <code>></code> indica que <i>a palavra maior vem antes</i>, e que a menor vem depois:

<snippet language="clojure">
(first (sort-by count > lista-nomes))
</snippet>

<index entry="last" /><index entry="reverse" />

Podemos também manter a ordenação crescente e selecionar apenas o último item através da função <code>last</code>. Ou também podemos manter a ordenação crescente, utilizar a função <code>reverse</code> para inverter a lista e então utilizar <code>first</code> para selecionar o primeiro item.

<snippet language="clojure">
(last (sort-by count lista-nomes))

(first (reverse (sort-by count lista-nomes)))
</snippet>

Escolhendo a primeira estratégia para montar nossa função, nosso código completo ficaria assim:

<snippet language="clojure">
(defn maior-nome [& nomes]
  (first (sort-by count > nomes)))

(maior-nome)
; nil

(maior-nome "João")
; "João"

(maior-nome "João" "Pedro")
; "Pedro"

(maior-nome "Plínio" "Paulo" "Igor" "Gustavo")
; "Gustavo"
</snippet>

Agora podemos usar quantos nomes quisermos e a função continuará nos trazendo o maior nome.

<h2>4.6. Documentação</h2>

<index entry="doc" />

O Clojure fornece uma macro <code>doc</code> que apresenta a documentação da função informada.

<snippet language="clojure">
(defn maior-nome [& nomes]
  (first (sort-by count > nomes)))

(doc maior-nome)
; -------------------------
; user/maior-nome
; ([& nomes])
;   nil

(doc +)
; -------------------------
; clojure.core/+
; ([] [x] [x y] [x y & more])
;   Returns the sum of nums. (+) returns 0. Does not auto-promote
;   longs, will throw on overflow. See also: +'
</snippet>

Na função que acabamos de criar não existe documentação nenhuma, enquanto a função <code>+</code> tem um breve texto explicativo que, se não ensina a linguagem para quem está tendo o primeiro contato, pelo menos auxilia aquele que tem alguma pequena noção de como utilizar.

Vamos adicionar um pequeno texto explicativo à nossa função e vamos testar novamente. Note que a documentação nada mais é do que uma <i>string</i> na declaração da função.

<snippet language="clojure">
(defn maior-nome
  "Recebe vários nomes e retorna o que tiver a maior
   quantidade de letras. Caso dois nomes tenham o mesmo
   tamanho e sejam os maiores, será retornando apenas
   um. Caso não seja informado nenhum nome, retorna nil."
  [& nomes]
  (first (sort-by count > nomes)))
</snippet>

O texto não ficou tão curto assim, mas é suficiente para que qualquer pessoa que entenda português consiga saber para que ela serve e como usar. Ao utilizarmos <code>doc</code> novamente, teremos:

<snippet language="clojure">
(doc maior-nome)
-------------------------
; user/maior-nome
; ([& nomes])
;   Recebe vários nomes e retorna o que tiver a maior
;   quantidade de letras. Caso dois nomes tenham o mesmo
;   tamanho e sejam os maiores, será retornando apenas
;   um. Caso não seja informado nenhum nome, retorna nil.
</snippet>

Apesar de não ser obrigatório, o uso do texto de documentação sempre deve ser considerado ao desenvolver bibliotecas para terceiros. Existem ferramentas que automatizam a geração de documentação em diversos formatos usando esses textos como base.

<h2>4.7. Criando escopos locais</h2>

Quando escrevemos código em JavaScript, usamos a palavra chave <code>var</code> para declarar tanto variáveis locais quando globais. Vamos declarar uma variável chamada <code>valor</code>, exibir seu valor antes e depois da função <code>calculaPreco</code>. Dentro da função <code>calculaPreco</code> vamos criar outra variável que também vamos chamar de <code>valor</code>.

O comportamento esperado é que o valor dentro da função não afete o valor que está do lado de fora. Na listagem <label entry="cap04-escopo-0" /> vamos ver isso na prática:

<snippet language="javascript" title="Diferentes escopos com JavaScript" label="cap04-escopo-0">
var valor = 10;

function calculaPreco (quantidade) {
  var valor = quantidade * 2;

  console.log("O valor dentro da função é", valor);
}

console.log("O valor antes de calculaPreco é", valor);

calculaPreco(30);

console.log("O valor depois de calculaPreco é", valor);
</snippet>

Na imagem <label entry="escopo-javascript" /> podemos ver o resultado:

<image src="images/capitulo_04/escopo_javascript.png" description="Diferentes escopos com JavaScript" label="escopo-javascript" width="80%"/>

<index entry="shadowing" />
A mesma coisa acontece quando escrevemos código em Java ou Ruby. Quando declaramos uma variável em uma função com o mesmo nome de uma variável global, ocorre algo chamado <i>shadowing</i>, onde a variável do menor escopo <i>esconde</i> a variável do escopo maior.

Seguindo essa lógica, podemos pensar que basta usarmos <code>def</code> dentro da função para que possamos utilizar valores locais, certo?

Errado. Vamos descobrir logo que não é bem assim que a coisa funciona em Clojure.

Na listagem <label entry="cap04-escopo-1" /> vamos usar <code>def</code> para escrever o mesmo código que fizemos anteriormente com JavaScript.

<snippet language="Atribuindo valores com def" label="cap04-escopo-1">
(def valor 10)

(defn calcula-preco [quantidade]
  (def valor (* quantidade 2))
  (println "O valor dentro da função é" valor))

(println "O valor antes de calcula-preco é" valor)
; O valor antes de calcula-preco é 10

(calcula-preco 30)
; O valor dentro da função é 60

(println "O valor depois de calcula-preco é" valor)
; O valor depois de calcula-preco é 60
</snippet>

O valor contido em <code>valor</code> foi alterado globalmente, e não era isso que estávamos esperando.

<index entry="def" /><index entry="Var" />
Ao utilizarmos a forma <code>def</code> para atribuir um valor a um símbolo, estamos criando uma estrutura chamada <i>var</i> para armazenar esse valor. Esse <i>var</i> é visível em toda a aplicação e, alguns casos que veremos nos capítulos seguintes, pode ter seu valor modificado.

Uma boa regra para o desenvolvimento de software é manter o valor dentro do menor escopo possível, e isso não é possível utilizando <i>var</i>.

<index entry="let" />

<index entry="escopo local" /><index entry="contexto léxico" /><index entry="escopo léxico" /><index entry="escopo estático" /><index entry="local binding" />
Em Clojure temos uma forma chamada <code>let</code> que cria um escopo local, chamado também de <i>contexto léxico</i>, <i>escopo léxico</i> ou <i>escopo estático</i>, e ainda <i>atribui valores a símbolos de maneira imutável</i>. Isso significa que, uma vez que um símbolo receba um valor, algo chamado de atribuição ou <i>binding</i>, não podemos mais alterá-lo enquanto estivermos dentro daquele escopo.

<box title="O let no JavaScript">
A partir de sua versão 1.7<bib entry="let-javascript" />, o JavaScript também passou a ter uma palavra chave <code>let</code>, que também serve para atribuir valores em escopos locais. Porém, como JavaScript não faz uso de imutabilidade, essa versão de <code>let</code> permite que os valores sejam alterados após a atribuição.
</box>

O <code>let</code>, em sua forma mais simples, recebe como parâmetro um vetor contendo um par de itens para cada atribuição. O primeiro item desse par é o símbolo que vai receber o valor, e o segundo é o valor propriamente dito. Esse símbolo é chamado de <i>local binding</i>, algo como <i>atribuição local</i>:

<snippet language="clojure" title="let em sua forma mais simples" label="cap04-escopo-2">
(let [x 5]
  (println "O valor de x é" x))
; O valor de x é 5

(println "Tentando acessar x fora do escopo" x)
; CompilerException java.lang.RuntimeException:
;  Unable to resolve symbol: x in this context
</snippet>

Na listagem <label entry="cap04-escopo-2" /> podemos ver que <code>x</code> só existe dentro do escopo criado pelo <code>let</code>. Ao tentarmos acessar <code>x</code> fora do escopo, recebemos um erro.

Vamos reescrever em Clojure o código da listagem <label entry="cap04-escopo-0" />, que fizemos em JavaScript, mas usando escopo local:

<snippet language="clojure" title="Atribuindo valores com escopo local" label="cap04-escopo-3">
(def valor 10)

(defn calcula-preco [quantidade]
  (let [valor (* quantidade 2)]
    (println "O valor dentro da função é" valor)))

(println "O valor antes de calcula-preco é" valor)
; O valor antes de calcula-preco é 10

(calcula-preco 30)
; O valor dentro da função é 60

(println "O valor depois de calcula-preco é" valor)
; O valor depois de calcula-preco é 10
</snippet>

Veja que agora a função não alterou o valor do <i>var</i> que criamos no início do código. Aqui também ocorre <i>shadowing</i>, permitindo que você crie <i>local bindings</i> com o mesmo nome dos <i>vars</i> já existentes na aplicação, como vimos ao criar o <i>local binding</i> <code>valor</code> dentro da função <code>calcula-preco</code>.

O mesmo pode ser feito ao criarmos um <i>local binding</i>, ou simplesmente <i>local</i>, com o mesmo nome de um dos parâmetros da função. O tal do <i>shadowing</i> torna isso possível:

<snippet language="clojure" title="Demonstrando shadowing" label="cap04-escopo-4">
(def numero 42)

(defn demonstra-shadowing [numero]
  (println "No inicio da funcao numero vale" numero)
  (let [numero 1]
    (println "Dentro do let numero vale" numero))
  (println "No fim da funcao numero vale" numero))

(println "O var numero vale" numero)
; O var numero vale 42

(demonstra-shadowing 35)
; No inicio da funcao numero vale 35
; Dentro do let numero vale 1
; No fim da funcao numero vale 35
</snippet>

<index entry="var" /><index entry="#'" />
Caso você queira ver o valor do <i>var</i> mesmo quando ocorre <i>shadowing</i>, você deve utilizar a <i>forma qualificada</i>, informando o <i>namespace</i> e o nome do <i>var</i> separados pelo caracter <code>/</code>.

<snippet language="clojure">
(def numero 42)

(println "numero vale" numero)
; numero vale 42

(let [numero 35]
  (println "Valor com shadowing" numero)
  (println "Valor sem shadowing" user/numero))
; Valor com shadowing 35
; Valor sem shadowing 42
</snippet>

Outra característica do <code>let</code> é que, pelo fato das atribuições ocorrerem sequencialmente, você pode quebrar seu código em pequenos passos lógicos, tornando-o mais fácil de entender.

<h3>Usando let para melhorar o código</h3>

<index entry="Bhaskara" /><index entry="equação quadrática" />
A maneira mais conhecida de se resolver equações de segundo grau é através do que chamamos no Brasil de <i>fórmula de Bhaskara</i>, que podemos ver na figura <label entry="bhaskara" />. Nos demais países ela é conhecida apenas por <i>equação quadrática<i> ou </i>fórmula geral para resolução da equação polinomial do segundo grau</i><bib entry="equacao-quadratica" />. Para fins de concisão, vamos chamar apenas de <i>Bhaskara</i>.

<image src="images/capitulo_04/bhaskara.jpg" description="Equação quadrática" label="bhaskara" width="30%"/>

Uma equação de segundo grau se apresenta na forma <code>ax² + bx + c = 0</code>, sendo <code>a</code>, <code>b</code> e <code>c</code> valores numéricos sem nada de especial. Esse tipo de equação apresenta dois valores válidos para <code>x</code>, que são chamados de <i>raízes</i>.

Para encontrar os valores dessas raízes, vamos criar uma função chamada <i>bhaskara</i>, que recebe três parâmetros referentes aos valores de <code>a</code>, <code>b</code> e <code>c</code> e retorna um vetor de duas posições, contendo as raízes da equação.

Na listagem <label entry="cap04-escopo-5" />, vamos implementar essa função com um código compacto, mas difícil de ler.

<index entry="Math/sqrt" />

<snippet language="clojure" title="Equação quadrática pelo jeito curto e difícil de ler" label="cap04-escopo-5">
(defn bhaskara [a b c]
  [(/ (+ (- b) (Math/sqrt (- (* b b) (* 4 a c)))) (* 2 a))
   (/ (- (- b) (Math/sqrt (- (* b b) (* 4 a c)))) (* 2 a))])

(bhaskara 1 -1 -2)
; [2.0, -1.0]
</snippet>

Vamos começar quebrando a equação, calculando o discriminante, ou delta, separadamente. Apesar do delta se referir apenas a <code>b² - 4ac</code>, conforme exibido na figura <label entry="bhaskara-delta" />, vamos incluir também o cálculo de raiz quadrada, para que nosso código fique mais organizado.

<image src="images/capitulo_04/bhaskara_delta.png" description="Discriminante, ou delta" width="30%" label="bhaskara-delta" />

Vamos separar o discriminante num <i>local binding</i> chamado <code>delta</code>, e vamos usar o corpo da função para calcular o restante da equação, de acordo com a figura <label entry="bhaskara-simplificado" />.

<image src="images/capitulo_04/bhaskara_simplificado.png" description="Equação com o delta separado" width="30%" label="bhaskara-simplificado" />

Separando o delta do restante da equação, nosso código ficaria assim:

<snippet language="clojure" title="Equação quadrática com o delta isolado" label="cap04-escopo-6">
(defn bhaskara [a b c]
  (let [delta (Math/sqrt (- (* b b) (* 4 a c)))]
    [(/ (+ (- b) delta) (* 2 a))
     (/ (- (- b) delta) (* 2 a))]))

(bhaskara 1 -1 -2)
; [2.0, -1.0]
</snippet>

Podemos separar também <code>b²</code> como uma parte separada, para deixar o cálculo de <code>delta</code> mais limpo. Podemos fazer o mesmo com <code>-b</code>, e até mesmo separar as duas raízes em <code>x1</code> e <code>x2</code>.

Nosso código vai ficar mais extenso, mas os passos lógicos ficam mais claros. A partir deste ponto, fique à vontade para continuar quebrando o código em quantos passos você achar necessário. O tempo e a experiência vão te ensinar a decidir quando escrever código mais detalhado e quando escrever código mais conciso.

<snippet language="clojure" title="Equação quadrática com as partes separadas" label="cap04-escopo-7">
(defn bhaskara [a b c]
  (let [b-quadrado (* b b)
        menos-b (- b)
        delta (Math/sqrt (- b-quadrado (* 4 a c)))
        x1 (/ (+ menos-b delta) (* 2 a))
        x2 (/ (- menos-b delta) (* 2 a))]
    [x1 x2]))

(bhaskara 1 -1 -2)
; [2.0, -1.0]
</snippet>

<h3>Um pequeno truque com let</h3>

Enquanto escrevia este capítulo, digitei o código abaixo para demonstrar como um <i>local binding</i> não pode ser alterado depois de criado:

<snippet language="clojure">
(let [valor 3
      valor 42]
  (println valor))
; 42
</snippet>

Era esperado que um erro de execução ocorresse, mas acabou sendo exibido o último valor atribuido.

Ao pesquisar mais um pouco<bib entry="change-let" /> descobri que, internamente, a linguagem cria um novo escopo léxico para atribuir <i>42</i> ao <i>binding</i> <code>valor</code>.

Então, na prática, esse código vai ser transformado em:

<snippet language="clojure">
(let [valor 3]
  (let [valor 42]
    (println 42)))
; 42
</snippet>

A segunda declaração de <code>valor</code> vai fazer shadowing na primeira, fazendo com que o <i>3</i> não possa ser acessado.

Então você se pergunta onde é que isso seria usado.

Existe um macete bem interessante para podermos depurar os valores do <i>binding</i> passo a passo.

O símbolo <code>_</code> é um identificador válido em Clojure, mas normalmente é utilizado para indicar que aquele valor não vai ser aproveitado.

Vamos utilizar esse símbolo apenas para ocupar espaço enquanto usamos a função <code>println</code> para exibir os valores conforme os <i>binding</i> vão sendo executados. Vamos aproveitar a listagem <label entry="cap04-escopo-7" /> para exibir passo a passo o que está acontecendo no nosso cálculo.

Quando usamos um símbolo ou um valor apenas para ocupar espaço, dizemos que ele é um <i>placeholder</i>.

<snippet language="clojure" title="Depurando o binding" label="cap04-escopo-8">
(defn bhaskara [a b c]
  (let [b-quadrado (* b b)
        _ (println "b² =" b-quadrado)
        menos-b (- b)
        _ (println "-b =" menos-b)
        delta (Math/sqrt (- b-quadrado (* 4 a c)))
        _ (println "delta =" delta)
        x1 (/ (+ menos-b delta) (* 2 a))
        _ (println "x1 =" x1)
        x2 (/ (- menos-b delta) (* 2 a))
        _ (println "x2 =" x2)]
    [x1 x2]))

(bhaskara 1 -1 -2)
; b² = 1
; -b = 1
; delta = 3.0
; x1 = 2.0
; x2 = -1.0
; [2.0 -1.0]
</snippet>

<h3>Declarando funções locais</h3>

Em alguns casos é necessário criar funções que serão usadas apenas dentro daquele escopo local.

Vamos usar novamente o código da listagem <label entry="cap04-escopo-7" /> para demonstrar como podemos fazer isso.

Para calcular <code>delta</code>, estamos usando <code>Math/sqrt</code>, que é o método estático <code>sqrt</code> da classe Java <code>Math</code>. Apesar de funcionar muito bem, podemos argumentar que a chamada dessa forma não está com cara de Clojure e bagunça a leitura do código.

Vamos criar um <i>binding</i> com o nome de <code>raiz</code>, que contém uma função que recebe um parâmetro e calcula a respectiva raiz quadrada usando o método do Java.

<snippet language="clojure" title="Declarando uma função local com binding" label="cap04-escopo-8">
(defn bhaskara [a b c]
  (let [raiz (fn [x] (Math/sqrt x))
        b-quadrado (* b b)
        menos-b (- b)
        delta (raiz (- b-quadrado (* 4 a c)))
        x1 (/ (+ menos-b delta) (* 2 a))
        x2 (/ (- menos-b delta) (* 2 a))]
    [x1 x2]))

(bhaskara 1 -1 -2)
; [2.0, -1.0]
</snippet>

O nosso cálculo de <code>delta</code> ficou um pouco mais limpo a partir do momento em que escondemos a chamada ao Java dentro de uma função. Uma função que esconde, ou <i>empacota</i>, uma chamada ao Java é chamada de <i>wrapper</i>.

É comum na biblioteca padrão do Clojure que se juntem dois operadores para formar um. Vimos isso com a forma <code>defn</code>, que é a junção de <code>def</code> com <code>fn</code>.

<index entry="letfn" />

Ao invés de usarmos um <code>fn</code> dentro de um <code>let</code>, podemos usar a forma <code>letfn</code>, que internamente opera de modo similar.

Na listagem <label entry="cap04-escopo-9" />, reescrevemos o nosso código usando <code>letfn</code> para separar a declaração de função local dos passos lógicos do nosso código.

<snippet language="clojure" title="Declarando uma função local com letfn" label="cap04-escopo-9">
(defn bhaskara [a b c]
  (letfn [(raiz [x] (Math/sqrt x))]
    (let [b-quadrado (* b b)
          menos-b (- b)
          delta (raiz (- b-quadrado (* 4 a c)))
          x1 (/ (+ menos-b delta) (* 2 a))
          x2 (/ (- menos-b delta) (* 2 a))]
      [x1 x2])))

(bhaskara 1 -1 -2)
; [2.0, -1.0]
</snippet>

Perceba que a sintaxe de <code>letfn</code> é uma mistura de <code>defn</code> com <code>let</code>, onde você precisa informar o nome, a lista de argumentos e o corpo da função dentro de um vetor.

<index entry="escopo global" /><index entry="escopo léxico" /><index entry="escopo dinâmico" />
<h2>4.8. Escopos global, léxico e dinâmico</h2>

O escopo que conhecemos de linguagens como C, Java, Ruby e várias outras e usamos praticamente o tempo todo com <code>let</code> ou dentro de funções é o <i>escopo léxico</i>, como vimos há pouco.

Nesse tipo de escopo uma informação existe apenas num intervalo específico de código.

Em Clojure, ao criarmos um escopo dentro de outro e atribuirmos valores a um mesmo símbolo declarado em cada um desses escopos, o símbolo do escopo mais interno vai esconder o valor referenciado pelo símbolo do escopo imediatamente menos interno. Isso é chamado <i>shadowing</i>, como também vimos neste capítulo.

Dica: quando executar os códigos a seguir, não precisa digitar os números de linha. Coloquei-os aqui apenas para facilitar a explicação na sequencia.

<snippet language="clojure">
(def lexico :batata)                                ;  1

(println "Antes do let:" lexico)                    ;  2
; Antes do let: :batata

(let [lexico :abobora]                              ;  3
  (println "Dentro do escopo local" lexico)         ;  4
  (let [lexico :feijao]                             ;  5
    (println "Escopo local mais interno" lexico))   ;  6
  (println "Escopo local menos interno" lexico))    ;  7
; Dentro do escopo local :abobora
; Escopo local mais interno :feijao
; Escopo local menos interno :abobora

(println "Fora do escopo local"  lexico)            ;  8
; Fora do escopo local :batata
</snippet>

Na linha <i>1</i> definimos um <i>var</i> chamado <code>lexico</code> e exibimos seu valor na linha <i>2</i>.

Já na linha <i>3</i> criamos um <i>local binding</i> com o mesmo nome do <i>var</i> e atribuimos outro valor, exibido na linha <i>4</i>. Na linha <i>5</i> criamos outro escopo dentro do escopo existente e atribuimos ainda outro valor. Esse valor do escopo mais interno esconde o valor do escopo imediatamente acima, que já estava escondendo o valor do escopo mais amplo.

Já o <i>escopo global</i> é uma aplicação do escopo léxico que pode nos trazer incontáveis dores de cabeça. É quando temos um valor pode ser acessado de qualquer parte do sistema.

Se o valor puder apenas ser acessado, não há tanto problema. A coisa fica feia quando qualquer parte do sistema pode <i>acessar e modificar</i> o valor. Isso pode nos levar a inconsistências e comportamentos inesperados.

Vamos ver um dos problemas em utilizar dados no escopo global.

<snippet language="clojure">
(def global :carvao)                                ;  1

(println "Estado global:" global)                   ;  2
; Estado global: :carvao

(let [lexico :carne]                                ;  3
  (println "Dentro do escopo local" lexico)         ;  4
  (def global :cerveja)                             ;  5
  (println "Dentro do escopo local" lexico))        ;  6
; Dentro do escopo local :carne
; Dentro do escopo local :carne

(println "Depois do escopo local:"  global)         ; 7
; Depois do escopo local: :cerveja
</snippet>

Na linha <i>1</i> nós criamos o <i>var</i> <code>global</code> e atribuimos um valor, exibindo-o na linha <i>2</i>.

Já na linha <i>3</i> criamos um <i>local binding</i> com o mesmo nome, demonstrando na linha <i>4</i> que o valor do <i>var</i> foi escondido pelo <i>binding</i>. Porém, na linha <i>5</i> criamos um novo <i>var</i>, atribuindo o valor <code>:cerveja</code>. Note que na linha <i>6</i> não vemos nenhuma mudança no valor por conta do <i>shadowing</i>.

Já na linha <i>7</i> o valor aparece modificado. Como o valor exibido dentro do <code>let</code> não apresenta diferença, a tentdência é que passemos direto ao tentarmos encontrar a causa do problema.

A situação fica ainda pior quando trabalhamos com várias <i>threads</i>, por uma <i>thread</i> pode alterar o valor do <i>var</i> e isso acaba se refletindo nas outras <i>threads</i>. Para piorar ainda mais, o problema pode ou não ocorrer quando você tentar reproduzí-lo, já que não existe garantias de que <i>threads</i> diferentes serão sempre executadas na mesma ordem e exatamente no mesmo intervalo de tempo.

<h3>Escopo dinâmico</h3>

<index entry="binding (macro)" />
Já o <i>escopo dinâmico<i> funciona como o </i>escopo global</i>, mas o valor fica restrito às chamadas delimitadas pela macro <code>binding</code> e pela <i>thread</i> em que a chamada a <code>binding</code> ocorre.

<index entry="^:dynamic" />
Para usarmos escopo dinâmico, precisamos adicionar a anotação <code>^:dynamic</code> no <i>var</i> que vamos criar.

<snippet language="clojure">
(def ^:dynamic *parte* "cabeça")
</snippet>

<box title="Cuidado com textos desatualizados">
Até a versão <code>1.2</code> do Clojure todo <i>var</i> era dinâmico por padrão. Da versão <code>1.3</code> em diante passou a ser obrigatório anotar o <i>var</i> com <code>^:dynamic</code>. Sabendo disso, tome cuidado com textos e documentação desatualizada que ainda pode ser encontrada facilmente na Internet.
</box>

<index entry="earmuffins" />
Note os asteriscos ao redor do nome do <i>var</i>. Eles são chamados <i>earmuffins</i> e servem para sinalizar a quem lê o código que estamos lidando com <i>vars</i> dinâmicos. Para o Clojure não faz diferença se você não utilizar os <i>earmuffins</i>, mas é uma boa prática adotada pela comunidade.

Vamos criar agora uma função que exibe o nome do nosso <i>var</i> dinâmico.

<snippet language="clojure">
(defn mostra-binding [onde]
  (println onde "-" *parte*))

(mostra-binding "antes do binding")
; antes do binding - cabeça
</snippet>

<index entry="root binding" />
Até aqui não há diferença alguma. A função exibiria o valor que demos na definição do <i>var</i> sendo dinâmica ou não. Aliás, essa atribuição de valor na criação do <i>var</i> chama-se <i>root binding</i>.

Vamos agora definir um novo valor para <code>*parte*</code> através da macro <code>binding</code> e ver o que se passa dentro da função <code>mostra-binding</code>.

<snippet language="clojure">
(binding [*parte* "perna"]
  (mostra-binding "dentro do binding"))
; dentro do binding - perna

(mostra-binding "depois do binding")
; depois do binding - cabeca
</snippet>

Perceba que o valor de <code>*parte*</code> mudou apenas no escopo de <code>binding</code>, inclusive dentro da função.

O escopo dinâmico funciona como um escopo global controlado, em que podemos delimitar quem vai visualizar o valor do <i>var</i>.

Uma característica importante do escopo dinâmico é que o valor que definirmos na macro <code>binding</code> fica restrito apenas à <i>thread</i> em que ele foi definido. Qualquer <i>thread</i> diferente vai enxergar apenas o valor do <i>root binding</i>.

Para demonstrar isso, vamos criar uma função chamada <code>start-thread</code>, que recebe uma função como parâmetro e a executa em uma <i>thread</i> diferente da atual.

<snippet language="clojure">
(defn start-thread [fun]
  (.start (Thread. fun)))
</snippet>

Agora vamos executar novamente nossa função <code>mostra-binding</code>.

<snippet language="clojure">
(def ^:dynamic *parte* "cabeça")

(mostra-binding "antes do binding")
; antes do binding - cabeça

(binding [*parte* "perna"]
  (println "dentro do binding -" *parte*)
  (start-thread #(mostra-binding "dentro da thread")))
; dentro do binding - perna
; dentro da thread - cabeça

(mostra-binding "depois do binding")
; depois do binding - cabeça
</snippet>

Mesmo dentro do <code>binding</code>, o código que foi executado em outra <i>thread</i> não utilizou o valor <i>perna</i>, e sim o valor definido lá no <i>root binding</i>. Isso nos ajuda a escrever código isolado por <i>thread</i>, ou seja, cada <i>thread</i> enxerga seus próprios dados sem atrapalhar alguma <i>thread</i> que esteja sendo executada ao mesmo tempo.

Esse tipo de escopo é muito utilizado para trabalharmos com recursos externos separados por <i>thread</i>, como por exemplo conexões de rede.

Podemos utilizar também para testarmos recursos utilizando <i>mock</i>, ou seja, passamos uma função ou um objeto falso e nosso código o trata como se fosse verdadeiro. Isso ajuda a testar nosso código sem a necessidade de ter um banco de dados ou uma estrutura de rede disponível.

<index entry="println" /><index entry="*out*" />
Uma função que usamos o tempo todo e faz uso de escopo local é <code>println</code>, que faz uso do <i>var</i> dinâmico <code>*out*</code>. Isso significa que podemos fazer com que <code>println</code> direcione o que deveria ser impresso na tela para um arquivo em disco ou para uma conexão de rede.

Vamos brincar com isso.

Primeiro vamos precisar daquela nossa função <code>start-thread</code>. Uma <i>thread</i> vai imprimir na tela enquanto a outra vai gravar em disco.

<snippet language="clojure">
(defn start-thread [fun]
  (.start (Thread. fun)))
</snippet>

Vamos agora criar uma função que tanto grava em disco as informações que mandarmos imprimir, quanto imprime na tela, dependendo do que definirmos como <code>*out*</code>.

<snippet language="clojure">
(defn imprime []
  (Thread/sleep 500)
  (println "Linha 1")
  (Thread/sleep 500)
  (println "Linha 2")
  (Thread/sleep 500)
  (println "Ultima linha"))
</snippet>

Agora vamos executar a mesma função em duas <i>threads</i> diferentes, ao mesmo tempo.

<index entry="java.io.Writer" />
O <i>var</i> <code>*out*</code> aponta para um objeto Java que implementa <code>java.io.Writer</code>.

<index entry="type" /><index entry="java.io.PrintWriter" />
<snippet language="clojure">
(type *out*)
; java.io.PrintWriter
</snippet>

<index entry="java.io.FileWriter" />
A classe <code>java.io.PrintWriter</code> é a responsável pela exibição dos dados na tela. Vamos implementar um objeto do tipo <code>java.io.FileWriter</code> para que possamos gravar em disco.

<snippet language="clojure">
(start-thread (fn []
                (println "Esse vai na tela")
                (imprime)))

(start-thread (fn []
                (binding [*out* (java.io.FileWriter. "print.txt")]
                  (println "Esse vai no arquivo")
                  (imprime))))

;; pausa
; Linha 1
;; pausa
; Linha 2
;; pausa
; Ultima linha
</snippet>

<index entry="slurp" />
Agora vamos exibir o que gravamos em disco usando a função <code>slurp</code>, que lê o conteúdo de um arquivo texto e o retorna.

<snippet language="clojure">
(println (slurp "print.txt"))
; Esse vai no arquivo
; Linha 1
; Linha 2
; Ultima linha
</snippet>

Dessa forma podemos mudar o comportamento de funções que não podemos alterar, como é o caso de <code>println</code>, tornando o código mais flexível e dinâmico.

<h2>4.9. Contratos e condições</h2>

<i>Contratos</i>, do original em inglês <i>Design by Contract</i>, é uma forma de verificação dos argumentos recebidos pela função, chamada de <i>pré-condição</i>, e também do resultado da mesma função, que chamamos de <i>pós-condições</i>.

<index entry="Invariantes" />

<box title="Invariantes">
Quando uma condição é verdadeira do momento em que a função começa até o momento em que termina, dizemos que é uma <i>invariante</i>.

O uso de contratos, através de pré-condições e pós-condições, é uma forma de garantir que as invariantes não assumam valores inesperados que podem causar erros de execução.
</box>

Uma pré-condição permite que você verifique se os parâmetros atendem a uma ou mais condições antes mesmo que a função comece a ser executada.

Um exemplo de pré-condição pode ser encontrado na forma <code>let</code>. Se você tentar usar <code>let</code> sem que o primeiro argumento seja um vetor, e sem que esse vetor contenha um número par de argumentos, será lançada uma exceção antes que qualquer atribuição seja feita.

Um caso em que podemos utilizar pré-condições é do cálculo do fatorial de um número. Sabemos que o parâmetro deve ser positivo e inteiro.

<snippet language="clojure" title="Cálculo de fatorial" label="cap04-contrato-0">
(defn fatorial [n]
  (if (&lt; n 2)
      1
      (* n (fatorial (dec n)))))

(fatorial 3)
; 6

(fatorial -2)
1

(fatorial 3.5)
; 8.75
</snippet>

No código da listagem <label entry="cap04-contrato-0" />, a função retorna 1 para qualquer valor abaixo de 2, incluindo números negativos.

<h3>Fazendo do jeito feio</h3>

<index entry="cond" />
Para limitarmos os valores, podemos adicionar uma verificação antes do nosso código atual para, em seguida, lançarmos uma exceção. Vamos usar a forma <code>cond</code> que, de certa forma, é o equivalente ao <code>else if</code> que já estamos acostumados. Com isso teríamos:

<snippet language="clojure" title="Fatorial com checagem de número positivo" label="cap04-contrato-1">
(import '(java.lang AssertionError))

(defn fatorial [n]
  (cond (&lt; n 0) (throw (AssertionError.))
        (&lt; n 2)  1
        :else (* n (fatorial (dec n)))))

(fatorial 3)
; 6

(fatorial -2)
; AssertionError
</snippet>

<index entry="import" /><index entry="java.lang.AssertionError" /><index entry="throw" />
Na primeira linha tivemos que importar a classe <code>java.lang.AssertionError</code>, para poder lançar uma exceção desse tipo através da forma <code>throw</code>. O ponto final após o nome da classe é a forma do Clojure criar um novo objeto utilizando uma classe Java. Veremos mais detalhes sobre a integração com Java mais para frente, no capítulo <label entry="capitulo-integracao-java" />.

<index entry="or" /><index entry="integer?" />
Em seguida precisaremos verificar se o número é inteiro. Para isso vamos adicionar um <code>or</code> na primeira condição e verificar o valor através da função <code>integer?</code>, que retorna <code>true</code> caso o número seja inteiro.

Agora, se o parâmetro <code>n</code> for menor que zero <i>ou</i> não for um valor inteiro, lançaremos uma exceção.

<snippet language="clojure" title="Checagens de número inteiro e positivo" label="cap04-contrato-2">
(import '(java.lang AssertionError))

(defn fatorial [n]
  (cond (or (&lt; n 0)
            (not (integer? n))) (throw (AssertionError.))
        (&lt; n 2)  1
        :else (* n (fatorial (dec n)))))

(fatorial 3)
; 6

(fatorial -2)
; AssertionError

(fatorial 3.5)
; AssertionError
</snippet>

Nosso código funciona, mas está misturando o cálculo do número fatorial com a verificação dos dados. Deveria ter uma forma de deixarmos o código limpo como na listagem <label entry="cap04-contrato-0" />, mas verificando se o parâmetro obedece às pré-condições necessárias.

<h3>Fazendo do jeito Clojure</h3>

Estamos misturando também classes Java com Clojure, o que poder tornar o código mais verboso e difícil de ler. Além disso, imagine ter que adicionar uma condição extra dentro do seu código toda vez que precisar usar uma pré-condição.

É aí que entram as pré-condições, separando as checagens em um espaço só para elas, e o código em outro, como sempre foi.

No nosso código, vamos adicionar um mapa contendo a chave <code>:pre</code> antes de começarmos a escrever o código da função. Dentro de <code>:pre</code> vamos adicionar um vetor contendo as condições a serem verificadas antes mesmo da função ser executada.

O corpo da função só será executado se todas as condições desse vetor forem verdadeiras.

<snippet language="clojure" title="Checagens com pré-condições" label="cap04-contrato-3">
(defn fatorial [n]
  {:pre [(> n 0) (integer? n)]}
  (if (&lt; n 2)
      1
      (* n (fatorial (dec n)))))

(fatorial 3)
; 6

(fatorial -2)
; AssertionError Assert failed: (> n 0)

(fatorial 3.5)
; AssertionError Assert failed: (integer? n)
</snippet>

Além de não precisamos importar nenhuma classe do Java para fazer as checagens, nosso código ficou mais limpo e simples de entender.

<h3>E as pós-condições?</h3>

Já as pós-condições verificam se o resultado da função está de acordo com as condições informadas. Elas são bem menos utilizadas do que as pré-condições, uma vez que a invariante deve garantir que nosso resultado está de acordo com o esperado. Porém, se nossa função depende de outra para fazer o que precisamos, não podemos garantir que o resultado sairá sempre dentro do esperado.

Vamos imaginar que estamos escrevendo uma aplicação para um site de jogos de cartas online.

Nessa aplicação vamos precisar de um função responsável por embaralhar as cartas de um maço de cartas qualquer.

Vamos escrever uma função que receba um vetor contendo as cartas do baralho e uma outra função que contém o algoritmo de embaralhamento das cartas.

Os responsáveis pelo site levam tão a sério a tarefa de se ter cartas bem embaralhadas que deixaram esse algoritmo a cargo de uma outra empresa formada por diversos ganhadores de prêmios internacionais de matemática.

Vamos apenas nos preocupar apenas com a função que recebe o baralho e a função criada por terceiros, e vamos garantir que essa função externa não faça nenhuma besteira, como por exemplo repetir cartas ou sumir com elas.

Aí você pergunta: "mas não seria mais fácil a própria função de terceiros verificar se o baralho que entra é o mesmo que sai, só que embaralhado?". Sim, seria. Mas aí eu não conseguiria explicar pós-condições de uma forma interessante.

Primeiro vamos declarar os quatro naipes do baralho e os treze valores para as cartas:

<snippet language="clojure">
(def naipes [:ouros :copas :paus :espadas])

(def valores [:A :2 :3 :4 :5 :6 :7 :8 :9 :10 :J :Q :K])
</snippet>

<index entry="for" />
Em seguida vamos usar a forma  <code>for</code> para gerar todas as combinações possíveis entre <code>naipes</code> e <code>valores</code>. Vamos discutir o <code>for</code> com mais detalhes no capítulo sobre <i>lazy evaluation</i>.

O que precisamos saber aqui é que <code>for</code> vai receber cada item de <code>naipes</code> a atribuir a <code>n</code>, fazendo o mesmo com <code>valores</code> e atribuindo cada um dos itens a <code>v</code>. Com <code>n</code> e <code>v</code> em mãos, vamos devolver um vetor contendo os dois valores. No final do processo teremos uma lista contendo todas as combinações possíveis para cartas de baralho. Vamos usar também a função <code>sort</code> para fornecermos um maço ordenado alfabeticamente para a função.

<snippet language="clojure">
(def baralho (sort (for [n naipes
                         v valores]
                     [n v])))
</snippet>

Vamos exibir o conteúdo de <code>baralho</code> para vermos o que o <code>for</code> retornou:

<snippet language="clojure">
baralho

; ([:copas :10] [:copas :2] [:copas :3] [:copas :4] [:copas :5]
; [:copas :6] [:copas :7] [:copas :8] [:copas :9] [:copas :A]
; [:copas :J] [:copas :K] [:copas :Q] [:espadas :10] [:espadas :2]
; [:espadas :3] [:espadas :4] [:espadas :5] [:espadas :6]
; [:espadas :7] [:espadas :8] [:espadas :9] [:espadas :A]
; [:espadas :J] [:espadas :K] [:espadas :Q] [:ouros :10]
; [:ouros :2] [:ouros :3] [:ouros :4] [:ouros :5] [:ouros :6]
; [:ouros :7]  [:ouros :8] [:ouros :9][:ouros :A] [:ouros :J]
; [:ouros :K] [:ouros :Q] [:paus :10] [:paus :2] [:paus :3]
; [:paus :4] [:paus :5] [:paus :6] [:paus :7] [:paus :8] [:paus :9]
; [:paus :A] [:paus :J] [:paus :K] [:paus :Q])
</snippet>

Agora vamos criar uma função chamada <code>embaralha</code>, que recebe como parâmetros a função criada por qualquer outra pessoa e a lista contendo as cartas .

<snippet language="clojure">
(defn embaralha [fun baralho]
  (fun baralho))
</snippet>

Vemos que a função <code>embaralha</code> não faz nada de especial. Apenas executa a função contida em <code>fun</code> usando <code>baralho</code> como argumento.

Existem duas regras que devemos verificar antes de entregar o resultado da função: o maço embaralhado deve conter exatamente as mesmas cartas que o maço inicial, e após o processo de embaralhamento o maço não pode estar ordenado.

Ao usarmos pós-condições, o resultado da função é atribuído ao símbolo <code> % </code>.

Para sabermos se o maço inicial contém as mesmas cartas do maço final, basta retirarmos todos os itens repetidos usando a função <code>distinct</code> e depois ordenar usando <code>sort</code>. No maço de entrada temos certeza de que não existem itens repetidos, mas não podemos ter a mesma certeza a respeito do retorno da função contida em <code>fun</code>.

Nossa primeira condição então pode ser escrita como <code>(= baralho (sort (distinct %)))</code>.

<index entry="not=" />
Seguindo a segunda condição, o baralho devolvido pela função não pode estar ordenado. Para isso basta verificarmos se <code>baralho</code> não é igual ao retorno da função, escrevendo a condição <code>(not= baralho %)</code>.

Adicionando essas duas pós-condições na função, teremos nosso código completo na listagem <label entry="cap04-contrato-4" />.

<snippet language="clojure" title="Função embaralha com pós-condições" label="cap04-contrato-4">
(def naipes [:ouros :copas :paus :espadas])

(def valores [:A :2 :3 :4 :5 :6 :7 :8 :9 :10 :J :Q :K])

(def baralho (sort (for [n naipes
                         v valores]
                     [n v])))

(defn embaralha [fun baralho]
  {:post [(= baralho (sort (distinct %)))
          (not= baralho %)]}
  (fun baralho))
</snippet>

Vamos testar se nossa função está fazendo as verificações corretamente e, para isso, vamos criar duas funções. A primeira, que vamos chamar de <code>mesma-carta</code> recebe um maço e devolve outro com o mesmo tamanho, mas com apenas uma carta repetidamente. Vamos usar a função <code>map</code> para substituir todas as cartas por um ás de espadas.

A segunda função, que vamos chamar de <code>faz-nada</code>, também recebe um maço e o devolve sem alterações. Com isso poderemos testar se as duas condições estão sendo verificadas corretamente.

<snippet language="clojure" title="Testando as pós-condições" label="cap04-contrato-5">
(defn mesma-carta [baralho]
  (map (fn [carta] [:as :espadas]) baralho))

(defn faz-nada [baralho]
  baralho)

(embaralha mesma-carta baralho)
; AssertionError Assert failed: (= baralho (sort (distinct %)))

(embaralha faz-nada baralho)
; AssertionError Assert failed: (not= baralho %)
</snippet>

<index entry="shuffle" />
Nossas pós-condições estão funcionando corretamente. Mas e como fazemos para testar se a função está fazendo o que queremos? Para isso vamos usar a função <code>shuffle</code>, do próprio Clojure, que recebe uma sequência como parâmetro e a devolve embaralhada. Exatamente o que queríamos lá no início do exemplo.

<snippet language="clojure">
(embaralha shuffle baralho)

; [[:espadas :A] [:paus :J] [:copas :4] [:espadas :4] [:ouros :6]
; ...mais cartas...
; [:copas :K] [:espadas :5] [:espadas :2]]
</snippet>

Como vimos, contratos são úteis para verificarmos se as condições necessárias para a execução do nosso código estão sendo atendidas e se o retorno está dentro do que esperamos.

<h2>4.9. Destructuring</h2>

<index entry="destructuring" />

<i>Destructuring</i> é uma forma de decompor uma estrutura em uma atribuição, permitindo que você utilize somente as informações que forem relevantes.

Você pode usar <i>destructuring</i> ao declarar a lista de argumentos de uma função ou durante as atribuições de um escopo local. É possível usar <i>destructuring</i> também em macros que se baseiem em <code>fn</code> ou <code>let</code>.

<box title="Qual a tradução de destructuring?">

O termo <i>destructuring</i> não tem uma boa tradução para o nosso contexto. Ao pé da letra, pode ser traduzido por "<i>desestruturação</i>", mas o termo em português pode levar a uma compreensão errada. Podemos entender <i>destructuring</i> como uma <i>desmontagem</i> da coleção que foi usada como argumento.

Como atualmente quase toda a literatura sobre Clojure está em inglês, vamos nos ater ao termo original e evitar uma tradução forçada e incorreta.
</box>

Existem duas formas de trabalhar com <i>destructuring</i>: <i>vector destructuring</i> e <i>map destructuring</i>. As duas formas cobrem boa parte das estruturas de dados mais comuns na linguagem: listas, arrays e mapas.

Não se preocupe em entender as diferenças entre listas e arrays nesse momento. Entraremos em detalhes sobre essas estruturas no próximo capítulo.

<h3>Vector destructuring</h3>

<index entry="destructuring, vector" />

O caso mais simples de <i>destructuring</i> envolve o uso de <i>vector</i>, que é o nome em Clojure para arrays ou vetores.

Vamos imaginar que temos um ponto num plano cartesiano e que precisamos imprimir na tela as coordenadas, dizendo qual o valor de <i>x</i> e qual o valor de <i>y</i>.

Pelo que aprendemos até agora, sabendo que um ponto pode ser representado como um array de duas posições, nosso código ficaria assim:

<snippet language="clojure">
(def ponto [10 20])

(defn mostre-coordenadas [p]
  (let [x (first p)
        y (nth p 1)]
    (println "Coordenadas x:" x "y:" y)))

(mostre-coordenadas ponto)
; Coordenadas x: 10 y: 20
</snippet>

Usando <i>destructuring</i>, vamos substituir o <code>p</code> da lista de argumentos por um array de duas posições, que vamos chamar de <code>x</code> e <code>y</code>, respectivamente:

<snippet language="clojure">
(def ponto [10 20])

(defn mostre-coordenadas [[x y]]
  (println "Coordenadas x:" x "y:" y))

(mostre-coordenadas ponto)
; Coordenadas x: 10 y: 20
</snippet>

<box title="Atenção aos colchetes duplos">
Preste atenção nos dois colchetes para abrir e nos dois para fechar. Estamos dizendo para o compilador pegar um array, jogar o primeiro item em <code>x</code> e o segundo em <code>y</code>. Se você esquecer dos colchetes extras, o compilador vai entender que você precisa passar dois parâmetros para a função e vai dar erro ao tentar executá-la passando apenas <code>ponto</code>.

No exemplo abaixo mostramos um código errado, para que você saiba o que acontece quando a lista de parâmetros é declarada de modo errado e que mensagem aparece. Note que no exemplo errado nós estamos usando apenas um par de colchetes, indicando que a função espera receber dois parâmetros:

<snippet language="clojure">
(def ponto [10 20])

(defn mostre-erro [x y]
  (println "Coordenadas x:" x "y:" y))

(mostre-erro ponto)
; clojure.lang.ArityException: Wrong number of args (1)
; passed to: user$mostre-erro
</snippet>

Agora você já sabe. Se estiver tentando usar <i>destructuring</i> e esse erro aparecer, verifique se você não esqueceu dos colchetes extras.
</box>

Você pode utilizar também o recurso de aridade variável com <i>destructuring</i>. Vamos criar uma função que receba uma lista de atletas que participaram de uma corrida, em ordem de chegada, mas só dê importância aos três primeiros, que são os que receberão as medalhas. Os nomes dos outros atletas ficarão em uma lista chamada <code>outros</code>.

Perceba que o tempo todo estamos usando dois colchetes para abrir e dois para fechar:

<snippet language="clojure">
(def resultado-100m ["Usain Bolt" "Yohan Blake"
                     "Justin Gatlin" "Tyson Gay"
                     "Ryan Bailey" "Churandy Martina"
                     "Richard Thompson" "Asafa Powell"])

(defn podio [[primeiro segundo terceiro & outros]]
  (println "100m rasos - Londres 2012")
  (println "Ouro: " primeiro)
  (println "Prata: " segundo)
  (println "Bronze: " terceiro)
  (println "E mais" (count outros) "atletas"))

(podio resultado-100m)
; 100m rasos - Londres 2012
; Ouro:  Usain Bolt
; Prata:  Yohan Blake
; Bronze:  Justin Gatlin
; E mais 5 atletas
</snippet>

<index entry=":as" />
Imagine agora que você queira ter acesso à lista completa de atletas que foi passada como argumento para a função <code>podio</code>. Para isso existe um símbolo especial <code>:as</code>. Vamos criar uma função <code>vencedor</code> que nos mostra quem ganhou e quantos atletas participaram.

A lista completa de atletas ficará armazenada em <code>todos</code>, enquanto <code>primeiro</code> guarda apenas o primeiro item, como já vimos. A vírgula entre <code>primeiro</code> e <code>:as todos</code> é opcional, como sempre acontece em Clojure. Eu preferi colocar simplesmente para deixar claro que são coisas diferentes. Você decide se prefere usar ou não.

Vamos ao código:

<snippet language="clojure">
(defn vencedor [[primeiro, :as todos]]
  (println "Vencedor:" primeiro)
  (println "participaram" (count todos) "atletas"))

(vencedor resultado-100m)
</snippet>

Como já dissemos, o uso de <i>destructuring</i> pode ser usado com <code>let</code> também, de forma similar à que usamos na criação de funções.

<snippet language="clojure">
(def ponto [10 20])

(defn mostre-coordenadas [ponto]
  (let [[x y] ponto]
    (println "Coordenadas x:" x "y:" y)))
; Coordenadas x: 10 y: 20

(mostre-coordenadas ponto)
</snippet>

Como você deve imaginar, é possível também utilizar aridade variável com <i>destructuring</i> no let, da mesma forma que utilizamos anteriormente na declaração da função <code>podio</code>.

Vamos criar uma função chamada <code>vencedor</code> para exemplificar o uso:

<snippet language="clojure">
(def resultado-100m ["Usain Bolt" "Yohan Blake"
                     "Justin Gatlin" "Tyson Gay"
                     "Ryan Bailey" "Churandy Martina"
                     "Richard Thompson" "Asafa Powell"])

(defn vencedor [atletas]
  (let [[primeiro & outros] atletas]
    (println "100m rasos - Londres 2012")
    (println "Vencedor: " primeiro)
    (println "E mais" (count outros) "atletas")))

(vencedor resultado-100m)
; 100m rasos - Londres 2012
; Vencedor:  Usain Bolt
; E mais 7 atletas
</snippet>

O uso explícito de destructuring com <code>let</code> é bem menos comum, mas é uma ferramenta poderosa quando usada dentro de macros. Internamente a macro <code>fn</code> faz uso de destructuring com <code>let</code> para poder tratar os argumentos da função que está sendo criada.

Como <i>strings</i> são tratadas como sequências de caracteres em Clojure, também podemos usar <i>destructuring</i> com textos:

<snippet language="clojure">
(defn tres-letras [[a b c]]
  (println a b c))

(tres-letras "cavalo")
; c a v
</snippet>

<h3>Map destructuring</h3>

<index entry="destructuring, map" />

A segunda forma de <i>destructuring</i> é através de <i>mapas</i>, <i>hashes</i> ou <i>tuplas</i>.

Um mapa em Clojure segue a convenção <code>{:chave valor}</code> e se parece muito com um <i>Hash</i> encontrado em Ruby ou JavaScript.

Para acessarmos um item de um mapa, informamos o nome do mapa como se fosse uma função e, sem seguida, a chave que queremos como se fosse um parâmetro da função.

Para exemplificar, vamos criar um mapa chamado <code>info-livro</code>, que contém os dados de um livro. Esse mapa será usado nos nossos próximos exemplos, então vou evitar de repetí-lo:

<snippet language="clojure">
(def info-livro
  {:titulo "Livro de Clojure"
   :autor "Plínio Balduino"
   :capitulos {:capitulo01 "Apresentação"
               :capitulo02 "Uma introdução gentil ao Clojure"}})
</snippet>

<index entry="str" />

Vamos criar uma função chamada <code>descricao</code>, que recebe esse mapa e exibe o autor e o título do livro. Aqui vamos usar a função <code>str</code> para concatenar <i>strings</i>:

<snippet language="clojure">
(defn descricao [livro]
  (str "O autor de " (livro :titulo) " é " (livro :autor)))

(descricao info-livro)
; "O autor de Livro de Clojure é Plínio Balduino"
</snippet>

Perceba que <code>livro</code> é repetido duas vezes em uma mesma linha. Se quiséssemos exibir três ou quatro informações, teríamos que repetí-lo tantas vezes quantas forem necessárias.

Usando <i>destructuring</i>, nosso código pode ficar um pouco mais limpo. Novamente, estou usando a vírgula apenas para deixar claro que <code>titulo</code> e <code>autor</code> são coisas distintas e fica a seu crítério usá-la ou não.

<snippet language="clojure">
(defn descricao [{titulo :titulo, autor :autor}]
  (str "O autor de " titulo " é " autor))

(descricao info-livro)
; "O autor de Livro de Clojure é Plínio Balduino"
</snippet>

<box title="To vírgula or not to vírgula">
Outra forma de deixar o código mais legível, sem apelar para o uso de vírgulas, é quebrando a linha e mantendo os símbolos alinhados.

Dessa forma, nossa função ficaria assim:

<snippet language="clojure">
(defn descricao [{titulo :titulo
                  autor  :autor}]
  (str "O autor de " titulo " é " autor))
</snippet>

Fica a seu critério, ou da sua equipe, decidir qual forma é melhor.
</box>

No nosso mapa <code>info-livro</code> existe um mapa contendo os nomes dos capítulos.

Se quisermos exibir o nome do segundo capítulo da forma convencional, teríamos que acessar o valor da chave <code>:capitulos</code> para retornar um mapa e, a partir desse valor, acessar a chave <code>:capitulo02</code> para finalmente termos o texto que queremos:

<snippet language="clojure">
(defn segundo-capitulo [livro]
  (str "O segundo capítulo chama-se "
       ((livro :capitulos) :capitulo02)))
; "O segundo capítulo chama-se Uma introdução gentil ao Clojure"
</snippet>

<index entry=":keys" />
Existe uma forma de se utilizar <i>destructuring</i> com mapas aninhados. Para isso vamos fazer uso do símbolo <code>:keys</code>:

<snippet language="clojure">
(defn segundo-capitulo [{{:keys [capitulo02]} :capitulos}]
  (str "O segundo capítulo chama-se " capitulo02))

(segundo-capitulo info-livro)
; "O segundo capítulo chama-se Uma introdução gentil ao Clojure"
</snippet>

Explicando esse código, fizemos com que o valor contido na chave <code>:capitulo02</code>, que está dentro do valor contido na chave <code>:capitulos</code>, seja retornado em <code>capitulo02</code>.

<index entry=":strs" /><index entry=":syms" />
Caso as chaves do mapa forem do tipo <i>String</i> ao invés de um <i>keyword</i>, podemos usar <code>:strs</code> no lugar de <code>:keys</code>. Da mesma forma, caso sejam símbolos, usaremos <code>:syms</code> ao invés de <code>:keys</code>.

<index entry=":as" />
Assim como já acontece quando usamos <i>destructuring</i> com sequências, podemos usar também o recurso <code>:as</code> para armazenarmos o mapa inteiro.

Vamos criar uma função chamada <code>detalhes</code>, que exibe o título e todas as informações disponíveis sobre o livro:

<snippet language="clojure">
(defn detalhes [{titulo :titulo
                 :as livro}]
  (str "Dados do livro " titulo ": " livro))

(detalhes info-livro)
; "Dados do livro Livro de Clojure: {:titulo \"Livro de Clojure\
; ", :autor \"Plínio Balduino\", :capitulos {:capitulo01 \"Apres
; entação\",  :capitulo02 \"Uma introdução gentil ao Clojure\"}"
</snippet>

<index entry=":or" />
Um recurso muito interessante, especialmente quando formos tratar de configurações, é o símbolo <code>:or</code>, que é usado para definir valores padrão.

Vamos imaginar que nossa aplicação receba um mapa contendo a configuração, mas todos os itens são opcionais. A aplicação trabalharia de uma forma conhecida por padrão, mas você pode alterar apenas o que for relevante, evitando ter que repetir todas as configurações o tempo todo. Essa abordagem é chamada de <i>convention over configuration</i>.

Continuando o exercício de imaginação, vamos considerar que nossa aplicação roda em um browser, que por padrão vai ficar disponível apenas localmente, e que usa a porta 3000. Vamos dizer também que a aplicação usa um banco de dados MySQL como padrão.

Vamos criar uma função chamada <code>iniciar</code>, que recebe um mapa contendo as configurações que você quiser alterar, ou um mapa vazio se você quiser usar as configurações padrão.

Para mantermos o foco, essa função <code>iniciar</code> vai apenas exibir as configurações com as quais a aplicação seria iniciada.

<index entry=":keys" />
<snippet language="clojure">
(defn iniciar [{:keys [ip porta db]
                :or {ip "127.0.0.1"
                     porta 3000
                     db "mysql"}}]
  (println "ip:" ip "porta:" porta "db:" db))

(iniciar {})
; ip: 127.0.0.1 porta: 3000 db: mysql

(iniciar {:ip "0.0.0.0"})
; ip: 0.0.0.0 porta: 3000 db: mysql

(iniciar {:porta 80})
; ip: 127.0.0.1 porta: 80 db: mysql

(iniciar {:db "oracle"})
; ip: 127.0.0.1 porta: 3000 db: oracle

(iniciar {:db "mssql" :porta 8080})
; ip: 127.0.0.1 porta: 8080 db: mssql
</snippet>

Finalmente, existe uma forma de usarmos <i>destructuring</i> que mistura o que vimos na manipulação de sequências com o que vimos na manipulação de mapas.

Com essa forma podemos acessar diretamente um elemento de uma sequência sem que precisemos declarar todos os itens anteriores.

Por exemplo, se quisermos apenas os terceiro e quinto atletas da nossa lista, podemos utilizar a forma associativa, informando a posição dos itens que queremos, lembrando que o primeiro item de uma sequência fica na posição <i>0</i>:

<snippet language="clojure">
(defn terceiro-quinto [{terceiro 2, quinto 4}]
  (println terceiro "chegou em terceiro")
  (println quinto "chegou em quinto"))

(terceiro-quinto resultado-100m)
; Justin Gatlin chegou em terceiro
; Ryan Bailey chegou em quinto
</snippet>

A forma associativa também pode ser aplicado a <i>strings</i>, selecionando diretamente a letra que queremos. Vamos pegar a terceira letra de uma palavra qualquer:

<snippet language="clojure">
(let [{terceira-letra 2} "cavalo"]
  (println terceira-letra))
; v
</snippet>

Vimos que <i>destructuring</i> é um recurso muito interessante para simplificar nosso código. Alguns autores<bib entry="joy-of-clojure" /> inclusive dizem que <i>destructuring é uma mini linguagem embutida no Clojure</i>. Pratique bastante, escreva exemplos e aprenda quando seu uso pode ajudar e quando ele pode trazer apenas complicação.

<h2>4.10. Usando recursão</h2>

Recursão acontece quando uma determinada função invoca ela própria para conseguir chegar a um resultado.

Em linguagens funcionais, que fazem uso constante de imutabilidade, como é o caso do Clojure, a recursão se torna a forma encontrada para iterar uma sequência ou simular um <i>loop</i>.

<box title="Iterar">
<i>Iterar</i> é o mesmo que repetir uma ação. Quando usamos um <code>for</code> ou um <code>while</code>, no JavaScript e linguagens similares, estamos iterando, repetindo, algum processamento até que cheguemos a um resultado.
</box>

Uma função recursiva deve ter, sempre que possível, uma condição de saída, para que você não entre em um <i>loop infinito</i> acidentalmente ou estoure a pilha de chamadas rapidamente.

Uma condição de saída é um desvio que faz com que a recursão seja finalizada.

Por exemplo, na listagem <label entry="cap04-recur-1" /> vamos escrever uma função simples, que conte de qualquer número inteiro positivo até zero sem informar uma condição de saída.

<snippet language="clojure" title="Recursão desastrosa" label="cap04-recur-1">
(defn conta-ate-zero [num]
  (println num)
  (conta-ate-zero (dec num)))

(conta-ate-zero 3)
; 3
; 2
; 1
; 0
; -1
; ...
; -5964
; -5965
; StackOverflowError   clojure.walk/stringify-keys/fn--6998
</snippet>

<index entry="dec" />

A função <code>dec</code> retorna o <i>decremento</i> de um número. <code>(dec 10)</code> é equivalente a escrever <code>(- 10 1)</code>.

Além da função não ter parado no zero, ela ainda estourou a pilha de chamadas da JVM. Na listagem <label entry="cap04-recur-2" /> Vamos então adicionar uma condição de parada usando <code>when</code>, que é uma forma idiomática de usarmos um <code>if</code> que não faz nada caso a condição não seja satisfeita.

<snippet language="clojure" title="Recusão com condição de parada" label="cap04-recur-2">
(defn conta-ate-zero [num]
  (println num)
  (when (> num 0)
        (conta-ate-zero (dec num))))

(conta-ate-zero 3)
; 3
; 2
; 1
; 0
</snippet>

Ao iterarmos uma sequência, dizemos que estamos consumindo-a, pois ela vai ficando menor a cada recursão, até que finalmente termine de ser processada.

Na listagem <label entry="cap04-recur-3" /> vamos demonstrar uma função que recebe um texto qualquer e imprime uma letra por vez. Para isso essa função deve <i>consumir a sequência de letras</i>, e parar quando não houverem mais letras para imprimir.

Para consumir corretamente o texto, que é tratado como uma sequência de caracteres, vamos usar a função <code>first</code> para pegar a primeira letra, que é a que vamos imprimir, e a função <code>rest</code>, que retorna uma cópia da sequência sem o primeiro item, ou uma lista vazia se não houver mais o que consumir. Ao usarmos isso com a palavra <i>recursão</i>, por exemplo, teremos <i>r</i> como a primeira letra e <i>ecursão</i> como o resto da sequência.

A função <code>rest</code> retorna uma sequência vazia caso não existam mais letras para retornar.

Já a função <code>seq</code> retorna <code>nil</code> caso o parâmetro passado seja uma sequência vazia. Como <code>when nil</code> é equivalente a <code>when false</code>, a nossa condição de parada acontecerá quando não tivermos mais letra para imprimir. Essa técnica é chamada de <i>nil punning</i>, sem nenhuma tradução decente para o português.

Além de imprimir a primeira letra de cada iteração, vamos mostrar também o resto da sequência, que será passado como parâmetro para a próxima iteração, e o resultado do <i>nil punning</i> na última iteração. Isso vai ajudar a demonstrar passo a passo o que acontece, para que você não fique perdido e jogue o livro na parede.

<snippet language="clojure" title="Consumindo uma sequência" label="cap04-recur-3">
(defn imprime-letra [texto]
  (let [letra (first texto)
        resto (rest texto)]
    (println "letra =" letra
             "- resto =" resto
             "- (seq resto) =" (seq resto))
    (when (seq resto)
      (imprime-letra resto))))

(imprime-letra "recursão")
; letra = r - resto = (e c u r s ã o) - (seq resto) = (e c u r s ã o)
; letra = e - resto = (c u r s ã o) - (seq resto) = (c u r s ã o)
; letra = c - resto = (u r s ã o) - (seq resto) = (u r s ã o)
; letra = u - resto = (r s ã o) - (seq resto) = (r s ã o)
; letra = r - resto = (s ã o) - (seq resto) = (s ã o)
; letra = s - resto = (ã o) - (seq resto) = (ã o)
; letra = ã - resto = (o) - (seq resto) = (o)
; letra = o - resto = () - (seq resto) = nil
</snippet>

Temos nossa função recursiva funcionando, mas e se recebermos um texto muito grande?

A cada iteração, consumimos uma posição na pilha de chamadas da JVM. Como sabemos, essa pilha tem um tamanho limitado e, mesmo existindo formas de configurar a JVM para que esse tamanho seja ampliado, a pilha continuará tendo um tamanho finito.

<h3>Tail call optimization, ou quase</h3>

Felizmente, o cientista Guy Steele Jr, que participou da criação do Java e da linguagem Scheme, publicou um artigo<bib entry="ultimate-goto" /> descrevendo uma técnica que se tornou conhecida por <i>tail call optimization</i>.

<i>Tail call</i> é o nome dado à última chamada dentro de uma função (listagem <label entry="cap04-recur-4" />). Quando essa última chamada invoca a própria função (listagem <label entry="cap04-recur-5" />), e não há mais nada a ser processado após isso, ela é chamada de <i>tail call recursion</i>.

<snippet language="javascript" title="A chamada à função limpar é o tail call" label="cap04-recur-4">
function processaDados( ) {
  // código da função
  limpar();
}
</snippet>

<snippet language="javascript" title="Exemplo de tail call recursion" label="cap04-recur-5">
function imprimeLetra(texto) {
  // código da função
  imprimeLetra(resto);
}
</snippet>

Em algumas linguagens, como é o caso do Scheme, o compilador verifica se a <i>tail call</i> faz uma chamada recursiva e otimiza o código compilado, fazendo com que a chamada não consuma espaço na pilha e permitindo assim que o código utilize recursão indefinidamente, sem o risco de causar um estouro de pilha. Essa otimização é chamada de <i>tail call optimization</i>.

<index entry="recur" />

Infelizmente, a JVM não dá suporte a esse tipo de otimização. Felizmente, os desenvolvedores do Clojure deram um jeito de imitar <i>tail call optimization</i> através da forma especial <code>recur</code>.

Para reescrevermos nossa função <code>imprime-letra</code> usando a "quase <i>tail call optimization</i>", basta fazer com que, ao invés de executarmos <code>(imprime-letra resto)</code> no final da função, executemos <code>(recur resto)</code>, e o compilador vai se encarregar de gerar um bytecode parecido com o que seria gerado caso a JVM suportasse esse tipo de otimização.

Perceba que na listagem <label entry="cap04-recur-6" />, o código fica praticamente igual ao original, mas agora não corremos mais o risco de estourar a pilha de chamadas.

<snippet language="clojure" title="Usando tail call optimization com recur" label="cap04-recur-6">
(defn imprime-letra [texto]
  (let [letra (first texto)
        resto (rest texto)]
    (println "letra =" letra
             "- resto =" resto
             "- (seq resto) =" (seq resto))
    (when (seq resto)
      (recur resto))))

(imprime-letra "recursão")
; letra = r - resto = (e c u r s ã o) - (seq resto) = (e c u r s ã o)
; letra = e - resto = (c u r s ã o) - (seq resto) = (c u r s ã o)
; letra = c - resto = (u r s ã o) - (seq resto) = (u r s ã o)
; letra = u - resto = (r s ã o) - (seq resto) = (r s ã o)
; letra = r - resto = (s ã o) - (seq resto) = (s ã o)
; letra = s - resto = (ã o) - (seq resto) = (ã o)
; letra = ã - resto = (o) - (seq resto) = (o)
; letra = o - resto = () - (seq resto) = nil
</snippet>

Internamente, a forma <code>recur</code> transforma a chamada recursiva de função em um <i>loop</i>, equivalente ao <code>while</code> do Java, fazendo com que o seu código itere sem consumir a pilha de chamadas. É uma malandragem criticada pelos usuários de dialetos mais antigos de LISP, mas que não atrapalha em nada a forma como o seu código vai funcionar. Levando em conta as limitações da JVM, podemos considerar que foi uma solução bem elegante.

Agora que sabemos como escrever funções recursivas que não estourem a pilha de chamadas, vamos avançar mais um pouco.

Vamos escrever uma função que receba um texto e nos retorne a quantidade de vogais que ele contém.

<h3>Entendendo loop passo a passo</h3>

Primeiro vamos precisar diferenciar o que é uma vogal e o que é qualquer outro caracter. Vamos usar as propriedades de uma estrutura de dados chamada <i>set</i> para facilitar a nossa vida. Vamos ver essa estrutura com mais detalhes no próximo capítulo.

Na listagem <label entry="cap04-recur-7" />, vamos criar um <i>set</i> chamado <code>vogal?</code>, contendo as vogais do nosso alfabeto. Esse <i>set</i> recebe um caracter e retorna <code>nil</code> caso não seja uma vogal, ou a própria vogal, caso seja.

Lembrando do que vimos sobre <i>nil punning</i>, sabemos que <code>nil</code> é equivalente a <code>false</code> quando estamos avaliando uma condição.

Isso significa que, se você passar uma vogal para <code>vogal?</code>, receberá um resultado <i>equivalente a <code>true</code></i> e, se passar qualquer outro valor, receberá um resultado <i>equivalente a <code>false</code></i>.

<snippet language="clojure" title="Código que nos diz se é vogal ou não" label="cap04-recur-7">
(def vogal? (set "aeiouAEIOU"))

(vogal? \a)
; \a

(vogal? \c)
; nil
</snippet>

Um caracter em Clojure é escrito com o caracter <code>\</code> seguido do caracter propriamente dito. A letra <i>a</i>, por exemplo, é escrita como <code>\a</code>.

Usando o que já sabemos, vamos criar uma função chamada <code>conta-vogais</code>. Nessa função vamos consumir o texto que recebermos por parâmetro e também acumular a quantidade de variáveis conforme elas forem encontradas em cada iteração.

Você já deve ter percebido que, no exemplo anterior, a forma <code>recur</code> recebeu exatamente a mesma quantidade de parâmetros da função. Isso acontece porque, basicamente, <code>recur</code> faz uma chamada à função atual, só que sem consumir a pilha de chamadas.

Para contar a quantidade de vogais de um texto, precisaremos usar dois <i>bindings</i>, sendo um para a quantidade de vogais propriamente dita e outro contendo a sequência de caracteres que está sendo consumida.

Então podemos pensar em começar a nossa função <code>conta-vogais</code> usando dois parâmetros: <code>vogais</code> e <code>texto</code>:

<snippet language="clojure">
(defn conta-vogais [vogais texto]
  (if (seq texto)
      (recur
    ; continua
</snippet>

Note que usamos <i>nil punning</i> no <code>if</code>. É uma técnica tão comum que poderíamos dizer até que <i>nil punning</i> é um <i>design pattern</i> funcional. Note também que abrimos os parênteses, mas não fechamos. Fizemos assim porque os códigos a seguir vão se encaixando até formarmos o código todo.

Agora vamos verificar se o primeiro caracter que estamos recebendo é uma vogal. Se for, incrementaremos o valor de <code>vogais</code>. Caso contrário, ele continuará igual. Se nosso texto não tiver nenhuma vogal, passaremos <i>0</i> em cada uma das iterações e, no final, teremos zero vogais encontradas no texto.

Vamos usar o <code>if</code>, que recebe três parâmetros. O primeiro é uma condição, o segundo contém a expressão a ser avaliada caso a expressão seja verdadeira, e a terceira contém a expressão a ser avaliada caso a expressão seja falsa. Pense que em Clojure até o <code>if</code> tem jeitão de função.

<snippet language="clojure">
      (if (vogal? (first texto))
                  (inc vogais)
                  vogais)
</snippet>

O segundo parâmetro a ser usado pelo <code>recur</code> é o resto da sequência, sem o primeiro caracter. Como já verificamos se o primeiro caracter é ou não uma vogal, não vamos mais precisar dele.

Finalmente, caso não tenhamos mais letras para verificar, vamos fazer a função retornar apenas o número de vogais que encontramos, que é o nosso objetivo desde o início.

O código completo da função ficaria assim:

<snippet language="clojure" title="Primeira versão do contador de vogais" label="cap04-recur-8">
(defn conta-vogais [vogais texto]
  (if (seq texto)
      (recur (if (vogal? (first texto))
                 (inc vogais)
                 vogais)
             (rest texto))
       vogais))

(conta-vogais 0 "Livro de Clojure")
; 6
</snippet>

Nossa função está funcionando e contando as vogais corretamente, mas temos um grande problema aqui: somos obrigados a informar esse <i>0</i> como parâmetro toda vez que quisermos usar a função. Para piorar a situação, se o usuário usar qualquer outro número, a função vai devolver um valor incorreto.

Temos aqui um caso clássico de design horrível.

Vamos então renomear a função <code>conta-vogais</code> para <code>contador-auxiliar</code> e criar uma nova função chamada <code>conta-vogais</code> que chama a nossa função original com o <i>0</i> problemático:

<snippet language="clojure" title="Segunda versão do contador de vogais" label="cap04-recur-9">
(defn acumulador-auxiliar [vogais texto]
  (if (seq texto)
      (recur (if (vogal? (first texto))
                 (inc vogais)
                 vogais)
             (rest texto))
       vogais))

(defn conta-vogais [texto]
  (acumulador-auxiliar 0 texto))

(conta-vogais "Livro de Clojure")
; 6
</snippet>

O código da listagem <label entry="cap04-recur-9" /> já está melhor, evitando que o usuário tenha que informar o valor <i>0</i> como parâmetro toda vez, mas ainda tem que melhorar.

Agora temos duas funções, sendo <code>conta-vogais</code> que recebe apenas um texto e nos retorna a quantidade de vogais, exatamente como queremos, e uma função chamada <code>acumulador-auxiliar</code>, que tem um nome que não ajuda muito e que não vai ser utilizada em nenhum outro lugar. Chamar a função de <code>acumulador-auxiliar-para-contar-vogais</code> não ajuda em nada.

Lá no começo do capítulo dissemos que funções anônimas são úteis para quando não precisamos utilizá-las em outra parte da aplicação. Podemos então converter a nossa função <code>acumulador-auxiliar</code> em uma função anônima dentro de <code>conta-vogais</code>.

Como o código que está dentro de <code>acumulador-auxiliar</code> não vai ser alterado, vamos apenas indicar sua localização com um comentário para o livro não se transforme em uma bagunça e para que você não se perca na explicação.

<snippet language="clojure" title="Terceira versão do nosso contador de vogais" label="cap04-recur-10">
(defn conta-vogais [texto]
  ((fn [vogais texto]
    ; aqui vem o código que estava dentro da
    ; função contador-auxiliar
    ) 0 texto))

(conta-vogais "Livro de Clojure")
; 6
</snippet>

Agora temos apenas uma função, que recebe apenas o texto e nos devolve a quantidade correta de vogais. Funciona, mas está difícil de ler.

Os dois parênteses juntos logo no começo do código, para que possamos invocar uma função anônima assim que ela é criada, causa arrepios em quem já não gosta muito dos parênteses de um LISP. E aquele <code>0 texto</code> ali embaixo dão uma sensação de coisa fora do lugar.

<index entry="loop" />

Felizmente, a linguagem oferece uma construção que abstrai essa bagunça e deixa nosso código tão simples de ler quanto o <code>recur</code> deixou lá no início do exemplo. Ela se chama <code>loop</code>, e é uma mistura de <code>let</code> com função anônima.

Internamente, o <code>loop</code> informa para o <code>recur</code> o ponto para o qual a recursão deve voltar na próxima iteração. É como a função anônima da listagem <label entry="cap04-recur-10" />, mas sem os parênteses extras nem os parâmetros perdidos.

Ao invés de declararmos a função anônima, vamos declarar <code>(loop</code>, em seguida um vetor contendo os bindings <code>vogais</code> e <code>texto</code> e os respectivos valores iniciais, que são <i>0</i> e o valor passado por parâmetro para a função, assim como faríamos em um <code>let</code>.

Nossa última versão ficaria com essa cara:

<snippet language="clojure" title="Versão final do contador de vogais" label="cap04-recur-11">
(defn conta-vogais [texto]
  (loop [vogais 0
         texto  texto]
    (if (seq texto)
        (recur (if (vogal? (first texto))
                   (inc vogais)
                   vogais)
               (rest texto))
        vogais)))

(conta-vogais "Livro de Clojure")
; 6
</snippet>

A quantidade de parâmetros que passamos ao <code>recur</code> deve ser igual à quantidade de <code>bindings</code> que o <code>loop</code> declara, assim como em um <code>recur</code> sem <code>loop</code>, a quantidade de parâmetros deve ser a mesma que a função declara.

Agora que já sabemos como criar funções recursivas sem medo de estourar a pilha de chamadas da JVM, podemos processar dados que estão em uma sequência sem nos preocupar tanto com seu tamanho.

Existem casos em que a recursão não é a melhor das soluções, mas existem estratégias que vamos apresentar no decorrer do livro. A partir daí vai caber a você avaliar qual a melhor técnica para resolver cada tipo de problema.

<h2>4.11. Closures, currying e aplicações parciais</h2>

Geralmente, se você é um programador habituado a linguagens imperativas, o primeiro contato com os conceitos da programação funcional acontece através de artigos na Wikipedia ou textos contendo cargas assustadoras de conceitos matemáticos e termos aparentemente ininteligíveis.

Infelizmente isso afasta o programador comum, como eu ou você, que não tem intenção de ir atrás de um mestrado em matemática apenas para entender o que é que os autores desses textos crípticos tentaram dizer.

A boa notícia é que os conceitos básicos da programação funcional são muito simples e, com um pouco de prática, podem entrar facilmente para o seu arsenal de técnicas de desenvolvimento.

Primeiro vamos criar uma função chamada <code>saudacao</code>, que recebe dois parâmetros. O primeiro contém uma mensagem simpática e o segundo contém um nome. É uma função bem bacana para utilizarmos assim que o usuário se conectar a um sistema.

<snippet language="clojure" title="Um jeito repetitivo de dar bom dia" label="cap04-closure-0">
(defn saudacao [mensagem nome]
  (str mensagem ", " nome))

(saudacao "Bom dia" "João")
; "Bom dia, João"

(saudacao "Bom dia" "José")
; "Bom dia, José"

(saudacao "Bom dia" "Nicolau")
; "Bom dia, Nicolau"
</snippet>

Nossa função retorna as saudações corretamente na listagem <label entry="cap04-closure-0" />, mas em cada chamada de função temos que repetir a mensagem. E se houvesse um jeito de dizer apenas uma vez que a saudação deve ser <i>Bom dia</i> e precisássemos informar somente o nome?

Pois isso é possível reescrevendo a função como na listagem <label entry="cap04-closure-1" />:

<snippet language="clojure" title="Reduzindo a repetição usando closure" label="cap04-closure-1">
(defn saudacao [mensagem]
  (fn [nome]
    (str mensagem ", " nome)))

(def bom-dia (saudacao "Bom dia"))

(bom-dia "João")
; "Bom dia, João"

(bom-dia "José")
; "Bom dia, José"

(bom-dia "Nicolau")
; "Bom dia, Nicolau"
</snippet>

A nossa função <code>saudação</code> agora retorna uma função anônima. Sempre que uma função recebe outra como parâmetro ou devolve outra função como resultado, a chamamos de <i>high order function</i>.

Essa função anônima que foi retornada recebe um parâmetro <code>nome</code> e o concatena ao valor de <code>mensagem</code> que foi passado por parâmetro usando a função <code>str</code>.

O interessante aqui é que <code>bom-dia</code> guarda a função anônima retornada por <code>saudacao</code>, que guarda todo o contexto existente em <code>saudação</code> no momento em que foi criada. Isso significa, de maneira simplificada, que <i>a função anônima se lembra do momento em que foi criada</i><bib entry="function-of-function" />. Chamamos essa <i>lembrança<i> de </i>closure</i>.

Dito isso, sabemos que a função anônima se lembra do valor de <code>mensagem</code>, mesmo depois que a função <code>saudacao</code> já não está mais sendo executada.

Ao executarmos <code>saudacao</code> novamente, criaremos uma nova função anônima, que vai guardar o valor de <code>mensagem</code> que foi utilizado dessa vez.

Fazendo uma analogia com a orientação a objetos, a cada vez que você cria um objeto, ele encapsula informações que independem da existência de outro objeto do mesmo tipo. Da mesma forma, <i>closures</i> encapsulam informação dentro de uma função, independente do fato de existirem outras funções.

Vamos tentar atribuir a função anônima diretamente a <code>bom-dia</code>, sem usar <i>closure</i>. Na listagem <label entry="cap04-closure-2" /> vemos o que acontece.

<snippet language="clojure" title="Usando a função anônima sem closure" label="cap04-closure-2">
(def bom-dia (fn [nome]
    (str mensagem ", " nome)))
; CompilerException java.lang.RuntimeException:
; Unable to resolve symbol: mensagem in this context
</snippet>

Antes mesmo de tentarmos executar <code>bom-dia</code>, o compilador acusou que não existe o símbolo <code>mensagem</code>. Isso aconteceu porque, no nosso código original da listagem <label entry="cap04-closure-1" />, <code>mensagem</code> foi definida fora da função anônima.

Isso significa que <code>mensagem</code>, dentro do contexto da função anônima, é uma <i>variável livre</i>.

<box title="Para os puristas...">
Em termos mais técnicos, uma <i>closure</i>, ou <i>lexical closure</i>, é uma função anônima cujas variáveis livres foram presas, ou enclausuradas (<i>closed</i>, em inglês) pelo escopo léxico em que ela foi criada.

<i>Closure</i> também é o nome em inglês para aquilo que fecha um recipiente, como um tampa ou rolha.
</box>

Já a função anônima, que depende de <i>closure</i> para funcionar, é chamada de <i>aplicação parcial</i>, ou <i>partial function application</i>.

<index entry="partial" />

Existe uma função em Clojure específica para criarmos aplicações parciais, que recebe o nome óbvio de <code>partial</code>.

O código da listagem <label entry="cap04-closure-1" /> ficaria assim usando <code>partial</code>:

<snippet language="clojure">
(defn saudacao [mensagem]
  (partial str mensagem ", "))

(def bom-dia (saudacao "Bom dia"))

(bom-dia "Luis")
; Bom dia, Luis

(bom-dia "Luis " "Carlos")
; Bom dia, Luis Carlos
</snippet>

Todas os argumentos recebidos pela função criada com <code>partial</code> são adicionados no final da expressão.

<box title="Partial e currying">

Outra palavra mágica na programação funcional, e que frequentemente causa confusão e medo, é <i>currying</i>.

<i>Currying</i> nada mais é do que a técnica de transformar uma função que receba N argumentos em N funções com um argumento cada. Na listagem <label entry="cap04-closure-3" /> é apresentado um exemplo de como uma função comum é transformada usando <i>currying</i>.

<snippet language="javascript" title="Demonstrando currying com uma pseudolinguagem" label="cap04-closure-3">
// a função original
y = f(a, b, c)

// a função 'curried'
g = f(a)
h = g(b)
y = h(c)
</snippet>

O termo é frequentemente confundido com aplicação parcial<bib entry="partial-not-curry" />, devido ao fato de que, em determinados casos, ambos se sobrepõe e parecem ser a mesma coisa<bib entry="vidal-curry" /> e, apesar do Clojure ter suporte nativo a aplicação parcial, não existe uma forma transparente de utilizar <i>currying</i>, como acontece na linguagem <i>Haskell</i>.

Não se preocupe em tentar usar <i>currying</i> em Clojure. Na maior parte do tempo, o uso de aplicação parcial vai fazer o trabalho sem problemas.
</box>

<h2>4.12. Memoização</h2>

Memoização<bib entry="memo-functions" /> é uma técnica de otimização em que você troca processamento por memória.

Ao <i>memoizar</i> uma função, é criado um mapa em memória contendo os parâmetros de entrada e o valor de retorno.

Na primeira vez que a função é executada, é adicionado um item nesse mapa e, nas próximas vezes, ao invés de executá-la, o valor é extraido diretamente do mapa, reduzindo consideravelmente o tempo de retorno.

<box title="Memoization e closure">
Caso você tenha curiosidade de ir mais a fundo na linguagem, o código fonte da função <code>memoize</code> é um ótimo exemplo de uso real de <i>closure</i>.

Dentro do REPL, digite <code>(source memoize)</code> e releia os parágrafos acima acompanhando as linhas de código para entender melhor a função.

Pode ir sem medo. O código é bem curto e simples de entender.
</box>

<index entry="time" />
A biblioteca padrão do Clojure nos fornece uma função chamada <code>time</code>, que informa o tempo que uma expressão leva para ser executada.

<index entry="Thread/sleep" />
Vamos criar uma função propositadamente lenta, que retorna o mesmo valor que usarmos como entrada. Vamos usar um <code>sleep</code> de dois segundos para deixar a função lenta:

<snippet language="clojure">
(defn lento [x]
  (Thread/sleep 2000)
  x)

(time (lento 10))
; "Elapsed time: 2017.528206 msecs"
; 10
</snippet>

A função levou um pouco mais de dois segundos para ser retornar o mesmo valor que usamos como argumento. Fizemos isso para simular um cálculo demorado e complexo.

Vamos agora usar a função <code>memoize</code>, que recebe a função lenta como parâmetro e nos devolve uma versão memoizada da função lenta.

Vamos ao código:

<snippet language="clojure">
(def memo-lento (memoize lento))

(time (memo-lento 10))
; "Elapsed time: 2017.185984 msecs"
; 10

(time (memo-lento 10))
; "Elapsed time: 0.029892 msecs"
; 10
</snippet>

Na primeira vez que executamos a versão memoizada, o tempo de execução foi praticamente o mesmo. Porém, na segunda vez, a função centésimos de segundo para retornar o mesmo valor. Sem dúvida, uma grande diferença.

Uma coisa importante e que deve ser deixada explícita, é que <b>você só deve memoizar funções puras</b>, sem efeitos colaterais. Como a função só será executada na primeira vez, qualquer efeito colateral deixará de ocorrer nas vezes seguintes.

<box title="Funções puras">
Uma função pura é simplesmente aquela que não causa efeito colateral durante a sua execução. Um acesso ao banco de dados, ao sistema de arquivos, à rede, a alteração de um valor global ou mesmo o ato de imprimir algo na tela são exemplos de efeitos colaterais.

Assim como a imutabilidade, o conceito de pureza de função é muito importante para a programação funcional.

Quando falamos em imutabilidade, não significa que todos os seus dados devam ser imutáveis, mas que as partes mutáveis devam ser isoladas e mantidas sob controle.

Da mesma forma, uma aplicação que seja totalmente pura não tem lá muita utilidade prática, então é uma boa prática isolarmos as funções impuras das puras, para que não tenhamos surpresas com comportamentos imprevistos.

Um exemplo simples de função pura é a operação aritmética de soma, que recebe um conjunto de valores e devolve uma resposta, sem alterar mais nada no ambiente.
</box>

Vamos criar uma função com efeito colateral para demonstrar. No nosso exemplo, o efeito colateral será uma mensagem impressa na tela, mas na sua aplicação poderia ser um acesso à rede, ao arquivo ou a qualquer outro recurso externo:

<snippet language="clojure">
(defn colateral [x]
  (println "Imprimindo " x)
  x)

(colateral 10)
; Imprimindo  10
; 10

(def memo-colateral (memoize colateral))

(memo-colateral 10)
; Imprimindo  10
; 10

(memo-colateral 10)
; 10

(memo-colateral 30)
; Imprimindo  30
; 30

(memo-colateral 30)
; 30
</snippet>

É algo esperado se você se lembrar de que a função é executada apenas uma vez para cada argumento utilizado. O efeito colateral só ocorreu uma vez quando utilizamos o valor <i>10</i>, e aconteceu novamente uma vez ao utilizarmos o valor <i>30</i>.

<h3>Memoization e recursão</h3>

O recurso de usar memoização com recursão pode ajudar bastante em cálculos pesados, mas exige alguns cuidados.

<index entry="Fibonacci" />

Vou utilizar a versão recursiva do cálculo do enésimo número da sequência de Fibonacci para demonstrar como podemos otimizar utilizando memoização e, em seguida, os tais cuidados que você precisa ter.

A sequência de Fibonacci consiste em um número subsequente igual ao resultado da soma dos dois anteriores. No nosso exemplo, vamos começar pelo <i>1</i>, então teremos <i>1</i>, <i>2</i>, <i>3</i>, <i>5</i>, <i>8</i>, <i>13</i> e assim por diante.

<index entry="zero?" />

<snippet language="clojure">
(defn fib [n]
  (if  (or (zero? n) (= n 1))
    1
    (+ (fib (- n 1)) (fib (- n 2)))))
</snippet>

Apenas como um lembrete amigável, essa é a segunda pior forma possível de se calcular a sequência de Fibonacci. De acordo com a minha experiência, a pior forma é tentar calcular com um lápis de ponta quebrada num papel de pão. De qualquer maneira, é uma forma válida para o que pretendemos fazer.

Vamos calcular o quadragésimo item da sequência e apresentar o tempo que levaremos para calculá-lo:

<snippet language="clojure">
(time (fib 40))
; "Elapsed time: 28777.402994 msecs"
; 165580141
</snippet>

Nossa função levou 28 segundos para calcular 40 números. E esse tempo cresce numa progressão geométrica se você tentar calcular um valor maior.

<image src="images/capitulo_04/recursao.png" description="Grafo de chamadas de (fib 5)" label="diagrama-recursao" width="50%"/>

O diagrama da figura <label entry="diagrama-recursao" /> mostra que tivemos onze chamadas de função para calcular o quinto número da sequência. Se tivessemos calculado o sexto número, teríamos dezenove chamadas. Apenas a título de curiosidade, nosso cálculo do quadragésimo item fez 267.914.294 chamadas de função, e <code>(fib 2)</code> é calculado mais de setecentas vezes.

Sem dúvida nenhuma, o nosso algoritmo é totalmente ineficiente.

Por que não melhoramos isso e reduzimos o cálculo para apenas uma vez em cada argumento?

Fácil, vamos memoizar tudo:

<snippet language="clojure">
(defn fib [n]
  (if  (or (zero? n) (= n 1))
    1
    (+ (fib (- n 1)) (fib (- n 2)))))

(def memo-fib (memoize fib))

(time (memo-fib 40))
; "Elapsed time: 29374.836646 msecs"
; 165580141
</snippet>

O tempo permaneceu praticamente o mesmo. Isso acontece porque memoizamos apenas a execução de <code>(fib 40)</code>. Todas as outras repetições desnecessárias continuam acontecendo internamente.

Vamos então fazer com que a função <code>fib</code> chame a sua versão memoizada, <code>memo-fib</code>.

O problema dessa solução é que temos aqui aquele velho paradoxo do ovo e da galinha: como memoizar uma função que ainda não existe? Ou como fazer a função chamar sua versão memoizada se ela ainda não foi memoizada?

O nosso código demonstra o que você vai encontrar se insistir em ignorar o paradoxo:

<snippet language="clojure">
(defn fib [n]
  (if  (or (zero? n) (= n 1))
    1
    (+ (memo-fib (- n 1)) (fib (- n 2)))))
; CompilerException java.lang.RuntimeException: Unable to resolve
;   symbol: memo-fib in this context
</snippet>

O compilador do Clojure tem uma tabela de <i>vars</i> com seus respectivos nomes. Ao tentar compilar a função <code>fib</code>, o compilador não encontrou o <i>var</i> <code>memo-fib</code> em sua tabela interna e lançou uma exceção nos informando o problema.

<index entry="forward declaration" />

Para resolver isso, vamos usar uma técnica chamada <i>forward declaration</i>, ou <i>declaração prematura</i> numa tradução livre.

A sacada da declaração prematura é que o <i>var</i> precisa existir, mas a função não, pois ela só será chamada quando executarmos <code>fib</code>. Então temos tempo suficiente para fazer <code>fib</code> chamar sua versão memoizada e só então efetuarmos a memoização.

Nosso código então ficaria assim:

<snippet language="clojure" title="Resolvendo Fibonacci com memoização" label="cap04-forward-declaration">
(declare memo-fib) ; aqui o var é criado

(defn fib [n]
  (if  (or (zero? n) (= n 1))
    1
    (+ (memo-fib (dec n)) (memo-fib (- n 2)))))

(def memo-fib (memoize fib)) ; e só aqui ele recebe a memoização

(time (memo-fib 40))
; "Elapsed time: 0.244445 msecs"
; 165580141
</snippet>

Reduzimos o tempo de execução de 27 segundos para apenas dois décimos, mais de cem vezes mais rápido.

Na primeira vez que você calcular o quadragésimo número da sequência, serão feitas quarenta chamadas de função. Numa segunda vez que você calcular o mesmo número, será feita apenas uma chamada de função.

<box title="Diferença entre declare e def">

<index entry="declare" />

Na listagem <label entry="cap04-forward-declaration" /> poderíamos ter usado <code>(def memo-fib)</code> no lugar da forma <code>declare</code>.

A vantagem do <code>declare</code> é que você pode fazer mais de uma declaração prematura de uma vez. Internamente será executado um <code>def</code> para cada item.

<snippet language="clojure">
; esse código
(declare par impar primo)

; faz a mesma coisa que esse
(def par)
(def impar)
(def primo)
</snippet>

Como declarações prematuras não são uma coisa comum, e devem ser evitadas quando possível, dificilmente você precisará declarar mais de um <i>var</i> ao mesmo tempo.
</box>

<image src="images/capitulo_04/memoizado.png" description="Grafo de chamadas de (memo-fib 5)" label="diagrama-memoizado" width="50%"/>

No diagrama da imagem <label entry="diagrama-memoizado" /> você pode ver a diferença ao calcularmos <code>(fib 5)</code>. Experimente comparar com o diagrama anterior.

<h3>Memoização para adultos</h3>

A implementação da função <code>memoize</code> é a mais simples possível, e existem situações em que ela se apresenta insuficiente ou inadequada.

Como fazer se você precisar que o valor memoizado tenha um prazo de validade?

Um exemplo válido ocorre ao lermos um arquivo de configuração. Podemos ler o arquivo toda vez que algum processo precisar de uma configuração, o que é lento e perigoso, ou podemos ler apenas na primeira vez e memoizar o resultado para que todos os demais processos acessem a informação diretamente da memória de forma segura.

E se o arquivo de configuração for modificado? Teremos que reiniciar a aplicação toda vez que isso acontecer? Não temos como invalidar o valor memoizado para o arquivo seja lido novamente, mantendo sempre a informação mais recente em memória?

Com a implementação padrão da função <code>meimoize</code> não temos muito o que fazer além de reiniciar a aplicação toda vez.

Para evitar esse tipo de problema, que acaba sendo limitado a casos específicos, existe uma biblioteca chamada <code>core.memoize</code>, que pode ser encontrada em http://git.io/U2QLvA.

Caso você se pergunte porque não tornar o código dessa biblioteca como padrão do Clojure, eu te respondo. Simplesmente porque memoização é uma das formas de se resolver um tipo de problema específico e a biblioteca é uma forma específica de resolver um problema no problema específico. Seria complicar demais a biblioteca padrão para algo que deve responder por uma pequena fração da necessidade dos usuários.

Lembre-se que faz parte da filosofia por trás do desenvolvimento do Clojure que a biblioteca padrão permaneça simples e contendo somente o necessário, enquanto toda solução para problemas específicos ou complicados acaba ficando em pequenas bibliotecas que podem ser adicionados conforme a necessidade.

Assim você mantém a linguagem enxuta e sua aplicação carrega somente o peso que precisar carregar.

<h2>4.13. Recursão mútua com trampoline</h2>

Recursão mútua acontece quando temos duas ou mais funções e uma depende da outra, e vice-versa.

É um recurso que fica restrito a campos bem específicos, como por exemplo a criação de parsers, máquinas de estados finitos e fractais.

Um exemplo de máquina de estados finitos bem conhecido é o semáforo de trânsito. No diagrama da imagem <label entry="diagrama-semaforo" /> temos os estados válidos de um semáforo e suas possíveis mudanças.

<image src="images/capitulo_04/semaforo.png" description="Estados possíveis de um semáforo" width="40%" label="diagrama-semaforo" />

Em uma linguagem imperativa, normalmente teríamos um <i>loop</i> com um <i>if</i> ou um <i>switch</i> invocando alguma função ou método de acordo com o estado atual do semáforo. Para isso teríamos um estado compartilhado entre os três blocos de código responsáveis por cada um dos estados.

Em uma linguagem funcional podemos fazer com que cada função responsável pelo estado do semáforo guarde o estado atual, sem a necessidade de um estado global e compartilhado. Assim que houver a mudança no estado, que no nosso caso é a cor da luz, outra função é invocada e assim por diante.

Na listagem <label entry="cap04-semaforo-1" /> vamos tentar implementar o semáforo seguindo as regras do diagrama da figura <label entry="diagrama-semaforo" />.

<snippet language="clojure" title="Primeira versão do semáforo" label="cap04-semaforo-1">
(declare verde amarelo)

(defn vermelho []
  (println "vermelho")
  (Thread/sleep 2000)
  (verde))

(defn verde []
  (println " verde")
  (Thread/sleep 2000)
  (amarelo))

(defn amarelo []
  (println "  amarelo")
  (Thread/sleep 500)
  (vermelho))

(defn semaforo []
  (vermelho))

(semaforo)
; vermelho
;  verde
;   amarelo
; vermelho
;  verde
; ...
; StackOverflowError   clojure.walk/stringify-keys/fn--6998
</snippet>

O código é bem simples. Ao chamarmos a função <code>semaforo</code>, o semáforo começa a funcionar com a luz vermelha, depois de um tempo passa para verde, passa rapidamente para amarelo e acende a luz vermelha novamente. Apenas uma luz fica acesa por vez, e a ordem está sendo respeitada.

O problema é que, depois de algum tempo, esse nosso código deixa de funcionar. A cada mudança de estado uma nova chamada de função é feita e uma posição no <i>stack</i> do Java é consumida. Como o <i>stack</i> tem um tamanho limitado, quando esse espaço acabar nossa aplicação será finalizada com uma mensagem de erro.

Imagine se todos os semáforos da cidade parassem de funcionar depois de algumas horas, ou depois de poucos dias, por conta de um erro de programação.

No nosso código, a função <code>vermelho</code> chama <code>verde</code>, que chama <code>amarelo</code>, que chama <code>vermelho</code> novamente e o ciclo volta a se repetir. Temos aqui um caso de recursão mútua.

Vamos resolver esse problema usando a função <code>trampoline</code>. Assim como vimos que a forma <code>recur</code> permite que usemos recursão sem estourar a pilha de chamadas do Java, <code>trampoline</code> permite que façamos o mesmo usando recursão mútua.

<box title="Pulando de trampolim">
A título de curiosidade, a técnica recebeu o nome de <i>trampolim</i> porque, internamente, consiste em fazer o fluxo da aplicação <i>pular</i> de um lugar para o outro.
</box>

O segredo no uso de <code>trampoline</code> está no fato de que cada função não mais vai chamar a próxima, mas retornar uma função que faz esse trabalho. Assim teremos <i>uma função que devolve outra função</i> ao invés de termos <i>uma função que chama outra função</i>. Isso é a base de um recurso poderoso chamado <i>lazy evaluation</i>, que veremos em detalhes mais para frente.

Usando a forma reduzida <code>#( )</code> para criarmos uma função anônima, faremos apenas alterações sutis no nosso código para que ele possa executar indefinidamente, sem consumir a pilha de chamadas.

Na listagem <label entry="cap04-semaforo-2" /> nós temos o código modificado. Perceba que substituimos as chamadas de função por funções anônimas, e que a função <code>semaforo</code> agora executa <code>trampoline vermelho</code> ao invés de chamar diretamente a função <code>vermelho</code>.

<snippet language="clojure" title="Versão do semáforo que não consome a pilha" label="cap04-semaforo-2">
(declare verde amarelo)

(defn vermelho []
  (println "vermelho")
  (Thread/sleep 2000)
  #(verde))

(defn verde []
  (println " verde")
  (Thread/sleep 2000)
  #(amarelo))

(defn amarelo []
  (println "  amarelo")
  (Thread/sleep 500)
  #(vermelho))

(defn semaforo [])
  (trampoline vermelho))

(semaforo)
; vermelho
;  verde
;   amarelo
; vermelho
;  verde
; ... e continua indefinidamente
</snippet>

<h2>4.14. Composição de funções</h2>

Como dissemos no início do capítulo, numa linguagem funcional os dados são transformados por uma série de funções até que tenhamos o resultado que precisamos. O uso dessas séries de funções é chamada de <i>composição</i>.

Quando você compra um produto, é aplicada uma série de cálculos em cima de um valor base e, no final, você paga o valor que resultar dessa série. Podemos pensar em cada um desses cálculos como uma função, e na série toda como sendo a <i>composição</i>.

Vamos imaginar que estamos comprando um computador. Simplificando muito a equação, vamos afirmar que a loja tenha 20% de margem de lucro, e que seja cobrado 10% de <i>imposto genérico</i>. O <i>imposto genérico</i> é algo que só existe no nosso exemplo para que a coisa fique mais simples possível. No final, ainda tem um desconto de 2% porque pagamos à vista.

A fórmula de cálculo que vamos precisar é <code>valorTotal = desconto(imposto(margem(valorBase)))</code>.

Vamos então criar o código em Clojure que calcula o nosso valor total:

<snippet language="clojure">
(def valor-base 1500)

(defn adiciona-margem [valor] (* valor 1.2))

(defn adiciona-imposto [valor] (* valor 1.1))

(defn desconto [valor] (* valor 0.98))

(desconto (adiciona-imposto (adiciona-margem valor-base)))
; 1940.4
</snippet>

Sabendo que o valor total de venda sempre vai ser a composição das funções <code>desconto</code>, <code>adiciona-imposto</code> e <code>adiciona-margem</code>, podemos juntar essa composição em apenas uma função.

<index entry="comp" />
Como todas as funções recebem a mesma quantidade de parâmetros, podemos usar a função <code>comp</code>, que recebe as funções a serem agrupadas como parâmetro e devolve uma função que executa toda a sequência.

Nosso código ficaria assim, usando <code>comp</code>:

<snippet language="clojure">
(def valor-base 1500)

(defn adiciona-margem [valor] (* valor 1.2))

(defn adiciona-imposto [valor] (* valor 1.1))

(defn desconto [valor] (* valor 0.98))

(def total (comp desconto adiciona-imposto adiciona-margem))

(total valor-base)
; 1940.4
</snippet>

A função <code>comp</code> é uma boa alternativa para deixar o código mais limpo e também para evitarmos que ele se encha de parênteses.

Quando alguma das funções da composição tem uma quantidade diferente de parâmetros, podemos criar uma <i>partial functions</i> para deixarmos o código uniforme.

Vamos reaproveitar o nosso exemplo do contador de vogais para demonstrar como podemos utilizar <i>partial</i> e composição em conjunto.

Usando o <i>set</i> <code>vogal?</code> que já conhecemos, vamos usar um filtro para eliminar todas as letras que não sejam vogais para, no final, contarmos quantas letras sobraram.

<snippet language="clojure">
(def vogal? (set "aeiouAEIOU"))

(def texto "Livro de Clojure")

(count (filter vogal? texto))
; 6
</snippet>

<box title="Mas já?">
Aí você diz: "Puxa vida, mas eu escrevi aquela função grandona para contar vogais e agora você aparece com uma linha de código?".

Conforme você for se habituando a escrever código de maneira funcional, vai perceber que seus programas vão ficando menores e mais simples de entender.
</box>

Vamos criar uma função parcial chamada <code>filtra-vogais</code> que remove todas as letras do texto que não forem vogais. Assim como a função <code>count</code> recebe apenas um parâmetro, nossa função parcial também vai trabalhar apenas com um argumento. Com as duas funções tendo a mesma aridade, fica fácil juntarmos tudo usando <code>comp</code>.

<snippet language="clojure">
(def filtra-vogais (partial filter vogal?))

(count (filtra-vogais texto))
; 6
</snippet>

E agora podemos juntar <code>count</code> e <code>filtra-vogais</code> em uma função só:

<snippet language="clojure">
(def conta-vogais (comp count filtra-vogais))

(conta-vogais texto)
; 6
</snippet>

Mas você, como um bom observador, vai se perguntar qual a vantagem disso quando temos uma composição de apenas duas funções. Vantagem nenhuma se isso só deixar seu código mais complicado. Porém, quando estamos trabalhando com aplicações de verdade, é comum você utilizar muitas funções em sequência, ou uma função que faz coisas demais.

Nesses casos é muito útil quebrar a função que está muito grande em pedaços pequenos e altamente especializados, unindo-os com composição, ou então simular uma função grande compondo várias funções menores.

<h2>4.15. Thread macros</h2>
Existem casos em que simplesmente compor funções não é o suficiente. Se você tiver diversas funções com aridades diferentes, e não for reutilizar a função composta, criar várias funções parciais vai apenas tornar o código mais difícil de entender.

Por outro lado, encadear muitas chamadas de função sem nenhuma macro ou função para ajudar vai fazer com que o código tenha parênteses demais.

<box title="O significado de Thread">
A palavra <i>thread</i>, em seu sentido original, significa <i>cordão</i>, ou <i>barbante</i>. A palavra passou a ser utilizada em qualquer sentido que denote continuidade ou sequencia, ou simplesmente algo que vá de uma ponta à outra, como um cordão.

Em Clojure nós usamos o termo em dois casos distintos. O primeiro é quando falamos de <i>thread macros</i>, seja a <i>thread first</i> ou a <i>thread last</i>, que vamos ver a seguir. Esse nome indica que temos uma sequencia de operações sendo aplicadas em um dado inicial, sendo o resultado da primeira operação passada para a segunda, da segunda para a terceira e assim por diante, como em uma linha de montagem.

O segundo caso, muito mais conhecido, é quando falamos de <i>thread</i><bib entry="thread-history" /> nos referindo a sequencias de processos<bib entry="dijkstra-thread" /> que são executados de forma paralela, ou quase, entre si. É o caso de termos <i>duas ou mais threads sendo executadas simultaneamente</i>.
</box>

Na listagem <label entry="cap04-thread-0" /> vamos relembrar o cálculo do valor total do produto, com os impostos, lucro e descontos. O valor base é <i>1500</i> e o valor final é <code>1940.4</code>.

<snippet language="clojure" title="Cálculo do preço total pelo jeito longo" label="cap04-thread-0">
(def valor-base 1500)

(defn adiciona-margem [valor] (* valor 1.2))

(defn adiciona-imposto [valor] (* valor 1.1))

(defn desconto [valor] (* valor 0.98))

(desconto (adiciona-imposto (adiciona-margem valor-base)))
; 1940.4
</snippet>

A cada nova operação que adicionarmos no cálculo, teremos que que adicionar a função no começo da expressão e o parêntese correspondente no final. Não há nada de errado nisso, mas com o tempo começa a ficar difícil se encontrar no meio dos parênteses sem a ajuda de um editor de texto que ajude nesse ponto.

Vamos adicionar um cálculo qualquer de envio pelo correio, que vamos chamar de <code>frete</code>, e o código vai ficar assim:

<snippet language="clojure">
(frete (desconto (adiciona-imposto (adiciona-margem valor-base))))
</snippet>

A expressão começa a ficar mais longa e mais difícil de manter.

Para ajudar a reduzir esse aumento de complexidade, o Clojure oferece os operadores conhecidos por <i>thread macros</i>.

<index entry="->" />

<h3>Thread first</h3>

O primeiro deles é o operador <code>-></code>, chamado de <i>thread first</i>.

Com o <i>thread first</i> você informa o valor inicial a ser transformado, que no nosso cálculo é o <code>valor-base</code>. Em seguida informa a primeira função que vai transformar o valor, depois a segunda, a terceira, e assim por diante. O resultado da primeira função é passado como parâmetro para a segunda, cujo resultado é passado para a terceira, até que acabe a lista de operações. No final você recebe o valor.

Vamos demonstrar passo a passo como funciona o operador <code>-></code>. Primeiro informamos o valor inicial a ser transformado:

<snippet language="clojure">
(-> valor-base)
; 1500
</snippet>

Agora vamos aplicar a função <code>adiciona-margem</code> em cima desses <i>1500</i> referentes ao valor base:

<snippet language="clojure">
(-> valor-base
    adiciona-margem)
; 1800
</snippet>

Agora vamos adicionar os impostos usando a função <code>adiciona-imposto</code>. Essa função vai receber como parâmetro o valor de <i>1800</i> que conseguimos até aqui.

<snippet language="clojure">
(-> valor-base
    adiciona-margem
    adiciona-imposto)
; 1980
</snippet>

E assim por diante, até chegarmos ao cálculo do desconto. Vamos aproveitar para comparar o jeito que o código ficou usando <i>thread first</i> com o jeito anterior, aninhando as expressões:

<snippet language="clojure" title="Código completo usando ->" label="cap04-thread-1">
; cálculo utilizando ->
(-> valor-base
    adiciona-margem
    adiciona-imposto
    desconto)
; 1940.4

; cálculo do jeito longo
(desconto (adiciona-imposto (adiciona-margem valor-base)))
; 1940.4
</snippet>

No final, chegamos ao mesmo valor de <code>1940.4</code>, mas de uma forma bem mais organizada. A cada nova operação que quisermos acrescentar ao processo, basta ir adicionando função por função, na ordem, ao final da lista.

O operador <code>-></code> é chamado de <i>thread first</i> porque insere o resultado do passo anterior como primeiro parâmetro do passo seguinte. Essa sequencia de passos para transformar um valor também é conhecida por <i>pipeline</i>.

Nosso exemplo foi bem simples. Todas as funções recebem apenas um argumento. E quando a função recebe dois ou mais?

Vamos pensar em uma expressão matemática simples, apenas para exemplificar o funcionamento. Vamos escrever a expressão <code>((((2 + 3) * 4) - 5) / 6)<code> da forma normal e, em seguida vamos escrever da forma reduzida usando o operador </code>-></code>:

<snippet language="clojure">
; cálculo do jeito longo
(/ (- (* (+ 2 3) 4) 5) 6)
; 5/2

; cálculo usando ->
(-> 2 (+ 3) (* 4) (- 5) (/ 6))
; 5/2
</snippet>

<box title="De onde surgiu esse 5/2?">
Em Clojure existem três tipos numéricos básicos: inteiros, decimais e racionais.

<index entry="BigDecimal" />

Os números decimais são aqueles a que já estamos acostumados, no formato <code>2.5</code> e internamente utilizando a classe <code>java.lang.Double</code> do Java.

<index entry="Ratio" />
Já os tipos racionais são apresentados na forma <code>5/2</code> e são retornados sempre que uma divisão não resulta em um número inteiro. Internamente usa-se o tipo <code>Ratio</code> para representar esse tipo numérico.

No próximo capítulo serão apresentados mais detalhes sobre esse tipo e a motivação para que ele exista.
</box>

Avaliando passo a passo a expressão que criamos com <code>-></code>, vamos pegar o primeiro item da lista, que é <i>2</i>, e passá-lo como primeiro parâmetro para o segundo item, <code>(+ 3)</code>.

O resultado, <code>(+ 2 3)</code> é passado como primeiro parâmetro para o próximo item da lista, que é <code>(* 4)<code>, se transformando internamente em </code>(* (+ 2 3) 4)</code>, que vai ser passado como o primeiro parâmetro do item seguinte, que é <code>(- 5)</code>.

Com isso temos a expressão <code>(- (* (+ 2 3) 4) 5)</code>, que vai ser passada como o primeiro parâmetro do último item da lista, que é <code>(/ 6)</code>, resultado na expressão em seu formato normal, que é <code>(/ (- (* (+ 2 3) 4) 5) 6)</code>.

<h3>Acessando mapas com thread first</h3>

O operador <code>-></code> nos permite acessar mapas de forma bem mais simples. Na listagem <label entry="cap04-thread-2" />, vamos relembrar do mapa que usamos ao falar sobre <i>destructuring</i>. Esse mapa contém os dados de um livro qualquer e vamos demonstrar como extrair informações utilizando o operador <code>-></code>.

<snippet language="clojure" title="Mapa com os dados de um livro qualquer" label="cap04-thread-2">
(def info-livro
        {:titulo "Livro de Clojure"
         :autor "Plínio Balduino"
         :capitulos {:capitulo01 "Apresentação"
                     :capitulo02 "Uma introdução gentil ao Clojure"}})
</snippet>

Se quisermos extrair o título do capítulo 2, precisaremos acessar a propriedade <code>:capitulos<code> e, com o resultado, acessar a propriedade </code>:capitulo02</code>.

<snippet language="clojure">
; :capitulos guarda um mapa
(info-livro :capitulos)
; {:capitulo01 "Apresentação",
;  :capitulo02 "Uma introdução gentil ao Clojure"}

; e acessando :capitulo02, temos o título
((info-livro :capitulos) :capitulo02)
; "Uma introdução gentil ao Clojure"
</snippet>

Da mesma forma que, quando maior a expressão, maior a quantidade de parênteses, acontece o mesmo com mapas, onde quanto mais a fundo você precisar ir em um mapa para encontrar a informação, mais difícil de ler fica a expressão.

De forma parecida, para acessarmos uma informação de um mapa, vamos passar o nome do mapa como primeiro parâmetro para o operador <code>-></code>:

<snippet language="clojure">
(-> info-livro)
; {:titulo "Livro de Clojure",
; :capitulos {:capitulo01 "Apresentação",
;             :capitulo02 "Uma introdução gentil ao Clojure"},
; :autor "Plínio Balduino"}
</snippet>

Em seguida adicionamos na lista de parâmetros a chave do primeiro nível da informação, que é <code>capítulos</code>:
<snippet language="clojure">
(-> info-livro
    :capitulos)
; {:capitulo01 "Apresentação",
;  :capitulo02 "Uma introdução gentil ao Clojure"}
</snippet>

E, finalmente, informamos a chave que contém o próximo nível de informação, que é <code>:capitulo02</code>:

<snippet language="clojure">
(-> info-livro
    :capitulos
    :capitulo02)
; "Uma introdução gentil ao Clojure"
</snippet>

Dessa forma, podemos buscar dados em mapas grandes de forma fácil de entender e de manter.

<h3>Thread last</h3>

<index entry="->>" />

O operador <code>->></code>, conhecido por <i>thread last</i>, funciona de forma muito parecida com o <i>thread first</i>, pegando o primeiro parâmetro e usando como parâmetro do segundo, e assim por diante. A diferença é que esse parâmetro é usado como último argumento do próximo item da lista.

Vamos usar uma expressão matemática para exemplificar. Sempre achei que exemplos práticos são a melhor maneira de se entender uma funcionalidade.

<snippet language="clojure">
; Cálculo da forma normal
(/ 6 (- 5 (* 4 (+ 3 2))))
; -2/5

; E o mesmo cálculo usando ->>
(->> 2 (+ 3) (* 4) (- 5) (/ 6))
; -2/5
</snippet>

Internamente, o primeiro valor, <i>2</i>, vai ser passado como o último parâmetro da próxima expressão, que é <code>(+ 3)<code>, resultando em </code>(+ 3 2)</code>. Esse resultado é usado como o último parâmetro da expressão seguinte, que é <code>(* 4)<code> e com isso temos </code>(* 4 (+ 3 2))</code>.

Depois o resultado é usado com a expressão <code>(- 5)</code>, resultando em <code>(- 5 (* 4 (+ 3 2)))</code> e com o último item, <code>(/ 6)</code>, resultando na expressão original, que é <code>(/ 6 (- 5 (* 4 (+ 3 2))))</code>.

Vamos encerrar reescrevendo aquele nosso código que conta as vogais. Primeiro criamos uma função recursiva e depois resolvemos o mesmo problema usando <code>count</code> e <code>filter</code>. Agora vamos reescrever o código usando <code>->></code>.

Eis o código que escrevemos quando estávamos aprendendo composição de funções:

<snippet language="clojure">
(def vogal? (set "aeiouAEIOU"))

(def texto "Livro de Clojure")

(count (filter vogal? texto))
; 6
</snippet>

Para reescrever esse código usando <i>thread last</i>, primeiro pegamos o último parâmetro da expressão que estiver mais aninhada, que é <code>(filter vogal? texto)</code>, e passamos como parâmetro para o operador <code>->></code>. Em seguida adicionamos o restante da expressão que estiver mais aninhada:

<snippet language="clojure">
(->> texto
     (filter vogal?))
; (\i \o \e \o \u \e)
</snippet>

<box title="Um pequeno detalhe sobre -> e ->>">
Enquanto o operador <code>-></code> permite que você passe apenas um parâmetro, o operador <code>->></code> exige que pelo menos dois argumentos sejam utilizados.

Não sei dizer se isso é intencional ou um pequeno detalhe que passou em branco.
</box>

Agora que temos a lista de vogais que estão no texto, vamos aplicar a função <code>count</code> para sabermos quantos são:

<snippet language="clojure">
(->> texto
     (filter vogal?)
     count)
; 6
</snippet>

E finalmente temos a quantidade de vogais contida em nosso texto, de forma mais legível e simples de manter.

Um leitor mais atento vai perceber que, enquanto usamos parênteses para delimitar a expressão <code>(filter vogal?)</code>, não usamos para delimitar a função <code>count</code>.

Percebendo isso, será inevitável que faça a pergunta a respeito de quando se deve usar ou não os parênteses com os operadores <code>-><code> e </code>->></code>.

A resposta é bem simples. Sempre que a expressão for formada por uma função contendo parâmetros, como é o caso de <code>(filter vogal?)</code>, você deve usar parênteses para que o compilador saiba onde ela começa e onde termina.

Quando você estiver usando uma função que não recebe nenhum parâmetro adicional, como é o caso de <code>count</code>, fica a seu critério usar ou não parênteses.

Por exemplo, ambos os códigos abaixo funcionam da mesma forma:

<snippet language="clojure">
; Esse código
(->> texto
     (filter vogal?)
     count)
; 6

; é equivalente a esse
(->> texto
     (filter vogal?)
     (count))
; 6
</snippet>

Da mesma forma que o nosso exemplo da listagem <label entry="cap04-thread-1" /> pode ser escrita das duas formas abaixo:

<snippet language="clojure">
; Esse código
(-> valor-base
    adiciona-margem
    adiciona-imposto
    nil
    desconto)
; 1940.4

; é equivalente a esse
(-> valor-base
    (adiciona-margem)
    (adiciona-imposto)
    (desconto))
; 1940.4
</snippet>

Sendo que a segunda forma é discutivelmente mais difícil de ser lida.

<h3>Lidando com valores nulos</h3>

E se, em algum momento, um dos passos da transformação retornar <code>nil</code>?

Vamos inventar uma função chamada <code>nulo</code>, que nada mais faz do que retornar o valor <code>nil</code>. Imagine que essa função precise acessar um banco de dados, um site, e por qualquer motivo acabe retornando um valor nulo.

<snippet language="clojure">
(defn nulo [valor])

(nulo 123)
; nil
</snippet>

A função <code>nulo</code> não retorna nada, o que é entendido como <code>nil</code> pelo Clojure.

Vamos adicionar essa função <code>nulo</code> no meio do nosso cálculo de preço:

<snippet language="clojure">
(-> valor-base
    adiciona-margem
    adiciona-imposto
    nulo
    desconto)
; NullPointerException   clojure.lang.Numbers.multiply
</snippet>

<index entry="some->" />

A partir da versão 1.5 do Clojure, passamos a contar com a macro <code>some-></code>, que interrompe o processamento assim que um valor nulo é encontrado. Ai fica por sua conta devolver uma mensagem de erro para o usuário ou retornar zero como o valor do produto.

Qualquer que seja a sua estratégia, ainda será melhor do que explodir um erro na cara do usuário ou a aplicação parar de funcionar por conta de um erro não tratado.

Vamos alterar nosso código para utilizar a macro <code>some-></code>:

<snippet language="clojure">
(some-> valor-base
    adiciona-margem
    adiciona-imposto
    nulo
    desconto)
; nil
</snippet>

Da mesma forma como existem os operadores <code>-><code> e </code>->></code>, também existe o operador <code>some->><code> além do </code>some-></code>.

O funcionamento de <code>some->></code> é idêntico ao <code>->></code>, mas finalizando o processamento assim que um valor nulo for encontrado.

<index entry="Multimethods" />
<h2>4.16. Polimorfismo com multimethods</h2>

Há alguns anos trabalhei em um servidor escrito em Java que recebia o nome do serviço como texto e invocava o método correspondente após validar a sessão do usuário.

A classe que fazia essa distribuição de trabalho chegou a ter mais de mil e quinhentas linhas de código. Era difícil de manter, difícil de testar e, além de tudo, era bem feio.

Em Clojure teríamos algo com essa cara:

<snippet language="clojure">
(defn dispatcher [{service-name :service-name
                   parameters   :parameters}]
  (cond
    (= service-name "activate-product")
      (println "Ativando produto")
    (= service-name "upload-data")
      (println "Enviando dados")
    :else
      (println "Serviço não encontrado:" service-name)))
</snippet>

Para executar a função, passarímos os dados da requisição em um <i>hashmap</i>.

<snippet language="clojure">
(dispatcher {:service-name "activate-product"
             :parameters 123})
; Ativando produto

(dispatcher {:service-name "desconhecido"
             :parameters 123})
; Serviço não encontrado: desconhecido
</snippet>

Uma alternativa encontrada foi quebrar o código em pequenas classes, informando o nome do serviço correspondente em uma anotação. Uma outra classe pesquisava em tempo de execução pelo serviço que estava sendo invocado e executava a classe correta.

<index entry="Reflection" />
O código ficou mais fácil de testar, mais simples de dar manutenção, mas ficou com cheiro de mágica, uma vez que foi feito uso pesado de <i>reflection</i>.

<box title="Reflection">
De acordo com a documentação do Java<bib entry="reflect-tutorial" />, <i>reflection</i>, ou <i>reflexão</i>, é normalmente utilizado por programas que necessitam examinar ou modificar o comportamento em tempo de execução.

<i>Reflection</i> é uma forma de utilizarmos metaprogramação em Java, ou seja, uma forma de manipularmos e acessarmos detalhes do programa enquanto ele está sendo executado. Vamos ver isso na prática ao aprendermos sobre integração com Java e <i>reader macros</i>.
</box>


<index entry="Dispatch, dynamic" />
<index entry="Dispatch, runtime" />
Esse tipo de abordagem, quando o método a ser executado é definido em tempo de execução, é chamado <i>dynamic dispatch</i>, ou <i>runtime dispatch</i>.

<index entry="Runtime polymorphism" />
Felizmente em Clojure é possível resolver esse problema sem apelar para gambiarras através de <i>polimorfismo em tempo de execução</i>, ou <i>runtime polymorphism</i> no original em Inglês.

<index entry="Multiple dispatch" />
<index entry="Dispatch, multiple" />
Uma das formas de implementar esse tipo de polimorfismo é utilizando <i>multiple dispatch</i>, que nada mais é do que um nome bonito para a definição em tempo de execução para qual código será executado de acordo com parâmetros pré-definidos. Exatamente o que foi feito naquele servidor Java usando truques de metaprogramação.

<box title="Multiple dispatch">
Não existe uma tradução decente para o termo, então preferi manter assim mesmo. Você deve concordar comigo que <i>despachos múltiplos</i> não faria muito sentido.
</box>

<index entry="multimethod" />
No Clojure o recurso de <i>multiple dispatch</i> aparece na forma de <i>multimethod</i>. É uma das formas que a linguagem utiliza para implementar polimorfismo, aquele conceito tão conhecido das linguagens orientadas a objeto.

Com ele, o nosso exemplo do servidor ficaria bem mais simples e legível.

<index entry="defmulti" />
Primeiro devemos definir uma função de <i>dispatch</i> através do operador <code>defmulti</code>. Função de <i>dispatch</i> é aquela que <i>despacha as requisições</i>, ou seja, delega a responsabilidade a determinado trecho de código de acordo com os valores recebidos.

O primeiro parâmetro é o próprio nome da função de <i>dispatch</i>, enquanto o segundo parâmetro é a função que vai tratar os dados recebidos. Caso você esteja trabalhando com um <i>hashmap</i>, pode também informar a chave que vai conter a informação necessária para invocar o método correto. No próximo capítulo vamos ver em detalhes como funciona um <i>hashmap</i> e suas respectivas chaves.

Vamos usar uma chave de um <i>hashmap</i> no nosso exemplo.

<snippet language="clojure">
(defmulti dispatcher :service-name)
</snippet>

Aqui criamos um <i>multimethod</i> chamado <code>dispatcher</code>, que vai usar o valor indicado pela chave <code>:service-name</code> no <i>hashmap</i> que será passado como parâmetro.

Agora vamos criar os métodos que serão executados de acordo com o valor contido no <i>hashmap</i>. Métodos são funções especiais invocadas pelo <i>multimethod</i>.

<index entry="defmethod" />
Para criar um método, você deve usar o operador <code>defmethod</code>, passando como argumentos o nome da função de <i>dispatch</i>, que é o mesmo que você usou com <code>defmulti</code>, o valor que vai definir se aquele método vai ser executado e o parâmetro que o método vai receber.

No nosso caso, o valor que define se o método vai ser executado é o nome do serviço, em formato texto mesmo.

<snippet language="clojure">
(defmethod dispatcher "activate-product" [request]
  (println "Ativando produto"))

(defmethod dispatcher "upload-data" [request]
  (println "Enviando dados"))
</snippet>

Para executar o nosso <i>multimethod</i>, o código continua exatamente o mesmo:

<snippet language="clojure">
(dispatcher {:service-name "activate-product"
           :parameters 123})
; Ativando produto

(dispatcher {:service-name "upload-data"
           :parameters 123})
; Enviando dados
</snippet>

Porém, ao tentarmos invocar algum serviço que não tem um método associado, receberemos uma mensagem de erro:

<snippet language="clojure">
(dispatcher {:service-name "desconhecido"
           :parameters 123})
; IllegalArgumentException No method in multimethod 'dispatcher'
; for dispatch value: desconhecido
; clojure.lang.MultiFn.getFn (MultiFn.java:160)
</snippet>

<index entry="multimethod :default" />
Para resolver isso basta criarmos um método padrão, que recebe todas as requisições que não encontrarem um método. Basta utilizarmos o valor <code>:default</code> como critério e tudo volta a funcionar.

<snippet language="clojure">
(defmethod dispatcher :default [request]
  (println "Serviço não encontrado:"
           (:service-name request)))

(dispatcher {:service-name "desconhecido"
             :parameters 123})
; Serviço não encontrado: desconhecido
</snippet>

Agora, imagine que <code>:default</code> já seja um valor válido na sua aplicação e você queira que o Clojure saia da sua frente e pare de atrapalhar. Teria como fazer o método padrão enxergar outro valor?

Sim, felizmente isso é possível. Basta mudarmos um pouco a declaração do <i>multimethod</i> informando o valor padrão.

<snippet language="clojure">
(defmulti dispatcher :service-name :default :nao-encontrado)

(defmethod dispatcher :nao-encontrado [request]
  (println "Serviço não encontrado:"
           (:service-name request)))

(dispatcher {:service-name "desconhecido"
             :parameters 123})
; Serviço não encontrado: desconhecido
</snippet>

A melhor ferramenta é aquela que não atrapalha o seu trabalho.

<h3>Overloading com tipos</h3>

<index entry="static dispatch" />
Imagine agora que você tenha que invocar métodos diferentes de acordo com o tipo do parâmetro. No Java basta mudarmos a assinatura do método e o próprio compilador resolve a questão. Esse caso, em que o compilador define quem vai ser executado, é chamado de <i>static dispatch</i>.

<snippet language="java">
public class OverloadPorTipo {
  public static void qualTipo(String valor) {
    System.out.println("É String");
  }

  public static void qualTipo(Number valor) {
    System.out.println("É um número");
  }

  public static void qualTipo(Object valor) {
    System.out.println("É um objeto");
  }
}

OverloadPorTipo.qualTipo("Texto");
// É String

OverloadPorTipo.qualTipo(3.14);
// É um número

OverloadPorTipo.qualTipo(Boolean.TRUE);
// É um objeto
</snippet>

Podemos chegar ao mesmo utilizando <i>multimethods</i> que faz uso de <i>dynamic dispatch</i>.

<index entry="JavaREPL" />
<box title="Testando código Java">
Você pode usar o <i>JavaREPL</i> para testar códigos Java curtos, sem a necessidade de abrir um IDE.

http://www.javarepl.com/
</box>

<index entry="class" />
Lembrando que na declaração do <i>multimethod</i> você informa a função que vai retornar o valor usado como critério, vamos utilizar a função <code>class</code>, que retorna a classe do valor recebido.

<snippet language="clojure">
(defmulti qual-tipo class)

(defmethod qual-tipo java.lang.String [valor]
  (println "É String"))

(defmethod qual-tipo java.lang.Number [valor]
  (println "É um número"))

(defmethod qual-tipo java.lang.Object [valor]
  (println "É um objeto"))
</snippet>

Agora vamos executar o nosso código. Note como ficou parecido com as chamadas do Java.

<snippet language="clojure">
(qual-tipo "Texto")
; É String

(qual-tipo 3.14)
; É um número

(qual-tipo Boolean/TRUE)
; É um objeto
</snippet>

<index entry="Protocolos" />
<h2>4.17. Polimorfismo com protocolos</h2>

Protocolos são um conjunto de funções que seguem uma regra predefinida.

É como se você tivesse uma versão Clojure das interfaces do Java, onde você precisa implementar um conjunto mínimo métodos para que o seu objeto seja aceito, mas essa implementação fica por sua conta.

Dessa forma, podemos passar a implementação de um protocolo para uma função, que vai poder executar um conjunto de operações com ele sem medo de que a operação não saiba como lidar com o tipo de dado.

<index entry="Expression problem" />
Além do mais, o uso de protocolos permite que você estenda e complemente tipos já existentes, resolvendo assim um problema conhecido como <i>expression problem</i>.<bib entry="expression-problem" />.

Resumidamente, um <i>expression problem</i> é um tipo de problema que não pode ser resolvido facilmente com Programação Funcional ou com Orientação a Objetos ao mesmo tempo<bib entry="expression-problem-lammel" />.

Em uma linguagem puramente funcional podemos facilmente adicionar código que trabalhe com dados sem a necessidade de alterar o código já existente, mas não conseguimos alterar os tipos já existentes sem modificar o código<bib entry="expression-problem-fowler" />.

<image src="images/capitulo_08/expression-problem-fp.png" description="Na Programação Funcional é fácil adicionar funcionalidades" width="80%" label="expression-problem-fp" />

Por outro lado, em uma linguagem puramente orientada a objetos, podemos criar novos tipos de dados facilmente, mas não conseguimos adicionar funcionalidades ao código atual sem alterá-lo.

<image src="images/capitulo_08/expression-problem-oop.png" description="Na Orientação a Objetos é fácil adicionar tipos" width="80%" label="expression-problem-oop" />

<index entry="Open classes" />
<index entry="Monkey patching" />

No Ruby esse problema é resolvido utilizando <i>open classes</i>, que é a habilidade de permitir que alteremos classes já existentes sem alterar o código que existe hoje. Essas alterações são chamadas de <i>monkey patching</i><bib entry="ruby-lucas" />.

Por exemplo, todo texto é uma instância da classe <code>String</code>. Se quisermos saber quantas palavras tem um texto de uma maneira que toda <code>String</code> tenha essa funcionalidade, basta adicionarmos o método diretamente na classe e automaticamente todo o nosso código terá acesso a ele.

Vamos chamar nosso método de <code>count_words</code>.

<snippet language="ruby">
frase = "Meu cavalo come abobora"

frase.class
# String

frase.count_words
# NoMethodError: undefined method `count_words' for
# "Meu cavalo come abobora":String
</snippet>

O método <code>count_words</code> não existe na implementação padrão da classe <code>String</code>, então vamos adicioná-lo.

<snippet language="ruby">
class String
  def count_words
    self.split(" ").count
  end
end

frase.count_words
# 4
</snippet>

Agora vamos tentar com um texto que não existia quando adicionamos o método:

<snippet language="ruby">
"Essa frase eh nova em folha".count_words
# 6
</snippet>

Já JavaScript resolve isso utilizando <i>prototipação</i>, que é a forma como a linguagem implementa Orientação a Objetos sem a necessidade de utilizar classes.

<snippet language="javascript">
var frase = "Meu cavalo come abóbora";

typeof frase
// "string"

frase.countWords();
// VM417:2 Uncaught TypeError: frase.countWords is not a function
// (anonymous function)

String.prototype.countWords = function() {
  return this.split(" ").length
};

frase.countWords();
// 4

"Essa é outra frase qualquer".countWords();
// 5
</snippet>

Mas você comprou um livro de Clojure, e não de Ruby ou de JavaScript, então você deve estar curioso para saber como resolvemos isso sem apelar para outras linguagens.

A primeira forma nós já vimos no capítulo <label entry="capitulo-funcoes" /> e chama-se <i>multimethod</i>.

<index entry="multimethod" />
<i>Multimethods</i> são legais e bem poderosos, mas fazem uso de <i>dynamic dispatching</i>, decidindo em tempo de execução qual trecho de código vai ser chamado. Ao mesmo tempo que isso aumenta bastante a flexibilidade da linguagem, também acaba nos oferecendo um código relativamente lento.

A outra forma é justamente usando protocolos, como o leitor mais atento já tinha imaginado.

Protocolos são, basicamente, um conjunto de métodos e assinaturas sem as respectivas implementações, como se fosse uma interface Java. Inclusive, ao criar um protocolo, uma interface Java é criada internamente contendo todos métodos declarados.

<index entry="Dispatch, static" />
<index entry="Dispatch, compile time" />
A grande vantagem dos protocolos em relação aos <i>multimethods</i> está na velocidade, já que protocolos fazem <i>static dispatching</i>, ou <i>compile time dispatch</i>, que é a decisão em tempo de compilação de qual trecho de código será executado de acordo com o tipo de dado envolvido.

Vamos demonstrar como podemos utilizar polimorfismo com protocolos usando um exemplo do mundo real. Assim nós fugimos do manjado exemplo dos <i>cachorros e gatos são animais</i><label entry="dominando-js" />.

Estamos desenvolvendo uma biblioteca de <i>log</i>, onde você pode registrar mensagens conforme o código vai sendo executado. Isso é muito útil para encontrar a causa de problemas na aplicação ou mesmo para entender melhor como ela funciona.

Poderíamos simplesmente usar <code>println</code> para exibir as mensagens, mas queremos algo mais dinâmico. Queremos ter a possibilidade de exibir as mensagens no console, ou gravar as mensagens em um arquivo ou em um banco de dados ou mesmo enviar para um servidor de <i>logs</i>. Tudo isso sem alterar o código que vai ser inspecionado.

Um protocolo define apenas a estrutura que o nosso tipo de dados vai ter, sem qualquer detalhe sobre sua implementação.

Existem três formas de implementarmos um protocolo.

A primeira forma considera que um protocolo é apenas uma interface Java, já que internamente o Clojure vai criar uma interface para o protocolo e utiliza o operador <code>reify</code>. Vamos ver esse operador com calma no capítulo <label entry="capitulo-integracao-java" />.

As duas outras formas são muito parecidas entre si, sendo que uma cria uma estrutura chamada <i>record</i> e a outra cria uma estrutura chamada <i>type</i>. A diferença entre ambas é que <i>record</i> é imutável e <i>type</i> não.

Vamos utilizar <i>record</i> para os nossos exemplos e deixar <i>type</i> para o final, apenas para demonstrar como utilizar mutabilidade. Em todo o resto ambos funcionam da mesma forma.

Ao final do capítulo <label entry="capitulo-integracao-java" /> você vai encontrar um diagrama que ajuda a escolher qual construção será utilizada de acordo com suas necessidades.

Vamos implementar um <i>record</i> chamado <code>Loggable</code>, onde vamos definir quatro níveis de mensagem, de acordo com a gravidade do que queremos registrar.

O nível mais baixo chama-se <code>debug</code>, com mensagens utilizadas apenas para depurar, ou <i>debugar</i>, a aplicação. O nível seguinte chama-se <code>warning</code>, com mensagens de alerta de que algo pode não estar de acordo com o esperado, como por exemplo uma tentativa de acesso ao sistema sem a devida autenticação.

Em seguida temos <code>error</code>, para quando ocorre um erro que pode ser recuperado, como por exemplo um problema na conexão de rede e, finalmente, temos <code>fatal</code>, para quando ocorre um erro que não pode ser recuperado, como falta de memória ou algo grave dentro da JVM, e que obriga a aplicação a ser finalizada.

<snippet language="clojure">
(defprotocol Loggable
  (debug   [this message])
  (warning [this message])
  (error   [this message ^Throwable e])
  (fatal   [this message ^Throwable e]))
; Loggable
</snippet>

Cada método de um <i>record</i> deve, obrigatoriamente, ter pelo menos um parâmetro que vai armazenar a referência a si mesmo. Imaginando um <i>procotol</i> como uma interface Java e um <i>record</i> ou <i>type</i> como uma classe, é como se cada método recebesse o objeto <code>this</code> como primeiro parâmetro.

Exatamente por conta dessa analogia eu chamei o primeiro parâmetro de cada método de <code>this</code>, mas você pode utilizar o nome que for mais conveniente.

Além de <code>this</code>, todos os métodos têm um parâmetro por onde você vai poder passar a mensagem a ser exibida. Note que <code>error</code> e <code>fatal</code> também têm um parâmetro <code>e</code>, que obrigatoriamente deve ser uma implementação de <code>java.lang.Throwable</code>.

Todos os erros e exceções da JVM são implementações de <code>java.lang.Throwable</code>. Isso vai ser útil para que possamos saber exatamente onde ocorreu o erro.

O caracter <code>^<code> na frente de </code>Throwable</code> indica um <i>type hint</i>, que é uma forma de informarmos ao compilador com qual tipo queremos trabalhar ali. Veremos <i>type hints</i> com calma no capítulo <bib entry="capitulo-integracao-java" />.

Agora vamos implementar o código da forma mais simples de <i>log</i>, que é aquela que exibe a informação na tela, ou no console, se preferir. Vamos chamar essa implementação de <code>ConsoleLogger</code>, que não vai receber nenhuma parâmetro em sua criação..

<snippet language="clojure">
(defrecord ConsoleLogger []
  Loggable
  (debug   [this message]
    (println "[DEBUG]" message)
    message)
  (warning [this message]
    (println "[WARN ]" message)
    message)
  (error   [this message e]
    (println "[ERROR]" message)
    (.printStackTrace e)
    message)
  (fatal   [this message e]
    (println "[FATAL]" message)
    (.printStackTrace e)
    message))
; user.ConsoleLogger
</snippet>

Perceba que em <code>error</code> e <code>fatal</code> nós também exibimos o <i>stacktrace</i> do erro, que é aquela lista de métodos e funções com os respectivos números de linha exibida sempre que ocorre um erro na execução do código.

Perceba também que todos os nossos métodos retornam a própria mensagem que foi passada como parâmetro. Isso nos permite utilizar o <i>log</i> dentro de um código sem alterar o resultado.

Agora vamos criar um <i>var</i> chamado <code>logger</code>, que armazenar uma instância de <code>ConsoleLogger</code> e é por onde vamos utilizar nossa ferramenta de <i>log</i>.

Toda vez que você criar um <i>record</i> ou um <i>type</i>, o Clojure vai te dar uma função iniciada por <code>-></code> que cria o objeto para você. É como se fosse um construtor de uma classe Java.

<snippet language="clojure">
(def logger (->ConsoleLogger))

(debug logger "Isso é uma mensagem de debug")
; [DEBUG] Isso é uma mensagem de debug
; "Isso é uma mensagem de debug"
</snippet>

Aqui <code>debug</code> não só exibiu a mensagem de depuração como também retornou o mesmo texto da entrada.

O mesmo acontece com os demais métodos.

<snippet language="clojure">
(warning logger "Uma mensagem de aviso")
; [WARN ] Uma mensagem de aviso
; "Uma mensagem de aviso"

(error logger "Agora um erro" (java.io.FileNotFoundException.))
; [ERROR] Agora um erro
; java.io.FileNotFoundException
;       at user$eval1137.invoke(NO_SOURCE_FILE:3)
;       at clojure.lang.Compiler.eval(Compiler.java:6703)
;       at clojure.lang.Compiler.eval(Compiler.java:6692)
;       at clojure.lang.Compiler.eval(Compiler.java:6666)
;; mais um monte de chamadas
; "Agora um erro"

(fatal logger "E aqui o mundo acabou" (StackOverflowError.)))
; [FATAL] E aqui o mundo acabou
; java.lang.StackOverflowError
;       at user$eval1139.invoke(NO_SOURCE_FILE:4)
;       at clojure.lang.Compiler.eval(Compiler.java:6703)
;       at clojure.lang.Compiler.eval(Compiler.java:6693)
;       at clojure.lang.Compiler.eval(Compiler.java:6666)
;; mais um monte de chamadas
; "E aqui o mundo acabou"
</snippet>

<snippet language="clojure">
(def w (java.io.FileWriter. "arquivo.log"))

(.append w (str "Linha 1" \return))
(.flush w)
</snippet>
[TODO continuar daqui]

<h3>A seguir...</h3>

Apesar das funções serem uma parte muito importante da linguagem, como você deve ter notado pelo tamanho todo deste capítulo, elas não teriam muita utilidade sem as estruturas de dados que a linguagem oferece, e é isso que veremos com detalhes no próximo capítulo.
</page>
</template>

<script>
export default {
  name: 'Functions'
}
</script>
