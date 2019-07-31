<template>
<page>
<h1>3. O REPL é tão importante...</h1>

<chapter-quote author="Brian Kernighan," work="coautor do UNIX e da linguagem C">"A única forma de se aprender uma nova linguagem é escrevendo programas nela"</chapter-quote>

<h2>3.1. ... que merece um capítulo a parte</h2>

<index entry="REPL" />

<p class="text-justify">O <code>REPL</code> é uma das ferramentas mais úteis para se programar em Clojure. Se você está chegando do Ruby ou do Python está mais do que acostumado a usar o <code>IRB</code> ou o modo interativo do Python. Veremos no decorrer do capítulo que o REPL é bem mais do que um prompt da linguagem, que serve apenas para que instruções sejam testadas.</p>

<p class="text-justify">O termo <code>REPL</code>, pronuncia-se <i>Répol</i> com aquele <i>R</i> do Chico Bento, é formado pelas iniciais de <i>Read-Eval-Print-Loop</i>, que é o ciclo efetuado pela ferramenta ao <b>Ler</b> a instrução digitada pelo programador, <b>avaliar</b> e executar a instrução, <b>imprimir</b> o resultado e <b>voltar</b> ao início, aguardando a próxima instrução, como na figura <ref-label entry="repl-diagram" />.</p>

<image src="images/capitulo_03/repl_diagram.png" description="Read-eval-print-loop" width="40%" label="repl-diagram" />

<box title="O que é avaliar?">

<index entry="avaliar" />

<p class="text-justify">Quando estamos usando algum dialeto LISP, como é o caso do Clojure, é comum usarmos o termo <b>avaliar</b> para descrever o momento em que o comando é analisado e executado pelo interpretador da linguagem.</p>

<p class="text-justify">Então, sempre que você se deparar com o verbo <b>avaliar</b>, entenda que a instrução está sendo lida e interpretada.</p>
</box>

<p class="text-justify">A grande vantagem dessa abordagem é que o desenvolvedor vê o resultado imediatamente, sem a necessidade de compilar o projeto, executar e esperar a resposta. Com isso, você pode testar diferentes abordagens e até mesmo brincar com instruções para chegar ao resultado esperado num período muito curto.</p>

<p class="text-justify">Após instalarmos o Leiningen, como vimos no capítulo passado, vamos abrir o REPL executando o comando abaixo no seu terminal:</p>

<snippet>lein repl</snippet>

<p class="text-justify">Vamos ver mensagens parecidas com a da figura <ref-label entry="lein-repl" />.</p>

<image src="images/capitulo_03/lein_repl.png" description="REPL do Clojure" width="70%" label="lein-repl" />

<p class="text-justify">Essas mensagens foram adicionadas na versão 1.5 do Clojure e te dão algumas dicas sobre como se achar dentro da ferramenta. Para nós, o importante agora vai ser a última linha, que tem o cursor piscando, aguardando os nossos comandos.</p>

<snippet>user=></snippet>

<index entry="namespace" /><index entry="user" />

<p class="text-justify">O texto <code>user</code> indica o <i>namespace</i> em que estamos trabalhando. Vamos falar disso mais para frente, mas por enquanto é suficiente saber que um <i>namespace</i> é como se fosse um pacote contendo funções que lidam com determinada parte do trabalho. Outras linguagens implementam essa forma de organização, como o Java com <i>packages</i>, C# e C++ também com <i>namespaces</i> ou Ruby e Python com <i>modules</i>.</p>

<p class="text-justify">Vamos começar exibindo valores simples, omitindo a exibição do namespace para evitar confusão ao digitar. Perceba que não estamos usando parênteses, já que se tratam de valores, e não expressões a serem avaliadas:</p>

<snippet>
1

true

"Texto"
</snippet>

<p class="text-justify">Exibimos um número inteiro, um valor lógico e um texto. A saída dos dados pode ser vista na figura <ref-label entry="repl-values" />.</p>

<image src="images/capitulo_03/repl_values.png" description="Exibindo valores simples" width="90%" label="repl-values" />

<p class="text-justify">Vamos agora executar algumas expressões. Como já dissemos, uma expressão deve estar entre parênteses para ser executada, ou se preferir, avaliada.</p>

<index entry="not" /><index entry="or" />
<snippet>
;; uma soma simples
(+ 1 2)
; 3

;; o operador not e um valor booleano
(not true)
; false

;; o operador or e dois valores booleanos
(or false true)
; true
</snippet>

<p class="text-justify">Podemos ver o resultado na figura <ref-label entry="repl-expressions" />.</p>

<image src="images/capitulo_03/repl_expressions.png" description="Exibindo os resultados de expressões" width="90%" label="repl-expressions" />

<p class="text-justify">Uma coisa interessante que o uso da notação prefixa permite é que um operador não precisa trabalhar com os valores de dois em dois, como acontece com uma adição ou um operador lógico na notação infixa.</p>

<p class="text-justify">É possível, por exemplo, somar inúmeros valores de uma vez só, tendo o resultado da figura <ref-label entry="repl-multiple-values" />.</p>

<snippet>
; uma soma com vários valores
(+ 1 2 3 4 5 6)

; o operador or com vários valores
(or true false true false true true)
</snippet>

<image src="images/capitulo_03/repl_multiple_values.png" width="90%" description="Múltiplos valores" label="repl-multiple-values" />

<index entry="println" /><index entry="print" />

<p class="text-justify">Existe uma função chamada <code>println</code> que, veja só, imprime valores na tela e pula uma linha. Há uma irmã dela que não pula linha e chama-se <code>print</code>, mas dificilmente vamos usá-la aqui.</p>

<index entry="nil" />

<p class="text-justify">Essa função <code>println</code> retorna <code>nil</code>, que é a representação de um valor nulo no Clojure. Por conta disso, não se preocupe com o <code>nil</code> que é exibido após a impressão do valor.</p>

<p class="text-justify">Você pode passar quantos parâmetros quiser para essa função, e ela vai imprimir um a um, até terminar.</p>

<snippet>
(println 3)

(println "Um texto" "Outro texto")
</snippet>

<p class="text-justify">Primeiro mandamos imprimir na tela um valor qualquer e, em seguida, mandamos exibir dois textos. Podemos ver como ficou na figura <ref-label entry="repl-println" />.</p>

<p class="text-justify">Perceba que os valores são impressos e, logo abaixo, é exibido <code>nil</code>. A impressão é o <i>efeito colateral</i> da função, e <code>nil</code> é o retorno.</p>

<image src="images/capitulo_03/repl_println.png" description="Usando a função println" width="90%" label="repl-println" />

<p class="text-justify">Agora vamos imprimir o resultado da soma entre os números <i>1</i> e <i>2</i>, conforme a figura <ref-label entry="repl-println-expression-fail" /></p>

<image src="images/capitulo_03/repl_println_expression_fail.png" description="Não imprimiu o que queríamos" width="90%" label="repl-println-expression-fail" />

<p class="text-justify">Ao invés do número <i>3</i>, foram exibidos os três itens da nossa expressão: o sinal de adição, que nada mais é do que o nome de uma função, e os números <i>1</i> e <i>2</i>.</p>

<index entry="+" /><index entry="-" /><index entry="*" /><index entry="/" /><index entry="=" /><index entry=">" /><index entry="<" /><index entry="_" />
<p class="text-justify">Em Clojure, os sinais <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>=</code>, <code>&gt;</code>, <code>&lt;</code> e <code>_</code>, e as combinações entre eles, são considerados nomes válidos de função.</p>

<index entry="if" />
<p class="text-justify">O aprendizado fica muito mais fácil quando você percebe que os operadores aritméticos, lógicos e de comparação são funções como quaisquer outras. De certo modo, até mesmo um <code>if</code> é uma função em Clojure.</p>

<p class="text-justify">Aí você pergunta: <i>"mas, se + é um nome válido de função, por que foi que o REPL imprimiu <code>#&lt;core$_PLUS_ ...&gt;</code> ao invés do sinal de adição?"</i></p>

<index entry="bytecode" />
<p class="text-justify">Simplesmente porque o Clojure gera <i>bytecode</i> que é executado na JVM (ou na máquina virtual do .NET), e os símbolos citados acima não são nomes válidos nesses ambientes. Então a linguagem é obrigada a criar uma função interna chamada <code>_PLUS_</code> que ganha o apelido <code>+</code> para que o seu código fique fácil de ler.</p>

<box title="O que é bytecode">
<p class="text-justify">Uma das ideias mais fortes por trás do Java é <i>escreva uma vez, rode em qualquer lugar</i>.</p>

<p class="text-justify">Para que isso aconteça, o compilador do Java gera um código intermediário, independente de plataforma, que será executado pela máquina virtual. Esse codigo intermediário é chamado genericamente de <i>bytecode</i>.</p>

<p class="text-justify">Como aplicações escritas em Java puro e Clojure geram o mesmo tipo de bytecode, é bem simples integrarmos o código de um com o outro, como vamos ver mais no capítulo <ref-label entry="capitulo-integracao-java" />.</p>
</box>

<p class="text-justify">Vamos corrigir o nosso código para que possamos ver o resultado da soma.</p>

<p class="text-justify">Fica fácil se você pensar que queremos imprimir o resultado de <code>+ 1 2</code>, e não os itens da operação separadamente.</p>

<p class="text-justify">Para trabalharmos com o resultado da soma, vamos colocar os membros entre parênteses. Assim, o <code>REPL</code> vai avaliar primeiro a soma e depois vai mandar imprimir o resultado.</p>

<p class="text-justify">Nosso código então vai ficar da forma abaixo, e podemos ver o resultado na figura <ref-label entry="repl-println-expression-ok" />.</p>

<snippet>
(println (+ 1 2))
</snippet>

<image src="images/capitulo_03/repl_println_expression_ok.png" description="Agora deu certo" width="90%" label="repl-println-expression-ok" />

<p class="text-justify">Agora que você já sabe usar o <code>REPL</code> o suficiente para poder seguir os exemplos do livro, vamos aprender a sair.</p>

<p class="text-justify">Para sair do REPL existem duas formas: o jeito <i>novo</i>, incluído na versão 1.5 do Clojure, e o jeito antigo, que ainda é a utilizada no Clojure CLR e nas versões anteriores do Clojure.</p>

<index entry="exit" />
<p class="text-justify">Para sair pelo jeito novo, basta digitar <code>exit</code>. Como é um comando do <code>REPL</code>, e não do Clojure, não fique preocupado com o fato de não ter que usar parênteses, como podemos ver na figura <ref-label entry="repl-exit-new" />.</p>

<image src="images/capitulo_03/repl_exit_new.png" description="Saindo do REPL pelo jeito novo" width="90%" label="repl-exit-new" />

<p class="text-justify">Caso você esteja com uma versão antiga, execute o método <code>exit</code> da classe <code>System</code> do Java, passando o número <i>0</i> como código para informar ao sistema operacional que saída ocorreu sem erros.</p>

<snippet>
(System/exit 0)
</snippet>

<p class="text-justify">Ao sair por esse modo, não temos a simpática mensagem de adeus, como vemos na figura <ref-label entry="repl-exit-old" />.</p>

<image src="images/capitulo_03/repl_exit_old.png" description="Saindo do REPL pelo jeito anterior" width="90%" label="repl-exit-old" />

<h2>3.2. Alguns truques rápidos com o REPL</h2>

<p class="text-justify">Existem alguns atalhos e funções auxiliares que tornam o uso do REPL bem mais produtivo. Por mais que escrever diretamente no REPL não seja tão confortável quando no seu editor preferido, algumas vezes isso acaba sendo necessário.</p>

<h3>Qual é mesmo o nome daquela função?</h3>

<p class="text-justify">As funções da biblioteca padrão do Clojure vem com um texto explicativo, onde você pode se situar sobre como utilizá-las.</p>

<index index="find-doc" />
<p class="text-justify">Podemos pesquisar alguma palavra que estiver dentro desses textos para encontrar a função que queremos, mas não lembramos o nome. Para isso, usamos <code>find-doc</code>, seguido da palavra ou trecho de texto relacionado ao que queremos.</p>

<p class="text-justify">Vamos supor que eu esteja procurando algo sobre <i>sockets</i>. Basta digitar <code>(find-doc "socket")</code> no REPL.</p>

<snippet>
(find-doc "socket")
; -------------------------
; clojure.tools.nrepl/connect
; ([& {:keys [port host transport-fn], :or {transport-fn
;  transport/bencode, host "localhost"}}])
;  Connects to a socket-based REPL at the given host (defaults
; to localhost) and port, returning the Transport (by default
; clojure.

; e mais um monte de coisas
</snippet>

<index entry="connect" />
<p class="text-justify">No nosso exemplo, encontramos a função <code>connect</code>, que está no namespace <code>clojure.tools.nrepl</code>.</p>

<index entry="apropos" />
<p class="text-justify">Se você lembra de alguma parte do nome da função, então pode usar a função <code>apropos</code>, passando como parâmetros o trecho do nome ou uma expressão regular. Não se preocupe com expressões regulares agora, pois veremos esse assunto em detalhes mais para frente.</p>

<index entry="vector" />
<p class="text-justify">Vamos supor que eu esteja manipulando vetores e não lembre o nome da função, mas saiba que a estrutura chama-se <code>vector</code>:</p>

<snippet>
(apropos "vector")
; (vector-of vector vector? vector-zip)
</snippet>

<index entry="apropos-better"/>
<p class="text-justify">Existe uma variação de <code>apropos</code> chamada <code>apropos-better</code>, que informa também o namespace da função quando ela não estiver dentro do namespace <code>clojure.core</code> ou dentro do namespace em que você estiver no momento:</p>

<snippet>
(apropos-better "vector")
; (vector vector-of vector? clojure.zip/vector-zip)
</snippet>

<index entry="doc" />
<p class="text-justify">Agora você pode usar a função <code>doc</code> para ver a documentação daquela que mais se parecer com o que você estiver procurando:</p>

<snippet>
(doc vector?)
; -------------------------
; clojure.core/vector?
; ([x])
;   Return true if x implements IPersistentVector
</snippet>

<index entry="javadoc" />
<p class="text-justify">Caso você queira ver a documentação de uma classe ou objeto Java, a função <code>doc</code> não pode te ajudar. Felizmente é possível consultar o <i>Javadoc</i>, que é a forma padrão de documentação do Java <bib entry="oracle-javadoc"/>. Para isso usamos a função <code>javadoc</code>, obviamente:</p>

<snippet>
(source java.io.File)
Source not found

(javadoc java.io.File)
; "http://java.sun.com/javase/7/docs/api/java/io/File.html"
</snippet>

<p class="text-justify">Além de retornar um texto com a localização da documentação, a função <code>javadoc</code> também abre o seu browser padrão na página indicada, como podemos ver na figura <ref-label entry="cap03-javadoc" />:</p>

<image src="images/capitulo_03/javadoc.png" description="E a função abre o browser para você" label="cap03-javadoc" width="70%" />

<p class="text-justify">Eu sempre gostei da forma como a documentação do pacote <code>java.io</code> foi escrita e achei que daria um bom exemplo.</p>

<h3>Um pouco de Bash na sua vida</h3>

<p class="text-justify">Quando você usa o REPL por dentro do Leiningen, alguns atalhos já conhecidos pelos usuários de Bash estão disponíveis, mesmo para quem está usando o Leiningen no Windows.</p>

<index entry="Bash" />

<box title="O que é Bash">
<i>Bash</i> é um dos <i>shells</i> mais conhecidos por quem usa sistemas operacionais baseados em UNIX ou Linux. Shell é a camada mais externa do sistema operacional e onde você insere comandos e recebe os resultados, de modo similar ao que acontece no REPL.
</box>

<p class="text-justify">O primeiro deles é a tecla <i>TAB</i>, que exibe os nomes de funções que começam com o que você já digitou.</p>

<index entry="map" />
<p class="text-justify">Por exemplo, vou digitar <code>map</code> e pressionar <i>TAB</i></p>
<snippet language="clojure">
(map
; map           map-indexed   map?          mapcat        mapv
</snippet>

<p class="text-justify">É possível também encontrar algum <i>namespace</i> específico da mesma maneira que foi feita para procurar a função:</p>

<snippet language="clojure">
(clojure.s
; clojure.set          clojure.stacktrace   clojure.string
</snippet>

<p class="text-justify">Você pode usar a tecla <i>TAB</i> para ver todas as funções disponíveis em determinado <i>namespace</i>, bastando adicionar uma barra após o nome:</p>

<snippet language="clojure">
(clojure.set/
; clojure.set/difference clojure.set/index clojure.set/join
; clojure.set/intersection clojure.set/map-invert
; clojure.set/project clojure.set/rename clojure.set/rename-keys
; clojure.set/select clojure.set/subset? clojure.set/superset?
; clojure.set/union
</snippet>

<p class="text-justify">Outra combinação que agiliza bastante o trabalho é a combinação <i>Control L</i>, ou <i>Command L</i> se você estiver usando MacOS, que limpa os resultados das expressões anteriores e mantém apenas a expressão que você estiver digitando no momento.</p>

<p class="text-justify">Existe também a combinação <i>Control R</i>, ou <i>Command R</i>, que completa o que você estiver digitando usando o histórico de comandos do REPL. Pressionando essa combinação mais de uma vez vai alternar entre todas as combinações já utilizadas que contenham o texto que você já digitou.</p>

<p class="text-justify">Usar as setas <i>para cima</i> ou <i>para baixo</i> permite que você navegue nos comandos utilizados recentemente.</p>

<h3>Recuperando os últimos resultados</h3>

<index entry="*1"/><index entry="*2"/><index entry="*3"/><index entry="*e"/>

<p class="text-justify">Existem também símbolos especiais que guardam os resultados das últimas expressões e exceções. Eles são <code>*1</code>, <code>*2</code> e <code>*3</code> para os valores e <code>*e</code> para a última exceção, ou erro, que ocorreu:</p>

<snippet language="clojure">
(+ 1 2)
; 3

(* 2 4)
; 8

(/ 8 2)
; 4

(println "Resultados anteriores:" *1 *2 *3)
; Resultados anteriores: 4 8 3

(/ 1 0)
; ArithmeticException Divide by zero

(println "Último erro:" *e)
; Último erro: #&lt;ArithmeticException java.lang.ArithmeticException:
;   Divide by zero&gt;
</snippet>

<index entry="pst" />
<p class="text-justify">Caso você queira ver a lista de chamadas, ou <i>stacktrace</i>, do último erro, basta utilizar a função <code>pst</code>:</p>

<snippet language="clojure">
(/ 1 0)
; ArithmeticException Divide by zero

(println "Último erro:" *e)
; Último erro: #&lt;ArithmeticException java.lang.ArithmeticException:
;   Divide by zero&gt;

user=> (pst)
; java.lang.ArithmeticException: Divide by zero
; Numbers.java:156 clojure.lang.Numbers.divide
; Numbers.java:3691 clojure.lang.Numbers.divide
; ... um monte de linhas ...
; Thread.java:745 java.lang.Thread.run
</snippet>

<h3>Consultando o código fonte</h3>

<p class="text-justify">Algumas vezes é bom ter acesso ao código fonte de determinada função ou macro para que possamos entender melhor como ela funciona. Enquanto eu escrevia este livro, fiz isso constantemente para descobrir como as coisas funcionam por baixo dos panos.</p>

<p class="text-justify">Infelizmente, nem sempre é simples ir até o site onde o código fonte do Clojure está disponível e procurar o arquivo em que aquela função está definida.</p>

<p class="text-justify">Pior ainda quando a versão que está lá é diferente da versão que você está usando no momento. E fica ainda pior quando você não tem acesso ao código fonte da biblioteca que estiver utilizando.</p>

<index entry="source" />

<p class="text-justify">Para nos ajudar, existe a macro <code>source</code>, que recebe como parâmetro o nome da função, sem aspas, e exibe o respectivo código fonte, quando possível.</p>

<p class="text-justify">Existem casos em que isso não é possível, como quando você tentar ler o fonte de uma forma especial ou de um código que foi compilado utilizando AOT (veremos isso em detalhes mais para frente).</p>

<p class="text-justify">Vamos exibir o código fonte da função <code>+</code>, responsável por somar dois ou mais números:</p>

<snippet language="clojure">
(source +)
; (defn +
;   "Returns the sum of nums. (+) returns 0. Does not auto-promote
;   longs, will throw on overflow. See also: +'"
;   {:inline (nary-inline 'add 'unchecked_add)
;    :inline-arities >1?
;    :added "1.2"}
;   ([] 0)
;   ([x] (cast Number x))
;   ([x y] (. clojure.lang.Numbers (add x y)))
;   ([x y & more]
;      (reduce1 + (+ x y) more)))
</snippet>

<p class="text-justify">Note que temos acesso a todos os detalhes internos da função <code>+</code>, incluindo sua documentação e mais algumas informações que são úteis para o compilador ou para alguma função que gere documentação automaticamente.</p>

<p class="text-justify">Ao tentarmos ver o código fonte de uma forma especial ou de algum código escrito nativamente em Java, receberemos uma mensagem de que o código fonte não foi encontrado:</p>

<snippet language="clojure">
(source Thread/sleep)
; Source not found
</snippet>

<h2>3.3. Desenvolvimento baseado no REPL</h2>

<p class="text-justify">Uma das características que faz o Clojure tão interessante para desenvolvermos software é que o REPL não é apenas um <i>console</i> da linguagem. Ele não serve apenas para que você teste expressões ou funções de uma biblioteca. Com o REPL você pode <b>alterar o programa enquanto ele está sendo executado</b>.</p>

<p class="text-justify">Se você trabalha com Java e utiliza TDD, o seu workflow pode ser resumido em escrever um teste, rodar o teste e vê-lo falhar. Em seguida você escreve o código necessário para que o teste passe e então recomeça o ciclo até concluir o desenvolvimento.</p>

<index entry="warmup" />

<p class="text-justify">A cada vez que você roda os testes, a JVM demora algum tempo carregando a si mesma até começar a executar o conjunto de testes que você selecionou. Esse tempo é chamado de <i>warmup</i>. Existem técnicas para reduzir esse tempo, mas é inevitável que ele exista.</p>

<p class="text-justify">Para executar a aplicação há um tempo gasto com a compilação, o tempo de warmup da JVM e só então sua aplicação começa a ser executada.</p>

<p class="text-justify">Quando você desenvolve em Ruby, mais especificamente quando está utilizando Rails, o console da linguagem permite que você altere dados da aplicação enquanto ela está sendo executada, mas você não pode alterar a estrutura do que já foi carregado, como objetos e funções.</p>

<p class="text-justify">É aqui que o Clojure começa a mostrar a sua diferença: você pode alterar código e dados durante a execução do programa, mesmo que eles já tenham sido carregados, sem que para isso você perca tempo esperando o warmup da JVM ou recompilando a aplicação.</p>

<h2>3.4. Criando uma aplicação de exemplo</h2>

<p class="text-justify">Vamos criar uma pequena aplicação para demonstrar como isso funciona na prática.</p>

<index entry="lein new" />

<p class="text-justify">Primeiro, execute o comando <code>lein new capitulo03</code> para criar um novo projeto. Será criado um diretório chamado <code>capitulo03</code> com um esqueleto dessa aplicação. Não se preocupe com a estrutura que foi criada, pois mais para frente vamos explicar em detalhes o que é cada arquivo e cada diretório.</p>

<index entry="namespace" />
<p class="text-justify">Dentro do diretório <code>src/capitulo03</code> existe um arquivo chamado <code>core.clj</code>. Ele contém o <i>namespace</i> <code>capitulo03.core</code>, que informamos dentro do arquivo <code>project.clj</code>, e isso é declarado logo na primeira linha, por meio da instrução <code>(ns capitulo03.core)</code>.</p>

<p class="text-justify">Vamos criar agora uma função chamada <code>texto</code>. Essa função apenas imprime <i>"Texto original"</i> na tela. Para isso usaremos a função <code>println</code>, que imprime os valores passados por parâmetro para saída padrão. Nossa função ficará assim:</p>

<snippet language="clojure">
(defn texto []
  (println "Texto original"))
</snippet>

<index entry="entry point" /><index entry="loop" />
<p class="text-justify">Em seguida, vamos criar a função <code>-main</code>, que é a função inicial da aplicação, ou <i>entry point</i>. Nela vamos criar um <i>loop</i> infinito que invoca a função <code>texto</code> e faz uma pausa de dois segundos. Não se preocupe com os detalhes, já que vamos explicar todos eles mais para frente.</p>

<index entry=";" /><index entry="comentários" />

<p class="text-justify">Os comentários, iniciados pelo caracter <code>;</code> foram adicionados para que você não se perca logo no terceiro capítulo do livro:</p>

<index entry="Thread/sleep"/>
<snippet language="clojure">
(defn -main [& args]
  (loop []              ; inicia o loop
    (texto)             ; chama a função texto
    (Thread/sleep 2000) ; espera dois segundos
    (recur)))           ; retorna ao início do loop
</snippet>

<index entry="lein repl" />

<p class="text-justify">Agora salve o arquivo e volte ao diretório <code>capitulo03</code>, execute o comando <code>lein repl</code> para abrir o <i>REPL</i>. Note que na primeira linha é exibido um texto dizendo que o <i>nREPL</i> foi iniciado em uma determinada porta, no IP <i>127.0.0.1</i>. Anote o número dessa porta, pois vamos precisar daqui a pouco.</p>

<p class="text-justify">Execute a instrução <code>(use 'capitulo03.core)</code> para importar as funções do namespace <i>capitulo03.core</i>. Isso vai ser necessário para que possamos executar as duas funções que acabamos de criar.</p>

<p class="text-justify">Agora execute a instrução <code>(-main)</code> para iniciar nossa aplicação. A cada dois segundos será impresso <i>Texto original</i>.</p>

<h2>3.5. Modificando a aplicação através do REPL</h2>

<p class="text-justify">Abra uma nova janela do Terminal, vá ao diretório <code>capitulo03</code> e execute o comando <code>lein repl :connect 127.0.0.1:XXXX</code>, substituindo <code>XXXX</code> pela porta que você anotou.</p>

<p class="text-justify">Execute a instrução <code>(ns capitulo03.core)</code> para que possamos trabalhar dentro do namespace em que criamos nossas funções e, em seguida, execute <code>(texto)</code> para que seja exibido o texto atual, conforme programamos anteriormente.</p>

<p class="text-justify">Agora, usando esse REPL que acabamos de abrir, vamos modificar a aplicação que está sendo executada na outra janela. Digite o código a seguir e vamos analisar o que acontece:</p>

<snippet language="clojure">
(defn texto []
  (println "Agora mudou"))
</snippet>

<p class="text-justify">Ao executar novamente a instrução <code>(texto)</code>, veremos que o texto exibido foi alterado. Agora volte à janela onde a aplicação está sendo executada e veja o que aconteceu.</p>

<p class="text-justify">O texto exibido a cada dois segundos mudou instantaneamente de <i>Texto original</i> para <i>Agora mudou</i>.</p>

<p class="text-justify">Mas o que aconteceu?</p>

<index entry="nREPL" />

<p class="text-justify">A aplicação estava sendo executada em uma janela, por dentro de um REPL. O REPL disponibilizado pelo Leiningen vem com uma biblioteca embutida chamada nREPL, que permite que possamos conectar remotamente outro REPL em uma aplicação, e por isso são exibidos um endereço IP e o número de uma porta.</p>

<p class="text-justify">Quando conectamos o REPL da segunda janela na aplicação que imprime o texto a cada dois segundos, estamos conectados <i>dentro</i> da aplicação. Então, toda alteração que você fizer dentro da segunda janela, será instantaneamente refletida na aplicação da primeira janela.</p>

<index entry="Vim" /><index entry="Emacs" /><index entry="Cider" /><index entry="Fireplace" /><index entry="Lighttable" />

<p class="text-justify">Esse recurso fica ainda mais interessante quando você utiliza um editor de texto que se conecte automaticamente ao REPL, como é o caso do <i>Vim</i> através do plugin <code>fireplace</code>, do <i>Emacs</i> através do pacote <code>Cider</code>, ou do <i>Lighttable</i>, editor utilizado nesse livro, que já vem com esse recurso instalado por padrão.</p>

<p class="text-justify">Essa integração com o editor permite que o seu código seja enviado de forma transparente ao REPL, sem que você precise escrever a mesma coisa no editor e depois no REPL, fazendo com que você tenha todas as vantagens do seu editor preferido somado à agilidade que ganhamos ao alterar a aplicação enquanto ela está sendo executada, sem necessidade de a recompilarmos ou esperarmos que ela seja carregada novamente.</p>

<p class="text-justify">Existem vários textos pela Internet explicando como os autores usam esse recurso para criar um fluxo de trabalho ágil e produtivo. Fique à vontade para experimentar e descobrir seu próprio jeito de trabalhar.</p>

<p class="text-justify">Caso seu editor preferido não dê suporte ao nREPL, não se preocupe. Durante o livro vamos explicar cada exemplo sem a necessidade de usarmos esse recurso. Se você não usar, tudo bem. Mas se resolver usar, vai ser melhor ainda.</p>

<p class="text-justify">A partir do próximo capítulo vamos aumentar o ritmo e entrar a fundo na linguagem, apresentando todos os recursos necessários para que você consiga usar Clojure para resolver problemas de verdade e, de repente, até mesmo convencer seus colegas de que vale a pena aprender e usar no trabalho.</p>
</page>
</template>

<script>
export default {
  name: 'Repl'
}
</script>
