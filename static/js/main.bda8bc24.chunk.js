(this["webpackJsonpvisual-sorting-app"]=this["webpackJsonpvisual-sorting-app"]||[]).push([[0],{24:function(t,e,r){},32:function(t,e,r){},33:function(t,e,r){},35:function(t,e,r){},36:function(t,e,r){},37:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(10),c=r.n(o),s=(r(24),r(4)),i=r(5),u=r(7),l=r(6),p=r(17),h=r(3),b=r(19),d=r(2),j=r(8),f=r.n(j),O=r(12),g=r(9),y=function(t,e,r){for(var n=[],a=0;a<r;a++)n.push(m(t,e));return n},v=function(t,e,r){var n=r[t];return r[t]=r[e],r[e]=n,r},x=function(t,e,r,n){return r[t]=n,r[e]=n,Object(g.a)(r)},S=function(t){return new Promise((function(e){return setTimeout(e,t)}))},m=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},C=function(){return L.getState().sorting.arraySize||20},k=function(t){return L.dispatch(P(t,t.length))},w=function(t){return L.dispatch(D(t))},A=function(){var t=Object(O.a)(f.a.mark((function t(){var e,r,n,a,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=C(),r=Object(g.a)(L.getState().sorting.array),n=Object(g.a)(L.getState().interface.selected),a=0;case 4:if(!(a<e-1)){t.next=20;break}o=0;case 6:if(!(o<e-a-1)){t.next=17;break}return w(x(o,o+1,n,1)),t.next=10,S(1e4/(e*e));case 10:return r[o]>r[o+1]&&k(v(o,o+1,r)),t.next=13,S(1e4/(e*e));case 13:x(o,o+1,n,0);case 14:o++,t.next=6;break;case 17:a++,t.next=4;break;case 20:w(Object(g.a)(n));case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z="SET_COLORS",E="UPDATE_ARRAY",T="UPDATE_SELECTED",N="SORTING_STARTED",R="SORTING_STOPPED",D=function(t){return{type:T,newSelected:t}},P=function(t,e){return{type:E,newArray:t,newSize:e}},F={resetArray:function(){return function(t,e){e().sorting.isSorting||(k(y(10,900,C())),w(y(0,0,C())))}},updateSize:function(t){return function(e,r){r().sorting.isSorting||function(t){k(y(10,900,t)),w(y(0,0,t))}(t)}},bubbleSort:function(){return function(){var t=Object(O.a)(f.a.mark((function t(e,r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r().sorting.isSorting){t.next=2;break}return t.abrupt("return");case 2:return e({type:N}),t.next=5,A();case 5:e({type:R});case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},_={colors:{},selected:[]},B={array:[],arraySize:0,isSorting:!1},I=Object(h.c)({interface:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(d.a)(Object(d.a)({},t),{},{colors:e.colorObject});case T:return Object(d.a)(Object(d.a)({},t),{},{selected:e.newSelected});default:return t}},sorting:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(d.a)(Object(d.a)({},t),{},{array:e.newArray,arraySize:e.newSize});case N:return Object(d.a)(Object(d.a)({},t),{},{isSorting:!0});case R:return Object(d.a)(Object(d.a)({},t),{},{isSorting:!1});default:return t}}}),L=Object(h.d)(I,Object(h.a)(b.a)),M=(r(32),r(33),r(1)),G=function(t){return Object(M.jsx)("div",{className:"graph",style:{backgroundColor:t.colors.light,borderColor:t.colors.text},children:t.array.map((function(e,r){return Object(M.jsx)("div",{style:{height:"".concat(e/10,"%"),backgroundColor:t.selected[r]?t.colors.selected:t.colors.accent}},r)}))})},J=r(11),U=(r(35),function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(J.a)(n)),n.state={min:3,max:60,heightRatio:.5},n}return Object(i.a)(r,[{key:"handleChange",value:function(t){this.props.updateSize(t.target.value)}},{key:"render",value:function(){var t=100*(this.props.arraySize-this.state.min)/(this.state.max-this.state.min);return Object(M.jsxs)("div",{className:"sidebar",children:[Object(M.jsx)("input",{type:"range",min:this.state.min,max:this.state.max,value:this.props.arraySize,className:"slider",id:"range-slider",onChange:this.handleChange,style:{width:100*this.state.heightRatio+"vh"}}),Object(M.jsx)("output",{htmlFor:"range-slider",className:"counter",style:{color:this.props.colors.text,backgroundColor:this.props.colors.light,bottom:"calc(10vh + ".concat(t*this.state.heightRatio,"vh - ").concat(t,"*1em/100)")},children:this.props.arraySize})]})}}]),r}(a.a.Component)),Y=(r(36),function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).state={buttons:[{text:"Generate New Array",onClick:n.props.actions.resetArray},{text:"Bubble Sort",onClick:n.props.actions.bubbleSort},{text:"Algo 2",onClick:n.props.actions.resetArray},{text:"Algo 3",onClick:n.props.actions.resetArray},{text:"Algo 4",onClick:n.props.actions.resetArray}]},n}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(M.jsx)("div",{className:"menu-container",children:this.state.buttons.map((function(e,r){return Object(M.jsx)("button",{onClick:e.onClick,className:"menu-item",style:{backgroundColor:t.props.colors.light,borderColor:t.props.colors.text,color:t.props.colors.text},children:e.text},r)}))})}}]),r}(a.a.Component)),q=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(t){return Object(s.a)(this,r),e.call(this,t)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.props.actions.resetArray(),this.props.setColors({light:"#E0E0E0",dark:"#222225",accent:"#004BA4",selected:"orange",text:"#151515"})}},{key:"render",value:function(){return Object(M.jsxs)("div",{className:"interface",style:{backgroundColor:this.props.colors.dark},children:[Object(M.jsxs)("div",{className:"main-row",children:[Object(M.jsx)(G,{array:this.props.array,selected:this.props.selected,colors:this.props.colors}),Object(M.jsx)(U,{updateSize:this.props.actions.updateSize,arraySize:this.props.arraySize,colors:this.props.colors})]}),Object(M.jsx)(Y,{actions:this.props.actions,colors:this.props.colors})]})}}]),r}(a.a.Component),H=Object(p.b)((function(t){return{colors:t.interface.colors,selected:t.interface.selected,array:t.sorting.array,arraySize:t.sorting.arraySize}}),(function(t){return{setColors:function(e){t(function(t){return{type:z,colorObject:t}}(e))},actions:Object(h.b)(F,t)}}))(q),K=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(M.jsx)(p.a,{store:L,children:Object(M.jsx)(H,{})})}}]),r}(a.a.Component),Q=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,38)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;r(t),n(t),a(t),o(t),c(t)}))};c.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(K,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.bda8bc24.chunk.js.map