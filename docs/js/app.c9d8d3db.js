(function(e){function o(o){for(var t,i,n=o[0],l=o[1],u=o[2],d=0,m=[];d<n.length;d++)i=n[d],r[i]&&m.push(r[i][0]),r[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);c&&c(o);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,o=0;o<s.length;o++){for(var a=s[o],t=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(t=!1)}t&&(s.splice(o--,1),e=i(i.s=a[0]))}return e}var t={},r={app:0},s=[];function i(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,o,a){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)i.d(a,t,function(o){return e[o]}.bind(null,t));return a},i.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=o,n=n.slice();for(var u=0;u<n.length;u++)o(n[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"034f":function(e,o,a){"use strict";var t=a("64a9"),r=a.n(t);r.a},"56d7":function(e,o,a){"use strict";a.r(o);a("cadf"),a("551c"),a("f751"),a("097d");var t=a("2b0e"),r=a("8c4f"),s=a("0284"),i=a.n(s),n=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"slide"}},[a("router-view")],1)],1)},l=[],u={name:"app"},c=u,d=(a("034f"),a("2877")),m=Object(d["a"])(c,n,l,!1,null,null,null),p=m.exports,v=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("BigHeader"),a("HomeContent"),a("BigFooter")],1)},f=[],h=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[a("div",{staticClass:"container"},[a("h4",[e._v("O autor")]),a("p",{staticClass:"lead"},[e._v("Plínio Balduino ")]),a("p",[e._v("Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há dez, é casado com Roberta e pai de Gustavo, Mariana e Duda. É autor do livro Dominando JavaScript com jQuery, publicado pela Editora Casa do Código.")]),a("p",[e._v("É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.")]),a("p",[e._v("No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.")]),a("hr"),a("h5",[e._v("Licenças e direitos autorais")]),e._m(0),e._m(1),e._m(2),a("Version")],1)])},_=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",[a("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",[a("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",[a("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])}],g=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{attrs:{id:"version"}},[a("small",[e._v("Versão: "+e._s(e.GitHash))])])},b=[],C=a("8f96"),j={name:"Version",data:function(){return{GitHash:C}}},x=j,q=Object(d["a"])(x,g,b,!1,null,null,null),y=q.exports,E={name:"BigFooter",components:{Version:y}},P=E,$=Object(d["a"])(P,h,_,!1,null,null,null),k=$.exports,w=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-4"},[a("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n      Descobrindo Clojure\n    ")]),a("h2",[e._v("Programação funcional descomplicada para a JVM")])])])}],O={name:"BigHeader"},z=O,H=Object(d["a"])(z,w,L,!1,null,null,null),S=H.exports,F=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row"},[a("Index"),e._m(1)],1)])},A=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("p",{staticClass:"text-justify"},[e._v("\n        Você sempre quis aprender Clojure mas, por qualquer motivo, prefere um material em Português? E se, além de estar no seu idioma preferido, ele ainda for tão bom quanto os melhores livros em Inglês e o mais completo em Português?\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Seria excelente, não?\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Depois de mais tempo do que eu gostaria, estou disponibilizando o conteúdo do meu livro gratuitamente e online para que você possa entender, aprender e se tornar um programador Clojure. Ou simplesmente se tornar um melhor programador em qualquer linguagem que você prefira usar, apenas por ter aprendido práticas de programação funcional.\n      ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Caso você prefira ler no conforto do seu leitor de e-books, em breve vou disponibilizar o conteúdo neste formato. Ou, caso você prefira o bom e velho livro em papel, também em breve você poderá adquirí-lo através da Amazon.\n      ")])])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col-sm-3 text-clojure-dark-blue"},[a("h3",[e._v("Quero o livro")]),a("p",[a("img",{staticClass:"img-fluid img-cover",attrs:{src:"img/cover.png"}})]),a("p",[e._v("\n        Quer comprar ou baixar? Aguarde.\n        ")])])}],B=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"col-sm mr-1 text-clojure-dark-blue",attrs:{id:"index"}},[a("a",{attrs:{name:"toc"}}),a("h3",[e._v("Quero ler online")]),a("ul",[a("li",[a("router-link",{attrs:{to:"/online"}},[e._v("Sobre a versão online")])],1),a("li",[e._v("Introdução")]),a("ul",[a("li",[a("router-link",{attrs:{to:"/dedication"}},[e._v("Dedicatória")])],1),a("li",[a("router-link",{attrs:{to:"/foreword"}},[e._v("Prefácio")])],1),a("li",[a("router-link",{attrs:{to:"/thanks"}},[e._v("Agradecimentos")])],1),a("li",[a("router-link",{attrs:{to:"/author"}},[e._v("Sobre o autor")])],1),a("li",[a("router-link",{attrs:{to:"/warning"}},[e._v("Aviso")])],1)])]),e._m(0),e._v("\nE vem muito mais por aí\n")])},R=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ol",[a("li",[e._v("Apresentação")]),a("ul",[a("li",[e._v("Por que Clojure?")]),a("li",[e._v("Para quem é esse livro")]),a("li",[e._v("Como o livro está organizado")]),a("li",[e._v("Lista de discussão e código fonte")])]),a("li",[e._v("Uma introdução gentil ao Clojure")]),a("ul",[a("li",[e._v("O que é Clojure?")]),a("li",[e._v("Configurando o ambiente")]),a("li",[e._v("Explicando a sintaxe")]),a("li",[e._v("Explicando os parênteses")])]),a("li",[e._v("O REPL é tão importante...")]),a("ul",[a("li",[e._v("...que merece um capítulo a parte")]),a("li",[e._v("Alguns truques rápidos com o REPL")]),a("li",[e._v("Desenvolvimento baseado no REPL")]),a("li",[e._v("Criando uma aplicação de exemplo")]),a("li",[e._v("Modificando a aplicação através do REPL")])]),a("li",[e._v("Descobrindo o poder das funções")]),a("li",[e._v("Dados e metadados")]),a("li",[e._v("Namespaces para organizar o código")]),a("li",[e._v("Calculando o infinito com lazy sequences")]),a("li",[e._v("Integrando Clojure com Java")]),a("li",[e._v("Concorrência e multithreading")]),a("li",[e._v("Estendendo a linguagem com macros")]),a("li",[e._v("Dicas para um bom desenvolvimento em Clojure")]),a("li",[e._v("Onde aprender mais")])])}],D={name:"Index"},T=D,V=Object(d["a"])(T,B,R,!1,null,null,null),J=V.exports,M={name:"HomeContent",components:{Index:J}},G=M,I=Object(d["a"])(G,F,A,!1,null,null,null),N=I.exports,X={name:"Home",components:{BigFooter:k,BigHeader:S,HomeContent:N}},U=X,Q=Object(d["a"])(U,v,f,!1,null,null,null),K=Q.exports,W=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e.$store.book&&e.$store.book.chapter[e.$route.params.chapter]?a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h1",[e._v(e._s(e.$route.params.chapter))])]),a("div",{staticClass:"row"},[e._v("\n      "+e._s(e.store.book.chapter[e.$route.params.chapter])+"\n    ")])]):a("div",{staticClass:"container"},[a("NotFound")],1),a("LittleFooter")],1)},Z=[],Y=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[a("div",{staticClass:"container"},[e._m(0),e._m(1),e._m(2),a("Version")],1)])},ee=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])])},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",{staticClass:"text-justify"},[a("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])}],oe={name:"LittleFooter",components:{Version:y}},ae=oe,te=Object(d["a"])(ae,Y,ee,!1,null,null,null),re=te.exports,se=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"display-4 text-light"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n        Descobrindo Clojure\n      ")])],1)])])},ie=[],ne={name:"LittleHeader"},le=ne,ue=Object(d["a"])(le,se,ie,!1,null,null,null),ce=ue.exports,de=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("pre",[e._v("user=> ("+e._s(e.$route.params.chapter)+"/read)\nSyntax error compiling at (REPL:1:1).\nNo such namespace: "+e._s(e.$route.params.chapter)+"\n\n; 404 - A página que você procura não existe ou mudou de lugar\n; "),a("router-link",{attrs:{to:"/"}},[e._v("Clique aqui")]),e._v(" para voltar à página inicial")],1)},me=[],pe={name:"NotFound"},ve=pe,fe=Object(d["a"])(ve,de,me,!1,null,null,null),he=fe.exports,_e={name:"Reader",components:{LittleFooter:re,LittleHeader:ce,NotFound:he}},ge=_e,be=Object(d["a"])(ge,W,Z,!1,null,null,null),Ce=be.exports,je=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Sobre o autor")]),e._m(0),a("p",{staticClass:"text-justify"},[e._v("É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.")]),a("p",{staticClass:"text-justify"},[e._v("No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.")]),a("img",{staticClass:"img-fluid img-cover",attrs:{src:"./img/autor.jpg",alt:"Autor falando sobre Clojure na QCon SP 2013"}})])])]),a("LittleFooter")],1)},xe=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("p",{staticClass:"text-justify"},[e._v("Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há cinco, é casado com a Roberta e pai de Gustavo, Mariana e Duda. É autor do livro "),a("i",[e._v("Dominando JavaScript com jQuery")]),e._v("[ref dominando-js], publicado pela Editora Casa do Código.")])}],qe={name:"Author",components:{LittleHeader:ce,LittleFooter:re}},ye=qe,Ee=Object(d["a"])(ye,je,xe,!1,null,null,null),Pe=Ee.exports,$e=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},ke=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Dedicatória")]),a("blockquote",{staticClass:"blockquote"},[a("p",{staticClass:"mb-0"},[e._v('\n            "Aos meus filhos: Gu, Duda e Mari.'),a("br"),e._v('\n            Meu esforço é sempre por vocês."\n          ')]),a("footer",{staticClass:"blockquote-footer"},[e._v("Plínio Balduino")])])])])])}],we={name:"Dedication",components:{LittleHeader:ce,LittleFooter:re}},Le=we,Oe=Object(d["a"])(Le,$e,ke,!1,null,null,null),ze=Oe.exports,He=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Se=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Prefácio")]),a("p",{staticClass:"text-justify"},[e._v("\n        Plínio vem em boa hora trazer luz ao mundo LISP no Brasil. Ele queria\n        ter encontrado tamanha sutileza na introdução a Clojure como esta que\n        você tem em suas mãos. Confesso que eu também.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Tempos difíceis lá em 2009, quando os forasteiros da programação funcional\n        e do LISP na JVM contavam apenas com o site oficial da linguagem para\n        o aprendizado. E depois de muita, mas muita luta para aprender, aquele\n        mesmo site era tudo o que se tinha para tentar convencer chefes e colegas\n        de que Clojure era uma boa chave de fenda para a sua caixa de ferramentas.\n        Na verdade mesmo depois de anos estudando, escrevendo e evangelizando\n        Clojure, eu mesmo enfrentava dificuldade de mostrar às pessoas o quão\n        valorosa ela é.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Pois bem. Ao saber que Plínio, figura barbuda e conhecida na comunidade,\n        iria escrever sobre Clojure, muito me animei. Primeiro por que era um\n        livro brasileiro de Clojure, por si só isto é excepcional! Segundo por\n        que ele poderia facilmente repetir o sucesso de outras publicações suas.\n        E este cidadão me supera as expectativas com um conteúdo na quantidade,\n        profundidade e disposição que parece ter sido precisamente calculado para\n        capturar o seu e o meu cérebro com as mãos e colocá-los no mesmo patamar\n        de conhecimento a respeito da linguagem.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Aqui está o "),a("i",[e._v("baseline")]),e._v(", o "),a("i",[e._v("must have")]),e._v(", o "),a("i",[e._v("mindset")]),e._v(" Clojure.\n        Uma espécie de atmosfera que agora você pode circular tranquilamente.\n        É como se tudo começasse agora, muito mais claro e fluido. Esse Plínio\n        fez, sem tornar a comparação Clojure vs. Java a sua bandeira, o que com\n        muita frequencia só se consegue erguendo-a bem lá no alto: Ensinar\n        Clojure e trazer todos para um mesmo ponto de partida. E alcançar a\n        linha de chegada só depende de mim e de você, quando teremos Clojure\n        sendo usada no dia-a-dia de muitos projetos, da concepção à entrega.\n        ")]),a("p",{staticClass:"text-justify"},[a("i",[a("b",[e._v("Paulo Suzart")]),e._v(", Engineering Manager na Omio Berlin e pioneiro do Clojure no Brasil")]),e._v(".\n        ")])])])])}],Fe={name:"Foreword",components:{LittleHeader:ce,LittleFooter:re}},Ae=Fe,Be=Object(d["a"])(Ae,He,Se,!1,null,null,null),Re=Be.exports,De=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Te=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Sobre a versão online")]),a("h2",[e._v("Instruções")]),a("h2",[e._v("Prefácio da versão online")]),a("p",{staticClass:"text-justify"},[e._v("\n        Quando comecei a escrever este livro há alguns anos, havia uma total\n        falta de material em Português, com exceção de alguns posts em blogs\n        técnicos e algumas poucas palestras. O autor do prefácio, Paulo Suzart,\n        foi pioneiro ao escrever sobre Clojure e eu o acompanhei algum tempo depois.\n        Isso foi em 2008 e pouca coisa aconteceu nesse sentido desde então.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Hoje, felizmente, o cenário está um pouco melhor. Temos um livro publicado\n        em Português tratando da linguagem que satisfaz os iniciantes e os traz\n        para mais perto, sem que tenham que depender da documentação padrão da\n        linguagem, que é longe de ser amigável.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Por falha única e exclusivamente minha, por uma série de motivos alheios\n        a este foro, este acabou não sendo o tal livro pioneiro. De qualquer\n        maneira havia aqui conteúdo o bastante, já testado e amadurecido, e seria\n        um grande desperdício deixá-lo guardado. Estas últimas são, inclusive,\n        palavras dos revisores e dos primeiros leitores da obra, que tiveram\n        acesso a ela muito antes de qualquer publicação ser feita.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Finalmente, o resultado de tantos anos de trabalho e espera está sendo\n        disponibilizado a você, gratuitamente, gradualmente e online. Conforme\n        o último trecho for publicado, disponibilizarei também a opção de adquirir\n        a versão em papel. Seria uma forma de me ajudar e também de satisfazer\n        aqueles que preferem um livro físico para ler e fazer anotações. Estou\n        considerando a publicação em ebook também, mas talvez seja redundante.\n        Vamos ver como vai ser.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Desde já agradeço seu interesse, espero realmente que o conteúdo do livro\n        atenda às suas expectativas e necessidades e fique à vontade para oferecer\n        sua opinião, indicação de erros ou mesmo sugestões de melhoria.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Para sugestões ou correções, utilize o sistema de "),a("i",[e._v("issues")]),e._v(" em "),a("a",{attrs:{href:"https://github.com/pbalduino/descobrindoclojure"}},[e._v("https://github.com/pbalduino/descobrindoclojure")])]),a("p",{staticClass:"text-justify"},[e._v("\n        Aproveite.\n        ")])])])])}],Ve={name:"OnlineVersion",components:{LittleHeader:ce,LittleFooter:re}},Je=Ve,Me=Object(d["a"])(Je,De,Te,!1,null,null,null),Ge=Me.exports,Ie=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Ne=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Agradecimentos")]),a("blockquote",{staticClass:"blockquote"},[a("p",{staticClass:"mb-0"},[e._v("\n        \"If the path before you is clear, you're probably on someone else's.\"\n        ")]),a("footer",{staticClass:"blockquote-footer"},[e._v("Joseph Campbell")])]),a("p",{staticClass:"text-justify"},[e._v("Escrever um livro sobre Clojure em Português, utilizando material original e de uma forma que torne a linguagem acessível mesmo para quem nunca ouviu falar em programação funcional é um trabalho imenso e demorado que eu não teria conseguido concluir sozinho.")]),a("p",{staticClass:"text-justify"},[e._v("Foi um trabalho que levou alguns anos de escrita e reescrita, com capítulos sendo inteiramente jogados fora para que apenas o melhor sobrevivesse.")]),a("p",{staticClass:"text-justify"},[e._v("Minhas sinceras desculpas se eu me esquecer de alguém. Eu juro que não foi por mal.")]),a("p",{staticClass:"text-justify"},[a("b",[e._v("Minha esposa e meus filhos, que mais uma vez tiveram que me aturar sentado no computador por horas e dias até que eu finalmente conseguisse terminar este projeto")]),e._v(".")]),a("p",{staticClass:"text-justify"},[e._v("Ao amigo Francelino Guilherme que, ao ensinar conceitos de programação para crianças, me apresentou excelentes analogias para conceitos complicados para quem não desenvolve softwares.")]),a("p",{staticClass:"text-justify"},[e._v("Paulo Suzart pelo apoio desde o primeiro momento. Paulo foi, até onde eu sei, o primeiro brasileiro a escrever sobre Clojure em Português e continua nessa tarefa até hoje.")]),a("p",{staticClass:"text-justify"},[e._v("Thank you very much Joshua Glover, Chas Emerick, Michael Fogus, Bozhidar Batsov, Zachary Kim, Tom and Rich Hickey, Leonardo Borges and all the people from Clojure list.")]),a("p",{staticClass:"text-justify"},[e._v("Paulo Silveira, Adriano Almeida e Igor Hercowitz, que compraram a ideia maluca de lançar um livro sobre Clojure num momento em que ela parecia maluca.")]),a("p",{staticClass:"text-justify"},[e._v("Nicolas França, João Ferreira, Rodrigo Lorca, Ricardo Valeriano, Ana Gabriel, Rodrigo Flores, Edilson Peçanha, Andrew Rosa, Renan Reis, Gilmar Soares, que foram revisores de primeira hora e tiveram a honestidade de apontar onde a coisa não estava boa.")]),a("p",{staticClass:"text-justify"},[e._v("A todos os participantes dos Grupos de Usuários Clojure de São Paulo e Rio de Janeiro, Clojure Brasil e Clojure Portugal, e também aos grupos GURU-SP, Scaladores e Clojure Australia (o antigo clj-syd) por terem servido de inspiração e modelo de como manter um grupo de usuários com um ambiente bacana e organizado.")]),a("p",{staticClass:"text-justify"},[e._v("Colegas de trabalho que participaram de uma forma ou de outra do nascimento deste livro; Rodrigo Vidal, Luiz Costa, Douglas 'qmx' Campos, Breno Ferreira, Henrique Weissmann, José Valim, colegas que estão ajudando ativamente a divulgar e popularizar a programação funcional e o Clojure.")])])])])}],Xe={name:"Thanks",components:{LittleHeader:ce,LittleFooter:re}},Ue=Xe,Qe=Object(d["a"])(Ue,Ie,Ne,!1,null,null,null),Ke=Qe.exports,We=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("LittleHeader"),e._m(0),a("LittleFooter")],1)},Ze=[function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-clojure-dark-blue"},[a("h1",[e._v("Aviso")]),a("p",{staticClass:"text-justify"},[e._v("\n        Aprender programação funcional, Clojure, ou qualquer outra forma de "),a("i",[e._v("LISP")]),e._v(", pode mudar definitivamente a forma como você enxerga o desenvolvimento de software.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        São esperados efeitos colaterais como aumento de produtividade, concisão de código, surgimento ou aumento dos questionamento sobre as formas atualmente aceitas para se resolver problemas e, em alguns casos, aparecimento ou aumento de pragmatismo.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Foram relatados casos de euforia por conta de um evento chamado ::iluminação::, onde o desenvolvedor subitamente entende a forma funcional de pensar.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        O autor e a editora não assumem a responsabilidade pelo fato de você se tornar um desenvolvedor ainda melhor e mais curioso após a leitura deste livro.\n        ")]),a("p",{staticClass:"text-justify"},[e._v("\n        Continue por sua conta e risco.\n        ")])])])])}],Ye={name:"Warning",components:{LittleHeader:ce,LittleFooter:re}},eo=Ye,oo=Object(d["a"])(eo,We,Ze,!1,null,null,null),ao=oo.exports;t["a"].config.productionTip=!1,t["a"].use(r["a"]);var to=!0,ro=[{path:"/",component:K,meta:{next:"/online"}},{path:"/online",component:Ge,meta:{next:"/dedication",previous:"/",title:"Sobre a versão online"}},{path:"/author",component:Pe,meta:{title:"Sobre o autor"}},{path:"/dedication",component:ze,meta:{previous:"/online",next:"/foreword",title:"Dedicatória"}},{path:"/foreword",component:Re,meta:{previous:"/dedication",next:"/thanks",title:"Prefácio"}},{path:"/thanks",component:Ke,meta:{previous:"/foreword",next:"/warning",title:"Agradecimentos"}},{path:"/warning",component:ao,meta:{previous:"/thanks",title:"Aviso"}},{path:"/:chapter",component:Ce,meta:{title:":("}}],so=new r["a"]({routes:ro,scrollBehavior:function(e,o,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})}});so.beforeEach(function(e,o,a){var t="Descobrindo Clojure";e.meta.title?document.title="".concat(t," - ").concat(e.meta.title):document.title="".concat(t),a()}),t["a"].use(i.a,{id:"UA-137706670-1",autoTracking:{screenview:!0},debug:{enabled:!to,sendHitTask:to},router:so});var io=new t["a"]({router:so,render:function(e){return e(p)},data:function(){return{swipeX:-1}},methods:{handleGlobalKeyUp:function(e){var o=e.key,a=this.$route.meta;a&&("Home"===o||"h"===o?this.$router.push("/"):"ArrowRight"!==o&&"k"!==o||!a.next?"ArrowLeft"!==o&&"j"!==o||!a.previous||this.$router.push(a.previous):this.$router.push(a.next))},handleTouchStart:function(e){this.$data.swipeX=e.changedTouches[0].clientX},handleTouchEnd:function(e){var o=this.$route.meta;this.$data.swipeX-100>=e.changedTouches[0].clientX&&o.next?(this.$data.swipeX=-1,this.$router.push(o.next)):this.$data.swipeX+100<=e.changedTouches[0].clientX&&o.previous&&(this.$data.swipeX=-1,this.$router.push(o.previous))}}}).$mount("#app");so.afterEach(function(e){io.$ga.page({page:e.fullPath,title:document.title,location:"".concat(window.location.origin,"/#").concat(e.fullPath)})}),window.addEventListener("keyup",function(e){io.handleGlobalKeyUp(e)}),document.addEventListener("touchstart",function(e){io.handleTouchStart(e)}),document.addEventListener("touchend",function(e){io.handleTouchEnd(e)})},"64a9":function(e,o,a){},"8f96":function(e){e.exports="1488a35"}});