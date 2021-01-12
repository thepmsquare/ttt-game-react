(this["webpackJsonpttt-game-react"]=this["webpackJsonpttt-game-react"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(1),r=n.n(o),i=n(22),c=n.n(i),s=(n(59),n(23)),l=n(29),u=n(27),d=n(33),f=n(36),m=n(2),h=n(99),b=n(98),g=n(100),v=n(41),p=(n(60),Object(m.p)()),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;Object(s.a)(this,n),(o=t.call(this,e)).arrayContainsOtherArray=function(e,t){return t.every((function(t){return e.includes(t)}))},o.handleStart=function(){var e=o.tiles.map((function(e){return{row:e[0],col:e[1],value:-1}}));o.setState((function(t){return{gameStart:!0,currentPlayer:t.player1,board:e}}),(function(){setTimeout((function(){document.querySelectorAll(".Game-gridItem").forEach((function(e){e.style.boxShadow=p.effects.elevation8}))}),500),setTimeout((function(){document.querySelectorAll(".Game-hideFirst").forEach((function(e){e.style.opacity=100}))}),1e3)}))},o.handleRadioChange=function(e,t){var n=t.key,a=e.target.name;o.setState((function(){return Object(f.a)({},a,n)}))},o.handleTileClick=function(e){if(!o.state.outcome){var t=parseInt(e.target.getAttribute("data-row")),n=parseInt(e.target.getAttribute("data-col")),a=Object(d.a)(o.state.board),r=o.state.board.findIndex((function(e){return e.row===t&&e.col===n}));if(-1===a[r].value){a[r].value=o.state.currentPlayer;var i="X"===o.state.currentPlayer?"O":"X",c=o.checkOutcome();-1===c?"B"===o.state.mode?o.setState((function(){return{board:a,currentPlayer:i}})):o.setState((function(){return{board:a}}),(function(){o.handleComputerTurn()})):"win"===c?o.setState((function(e){return{board:a,outcome:"win",winner:e.currentPlayer}})):"tie"===c&&o.setState((function(){return{board:a,outcome:"tie"}}))}}},o.checkOutcome=function(e){var t=o.state,n=t.board,a=t.currentPlayer;e&&(a=e);var r=n.filter((function(e){return e.value===a})).map((function(e){return"".concat(e.row,"-").concat(e.col)}));return[["1-1","1-2","1-3"],["2-1","2-2","2-3"],["3-1","3-2","3-3"],["1-1","2-1","3-1"],["1-2","2-2","3-2"],["1-3","2-3","3-3"],["1-1","2-2","3-3"],["1-3","2-2","3-1"]].some((function(e){return o.arrayContainsOtherArray(r,e)&&o.addColorToWinPostion(e),o.arrayContainsOtherArray(r,e)}))?"win":n.every((function(e){return-1!==e.value}))?"tie":-1},o.handleGoBack=function(){o.setState((function(){return{mode:"B",player1:"X",gameStart:!1,currentPlayer:"",board:[],outcome:"",winPosition:[],winner:""}}))},o.handleComputerTurn=function(){var e="X"===o.state.player1?"O":"X",t=o.state.board.filter((function(e){return-1===e.value})),n=Math.floor(Math.random()*t.length),a=Object(d.a)(o.state.board),r=a.findIndex((function(e){return e.row===t[n].row&&e.col===t[n].col}));a[r].value=e,o.setState((function(){return{board:a}}),(function(){"win"===o.checkOutcome(e)&&o.setState((function(){return{outcome:"win",winner:"Computer"}}))}))},o.handlePlayAgain=function(){o.setState((function(e){return{mode:e.mode,player1:e.player1,currentPlayer:e.player1,outcome:"",winPosition:[],winner:""}}),(function(){o.handleStart()}))},o.addColorToWinPostion=function(e){o.setState((function(){return{winPosition:e}}))},o.render=function(){return Object(a.jsxs)("div",{className:"Game",children:[!o.state.gameStart&&Object(a.jsxs)("div",{className:"Game-one",children:[Object(a.jsx)(h.a,{label:"Select Mode",selectedKey:o.state.mode,options:o.modeOptions,name:"mode",disabled:o.state.gameStart,onChange:o.handleRadioChange}),Object(a.jsx)(h.a,{label:"Start as...",selectedKey:o.state.player1,options:o.avatarOptions,name:"player1",disabled:o.state.gameStart,onChange:o.handleRadioChange}),Object(a.jsx)(b.a,{text:"Start",onClick:o.handleStart,disabled:o.state.gameStart})]}),o.state.gameStart&&Object(a.jsxs)("div",{className:"Game-two",children:[Object(a.jsx)(g.a,{variant:"xLargePlus",className:"Game-hideFirst",children:"win"===o.state.outcome?"".concat(o.state.winner," Wins"):"tie"===o.state.outcome?"Tie":"".concat(o.state.currentPlayer," Turn")}),Object(a.jsx)("div",{className:"Game-gridContainer",children:o.tiles.map((function(e,t){return Object(a.jsx)("div",{"data-row":e[0],"data-col":e[1],className:"Game-gridItem ".concat(o.state.winPosition.includes(e.join("-"))&&"win"),onClick:o.handleTileClick,children:"X"===o.state.board[t].value?Object(a.jsx)(v.a,{iconName:"Cancel","data-row":e[0],"data-col":e[1]}):"O"===o.state.board[t].value?Object(a.jsx)(v.a,{iconName:"CircleRing","data-row":e[0],"data-col":e[1]}):""},e.join("-"))}))}),o.state.outcome&&Object(a.jsx)(b.a,{text:"Play Again?",onClick:o.handlePlayAgain}),Object(a.jsx)(b.a,{text:"Go Back",onClick:o.handleGoBack,className:"Game-hideFirst"})]})]})},o.tiles=[];for(var r=1;r<=3;r++)for(var i=1;i<=3;i++)o.tiles.push([r,i]);return o.modeOptions=[{key:"A",text:"1 Player",iconProps:{iconName:"Robot"}},{key:"B",text:"2 Players",iconProps:{iconName:"ConnectContacts"}}],o.avatarOptions=[{key:"X",iconProps:{iconName:"Cancel"}},{key:"O",iconProps:{iconName:"CircleRing"}}],o.state={mode:"B",player1:"X",gameStart:!1,currentPlayer:"",board:[],outcome:"",winPosition:[],winner:""},o}return n}(o.Component),y=(n(62),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).render=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(w,{})})},e}return n}(o.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},C=n(42);Object(C.a)(),c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ttt-game-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ttt-game-react","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(t,e)}))}}(),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.91b15ef6.chunk.js.map