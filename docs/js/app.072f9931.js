(function(e){function o(o){for(var t,n,i=o[0],l=o[1],u=o[2],d=0,m=[];d<i.length;d++)n=i[d],r[n]&&m.push(r[n][0]),r[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);c&&c(o);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,o=0;o<s.length;o++){for(var a=s[o],t=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(t=!1)}t&&(s.splice(o--,1),e=n(n.s=a[0]))}return e}var t={},r={app:0},s=[];function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,o,a){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(a,t,function(o){return e[o]}.bind(null,t));return a},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var u=0;u<i.length;u++)o(i[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"034f":function(e,o,a){"use strict";var t=a("64a9"),r=a.n(t);r.a},"56d7":function(e,o,a){"use strict";a.r(o);a("cadf"),a("551c"),a("f751"),a("097d");var t=a("2b0e"),r=a("8c4f"),s=a("2f62"),n=a("0284"),i=a.n(n),l=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},u=[],c={name:"app"},d=c,m=(a("034f"),a("2877")),p=Object(m["a"])(d,l,u,!1,null,null,null),v=p.exports,f=(a("ac6a"),a("5df3"),a("96cf"),a("3b8d")),_=a("bc3a"),g=a.n(_),h=g.a.create({baseURL:"/json",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),b=function(){return h.get("index.json")},j=function(e){return h.get(e)},C={getIndex:b,readFile:j},x=function(){return new s["a"].Store({state:{index:{},book:[]},mutations:{setIndex:function(e,o){e.index=o},setBook:function(e,o){e.book=o}},actions:{updateIndex:function(e){var o=e.commit;C.getIndex().then(function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(o){var a,t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=o.data,t=a.locations.map(function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(o){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.readFile(o);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(o){return e.apply(this,arguments)}}()),e.next=4,Promise.all(t);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(o){return e.apply(this,arguments)}}()).then(function(e){return e.reduce(function(e,o){var a=o.tag,t=o.content;if("document"!==a)throw console.error("Not a document. Failing"),"Not a document";var r={name:(t[0].content?t[0].content[0].content[0]:"").trim()};return console.log(e,t,r),e.push(r),e},[])}).then(function(e){console.log("commit",e),o("setBook",e)})}}})},q=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("BigHeader"),a("HomeContent"),a("BigFooter")],1)},y=[],P=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[a("div",{staticClass:"container"},[a("h4",[e._v("O autor")]),a("p",{staticClass:"lead"},[e._v("Plínio Balduino ")]),a("p",[e._v("Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há dez, é casado com Roberta e pai de Gustavo, Mariana e Duda. É autor do livro Dominando JavaScript com jQuery, publicado pela Editora Casa do Código.")]),a("p",[e._v("É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.")]),a("p",[e._v("No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.")]),a("hr"),a("h5",[e._v("Licenças e direitos autorais")]),a("p",[a("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),a("p",[a("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),a("p",[a("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],k={name:"BigFooter"},O=k,z=Object(m["a"])(O,P,E,!1,null,null,null),w=z.exports,L=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-4"},[a("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n      Descobrindo Clojure\n    ")]),a("h2",[e._v("Programação funcional descomplicada para a JVM")])])])}],F={name:"BigHeader"},H=F,R=Object(m["a"])(H,L,$,!1,null,null,null),S=R.exports,B=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row"},[a("Index"),e._m(1)],1)])},A=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("p",{staticClass:"text-justify"},[e._v("\n        Você sempre quis aprender Clojure mas, por qualquer motivo, prefere um material em Português? E se, além de estar no seu idioma preferido, ele ainda for tão bom quanto os melhores livros em Inglês e o mais completo em Português?\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Seria excelente, não?\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Depois de mais tempo do que eu gostaria, estou disponibilizando o conteúdo do meu livro gratuitamente e online para que você possa entender, aprender e se tornar um programador Clojure. Ou simplesmente se tornar um melhor programador em qualquer linguagem que você prefira usar, apenas por ter aprendido práticas de programação funcional.\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Caso você prefira ler no conforto do seu leitor de e-books, em breve vou disponibilizar o conteúdo neste formato. Ou, caso você prefira o bom e velho livro em papel, também em breve você poderá adquirí-lo através da Amazon.\n      ")])])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col-sm-3 text-clojure-dark-blue"},[a("h3",[e._v("Quero o livro")]),a("p",[a("img",{staticClass:"img-fluid img-cover",attrs:{src:"img/cover.png"}})]),a("p",[e._v("\n        Quer comprar ou baixar? Aguarde.\n        ")])])}],D=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col-sm mr-1 text-clojure-dark-blue"},[a("a",{attrs:{name:"toc"}}),a("h3",[e._v("Quero ler online")]),a("ul",[a("li",[a("router-link",{attrs:{to:"/online"}},[e._v("Sobre a versão online")])],1),a("li",[e._v("Introdução")]),a("ul",[a("li",[a("router-link",{attrs:{to:"/dedication"}},[e._v("Dedicatória")])],1),a("li",[a("router-link",{attrs:{to:"/foreword"}},[e._v("Prefácio")])],1),a("li",[a("router-link",{attrs:{to:"/thanks"}},[e._v("Agradecimentos")])],1),a("li",[e._v("Sobre o autor")]),a("li",[e._v("Aviso")])])]),e._m(0),e._v("\nE vem muito mais por aí\n")])},I=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ol",[a("li",[e._v("Apresentação")]),a("ul",[a("li",[e._v("Por que Clojure?")]),a("li",[e._v("Para quem é esse livro")]),a("li",[e._v("Como o livro está organizado")]),a("li",[e._v("Lista de discussão e código fonte")])]),a("li",[e._v("Uma introdução gentil ao Clojure")]),a("ul",[a("li",[e._v("O que é Clojure?")]),a("li",[e._v("Configurando o ambiente")]),a("li",[e._v("Explicando a sintaxe")]),a("li",[e._v("Explicando os parênteses")])]),a("li",[e._v("O REPL é tão importante...")]),a("ul",[a("li",[e._v("...que merece um capítulo a parte")]),a("li",[e._v("Alguns truques rápidos com o REPL")]),a("li",[e._v("Desenvolvimento baseado no REPL")]),a("li",[e._v("Criando uma aplicação de exemplo")]),a("li",[e._v("Modificando a aplicação através do REPL")])]),a("li",[e._v("Descobrindo o poder das funções")]),a("li",[e._v("Dados e metadados")]),a("li",[e._v("Namespaces para organizar o código")]),a("li",[e._v("Calculando o infinito com lazy sequences")]),a("li",[e._v("Integrando Clojure com Java")]),a("li",[e._v("Concorrência e multithreading")]),a("li",[e._v("Estendendo a linguagem com macros")]),a("li",[e._v("Dicas para um bom desenvolvimento em Clojure")]),a("li",[e._v("Onde aprender mais")])])}],M={name:"Index"},J=M,T=Object(m["a"])(J,D,I,!1,null,null,null),V=T.exports,N={name:"HomeContent",components:{Index:V}},G=N,U=Object(m["a"])(G,B,A,!1,null,null,null),Q=U.exports,K={name:"Home",components:{BigFooter:w,BigHeader:S,HomeContent:Q}},W=K,Z=Object(m["a"])(W,q,y,!1,null,null,null),X=Z.exports,Y=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e.$store.book&&e.$store.book.chapter[e.$route.params.chapter]?a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h1",[e._v(e._s(e.$route.params.chapter))])]),a("div",{staticClass:"row"},[e._v("\n      "+e._s(e.store.book.chapter[e.$route.params.chapter])+"\n    ")])]):a("div",{staticClass:"container"},[a("NotFound")],1),a("LittleFooter")],1)},ee=[],oe=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[a("div",{staticClass:"container"},[a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],te={name:"LittleFooter"},re=te,se=Object(m["a"])(re,oe,ae,!1,null,null,null),ne=se.exports,ie=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-4 text-light"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n        Descobrindo Clojure\n      ")])],1)])])},le=[],ue={name:"LittleHeader"},ce=ue,de=Object(m["a"])(ce,ie,le,!1,null,null,null),me=de.exports,pe=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("pre",[e._v("user=> ("+e._s(e.$route.params.chapter)+"/read)\nSyntax error compiling at (REPL:1:1).\nNo such namespace: "+e._s(e.$route.params.chapter)+"\n\n; 404 - A página que você procura não existe ou mudou de lugar\n; "),a("router-link",{attrs:{to:"/"}},[e._v("Clique aqui")]),e._v(" para voltar à página inicial")],1)},ve=[],fe={name:"NotFound"},_e=fe,ge=Object(m["a"])(_e,pe,ve,!1,null,null,null),he=ge.exports,be={name:"Reader",components:{LittleFooter:ne,LittleHeader:me,NotFound:he}},je=be,Ce=Object(m["a"])(je,Y,ee,!1,null,null,null),xe=Ce.exports,qe=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},ye=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Sobre a versão online")]),a("p",{staticClass:"text-justify"},[e._v("\n        Quando comecei a escrever este livro há alguns anos, havia uma total\n        falta de material em Português, com exceção de alguns posts em blogs\n        técnicos e algumas poucas palestras. O autor do prefácio, Paulo Suzart,\n        foi pioneiro ao escrever sobre Clojure e eu o acompanhei algum tempo depois.\n        Isso foi em 2008 e pouca coisa aconteceu nesse sentido desde então.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Hoje, felizmente, o cenário está um pouco melhor. Temos um livro publicado\n        em Português tratando da linguagem que satisfaz os iniciantes e os traz\n        para mais perto, sem que tenham que depender da documentação padrão da\n        linguagem, que é longe de ser amigável.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Por falha única e exclusivamente minha, por uma série de motivos alheios\n        a este foro, este acabou não sendo o tal livro pioneiro. De qualquer\n        maneira havia aqui conteúdo o bastante, já testado e amadurecido, e seria\n        um grande desperdício deixá-lo guardado. Estas últimas são, inclusive,\n        palavras dos revisores e dos primeiros leitores da obra, que tiveram\n        acesso a ela muito antes de qualquer publicação ser feita.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Finalmente, o resultado de tantos anos de trabalho e espera está sendo\n        disponibilizado a você, gratuitamente, gradualmente e online. Conforme\n        o último trecho for publicado, disponibilizarei também a opção de adquirir\n        a versão em papel. Seria uma forma de me ajudar e também de satisfazer\n        aqueles que preferem um livro físico para ler e fazer anotações. Estou\n        considerando a publicação em ebook também, mas talvez seja redundante.\n        Vamos ver como vai ser.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Desde já agradeço seu interesse, espero realmente que o conteúdo do livro\n        atenda às suas expectativas e necessidades e fique à vontade para oferecer\n        sua opinião, indicação de erros ou mesmo sugestões de melhoria.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Para sugestões ou correções, utilize o sistema de "),a("i",[e._v("issues")]),e._v(" em "),a("a",{attrs:{href:"https://github.com/pbalduino/descobrindoclojure"}},[e._v("https://github.com/pbalduino/descobrindoclojure")])]),a("p",{staticClass:"text-justify"},[e._v("\n        Aproveite.\n        ")])])])])}],Pe={name:"OnlineVersion",components:{LittleHeader:me,LittleFooter:ne}},Ee=Pe,ke=Object(m["a"])(Ee,qe,ye,!1,null,null,null),Oe=ke.exports,ze=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},we=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Dedicatória")]),a("blockquote",{staticClass:"blockquote"},[a("p",{staticClass:"mb-0"},[e._v('\n            "Aos meus filhos: Gu, Duda e Mari.'),a("br"),e._v('\n            Meu esforço é sempre por vocês."\n          ')]),a("footer",{staticClass:"blockquote-footer"},[e._v("Plínio Balduino")])])])])])}],Le={name:"Dedication",components:{LittleHeader:me,LittleFooter:ne}},$e=Le,Fe=Object(m["a"])($e,ze,we,!1,null,null,null),He=Fe.exports,Re=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Se=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Prefácio")]),a("p",{staticClass:"text-justify"},[e._v("\n        Plínio vem em boa hora trazer luz ao mundo LISP no Brasil. Ele queria\n        ter encontrado tamanha sutileza na introdução a Clojure como esta que\n        você tem em suas mãos. Confesso que eu também.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Tempos difíceis lá em 2009, quando os forasteiros da programação funcional\n        e do LISP na JVM contavam apenas com o site oficial da linguagem para\n        o aprendizado. E depois de muita, mas muita luta para aprender, aquele\n        mesmo site era tudo o que se tinha para tentar convencer chefes e colegas\n        de que Clojure era uma boa chave de fenda para a sua caixa de ferramentas.\n        Na verdade mesmo depois de anos estudando, escrevendo e evangelizando\n        Clojure, eu mesmo enfrentava dificuldade de mostrar às pessoas o quão\n        valorosa ela é.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Pois bem. Ao saber que Plínio, figura barbuda e conhecida na comunidade,\n        iria escrever sobre Clojure, muito me animei. Primeiro por que era um\n        livro brasileiro de Clojure, por si só isto é excepcional! Segundo por\n        que ele poderia facilmente repetir o sucesso de outras publicações suas.\n        E este cidadão me supera as expectativas com um conteúdo na quantidade,\n        profundidade e disposição que parece ter sido precisamente calculado para\n        capturar o seu e o meu cérebro com as mãos e colocá-los no mesmo patamar\n        de conhecimento a respeito da linguagem.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Aqui está o "),a("i",[e._v("baseline")]),e._v(", o "),a("i",[e._v("must have")]),e._v(", o "),a("i",[e._v("mindset")]),e._v(" Clojure.\n        Uma espécie de atmosfera que agora você pode circular tranquilamente.\n        É como se tudo começasse agora, muito mais claro e fluido. Esse Plínio\n        fez, sem tornar a comparação Clojure vs. Java a sua bandeira, o que com\n        muita frequencia só se consegue erguendo-a bem lá no alto: Ensinar\n        Clojure e trazer todos para um mesmo ponto de partida. E alcançar a\n        linha de chegada só depende de mim e de você, quando teremos Clojure\n        sendo usada no dia-a-dia de muitos projetos, da concepção à entrega.\n        ")]),a("p",{staticClass:"text-justify"},[a("i",[a("b",[e._v("Paulo Suzart")]),e._v(", Engineering Manager na Omio Berlin e pioneiro do Clojure no Brasil")]),e._v(".\n        ")])])])])}],Be={name:"Foreword",components:{LittleHeader:me,LittleFooter:ne}},Ae=Be,De=Object(m["a"])(Ae,Re,Se,!1,null,null,null),Ie=De.exports,Me=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Je=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Agradecimentos")]),a("blockquote",{staticClass:"blockquote"},[a("p",{staticClass:"mb-0"},[e._v("\n        \"If the path before you is clear, you're probably on someone else's.\"\n        ")]),a("footer",{staticClass:"blockquote-footer"},[e._v("Joseph Campbell")])]),a("p",{staticClass:"text-justify"},[e._v("Escrever um livro sobre Clojure em Português, utilizando material original e de uma forma que torne a linguagem acessível mesmo para quem nunca ouviu falar em programação funcional é um trabalho imenso e demorado que eu não teria conseguido concluir sozinho.")]),a("p",{staticClass:"text-justify"},[e._v("Foi um trabalho que levou alguns anos de escrita e reescrita, com capítulos sendo inteiramente jogados fora para que apenas o melhor sobrevivesse.")]),a("p",{staticClass:"text-justify"},[e._v("Minhas sinceras desculpas se eu me esquecer de alguém. Eu juro que não foi por mal.")]),a("p",{staticClass:"text-justify"},[a("b",[e._v("Minha esposa e meus filhos, que mais uma vez tiveram que me aturar sentado no computador por horas e dias até que eu finalmente conseguisse terminar este projeto")]),e._v(".")]),a("p",{staticClass:"text-justify"},[e._v("Ao amigo Francelino Guilherme que, ao ensinar conceitos de programação para crianças, me apresentou excelentes analogias para conceitos complicados para quem não desenvolve softwares.")]),a("p",{staticClass:"text-justify"},[e._v("Paulo Suzart pelo apoio desde o primeiro momento. Paulo foi, até onde eu sei, o primeiro brasileiro a escrever sobre Clojure em Português e continua nessa tarefa até hoje.")]),a("p",{staticClass:"text-justify"},[e._v("Thank you very much Joshua Glover, Chas Emerick, Michael Fogus, Bozhidar Batsov, Zachary Kim, Tom and Rich Hickey, Leonardo Borges and all the people from Clojure list.")]),a("a",{attrs:{name:"#paulo"}}),a("p",{staticClass:"text-justify"},[e._v("Paulo Silveira, Adriano Almeida e Igor Hercowitz, que compraram a ideia maluca de lançar um livro sobre Clojure num momento em que ela parecia maluca.")]),a("p",{staticClass:"text-justify"},[e._v("Nicolas França, João Ferreira, Rodrigo Lorca, Ricardo Valeriano, Ana Gabriel, Rodrigo Flores, Edilson Peçanha, Andrew Rosa, Renan Reis, Gilmar Soares, que foram revisores de primeira hora e tiveram a honestidade de apontar onde a coisa não estava boa.")]),a("p",{staticClass:"text-justify"},[e._v("A todos os participantes dos Grupos de Usuários Clojure de São Paulo e Rio de Janeiro, Clojure Brasil e Clojure Portugal, e também aos grupos GURU-SP, Scaladores e Clojure Australia (o antigo clj-syd) por terem servido de inspiração e modelo de como manter um grupo de usuários com um ambiente bacana e organizado.")]),a("p",{staticClass:"text-justify"},[e._v("Colegas de trabalho que participaram de uma forma ou de outra do nascimento deste livro; Rodrigo Vidal, Luiz Costa, Douglas 'qmx' Campos, Breno Ferreira, Henrique Weissmann, José Valim, colegas que estão ajudando ativamente a divulgar e popularizar a programação funcional e o Clojure.")])])])])}],Te={name:"Thanks",components:{LittleHeader:me,LittleFooter:ne}},Ve=Te,Ne=Object(m["a"])(Ve,Me,Je,!1,null,null,null),Ge=Ne.exports;t["a"].config.productionTip=!1,t["a"].use(r["a"]),t["a"].use(s["a"]);var Ue=!0;console.log("Production",Ue);var Qe=[{path:"/",component:X},{path:"/online",component:Oe,meta:{title:"Sobre a versão online"}},{path:"/dedication",component:He,meta:{title:"Dedicatória"}},{path:"/foreword",component:Ie,meta:{title:"Prefácio"}},{path:"/thanks",component:Ge,meta:{title:"Agradecimentos"}},{path:"/:chapter",component:xe,meta:{title:":("}}],Ke=new r["a"]({routes:Qe,scrollBehavior:function(e,o,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})}});Ke.beforeEach(function(e,o,a){var t="Descobrindo Clojure";e.meta.title?document.title="".concat(t," - ").concat(e.meta.title):document.title="".concat(t),a()}),t["a"].use(i.a,{id:"UA-137706670-1",autoTracking:{screenview:!0},debug:{enabled:!Ue,sendHitTask:Ue},router:Ke}),new t["a"]({router:Ke,store:x,render:function(e){return e(v)},created:function(){}}).$mount("#app")},"64a9":function(e,o,a){}});