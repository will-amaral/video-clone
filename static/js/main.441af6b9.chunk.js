(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(51)},26:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(13),i=n.n(o),r=(n(26),n(4)),c=n.n(r),u=n(6),s=n(14),m=n(15),h=n(19),d=n(16),v=n(3),E=n(18),f=n(1),p=n(17),S=n.n(p),b=function(e){return l.a.createElement(f.Field,null,l.a.createElement(f.Control,null,l.a.createElement(f.Input,{value:e.value,onChange:e.handleChange,style:{marginBottom:20},placeholder:"Pesquisar"})))},g=function(e){if(!e.video)return l.a.createElement(f.Column,{isSize:"2/3",hasTextAlign:"centered"},l.a.createElement(f.Button,{isLoading:!0}));var t=e.video.id,n="https://www.youtube.com/embed/".concat(t,"?autoplay=1");return l.a.createElement(f.Column,{isSize:"2/3"},l.a.createElement(f.Container,{className:"youtube-player"},l.a.createElement("iframe",{title:"Youtube Frame",src:n,allowFullScreen:!0})),l.a.createElement(f.Content,null,l.a.createElement(f.Title,null,e.video.title),l.a.createElement("p",null,e.video.description)))},w=function(e){return l.a.createElement(f.Media,{className:"video-list-item",onClick:function(){return e.onSelect(e.video)}},l.a.createElement(f.MediaLeft,null,l.a.createElement(f.Image,{src:e.image,isSize:"128x128"})),l.a.createElement(f.MediaContent,null,l.a.createElement(f.Content,null,l.a.createElement("p",null,l.a.createElement("strong",null,e.title),l.a.createElement("br",null),l.a.createElement("small",null,e.channel)))))},C=function(e){var t=e.videos.slice(1).map(function(t){return l.a.createElement(w,{key:t.id,image:t.thumbnails.medium.url,title:t.title,channel:t.channelTitle,onSelect:e.onSelect,video:t})});return l.a.createElement(f.Column,null,t)},y={maxResults:6,key:Object({NODE_ENV:"production",PUBLIC_URL:"/will-amaral"}).API_KEY||"AIzaSyC9tNDNQlfRh060r4H9bKvXPSSKOPRzo4M",type:"video"},k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={videos:[],detail:null,text:""},n.timeout=null,n.onSearch=n.onSearch.bind(Object(v.a)(n)),n.onSelect=n.onSelect.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.onLoad(" "),n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"onLoad",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onSearch(t);case 2:this.setState({detail:this.state.videos[0]});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onSearch",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()(t,y);case 2:n=e.sent,this.setState({videos:n.results}),console.log(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=this;this.setState({text:e.target.value}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.onLoad(t.state.text)},420)}},{key:"onSelect",value:function(e){console.log(e),this.setState({detail:e}),this.onSearch(e.title)}},{key:"render",value:function(){return l.a.createElement(f.Section,null,l.a.createElement(f.Container,null,l.a.createElement(b,{value:this.state.text,handleChange:this.handleChange}),l.a.createElement(f.Columns,null,l.a.createElement(g,{video:this.state.detail}),l.a.createElement(C,{videos:this.state.videos,onSelect:this.onSelect}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.441af6b9.chunk.js.map