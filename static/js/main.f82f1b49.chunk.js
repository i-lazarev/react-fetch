(this["webpackJsonpreact-fetch"]=this["webpackJsonpreact-fetch"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),s=(n(14),n(15),n(1)),l=n.n(s),u=n(4),i=n(5),h=n(7),m=n(6),f=n(8);function p(e){var t=e.source,n=t.id,a=t.author,c=t.author_url,r=t.post_url,s="https://picsum.photos/800/600?image="+n;return console.log("Render Image"),o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:s,alt:"This is a pic"}),o.a.createElement("p",null,o.a.createElement("a",{href:c},a)," | ",o.a.createElement("a",{href:r},"Photo")))}var d=function(e){function t(e){var n;return Object(u.a)(this,t),console.log("Constructor"),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).fetchAsync=function(){var e,t,a;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("Now I fetch"),o.prev=1,o.next=4,l.a.awrap(fetch(n.state.url));case 4:return e=o.sent,o.next=7,l.a.awrap(e.json());case 7:t=o.sent,a=Math.floor(Math.random()*Object.keys(t).length),n.setState((function(e){return{fetch:!0,source:t[a]}})),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(1),console.error(o.t0);case 15:case"end":return o.stop()}}),null,null,[[1,12]])},n.handleSubmit=function(e){e.preventDefault(),console.log("You clicked"),n.fetchAsync()},n.state={url:"https://picsum.photos/list",source:"",fetch:!1},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchAsync(),console.log("Component did Mount")}},{key:"componentDidUpdate",value:function(){console.log("Component did update")}},{key:"render",value:function(){return console.log("Render Picsum"),o.a.createElement("div",null,this.state.fetch&&o.a.createElement(p,{source:this.state.source,alt:"img"}),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("button",null,"Press Me for a Pic")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement((function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(d,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f82f1b49.chunk.js.map