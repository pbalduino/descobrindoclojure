<template>
<page>
  <h1>2. Uma introdução gentil ao Clojure</h1>
  [label capitulo-introducao-clojure]

  <bio entry="bio-marvin-minsky" />
  <chapter-quote author="Marvin Minsky">
    "Qualquer pessoa pode aprender LISP em um dia, exceto os que aprenderam FORTRAN. Esses demorarão três dias."
  </chapter-quote>

  <h2>2.1 O que é Clojure?</h2>

  <index entry="CLR" />
  <index entry="JVM" />
  <index entry="Hickey, Rich" />

  <p class="text-justify">A linguagem Clojure foi criada por Rich Hickey e lançada em 2007, focando o desenvolvimento na JVM, mas hoje em dia é possível executar a linguagem sobre a CLR (a máquina virtual do .NET) e mesmo sobre alguma ::engine:: JavaScript, como o V8, que é a base do ::Node.js::.</p>

  <index entry="concorrência"/>[index multithreading][index programação funcional][index JavaScript][index Scala]
  <p class="text-justify">É uma linguagem funcional, como o JavaScript e o Scala, e foi pensada para facilitar o desenvolvimento de aplicações que dependam de concorrência de processos e ::multithreading::[ref clojure-rationale], o que não significa que não possa ser usada para criar outras aplicações que não dependam disso. Sistemas concorrentes que podem ser bem difíceis de desenvolver com Java acabam se tornando mais simples e concisos.</p>

  <p class="text-justify">É também um dialeto LISP[ref history-lisp], mas com mudanças interessantes na forma de apresentar a linguagem, o que elimina uma porção de parênteses[ref lisp-differences] quando comparamos códigos equivalentes escritos em Common Lisp ou Scheme, que são os dois dialetos LISP historicamente mais conhecidos.</p>

  <h2>2.2 Configurando o ambiente</h2>

  <p class="text-justify">No decorrer do livro, vamos escrever código o tempo todo e é importante que você já tenha o ambiente instalado antes mesmo de inserir sua primeira instrução.</p>

  <p class="text-justify">A primeira coisa que precisamos nos certificar é que você tenha o JDK instalado em sua máquina. Ele pode ser baixado no seguinte link:</p>

  <p class="text-justify"><code>http://www.oracle.com/technetwork/java/javase/downloads/index.html</code></p>

  <p class="text-justify">Verifique se a versão instalada do Java é a 1.8 ou mais recente. As versões mais recentes do Clojure não funcionam com versões mais antigas do Java.</p>

  <p class="text-justify">Digite %%java -version%% em seu Prompt de Comandos ou Terminal para verificar se você está com a máquina virtual instalada e qual sua respectiva versão.</p>

  <p class="text-justify">Após termos o JDK funcionando, vamos instalar uma ferramenta chamada ::Leiningen::, que vai ser nosso grande companheiro mesmo depois que você terminar o livro.</p>

  <p class="text-justify">O ::Leiningen:: automatiza uma série de tarefas, gerencia dependências, agiliza a execução de testes, compilação e pode ser estendido com o uso de plugins. Existem plugins para praticamente todas as tarefas comuns que você precise executar ao desenvolver com Clojure. Para quem está vindo do Java, podemos entender o Leiningen como um primo turbinado do ::Maven::.</p>

  <p class="text-justify">Acesse http://leiningen.org/#install e leia as instruções para instalação do script. Em seguida, execute o comando ::lein -v:: para verificar a versão atual e baixar as dependências que serão usadas inicialmente.</p>

  <p class="text-justify">Durante a escrita desse livro, o Leiningen estava em sua versão %%2.9.0%%, mas não se preocupe se a sua versão for mais recente enquanto você estiver lendo o livro.</p>

  <p class="text-justify">Execute %%lein%% sem nenhum parâmetro para ver as opções de uso do Leiningen. Voltaremos a elas assim que explicarmos a sintaxe da linguagem.</p>

  <h2>2.3 Explicando a sintaxe</h2>

  <p class="text-justify">É bem provável que você se assuste na primeira vez que ver um código Clojure, mas fique tranquilo, pois existe uma lógica muito simples por trás dessa cara diferentona.</p>

  <p class="text-justify">É comum pensar num primeiro momento que o Clojure é invertido em relação às outras linguagens por conta da ordem em que as expressões são escritas, mas você vai acabar percebendo que, na verdade, a linguagem é consistente até demais se olharmos em perspectiva.</p>

  <p class="text-justify">Relembrando das aulas de matemática, nós expressamos funções dessa forma:</p>

  <pre code="javascript">
y = f(x)
  </pre>

  <p class="text-justify">Para calcular o dobro, teríamos %%y = f(x) = x * 2%%, ou %%y = x * 2%%.</p>

  <p class="text-justify">Para calcularmos o dobro de um número, onde internamente calcularíamos o valor de um parâmetro %%x%% multiplicado por ::2::, teríamos:</p>

  [code javascript]
y = dobro(21)
  [/code]

[index notação prefixa][index operador][index operando]
  <p class="text-justify">Note que estamos usando uma notação diferente: primeiro vem o ::operador:: %%dobro%% e, em seguida, vem o ::operando::, ou parâmetro, ::21::. Chamamos isso de ::notação prefixa::.</p>

  <box title="Notação prefixa, ou simbólica">
    <p class="text-justify">A notação prefixa utilizada no Clojure, e em qualquer outro LISP, é conhecida também como ::S-Expression::. Esse nome vem do termo ::Symbolic Expression::, ou expressão simbólica, onde uma lista contendo outras listas pode ser representada internamente como uma árvore.</p>

    <p class="text-justify">O termo foi utilizado pela primeira vez por John McCarthy, o criador do ::LISP::[ref lisp-1]. Antes das ::S-Expressions::, McCarthy tinha trabalhado com a ideia de ::M-Expressions::, ou ::meta-expressions::, mas a ideia foi descartada[ref history-lisp].</p>
  </box>

<p class="text-justify">Já para executar um cálculo aritmético, usamos a forma abaixo:</p>

<pre code="javascript">
y = 21 * 2
</pre>

[index notação infixa]
<p class="text-justify">Primeiro temos um operando ::21::, depois temos um operador responsável pela multiplicação e, finalmente, o segundo operando ::2::. Chamamos essa forma de ::notação infixa::.</p>

[box Se você veio do Ruby...]
[index Ruby]
Se você é um desenvolvedor Ruby, ignore esta última expressão.

No Ruby, o cálculo acima utiliza internamente a notação prefixa onde ::21:: é um objeto, %%*%% é um método (ou uma mensagem, se preferir) e ::2:: é um parâmetro.

[code ruby]
x = 21 * 2

y = 21.*(2)
[/code]

As duas formas são válidas e equivalentes, apesar da segunda ser mais difícil de ler.
[/box]

A coisa fica bagunçada quando misturamos as duas formas:

[code javascript]
y = dobro(7 * 3)
[/code]

Na expressão acima misturamos notação prefixa com infixa. Não há problema algum com isso, mas não é um bom exemplo de consistência.

Quando falamos em Clojure, ou qualquer outra forma de LISP, o primeiro item de uma lista é um operador e todos os demais são operandos.

[index função][index macros][index forma especial]
Todo operador é uma ::função::, ::macro:: ou ::forma especial::, inclusive os operadores matemáticos. Não se preocupe em entender agora o que são macros ou formas especiais.

Todo os itens do resto da lista são considerados valores, parâmetros ou operandos.

Imagine agora que o símbolo + é uma função. Para calcularmos uma soma usaríamos o seguinte código:

[code javascript]
+(1, 2)
[/code]

Movendo os parênteses e removendo as vírgulas, a nossa soma inicial ficaria:

[code clojure]
(+ 1 2)
[/code]

[box Molhando os dedos]
Vamos usar uma ferramenta muito importante do Clojure chamada REPL. Não se preocupe agora em saber o que significa, pois teremos um capítulo todo só para isso.

No Terminal do seu sistema operacional, execute o comando %%lein repl%% para carregar o REPL do Clojure. Se for a primeira vez que você o abre, algumas dependências ainda serão baixadas para o seu computador.

Digite a instrução %%(+ 1 2)%% e pressione ENTER. A linha de baixo trará o resultado, ::3::.

Parabéns, você acabou de escrever seu primeiro código em Clojure e nós ainda nem começamos a aprender a linguagem.

Use o REPL para acompanhar os exemplos desse livro enquanto for lendo, digitando e vendo os resultados conforme você aprende.

Quando quiser sair do REPL, digite %%exit%% e pressione ENTER.
[/box]

Sabemos que %%dobro%% também é uma função. Para calcular %%dobro%%, usaríamos:

[code clojure]
(dobro 21)
[/code]

Percebam que agora temos uma regra que se aplica a todos os casos. Repetindo a expressão acima que mistura as notações infixa e prefixa usando as regras do LISP, teríamos:

[code clojure]
(dobro (* 7 3))
[/code]

[box Testando 'dobro']
Para que possamos testar todos os exemplos desse capítulo, precisamos criar uma função chamada %%dobro%%, que recebe um parâmetro %%x%% e devolve seu valor multiplicado por dois.

Em Clojure, criamos uma função %%dobro%% da seguinte forma:

[code clojure]
(defn dobro [x]
  (* x 2))
[/code]

Agora vamos abrir o REPL e digitar as linhas abaixo:

[code clojure]
(dobro 21)

(dobro (* 7 3))
[/code]

Em ambos os casos, você obterá o número ::42:: como resposta.

Ah, e comemore: você acabou de escrever sua primeira função em Clojure. As funções são parte importantíssima de uma linguagem funcional.
[/box]

Talvez pela sua origem acadêmica e fortemente influenciada pela matemática, as implementações de LISP levam muito a sério a questão da consistência.

[section Explicando os parênteses]

[index expressões numéricas]
Quando eu estava na quarta série, aprendi algo chamado de ::expressão numérica::, que consiste em resolver um cálculo extenso atacando um pedaço por vez, organizadamente.

Cada pedaço desse cálculo fica dentro de parênteses, colchetes ou chaves, dependendo do quão aninhado esteja a expressão. Eu nunca mais vi esse tipo de hierarquia, mas sempre considerei como um jeito bacana de manter a organização.

Uma expressão numérica tem essa cara:

[code javascript]
x = {1 + [3 * (5 + 7)]}
[/code]

Resolve a expressão de dentro para fora:

[code javascript]
x = {1 + [3 * (12)]}

x = {1 + [36]}

x = {37}

x = 37
[/code]

Simples, não?

Agora vamos extrapolar o que aprendemos na quarta série para uma linguagem de programação, trocando chaves e colchetes por parênteses:

[code javascript]
x = (1 + (3 * (5 + 7)))
[/code]

Vamos substituir a nossa conhecida notação infixa pela prefixa:

[code clojure]
x = (+ 1 (* 3 (+ 5 7)))
[/code]

Pronto. Você tem uma expressão numérica com a cara do LISP, resolvendo da forma como a professora ensinou lá na quarta série: primeiro você resolve os parênteses de dentro, depois os próximos, até terminar.

Pode parecer estranho, mas não se preocupe, com o tempo essa notação não te trará dificuldades na leitura e entendimento do código. E há sim mais razões pela qual ela é dessa maneira, que desvendaremos aos poucos.

Qualquer LISP que você encontrar pela frente, incluindo o Clojure, funciona exatamente dessa maneira.

[index precedência de operadores]
Uma vantagem que isso traz é que você não precisa ficar se preocupando com precedência de operadores. Imagine que você tem o código abaixo:

[code javascript]
x = 3 * 2 + 1

y = 1 + 2 * 3
[/code]

Os valores de %%x%% e %%y%% serão iguais? Sim, ambas as variáveis contém o número ::7::, mas para saber disso você precisou ler em algum outro lugar que ::o operador de multiplicação tem precedência sobre o operador de adição::. É algo que você espera que seja assim e age como se realmente fosse.

E o que aconteceria se você estiver usando uma linguagem em que a adição tem precedência sobre a multiplicação? Ou pior ainda: os operadores são executados da esquerda para a direita conforme forem aparecendo.

No primeiro caso, %%x%% e %%y%% continuariam sendo iguais, mas ambos teriam o valor ::9::. No segundo caso, %%x%% seria igual a ::7:: e %%y%% seria igual a ::9::.

Seria mais fácil se as expressões fossem escritas assim:

[code javascript]
x = (3 * 2) + 1

y = 1 + (2 * 3)
[/code]

Agora está claro para qualquer pessoa o que vai ser executado primeiro, independente do modo como a expressão seja interpretada pela linguagem. Pois saiba que é exatamente assim que um LISP trabalha. Usando a notação prefixa, as expressões acima ficariam da forma a seguir, que você pode testar usando o REPL:

[code clojure]
(+ (* 3 2) 1)

(+ 1 (* 3 2))
[/code]

Primeiro será executada a multiplicação, que está nos parênteses mais internos e, em seguida, será executada a adição. Tudo isso sem se preocupar com regras ocultas ou peculiaridades do compilador.

No capítulo a seguir, vamos aprender mais sobre o REPL para que possamos utilizar Clojure de uma forma rápida e produtiva.
</page>
</template>

<script>
export default {
  name: 'GentleIntroduction'
}
</script>
