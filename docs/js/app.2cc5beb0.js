(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("64a9"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),r=o("8c4f"),n=o("2f62"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],l={name:"app"},u=l,c=(o("034f"),o("2877")),d=Object(c["a"])(u,i,s,!1,null,null,null),m=d.exports,p=(o("ac6a"),o("5df3"),o("96cf"),o("3b8d")),v=o("bc3a"),f=o.n(v),_=f.a.create({baseURL:"/json",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),b=function(){return _.get("index.json")},h=function(e){return _.get(e)},g={getIndex:b,readFile:h},j=function(){return new n["a"].Store({state:{index:{},book:[]},mutations:{setIndex:function(e,t){e.index=t},setBook:function(e,t){e.book=t}},actions:{updateIndex:function(e){var t=e.commit;g.getIndex().then(function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var o,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=t.data,a=o.locations.map(function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.readFile(t);case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(a);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){return e.reduce(function(e,t){var o=t.tag,a=t.content;if("document"!==o)throw console.error("Not a document. Failing"),"Not a document";var r={name:(a[0].content?a[0].content[0].content[0]:"").trim()};return console.log(e,a,r),e.push(r),e},[])}).then(function(e){console.log("commit",e),t("setBook",e)})}}})},C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("BigHeader"),o("HomeContent"),o("BigFooter")],1)},x=[],q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[o("div",{staticClass:"container"},[o("h4",[e._v("O autor")]),o("p",{staticClass:"lead"},[e._v("Plínio Balduino ")]),o("p",[e._v("Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há dez, é casado com Roberta e pai de Gustavo, Mariana e Duda. É autor do livro Dominando JavaScript com jQuery, publicado pela Editora Casa do Código.")]),o("p",[e._v("É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.")]),o("p",[e._v("No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.")]),o("hr"),o("h5",[e._v("Licenças e direitos autorais")]),o("p",[o("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),o("p",[o("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),o("p",[o("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],O={name:"BigFooter"},E=O,k=Object(c["a"])(E,q,y,!1,null,null,null),$=k.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"display-4"},[o("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n      Descobrindo Clojure\n    ")]),o("h2",[e._v("Programação funcional descomplicada para a JVM")])])])}],z={name:"BigHeader"},L=z,H=Object(c["a"])(L,P,w,!1,null,null,null),B=H.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"row"},[o("Index"),e._m(1)],1)])},D=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm text-clojure-dark-blue"},[o("p",{staticClass:"text-justify"},[e._v("\n        Você sempre quis aprender Clojure mas, por qualquer motivo, prefere um material em Português? E se, além de estar no seu idioma preferido, ele ainda for tão bom quanto os melhores livros em Inglês e o mais completo em Português?\n      ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Seria excelente, não?\n      ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Depois de mais tempo do que eu gostaria, estou disponibilizando o conteúdo do meu livro gratuitamente e online para que você possa entender, aprender e se tornar um programador Clojure. Ou simplesmente se tornar um melhor programador em qualquer linguagem que você prefira usar, apenas por ter aprendido práticas de programação funcional.\n      ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Caso você prefira ler no conforto do seu leitor de e-books, em breve vou disponibilizar o conteúdo neste formato. Ou, caso você prefira o bom e velho livro em papel, também em breve você poderá adquirí-lo através da Amazon.\n      ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-sm-3 text-clojure-dark-blue"},[o("h3",[e._v("Quero o livro")]),o("p",[o("img",{staticClass:"img-fluid img-cover",attrs:{src:"img/cover.png"}})]),o("p",[e._v("\n        Quer comprar ou baixar? Aguarde.\n        ")])])}],R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-sm mr-1 text-clojure-dark-blue"},[o("a",{attrs:{name:"toc"}}),o("h3",[e._v("Quero ler online")]),o("ol",[o("li",[o("router-link",{attrs:{to:"/online"}},[e._v("Sobre a versão online")])],1),o("li",[e._v("Introdução")]),o("ul",[o("li",[o("router-link",{attrs:{to:"/dedication"}},[e._v("Dedicatória")])],1),o("li",[e._v("Prefácio")]),o("li",[e._v("Agradecimentos")]),e._m(0),o("li",[e._v("Aviso")])]),o("li",[e._v("Apresentação")]),e._m(1),o("li",[e._v("Uma introdução gentil ao Clojure")]),e._m(2),o("li",[e._v("O REPL é tão importante...")]),e._m(3),o("li",[e._v("Descobrindo o poder das funções")]),o("li",[e._v("Dados e metadados")]),o("li",[e._v("Namespaces para organizar o código")]),o("li",[e._v("Calculando o infinito com lazy sequences")]),o("li",[e._v("Integrando Clojure com Java")]),o("li",[e._v("Concorrência e multithreading")]),o("li",[e._v("Estendendo a linguagem com macros")]),o("li",[e._v("Dicas para um bom desenvolvimento em Clojure")]),o("li",[e._v("Onde aprender mais")])]),e._v("\nE vem muito mais por aí\n")])},S=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[o("a",{attrs:{href:"book/sobre_o_autor.html"}},[e._v("Sobre o autor")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("Por que Clojure?")]),o("li",[e._v("Para quem é esse livro")]),o("li",[e._v("Como o livro está organizado")]),o("li",[e._v("Lista de discussão e código fonte")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("O que é Clojure?")]),o("li",[e._v("Configurando o ambiente")]),o("li",[e._v("Explicando a sintaxe")]),o("li",[e._v("Explicando os parênteses")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("...que merece um capítulo a parte")]),o("li",[e._v("Alguns truques rápidos com o REPL")]),o("li",[e._v("Desenvolvimento baseado no REPL")]),o("li",[e._v("Criando uma aplicação de exemplo")]),o("li",[e._v("Modificando a aplicação através do REPL")])])}],A={name:"Index"},I=A,M=Object(c["a"])(I,R,S,!1,null,null,null),N=M.exports,V={name:"HomeContent",components:{Index:N}},T=V,J=Object(c["a"])(T,F,D,!1,null,null,null),Q=J.exports,G={name:"Home",components:{BigFooter:$,BigHeader:B,HomeContent:Q}},U=G,K=Object(c["a"])(U,C,x,!1,null,null,null),W=K.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("LittleHeader"),e.$store.book&&e.$store.book.chapter[e.$route.params.chapter]?o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("h1",[e._v(e._s(e.$route.params.chapter))])]),o("div",{staticClass:"row"},[e._v("\n      "+e._s(e.store.book.chapter[e.$route.params.chapter])+"\n    ")])]):o("div",{staticClass:"container"},[o("NotFound")],1),o("LittleFooter")],1)},Y=[],Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[o("div",{staticClass:"container"},[o("p",{staticClass:"text-justify"},[o("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),o("p",{staticClass:"text-justify"},[o("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),o("p",{staticClass:"text-justify"},[o("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],te={name:"LittleFooter"},oe=te,ae=Object(c["a"])(oe,Z,ee,!1,null,null,null),re=ae.exports,ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"display-4 text-light"},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n        Descobrindo Clojure\n      ")])],1)])])},ie=[],se={name:"LittleHeader"},le=se,ue=Object(c["a"])(le,ne,ie,!1,null,null,null),ce=ue.exports,de=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[e._v("user=> ("+e._s(e.$route.params.chapter)+"/read)\nSyntax error compiling at (REPL:1:1).\nNo such namespace: "+e._s(e.$route.params.chapter)+"\n\n; 404 - A página que você procura não existe ou mudou de lugar\n; "),o("router-link",{attrs:{to:"/"}},[e._v("Clique aqui")]),e._v(" para voltar à página inicial")],1)},me=[],pe={name:"NotFound"},ve=pe,fe=Object(c["a"])(ve,de,me,!1,null,null,null),_e=fe.exports,be={name:"Reader",components:{LittleFooter:re,LittleHeader:ce,NotFound:_e}},he=be,ge=Object(c["a"])(he,X,Y,!1,null,null,null),je=ge.exports,Ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("LittleHeader"),e._m(0),o("LittleFooter")],1)},xe=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm text-clojure-dark-blue"},[o("h1",[e._v("Sobre a versão online")]),o("p",{staticClass:"text-justify"},[e._v("\n        Quando comecei a escrever este livro há alguns anos, havia uma total\n        falta de material em Português, com exceção de alguns posts em blogs\n        técnicos e algumas poucas palestras. O autor do prefácio, Paulo Suzart,\n        foi pioneiro ao escrever sobre Clojure e eu o acompanhei algum tempo depois.\n        Isso foi em 2008 e pouca coisa aconteceu nesse sentido desde então.\n        ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Hoje, felizmente, o cenário está um pouco melhor. Temos um livro publicado\n        em Português tratando da linguagem que satisfaz os iniciantes e os traz\n        para mais perto, sem que tenham que depender da documentação padrão da\n        linguagem, que é longe de ser amigável.\n        ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Por falha única e exclusivamente minha, por uma série de motivos alheios\n        a este foro, este acabou não sendo o tal livro pioneiro. De qualquer\n        maneira havia aqui conteúdo o bastante, já testado e amadurecido, e seria\n        um grande desperdício deixá-lo guardado. Estas últimas são, inclusive,\n        palavras dos revisores e dos primeiros leitores da obra, que tiveram\n        acesso a ela muito antes de qualquer publicação ser feita.\n        ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Finalmente, o resultado de tantos anos de trabalho e espera está sendo\n        disponibilizado a você, gratuitamente, gradualmente e online. Conforme\n        o último trecho for publicado, disponibilizarei também a opção de adquirir\n        a versão em papel. Seria uma forma de me ajudar e também de satisfazer\n        aqueles que preferem um livro físico para ler e fazer anotações. Estou\n        considerando a publicação em ebook também, mas talvez seja redundante.\n        Vamos ver como vai ser.\n        ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Desde já agradeço seu interesse, espero realmente que o conteúdo do livro\n        atenda às suas expectativas e necessidades e fique à vontade para oferecer\n        sua opinião, indicação de erros ou mesmo sugestões de melhoria.\n        ")]),o("p",{staticClass:"text-justify"},[e._v("\n        Para sugestões ou correções, utilize o sistema de "),o("i",[e._v("issues")]),e._v(" em "),o("a",{attrs:{href:"https://github.com/pbalduino/descobrindoclojure"}},[e._v("https://github.com/pbalduino/descobrindoclojure")])]),o("p",{staticClass:"text-justify"},[e._v("\n        Aproveite.\n        ")])])])])}],qe={name:"OnlineVersion",components:{LittleHeader:ce,LittleFooter:re}},ye=qe,Oe=Object(c["a"])(ye,Ce,xe,!1,null,null,null),Ee=Oe.exports,ke=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("LittleHeader"),e._m(0),o("LittleFooter")],1)},$e=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm text-clojure-dark-blue"},[o("h1",[e._v("Dedicatória")]),o("blockquote",{staticClass:"blockquote"},[o("p",{staticClass:"mb-0"},[e._v('\n            "Aos meus filhos: Gu, Duda e Mari.'),o("br"),e._v('\n            Meu esforço é sempre por vocês."\n          ')]),o("footer",{staticClass:"blockquote-footer"},[e._v("Plínio Balduino")])])])])])}],Pe={name:"Dedication",components:{LittleHeader:ce,LittleFooter:re}},we=Pe,ze=Object(c["a"])(we,ke,$e,!1,null,null,null),Le=ze.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(n["a"]);var He=[{path:"/",component:W},{path:"/online",component:Ee},{path:"/dedication",component:Le},{path:"/:chapter",component:je}],Be=new r["a"]({routes:He,scrollBehavior:function(e,t,o){return o||{x:0,y:0}}});new a["a"]({router:Be,store:j,render:function(e){return e(m)},created:function(){}}).$mount("#app")},"64a9":function(e,t,o){}});