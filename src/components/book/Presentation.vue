<template>
  <div>
    <LittleHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm text-clojure-dark-blue">
          <h1>1. Apresentação</h1>

<chapter-quote author="David Whyte, poeta">
  "Anything or anyone that does not bring you alive is too small for you"
</chapter-quote>

<h2>1.1 Por que Clojure?</h2>

<chapter-quote author="Eric Raymond em" work="How to become a hacker">
"Vale a pena aprender LISP pela experiência de profunda iluminação que você terá quando finalmente o entender; essa experiência o tornará um programador melhor para o resto de sua vida, mesmo que você raramente use LISP."
</chapter-quote>

<i>"Afinal, por que Clojure?"</i>

Talvez essa seja a pergunta que você se faça ao ver um livro sobre o assunto. Talvez seja a pergunta que você mais escute de chefes ou colegas de trabalho ao comentar sobre a linguagem.

Eu poderia dizer que Clojure é uma excelente ferramenta para que você trabalhe com processamento concorrente sem toda a complicação de ter que gerenciar <i>locks</i> e <i>racing conditions</i>, além de oferecer nativamente formas de compartilhar estados entre <i>threads</i> de acordo com a sua necessidade, mas nem toda aplicação que você desenvolver depende de <i>multithread</i>.

Eu poderia demonstrar como a estratégia de <i>lazy evaluation</i> permite que você processe quantidades absurdamente grandes de informação sem acabar com a memória da máquina e ainda assim retornar um resultado em um tempo aceitável, mas nem todo mundo tem quantidades absurdamente grandes de informação para trabalhar.

Poderia dizer também que Clojure é uma linguagem funcional, e a programação funcional naturalmente leva a códigos menores e mais simples, evitando boa parte da complexidade trazida pela orientação a objetos com a qual nos habituamos, mas a orientação a objetos é hoje um padrão de mercado e inúmeros problemas continuam sendo resolvidos assim.

Eu poderia também apontar que Clojure naturalmente faz com que você escreva funções menores e mais especializadas, aumentando o reuso de código e reduzindo a quantidade de bugs no sistema, mas utilizar boas práticas de programação também causam esse mesmo efeito com qualquer outra linguagem.

Eu posso argumentar que Clojure me ajudou a ver o perigo da mutabilidade espalhada por um sistema, e como isso me tornou um programador melhor e mais cuidadoso em Java ou em qualquer outra linguagem que eu use no dia a dia, limitando as partes móveis onde for realmente necessário e fazendo meu código ficar ::thread-safe::[ref java-threads] sem perder legibilidade ou produtividade.

Eu poderia dizer que Clojure tem um elegante sistema de macros, que permite que você adicione construções à linguagem que podem tornar seu código muito mais expressivo e elegante, ou mesmo criar DSLs conforme a sua necessidade sem ter que criar compiladores para isso, mas linguagens líderes de mercado não têm esse recurso e nosso trabalho continua sendo entregue com elas.

Posso demonstrar para o meu chefe que um sistema pode ser desenvolvido em um tempo menor, com menos bugs e ainda assim o código continua compreensível para qualquer colega novo que tiver que dar manutenção nele.

Eu posso também mostrar que você não precisa reinventar a roda, desenvolvendo novamente bibliotecas que já foram testadas e aprovadas, mas sim aproveitar de forma transparente todo o ecossistema já existente hoje que torna a plataforma Java tão poderosa e abrangente e, sem esforço, ainda pode aproveitar todo o poder e maturidade da JVM.

Mas, além de todas essas vantagens, eu vou dizer a você que Clojure é uma linguagem que além de divertida e expressiva, aumenta consideravelmente seu arsenal de técnicas para resolver problemas, mesmo que no dia a dia você acabe utilizando qualquer outra linguagem.

<h2>Para quem é esse livro</h2>

Este livro foi escrito para quem que já tem alguma experiência com desenvolvimento de software e compreende conceitos básicos como operadores lógicos, desvios condicionais, estruturação de código em funções, módulos e classes.

Vai ajudar bastante se você já estiver familiarizado com a máquina virtual do Java, mas é possível acompanhar o livro inteiro sem nunca ter escrito uma linha de código em Java ou qualquer outra linguagem para a JVM.

Finalmente, não é necessário qualquer conhecimento prévio de LISP, Clojure ou fundamentos de programação funcional. O propósito deste livro é justamente te guiar através desses conceitos sem cair nas armadilhas do jargão acadêmico.

<h2>Como o livro está organizado</h2>

No mercado de livros técnicos, existem duas formas muito comuns:

A primeira consiste em pegar a documentação da linguagem ou da ferramenta e ir explicando item a item. Com isso temos aqueles livros gigantescos intitulados "bíblias", que faziam muito sentido antes da popularização da Internet. Hoje em dia qualquer um pode entrar no seu site de busca preferido e alcançar qualquer informação que precisar, sem precisar gastar dinheiro com um livro.

A segunda forma são os ::cookbooks::, livros com receitas para resolver problemas do dia-a-dia. São livros muito interessantes para quem já conhece a ferramenta, mas não são acessíveis para quem está começando porque focam em resolver problemas reais e deixam de lado as informações básicas, criando dúvidas para quem ainda não tem a base necessária.

Eu particularmente gosto muito desse tipo de livro depois que já me familiarizei com os conceitos e características da linguagem ou ferramenta.

Este livro segue um terceiro caminho, botando a mão na massa o tempo todo, mas explicando os conceitos por trás de cada código, num ritmo que começa devagar e vai acelerando conforme o leitor vai se habituando ao Clojure.

Ao escrever este livro tentamos apresentar as informações com o máximo de simplicidade possível, para que o leitor que nunca teve contato com LISP ou programação funcional consiga absorver todo o conteúdo sem problemas.

[box Abrindo parênteses]

No decorrer do livro teremos essas caixas, chamadas pelos editores de ::boxes::, que contém dicas e conteúdo relacionado ao assunto que estamos vendo.

Geralmente são textos que apresentam conceitos que não influem diretamente no texto, mas fazem com que você entenda o que há por trás de um conceito ou que experimente algo diferente sem que o texto em si perca o ritmo.

Caso esteja com muita pressa, você pode pular o conteúdo do ::box:: sem prejuízo para a leitura e voltar mais tarde, depois de descansar um pouco.

[/box]

No decorrer do livro são usadas algumas convenções que vale a pena conhecer:

::Trechos em itálico:: indicam termos em inglês ou outro idioma que não costumam ser traduzidos ou ::links:: para sites. Por exemplo, neste livro você vai encontrar a palavra ::framework:: ao invés de arcabouço, pelo bem da leitura.

**Trechos em negrito** indicam pontos muito importantes que **devem ser lidos com maior atenção**.

%%Trechos em fonte monoespaçada%% indicam código, nomes de arquivos, classes ou ::namespaces::.

<h2>Lista de discussão e código fonte</h2>

Disponibilizamos uma lista de discussão sobre o livro, onde você pode tirar suas dúvidas, apontar correções, indicar melhorias e o que mais achar relevante para o outros leitores:

[index lista de discussão]
http://goo.gl/eYmGy
ou
https://groups.google.com/forum/?fromgroups#!forum/casadocodigo-clojure

O código fonte estará disponível no GitHub, no endereço abaixo:

[index código fonte]
https://github.com/pbalduino/livro-clojure

Sinta-se à vontade para enviar dúvidas e alterar os fontes conforme você for avançando no livro.
</div>
</div>
</div>
<LittleFooter />
</div>
</template>

<script>
import LittleFooter from '@/components/LittleFooter.vue'
import LittleHeader from '@/components/LittleHeader.vue'

export default {
  name: 'Presentation',
  components: {
    LittleHeader,
    LittleFooter
  }
}
</script>
