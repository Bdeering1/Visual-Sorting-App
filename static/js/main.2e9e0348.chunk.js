(this["webpackJsonpvisual-sorting-app"]=this["webpackJsonpvisual-sorting-app"]||[]).push([[0],{20:function(r,t,e){},27:function(r,t,e){},28:function(r,t,e){},30:function(r,t,e){},31:function(r,t,e){"use strict";e.r(t);var n=e(0),o=e.n(n),c=e(7),a=e.n(c),s=(e(20),e(2)),i=e(3),u=e(5),l=e(4),p=e(13),b=e(6),f=e(15),h="UPDATE_ARRAY",j="SET_COLORS",y="SELECT_ITEMS",d={array:[],colors:[]},O=[],v=Object(b.c)({interface:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{array:t.newArray,colors:r.colors};case j:return{array:r.array,colors:t.colorArray};default:return r}},selection:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[];default:return r}}}),A=Object(b.d)(v,Object(b.a)(f.a)),C=e(8),g=(e(27),e(28),e(1)),k=function(r){Object(u.a)(e,r);var t=Object(l.a)(e);function e(r){var n;return Object(s.a)(this,e),(n=t.call(this,r)).state={buttons:[{text:"Generate New Array",onClick:function(){return n.props.resetArray()}},{text:"Algo 1",onClick:function(){return n.props.resetArray()}},{text:"Algo 2",onClick:function(){return n.props.resetArray()}},{text:"Algo 3",onClick:function(){return n.props.resetArray()}},{text:"Algo 4",onClick:function(){return n.props.resetArray()}}]},n}return Object(i.a)(e,[{key:"render",value:function(){var r=this;return Object(g.jsx)("div",{className:"menu-container",children:this.state.buttons.map((function(t,e){return Object(g.jsx)("button",{onClick:t.onClick,className:"menu-item",style:{backgroundColor:r.props.colors[3],borderColor:r.props.colors[0],color:r.props.colors[0]},children:t.text},e)}))})}}]),e}(o.a.Component),m=(e(30),function(r){Object(u.a)(e,r);var t=Object(l.a)(e);function e(r){return Object(s.a)(this,e),t.call(this,r)}return Object(i.a)(e,[{key:"render",value:function(){var r=this;return Object(g.jsx)("div",{className:"bar-graph",style:{backgroundColor:this.props.colors[3],borderColor:this.props.colors[0]},children:this.props.array.map((function(t,e){return Object(g.jsx)("div",{className:"array-bar",style:{height:"".concat(t/10,"%"),backgroundColor:r.props.colors[2]}},e)}))})}}]),e}(o.a.Component));function x(r,t){return Math.floor(Math.random()*(t-r+1)+r)}var E=function(r){Object(u.a)(e,r);var t=Object(l.a)(e);function e(r){var n;return Object(s.a)(this,e),(n=t.call(this,r)).resetArray=n.resetArray.bind(Object(C.a)(n)),n}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.resetArray(),this.props.setColors(["#151515","#222225","#004BA4","#E0E0E0"])}},{key:"resetArray",value:function(){this.props.updateArray(function(r,t,e){for(var n=[],o=0;o<e;o++)n.push(x(r,t));return n}(10,950,130))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"Interface",style:{backgroundColor:this.props.colors[1]},children:Object(g.jsxs)("div",{className:"interface-wrapper",children:[Object(g.jsx)(m,{array:this.props.array,colors:this.props.colors}),Object(g.jsx)(k,{resetArray:this.resetArray,colors:this.props.colors})]})})}}]),e}(o.a.Component),w=Object(p.b)((function(r){return{array:r.interface.array,colors:r.interface.colors}}),(function(r){return{updateArray:function(t){r(function(r){return{type:h,newArray:r}}(t))},setColors:function(t){r(function(r){return{type:j,colorArray:r}}(t))}}}))(E),N=function(r){Object(u.a)(e,r);var t=Object(l.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(i.a)(e,[{key:"render",value:function(){return Object(g.jsx)(p.a,{store:A,children:Object(g.jsx)(w,{})})}}]),e}(o.a.Component),S=function(r){r&&r instanceof Function&&e.e(3).then(e.bind(null,32)).then((function(t){var e=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;e(r),n(r),o(r),c(r),a(r)}))};a.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),S()}},[[31,1,2]]]);
//# sourceMappingURL=main.2e9e0348.chunk.js.map