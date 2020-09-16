(this["webpackJsonpttt-game-react"]=this["webpackJsonpttt-game-react"]||[]).push([[0],{54:function(e,t,a){e.exports=a(63)},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(20),i=a.n(o),c=(a(59),a(21)),l=a(27),s=a(25),u=a(31),d=a(34),m=a(3),f=a(88),h=a(87),v=a(89),g=a(38),p=(a(60),Object(m.p)()),y=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).arrayContainsOtherArray=function(e,t){return t.every((function(t){return e.includes(t)}))},n.handleStart=function(){var e=n.tiles.map((function(e){return{row:e[0],col:e[1],value:-1}}));n.setState((function(t){return{gameStart:!0,currentPlayer:t.player1,board:e}}),(function(){setTimeout((function(){document.querySelectorAll(".Game-gridItem").forEach((function(e){e.style.boxShadow=p.effects.elevation8}))}),500),setTimeout((function(){document.querySelectorAll(".Game-hideFirst").forEach((function(e){e.style.opacity=100}))}),1e3)}))},n.handleRadioChange=function(e,t){var a=t.key,r=e.target.name;n.setState((function(){return Object(d.a)({},r,a)}))},n.handleTileClick=function(e){if(!n.state.outcome){var t=parseInt(e.target.getAttribute("data-row")),a=parseInt(e.target.getAttribute("data-col")),r=Object(u.a)(n.state.board),o=n.state.board.findIndex((function(e){return e.row===t&&e.col===a}));if(-1===r[o].value){r[o].value=n.state.currentPlayer;var i="X"===n.state.currentPlayer?"O":"X",c=n.checkOutcome();-1===c?"B"===n.state.mode?n.setState((function(){return{board:r,currentPlayer:i}})):n.setState((function(){return{board:r}}),(function(){n.handleComputerTurn()})):"win"===c?n.setState((function(){return{board:r,outcome:"win"}})):"tie"===c&&n.setState((function(){return{board:r,outcome:"tie"}}))}}},n.checkOutcome=function(){var e=n.state,t=e.board,a=e.currentPlayer,r=t.filter((function(e){return e.value===a})).map((function(e){return"".concat(e.row,"-").concat(e.col)}));return[["1-1","1-2","1-3"],["2-1","2-2","2-3"],["3-1","3-2","3-3"],["1-1","2-1","3-1"],["1-2","2-2","3-2"],["1-3","2-3","3-3"],["1-1","2-2","3-3"],["1-3","2-2","3-1"]].some((function(e){return n.arrayContainsOtherArray(r,e)&&n.addColorToWinPostion(e),n.arrayContainsOtherArray(r,e)}))?"win":t.every((function(e){return-1!==e.value}))?"tie":-1},n.handleGoBack=function(){n.setState((function(){return{mode:"B",player1:"X",gameStart:!1,currentPlayer:"",board:[],outcome:"",winPosition:[]}}))},n.handleComputerTurn=function(){var e="X"===n.state.player1?"O":"X",t=n.state.board.filter((function(e){return-1===e.value})),a=Math.floor(Math.random()*t.length),r=Object(u.a)(n.state.board),o=r.findIndex((function(e){return e.row===t[a].row&&e.col===t[a].col}));r[o].value=e,n.setState((function(){return{board:r}}))},n.handlePlayAgain=function(){n.setState((function(e){return{mode:e.mode,player1:e.player1,currentPlayer:e.player1,outcome:"",winPosition:[]}}),(function(){n.handleStart()}))},n.addColorToWinPostion=function(e){n.setState((function(){return{winPosition:e}}))},n.render=function(){return r.a.createElement("div",{className:"Game"},!n.state.gameStart&&r.a.createElement("div",{className:"Game-one"},r.a.createElement(f.a,{label:"Select Mode",selectedKey:n.state.mode,options:n.modeOptions,name:"mode",disabled:n.state.gameStart,onChange:n.handleRadioChange}),r.a.createElement(f.a,{label:"Start as...",selectedKey:n.state.player1,options:n.avatarOptions,name:"player1",disabled:n.state.gameStart,onChange:n.handleRadioChange}),r.a.createElement(h.a,{text:"Start",onClick:n.handleStart,disabled:n.state.gameStart})),n.state.gameStart&&r.a.createElement("div",{className:"Game-two"},r.a.createElement(v.a,{variant:"xLargePlus",className:"Game-hideFirst"},"win"===n.state.outcome?"".concat(n.state.currentPlayer," Wins"):"tie"===n.state.outcome?"Tie":"".concat(n.state.currentPlayer," Turn")),r.a.createElement("div",{className:"Game-gridContainer"},n.tiles.map((function(e,t){return r.a.createElement("div",{key:e.join("-"),"data-row":e[0],"data-col":e[1],className:"Game-gridItem ".concat(n.state.winPosition.includes(e.join("-"))&&"win"),onClick:n.handleTileClick},"X"===n.state.board[t].value?r.a.createElement(g.a,{iconName:"Cancel","data-row":e[0],"data-col":e[1]}):"O"===n.state.board[t].value?r.a.createElement(g.a,{iconName:"CircleRing","data-row":e[0],"data-col":e[1]}):"")}))),n.state.outcome&&r.a.createElement(h.a,{text:"Play Again?",onClick:n.handlePlayAgain}),r.a.createElement(h.a,{text:"Go Back",onClick:n.handleGoBack,className:"Game-hideFirst"})))},n.tiles=[];for(var o=1;o<=3;o++)for(var i=1;i<=3;i++)n.tiles.push([o,i]);return n.modeOptions=[{key:"A",text:"1 Player",iconProps:{iconName:"Robot"}},{key:"B",text:"2 Players",iconProps:{iconName:"ConnectContacts"}}],n.avatarOptions=[{key:"X",iconProps:{iconName:"Cancel"}},{key:"O",iconProps:{iconName:"CircleRing"}}],n.state={mode:"B",player1:"X",gameStart:!1,currentPlayer:"",board:[],outcome:"",winPosition:[]},n}return a}(n.Component),w=(a(62),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))},e}return a}(n.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=a(39);Object(C.a)(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ttt-game-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ttt-game-react","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.9867e280.chunk.js.map