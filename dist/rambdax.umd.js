!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("rambda")):"function"==typeof define&&define.amd?define(["exports","rambda"],t):t(n.rambdax={},n.rambda)}(this,function(n,t){var r=t.curry(function(n,t,r){var e="string"==typeof n?n.split("."):n,i={};i[e[e.length-1]]=t;for(var o=e.length-2;o>-1;)(i={})[e[o]]=i,o--;return Object.assign({},r,i)}),e=["Null","Undefined","RegExp"];var i=t.curry(function n(r,e){var i=Object.assign({},e),o=t.filter(function(n){return void 0!==i[n]})(Object.keys(r));return 0===o.length?e:(o.map(function(e){var o=r[e];"Function"===t.type(o)?i[e]=o(i[e]):"Object"===t.type(o)&&(i[e]=n(o,i[e]))}),i)});function o(n){return function(t){return new Promise(function(r,e){return r(n(t))})}}function u(n){return["Async","Promise"].includes(t.type(n))}function c(n,t){return new Promise(function(r,e){var i=function(n){try{throw n}catch(n){return e(n)}};try{var o;if(Array.isArray(t)){var u,c,a;function f(){var n=a();return s.bind(this,n[0],n[1])}function s(t,r){return a=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)?n(t).then(function(n){try{return u.push(n),f}catch(n){return i(n)}},i):[1]}return u=[],(c=function(n){for(;n;){if(n.then)return void n.then(c,i);try{if(n.pop){if(n.length)return n.pop()?l.call(this):n;n=f}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(s.bind(this,void 0,[t[Symbol.iterator]()]));function l(){return r(u)}}o={};var p,h,d=[];for(p in t)d.push(p);function y(r){return d.length?(r=d.shift(),n(t[r],r).then(function(n){try{return o[r]=n,y}catch(n){return i(n)}},i)):[1]}return(h=function(n){for(;n;){if(n.then)return void n.then(h,i);try{if(n.pop){if(n.length)return n.pop()?v.call(this):n;n=y}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(y.bind(this,void 0));function v(){return r(o)}}catch(n){i(n)}})}function a(n,t){return new Promise(function(r,e){var i=function(n){try{throw n}catch(n){return e(n)}};try{var o;return o=t.map(function(t){return n(t)}),Promise.all(o).then(r,i)}catch(n){i(n)}})}var f={},s=function(n){if("String"===t.type(n))return n;if(["Function","Async"].includes(t.type(n))){var r=t.replace(/\s{1,}/g," ",n.toString());return t.replace(/\s/g,"_",t.take(15,r))}var e,i;return"Object"===t.type(n)&&(e=n,i={},t.compose(t.map(function(n){return i[n]=e[n]}),t.sort(function(n,t){return n>t}))(Object.keys(e)),n=i),JSON.stringify(n)},l=function(n){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var e="";return t.map(function(n){e+=s(n)+"_"}),""+e+s(n)};function p(n,t){var r;return function(){return n&&(r=n.apply(t||this,arguments),n=null),r}}function h(n){var r=n.condition,e=n.inputArgument,i=n.prop;return new Promise(function(n,o){if("Async"!==t.type(r))return n({type:i,payload:r(e)});r(e).then(function(t){n({type:i,payload:t})}).catch(function(n){return o(n)})})}var d=function(n){return new Promise(function(t){n.then(function(n){t({payload:n,type:"RESULT"})}).catch(function(n){t({payload:n,type:"ERROR"})})})};var y=Symbol("NO_MATCH_FOUND"),v=function(n,r){return void 0===r&&(r=!0),{key:n,test:function(e){return function(n,r){return"function"==typeof n?n(r):t.equals(n,r)}(n,e)?r:y}}},m=function(n,t,r){return void 0!==n&&void 0===t&&void 0===r?(this.cases=[],this.defaultValue=void 0,this.willMatch=n):(this.cases=t,this.defaultValue=n,this.willMatch=r),this};m.prototype.default=function(n){return new m(n,this.cases,this.willMatch).match(this.willMatch)},m.prototype.is=function(n,t){return new m(this.defaultValue,this.cases.concat([v(n,t)]),this.willMatch)},m.prototype.match=function(n){return function(n,t,r){for(var e,i=0;i<n.length;i++)if((e=n[i].test(t))!==y)return e;return r}(this.cases,n,this.defaultValue)};var g=t.add,w=t.addIndex,b=t.adjust,P=t.all,A=t.allPass,O=t.always,j=t.any,x=t.anyPass,k=t.append,E=t.assoc,S=t.both,B=t.complement,M=t.compose,L=t.concat,q=t.contains,T=t.curry,R=t.dec,F=t.defaultTo,N=t.dissoc,D=t.divide,I=t.drop,W=t.dropLast,_=t.either,z=t.endsWith,U=t.equals,V=t.F,C=t.filter,Y=t.find,X=t.findIndex,H=t.flatten,J=t.flip,G=t.forEach,K=t.groupBy,Q=t.has,Z=t.head,$=t.identity,nn=t.ifElse,tn=t.inc,rn=t.includes,en=t.indexBy,on=t.indexOf,un=t.init,cn=t.is,an=t.isNil,fn=t.join,sn=t.keys,ln=t.last,pn=t.lastIndexOf,hn=t.length,dn=t.map,yn=t.match,vn=t.merge,mn=t.max,gn=t.maxBy,wn=t.min,bn=t.minBy,Pn=t.modulo,An=t.multiply,On=t.none,jn=t.not,xn=t.nth,kn=t.omit,En=t.partialCurry,Sn=t.path,Bn=t.pathOr,Mn=t.pick,Ln=t.pickAll,qn=t.pipe,Tn=t.pluck,Rn=t.prepend,Fn=t.prop,Nn=t.propEq,Dn=t.range,In=t.reduce,Wn=t.reject,_n=t.repeat,zn=t.replace,Un=t.reverse,Vn=t.sort,Cn=t.sortBy,Yn=t.split,Xn=t.splitEvery,Hn=t.startsWith,Jn=t.subtract,Gn=t.T,Kn=t.tail,Qn=t.take,Zn=t.takeLast,$n=t.tap,nt=t.test,tt=t.times,rt=t.toLower,et=t.toString,it=t.toUpper,ot=t.trim,ut=t.type,ct=t.uniq,at=t.uniqWith,ft=t.update,st=t.values,lt=t.without,pt=t.zip,ht=t.zipObj;n.DELAY="RAMBDAX_DELAY",n.add=g,n.addIndex=w,n.adjust=b,n.all=P,n.allPass=A,n.always=O,n.any=j,n.anyPass=x,n.append=k,n.assoc=E,n.both=S,n.complement=B,n.compose=M,n.concat=L,n.contains=q,n.curry=T,n.dec=R,n.defaultTo=F,n.dissoc=N,n.divide=D,n.drop=I,n.dropLast=W,n.either=_,n.endsWith=z,n.equals=U,n.F=V,n.filter=C,n.find=Y,n.findIndex=X,n.flatten=H,n.flip=J,n.forEach=G,n.groupBy=K,n.has=Q,n.head=Z,n.identity=$,n.ifElse=nn,n.inc=tn,n.includes=rn,n.indexBy=en,n.indexOf=on,n.init=un,n.is=cn,n.isNil=an,n.join=fn,n.keys=sn,n.last=ln,n.lastIndexOf=pn,n.length=hn,n.map=dn,n.match=yn,n.merge=vn,n.max=mn,n.maxBy=gn,n.min=wn,n.minBy=bn,n.modulo=Pn,n.multiply=An,n.none=On,n.not=jn,n.nth=xn,n.omit=kn,n.partialCurry=En,n.path=Sn,n.pathOr=Bn,n.pick=Mn,n.pickAll=Ln,n.pipe=qn,n.pluck=Tn,n.prepend=Rn,n.prop=Fn,n.propEq=Nn,n.range=Dn,n.reduce=In,n.reject=Wn,n.repeat=_n,n.replace=zn,n.reverse=Un,n.sort=Vn,n.sortBy=Cn,n.split=Yn,n.splitEvery=Xn,n.startsWith=Hn,n.subtract=Jn,n.T=Gn,n.tail=Kn,n.take=Qn,n.takeLast=Zn,n.tap=$n,n.test=nt,n.times=tt,n.toLower=rt,n.toString=et,n.toUpper=it,n.trim=ot,n.type=ut,n.uniq=ct,n.uniqWith=at,n.update=ft,n.values=st,n.without=lt,n.zip=pt,n.zipObj=ht,n.assocPath=r,n.compact=function(n){return t.filter(function(n){var r=t.type(n);return!e.includes(r)&&("Object"===r?!t.equals(n,{}):0!==n.length)},n)},n.composeAsync=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];try{return function(r){return new Promise(function(e,i){var o,u;function c(){if(0===n.length)return[1];{var r;return r=n.pop(),"Async"===t.type(r)||"Promise"===t.type(r)?r(o).then(function(n){try{return o=n,e.call(this)}catch(n){return i(n)}}.bind(this),i):(o=r(o),e.call(this));function e(){return c}}}return o=r,(u=function(n){for(;n;){if(n.then)return void n.then(u,i);try{if(n.pop){if(n.length)return n.pop()?a.call(this):n;n=c}else n=n.call(this)}catch(n){return i(n)}}}.bind(this))(c);function a(){return e(o)}})}}catch(n){throw n}},n.debounce=function(n,t,r){var e;return void 0===r&&(r=!1),function(){for(var i=[],o=arguments.length;o--;)i[o]=arguments[o];var u=r&&!e;clearTimeout(e),e=setTimeout(function(){e=null,r||n.apply(null,i)},t),u&&n.apply(null,i)}},n.delay=function(n){return new Promise(function(t){setTimeout(function(){t("RAMBDAX_DELAY")},n)})},n.debug=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];console.log.apply(console,n),process.exit()},n.evolve=i,n.greater=function n(t,r){return void 0===r?function(r){return n(t,r)}:r>t},n.ifElseAsync=function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:function(n){return new Promise(function(i,u){var c=o(t),a=o(r),f=o(e);c(n).then(function(t){(!0===t?a:f)(n).then(i).catch(u)}).catch(u)})}},n.inject=function(n,r,e){return t.replace(r,""+r+n,e)},n.isPromiseLike=u,n.isValid=function n(r){var e=r.input,i=r.schema;if("Object"===t.type(e)&&"Object"===t.type(i)){var o=!0,u=function(n){n||(o=!1)};for(var c in i)if(o){var a=i[c],f=t.type(a),s=e[c],l=t.type(e[c]);if("Object"===f)u(n({input:s,schema:a}));else if("String"===f)u(t.toLower(l)===a);else if("function"==typeof a)u(a(s));else if("Array"===f&&"String"===l)u(t.contains(s,a));else if("Array"===f&&1===a.length&&"Array"===l){var p=a[0],h=t.type(a[0]);u("String"===h||"Object"===h),"String"===h&&u(!t.any(function(n){return t.type(n).toLowerCase()!==p},s)),"Object"===h&&u(t.all(function(t){return n({input:t,schema:p})},s))}else u("RegExp"===f&&"String"===l&&t.test(a,s))}return o}return!1},n.less=function n(t,r){return void 0===r?function(r){return n(t,r)}:r<t},n.mapAsync=function(n,t){return void 0===t?function(t){return new Promise(function(r,e){return c(n,t).then(r,e)})}:new Promise(function(r,e){c(n,t).then(r).catch(e)})},n.mapFastAsync=function(n,t){return void 0===t?function(t){return new Promise(function(r,e){return a(n,t).then(r,e)})}:new Promise(function(r,e){a(n,t).then(r).catch(e)})},n.memoize=function n(r){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(1===arguments.length)return function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return n.apply(void 0,[r].concat(t))};var o=l.apply(void 0,[r].concat(e));if(o in f)return f[o];if("Async"===t.type(r))return new Promise(function(n){r.apply(void 0,e).then(function(t){f[o]=t,n(t)})});var u=r.apply(void 0,e);return f[o]=u,u},n.mergeAll=function(n){var r={};return t.map(function(n){r=t.merge(r,n)},n),r},n.omitBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e={};for(var i in r)t(i,r[i])||(e[i]=r[i]);return e},n.once=function(n,r){if(1===arguments.length){var e=p(n,r);return t.curry(e)}return p(n,r)},n.pickBy=function n(t,r){if(1===arguments.length)return function(r){return n(t,r)};var e={};for(var i in r)t(i,r[i])&&(e[i]=r[i]);return e},n.produce=function n(r,e){if(1===arguments.length)return function(t){return n(r,t)};var i=!1;for(var o in r)!1===i&&"Async"===t.type(r[o])&&(i=!0);if(!1===i){var u={};for(var c in r)u[c]=r[c](e);return u}var a=[];for(var f in r)a.push(h({inputArgument:e,condition:r[f],prop:f}));return new Promise(function(n,r){Promise.all(a).then(function(r){var e={};t.map(function(n){return e[n.type]=n.payload},r),n(e)}).catch(function(n){return r(n)})})},n.random=function(n,t){return Math.floor(Math.random()*(t-n+1))+n},n.rangeBy=function n(r,e,i){if(void 0===e)return function(t,e){return n(r,t,e)};if(void 0===i)return function(t){return n(r,e,t)};var o=!i.toString().includes(".");if(r>e){var u=r;r=e,e=u}var c=[r],a=r;if(o)for(var f=0,s=t.range(0,Math.floor((e-r)/i));f<s.length;f+=1)c.push(a+=i);else for(var l=t.compose(t.length,t.last,t.split("."))(i.toString()),p=0,h=t.range(0,Math.floor((e-r)/i));p<h.length;p+=1)a+=i,c.push(Number(a.toFixed(l)));return c},n.renameProps=function n(r,e){if(void 0===e)return function(t){return n(r,t)};var i={};return Object.keys(r).map(function(n){Object.keys(e).includes(n)&&(i[r[n]]=e[n])}),t.merge(i,t.omit(Object.keys(r),e))},n.resolve=function(n){return new Promise(function(t,r){var e=0,i={},o=[];for(var u in n)i[e]=u,o.push(n[u]),e++;Promise.all(o).then(function(n){var r={};n.map(function(n,t){r[i[t]]=n}),t(r)}).catch(r)})},n.resolveSecure=function(n){return new Promise(function(r,e){var i=function(n){try{return console.log(n),function(){try{return r()}catch(n){return e(n)}}()}catch(n){return e(n)}};try{var o;return o=t.map(function(n){return d(n)},n),Promise.all(o).then(r,i)}catch(n){i(n)}})},n.shuffle=function(n){for(var t=n.concat(),r=t.length;r>0;){var e=Math.floor(Math.random()*r),i=t[--r];t[r]=t[e],t[e]=i}return t},n.switcher=function(n){return new m(n)},n.tapAsync=function n(t,r){return 1===arguments.length?function(r){return n(t,r)}:!0===u(t)?new Promise(function(n,e){t(r).then(function(){n(r)}).catch(e)}):(t(r),r)},n.throttle=function(n,t){var r=!1;return function(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];r||(n.apply(null,e),r=!0,setTimeout(function(){r=!1},t))}},n.when=function n(t,r){return void 0===r?function(r){return n(t,r)}:function(n){return("boolean"==typeof t?t:t(n))?r(n):n}},n.whenAsync=function n(t,r){return void 0===r?function(t,r){return n(t,r)}:function(n){return new Promise(function(e,i){if("boolean"==typeof t){if(!1===t)return e(n);r(n).then(e).catch(i)}else(o=t,function(n){return new Promise(function(t,r){return t(o(n))})})(n).then(function(t){if(!1===t)return e(n);r(n).then(e).catch(i)}).catch(i);var o})}},n.where=function n(t,r){if(void 0===r)return function(r){return n(t,r)};var e=!0;for(var i in t){var o=t[i](r[i]);e&&!1===o&&(e=!1)}return e}});
//# sourceMappingURL=rambdax.umd.js.map
