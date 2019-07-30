<template>
<page>
  <h1>2. Uma introdução gentil ao Clojure</h1>

  <bib entry="bio-marvin-minsky" />
  <chapter-quote author="Marvin Minsky">
    "Qualquer pessoa pode aprender LISP em um dia, exceto os que aprenderam FORTRAN. Esses demorarão três dias."
  </chapter-quote>

  <h2>2.1 O que é Clojure?</h2>

  <index entry="CLR" />
  <index entry="JVM" />
  <index entry="Hickey, Rich" />

  <p class="text-justify">A linguagem Clojure foi criada por Rich Hickey e lançada em 2007, focando o desenvolvimento na JVM, mas hoje em dia é possível executar a linguagem sobre a CLR (a máquina virtual do .NET) e mesmo sobre alguma <i>engine</i> JavaScript, como o V8, que é a base do <i>Node.js</i>.</p>

  <index entry="concorrência" />
  <index entry="multithreading" />
  <index entry="programação funcional" />
  <index entry="JavaScript" />
  <index entry="Scala" />

  <p class="text-justify">É uma linguagem funcional, como o JavaScript e o Scala, e foi pensada para facilitar o desenvolvimento de aplicações que dependam de concorrência de processos e <i>multithreading</i><bib entry="clojure-rationale" />, o que não significa que não possa ser usada para criar outras aplicações que não dependam disso. Sistemas concorrentes que podem ser bem difíceis de desenvolver com Java acabam se tornando mais simples e concisos.</p>

  <p class="text-justify">É também um dialeto LISP<bib entry="history-lisp" />, mas com mudanças interessantes na forma de apresentar a linguagem, o que elimina uma porção de parênteses<bib entry="lisp-differences" /> quando comparamos códigos equivalentes escritos em Common Lisp ou Scheme, que são os dois dialetos LISP historicamente mais conhecidos.</p>

  <h2>2.2 Configurando o ambiente</h2>

  <p class="text-justify">No decorrer do livro, vamos escrever código o tempo todo e é importante que você já tenha o ambiente instalado antes mesmo de inserir sua primeira instrução.</p>

  <p class="text-justify">A primeira coisa que precisamos nos certificar é que você tenha o JDK instalado em sua máquina. Ele pode ser baixado no seguinte link:</p>

  <p class="text-justify"><code>http://www.oracle.com/technetwork/java/javase/downloads/index.html</code></p>

  <p class="text-justify">Verifique se a versão instalada do Java é a 1.8 ou mais recente. As versões mais recentes do Clojure não funcionam com versões mais antigas do Java.</p>

  <p class="text-justify">Digite <code>java -version</code> em seu Prompt de Comandos ou Terminal para verificar se você está com a máquina virtual instalada e qual sua respectiva versão.</p>

  <p class="text-justify">Após termos o JDK funcionando, vamos instalar uma ferramenta chamada <i>Leiningen</i>, que vai ser nosso grande companheiro mesmo depois que você terminar o livro.</p>

  <p class="text-justify">O <i>Leiningen</i> automatiza uma série de tarefas, gerencia dependências, agiliza a execução de testes, compilação e pode ser estendido com o uso de plugins. Existem plugins para praticamente todas as tarefas comuns que você precise executar ao desenvolver com Clojure. Para quem está vindo do Java, podemos entender o Leiningen como um primo turbinado do <i>Maven</i>.</p>

  <p class="text-justify">Acesse http://leiningen.org/#install e leia as instruções para instalação do script. Em seguida, execute o comando <code>lein -v</code> para verificar a versão atual e baixar as dependências que serão usadas inicialmente.</p>

  <p class="text-justify">Durante a escrita desse livro, o Leiningen estava em sua versão <code>2.9.0</code>, mas não se preocupe se a sua versão for mais recente enquanto você estiver lendo o livro.</p>

  <p class="text-justify">Execute <code>lein</code> sem nenhum parâmetro para ver as opções de uso do Leiningen. Voltaremos a elas assim que explicarmos a sintaxe da linguagem.</p>

  <h2>2.3 Explicando a sintaxe</h2>

  <p class="text-justify">É bem provável que você se assuste na primeira vez que ver um código Clojure, mas fique tranquilo, pois existe uma lógica muito simples por trás dessa cara diferentona.</p>

  <p class="text-justify">É comum pensar num primeiro momento que o Clojure é invertido em relação às outras linguagens por conta da ordem em que as expressões são escritas, mas você vai acabar percebendo que, na verdade, a linguagem é consistente até demais se olharmos em perspectiva.</p>

  <p class="text-justify">Relembrando das aulas de matemática, nós expressamos funções dessa forma:</p>

<snippet language="javascript">y = f(x)</snippet>

  <p class="text-justify">Para calcular o dobro, teríamos <code>y = f(x) = x * 2</code>, ou <code>y = x * 2</code>.</p>

  <p class="text-justify">Para calcularmos o dobro de um número, onde internamente calcularíamos o valor de um parâmetro <code>x</code> multiplicado por <i>2</i>, teríamos:</p>

<snippet language="javascript">y = dobro(21)</snippet>

<index entry="notação prefixa" />
<index entry="operador" />
<index entry="index operando" />
  <p class="text-justify">Note que estamos usando uma notação diferente: primeiro vem o <i>operador</i> <code>dobro</code> e, em seguida, vem o <i>operando</i>, ou parâmetro, <i>21</i>. Chamamos isso de <i>notação prefixa</i>.</p>

  <box title="Notação prefixa, ou simbólica">
    <p class="text-justify">A notação prefixa utilizada no Clojure, e em qualquer outro LISP, é conhecida também como <i>S-Expression</i>. Esse nome vem do termo <i>Symbolic Expression</i>, ou expressão simbólica, onde uma lista contendo outras listas pode ser representada internamente como uma árvore.</p>

    <p class="text-justify">O termo foi utilizado pela primeira vez por John McCarthy, o criador do <i>LISP</i><bib entry="lisp-1" />. Antes das <i>S-Expressions</i>, McCarthy tinha trabalhado com a ideia de <i>M-Expressions</i>, ou <i>meta-expressions</i>, mas a ideia foi descartada<bib entry="history-lisp" />.</p>
  </box>

<p class="text-justify">Já para executar um cálculo aritmético, usamos a forma abaixo:</p>

<snippet language="javascript">y = 21 * 2</snippet>

<index entry="notação infixa" />
<p class="text-justify">Primeiro temos um operando <i>21</i>, depois temos um operador responsável pela multiplicação e, finalmente, o segundo operando <i>2</i>. Chamamos essa forma de <i>notação infixa</i>.</p>

<box title="Se você veio do Ruby...">
<index entry="Ruby" />
<p class="text-justify">Se você é um desenvolvedor Ruby, ignore esta última expressão.</p>

<p class="text-justify">No Ruby, o cálculo acima utiliza internamente a notação prefixa onde <i>21</i> é um objeto, <code>*</code> é um método (ou uma mensagem, se preferir) e <i>2</i> é um parâmetro.</p>

<snippet language="ruby">x = 21 * 2

y = 21.*(2)</snippet>

<p class="text-justify">As duas formas são válidas e equivalentes, apesar da segunda ser mais difícil de ler.</p>
</box>

<p class="text-justify">A coisa fica bagunçada quando misturamos as duas formas:</p>

<snippet language="javascript">y = dobro(7 * 3)</snippet>

<p class="text-justify">Na expressão acima misturamos notação prefixa com infixa. Não há problema algum com isso, mas não é um bom exemplo de consistência.</p>

<p class="text-justify">Quando falamos em Clojure, ou qualquer outra forma de LISP, o primeiro item de uma lista é um operador e todos os demais são operandos.</p>

<index entry="função"/>
<index entry="macros" />
<index entry="forma especial" />
<p class="text-justify">Todo operador é uma <i>função</i>, <i>macro</i> ou <i>forma especial</i>, inclusive os operadores matemáticos. Não se preocupe em entender agora o que são macros ou formas especiais.</p>

<p class="text-justify">Todo os itens do resto da lista são considerados valores, parâmetros ou operandos.</p>

<p class="text-justify">Imagine agora que o símbolo + é uma função. Para calcularmos uma soma usaríamos o seguinte código:</p>

<snippet language="javascript">+(1, 2)</snippet>

<p class="text-justify">Movendo os parênteses e removendo as vírgulas, a nossa soma inicial ficaria:</p>

<snippet language="javascript">(+ 1 2)</snippet>

<box title="Molhando os dedos">
<p class="text-justify">Vamos usar uma ferramenta muito importante do Clojure chamada REPL. Não se preocupe agora em saber o que significa, pois teremos um capítulo todo só para isso.</p>

<p class="text-justify">No Terminal do seu sistema operacional, execute o comando <code>lein repl</code> para carregar o REPL do Clojure. Se for a primeira vez que você o abre, algumas dependências ainda serão baixadas para o seu computador.</p>

<p class="text-justify">Digite a instrução <code>(+ 1 2)</code> e pressione ENTER. A linha de baixo trará o resultado, <i>3</i>.</p>

<p class="text-justify">Parabéns, você acabou de escrever seu primeiro código em Clojure e nós ainda nem começamos a aprender a linguagem.</p>

<p class="text-justify">Use o REPL para acompanhar os exemplos desse livro enquanto for lendo, digitando e vendo os resultados conforme você aprende.</p>

<p class="text-justify">Quando quiser sair do REPL, digite <code>exit</code> e pressione ENTER.</p>
</box>

<p class="text-justify">Sabemos que <code>dobro</code> também é uma função. Para calcular <code>dobro</code>, usaríamos:</p>

<snippet language="clojure">(dobro 21)</snippet>

<p class="text-justify">Percebam que agora temos uma regra que se aplica a todos os casos. Repetindo a expressão acima que mistura as notações infixa e prefixa usando as regras do LISP, teríamos:</p>

<snippet language="clojure">(dobro (* 7 3))</snippet>

<box title="Testando 'dobro'">
<p class="text-justify">Para que possamos testar todos os exemplos desse capítulo, precisamos criar uma função chamada <code>dobro</code>, que recebe um parâmetro <code>x</code> e devolve seu valor multiplicado por dois.</p>

<p class="text-justify">Em Clojure, criamos uma função <code>dobro</code> da seguinte forma:</p>

<snippet language="clojure">(defn dobro [x]
  (* x 2))</snippet>

<p class="text-justify">Agora vamos abrir o REPL e digitar as linhas abaixo:</p>

<snippet language="clojure">(dobro 21)

(dobro (* 7 3))</snippet>

<p class="text-justify">Em ambos os casos, você obterá o número <i>42</i> como resposta.</p>

<p class="text-justify">Ah, e comemore: você acabou de escrever sua primeira função em Clojure. As funções são parte importantíssima de uma linguagem funcional.</p>
</box>

<p class="text-justify">Talvez pela sua origem acadêmica e fortemente influenciada pela matemática, as implementações de LISP levam muito a sério a questão da consistência.</p>

<h2>Explicando os parênteses</h2>

<index entry="expressões numéricas" />
<p class="text-justify">Quando eu estava na quarta série, aprendi algo chamado de <i>expressão numérica</i>, que consiste em resolver um cálculo extenso atacando um pedaço por vez, organizadamente.</p>

<p class="text-justify">Cada pedaço desse cálculo fica dentro de parênteses, colchetes ou chaves, dependendo do quão aninhado esteja a expressão. Eu nunca mais vi esse tipo de hierarquia, mas sempre considerei como um jeito bacana de manter a organização.</p>

<p class="text-justify">Uma expressão numérica tem essa cara:</p>

<snippet language="javascript">x = {1 + [3 * (5 + 7)]}</snippet>

<p class="text-justify">Resolve a expressão de dentro para fora:</p>

<snippet language="javascript">x = {1 + [3 * (12)]}

x = {1 + [36]}

x = {37}

x = 37</snippet>

<p class="text-justify">Simples, não?</p>

<p class="text-justify">Agora vamos extrapolar o que aprendemos na quarta série para uma linguagem de programação, trocando chaves e colchetes por parênteses:</p>

<snippet language="javascript">x = (1 + (3 * (5 + 7)))</snippet>

<p class="text-justify">Vamos substituir a nossa conhecida notação infixa pela prefixa:</p>

<snippet language="javascript">x = (+ 1 (* 3 (+ 5 7)))</snippet>

<p class="text-justify">Pronto. Você tem uma expressão numérica com a cara do LISP, resolvendo da forma como a professora ensinou lá na quarta série: primeiro você resolve os parênteses de dentro, depois os próximos, até terminar.</p>

<p class="text-justify">Pode parecer estranho, mas não se preocupe, com o tempo essa notação não te trará dificuldades na leitura e entendimento do código. E há sim mais razões pela qual ela é dessa maneira, que desvendaremos aos poucos.</p>

<p class="text-justify">Qualquer LISP que você encontrar pela frente, incluindo o Clojure, funciona exatamente dessa maneira.</p>

<index entry="precedência de operadores" />
<p class="text-justify">Uma vantagem que isso traz é que você não precisa ficar se preocupando com precedência de operadores. Imagine que você tem o código abaixo:</p>

<snippet language="javascript">x = 3 * 2 + 1

y = 1 + 2 * 3</snippet>

<p class="text-justify">Os valores de <code>x</code> e <code>y</code> serão iguais? Sim, ambas as variáveis contém o número <i>7</i>, mas para saber disso você precisou ler em algum outro lugar que <i>o operador de multiplicação tem precedência sobre o operador de adição</i>. É algo que você espera que seja assim e age como se realmente fosse.</p>

<p class="text-justify">E o que aconteceria se você estiver usando uma linguagem em que a adição tem precedência sobre a multiplicação? Ou pior ainda: os operadores são executados da esquerda para a direita conforme forem aparecendo.</p>

<p class="text-justify">No primeiro caso, <code>x</code> e <code>y</code> continuariam sendo iguais, mas ambos teriam o valor <i>9</i>. No segundo caso, <code>x</code> seria igual a <i>7</i> e <code>y</code> seria igual a <i>9</i>.</p>

<p class="text-justify">Seria mais fácil se as expressões fossem escritas assim:</p>

<snippet language="javascript">x = (3 * 2) + 1

y = 1 + (2 * 3)</snippet>

<p class="text-justify">Agora está claro para qualquer pessoa o que vai ser executado primeiro, independente do modo como a expressão seja interpretada pela linguagem. Pois saiba que é exatamente assim que um LISP trabalha. Usando a notação prefixa, as expressões acima ficariam da forma a seguir, que você pode testar usando o REPL:</p>

<snippet language="javascript">(+ (* 3 2) 1)

(+ 1 (* 3 2))</snippet>

<p class="text-justify">Primeiro será executada a multiplicação, que está nos parênteses mais internos e, em seguida, será executada a adição. Tudo isso sem se preocupar com regras ocultas ou peculiaridades do compilador.</p>

<p class="text-justify">No capítulo a seguir, vamos aprender mais sobre o REPL para que possamos utilizar Clojure de uma forma rápida e produtiva.</p>
</page>
</template>

<script>
export default {
  name: 'GentleIntroduction'
}
</script>
