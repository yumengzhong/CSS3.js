(function(f){typeof define==="function"?define("prefixfree",f):f()})(function(require,exports,module){"use strict";!function(e){function r(e,r,n,t,i){if(e=p[e],e.length){var a=new RegExp(r+"("+e.join("|")+")"+n,"gi");i=i.replace(a,t)}return i}function n(e){return e.replace(/-([a-z])/g,function(e,r){return r.toUpperCase()}).replace("-","")}function t(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}var i=e.document,a=i.documentElement,o=e.getComputedStyle,s=e.stylefix||require("stylefix");if(s&&o){var p={camelCase:n,deCamelCase:t,prefixCSS:function(e,n){var t=p.prefix;if(p.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,r,n,t){return r+(n||"")+"linear-gradient("+(90-t)+"deg"})),e=r("functions","(\\s|:|,)","\\s*\\(","$1"+t+"$2(",e),e=r("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+t+"$2$3",e),e=r("properties","(^|\\{|\\s|;)","\\s*:","$1"+t+"$2:",e),p.properties.length){var i=new RegExp("\\b("+p.properties.join("|")+")(?!:)","gi");e=r("valueProperties","\\b",":(.+?)(;|}|$)",function(e){return e.replace(i,t+"$1")},e)}return n&&(e=r("selectors","","\\b",p.prefixSelector,e),e=r("atrules","@","\\b","@"+t+"$1",e),e=e.replace(/@supports\s+(.*?)\{/gi,function(e,n){return"@supports "+r("properties","([\\s\\:\\(])","\\b","$1"+t+"$2",n)+"{"})),e=e.replace(new RegExp("-"+t,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,t)},property:function(e){return(p.properties.indexOf(e)>=0?p.prefix:"")+e},value:function(e,n){return e=r("functions","(^|\\s|,)","\\s*\\(","$1"+p.prefix+"$2(",e),e=r("keywords","(^|\\s)","(\\s|$)","$1"+p.prefix+"$2$3",e),p.valueProperties.indexOf(n)>=0&&(e=r("properties","(^|\\s|,)","($|\\s|,)","$1"+p.prefix+"$2$3",e)),e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+p.prefix})},prefixProperty:function(e,r){var n=p.prefix+e;return r?p.camelCase(n):n}};!function(){var r={},n=[],t=o(a,null),l=i.createElement("div").style,u=s.ieVersion?"ms":e.opera?"o":e.netscape?"moz":"webkit",c=e.CSSStyleDeclaration.prototype,f=function(e){e=e.match(/^(-\w+-)(.+)/),e&&!d(e[2])&&d(e[0])&&m(e[2],e[0])},d=function(e){return e in t||p.camelCase(e)in l},g=function(e){try{var n=c[e];n&&n.apply&&(c[e]=function(){var e=arguments[0];return arguments[0]=r[e]||e,n.apply(this,arguments)})}catch(t){}},m=function(e,t){r[e]||(r[e]=t,n.push(e),f(t.replace(/-\w+$/,"")),t=p.camelCase(t),Object.defineProperty(c,p.camelCase(e),{get:function(){return this[t]},set:function(e){this[t]=e},configurable:!0,enumerable:!0}))};for(var x in c)/Property/.test(x)&&g(x);if(t.length>0)[].slice.call(t,0).forEach(f);else for(var y in t)f(p.deCamelCase(y));p.prefix="-"+u+"-",p.Prefix=p.camelCase(u),"Ms"!==p.Prefix||"transform"in l||"MsTransform"in l||!("msTransform"in l)||n.push("transform","transform-origin"),p.properties=n.sort()}(),function(){function e(e,r){return a[r]="",a[r]=e,!!a[r]}var r={canvas:{property:"backgroundImage",params:"test"},"image-set":{property:"backgroundImage",params:"url(a.png) 1x, url(b.png) 2x"},"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};r["repeating-linear-gradient"]=r["repeating-radial-gradient"]=r["radial-gradient"]=r["linear-gradient"];var n,t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};p.functions=[],p.keywords=[];var a=i.createElement("div").style;for(var o in r){var s=r[o],l=o+"("+s.params+")";n=s.property,!e(l,n)&&e(p.prefix+l,n)&&p.functions.push(o)}for(var u in t)n=t[u],!e(u,n)&&e(p.prefix+u,n)&&p.keywords.push(u)}(),function(){function e(e){return o.textContent=e+"{}",!!o.sheet.cssRules.length}var r,n={":read-only":null,":read-write":null,":any-link":null,":placeholder":null,":input-placeholder":null,"::selection":null,"::placeholder":null,"::input-placeholder":null},t={keyframes:"name",viewport:null,document:'regexp(".")'};p.selectors=[],p.atrules=[];var o=a.appendChild(i.createElement("style"));for(var s in n)r=s+(n[s]?"("+n[s]+")":""),!e(r)&&e(p.prefixSelector(r))&&p.selectors.push(s);for(var l in t)r=l+" "+(t[l]||""),!e("@"+r)&&e("@"+p.prefix+r)&&p.atrules.push(l);a.removeChild(o)}(),function(){function n(e,n){var t;e&&/^function\s+\w+\(\)\s*\{\s*\[native code]\s*\}$/.test(t=e[n])&&(e[n]=function(){return t.apply(e,[].map.call(arguments,function(e){return p.prefixCSS(r("properties","\\b","\\b",p.prefix+"$1",e))}))})}n(e.CSS,"supports"),n(e,"supportsCSS")}(e.CSS),p.valueProperties=["transition","transition-property"],a.className+=" "+p.prefix,s.register(p.prefixCSS);try{module.exports=p}catch(l){e.PrefixFree=p}}}(window);});