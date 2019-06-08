parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CeLM":[function(require,module,exports) {
var define;
var r;!function(e,n){if("object"==typeof exports){var t=n();"object"==typeof module&&module&&module.exports&&(exports=module.exports=t),exports.randomColor=t}else"function"==typeof r&&r.amd?r([],n):e.randomColor=n()}(this,function(){var r=null,e={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[],t=function(o){if(void 0!==(o=o||{}).seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))r=o.seed;else if("string"==typeof o.seed)r=function(r){for(var e=0,n=0;n!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);n++)e+=r.charCodeAt(n);return e}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");r=null}var f,c;if(null!==o.count&&void 0!==o.count){for(var h=o.count,g=[],v=0;v<o.count;v++)n.push(!1);for(o.count=null;h>g.length;)r&&o.seed&&(o.seed+=1),g.push(t(o));return o.count=h,g}return function(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return l(r);case"hsl":var n=l(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var t=l(r),a=e.alpha||Math.random();return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+a+")";case"rgbArray":return s(r);case"rgb":var u=s(r);return"rgb("+u.join(", ")+")";case"rgba":var o=s(r),a=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+a+")";default:return function(r){var e=s(r);function n(r){var e=r.toString(16);return 1==e.length?"0"+e:e}return"#"+n(e[0])+n(e[1])+n(e[2])}(r)}}([f=function(r){if(n.length>0){var t=function(r){if(isNaN(r)){if("string"==typeof r)if(e[r]){var n=e[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var t=i(r)[0];return a(t).hueRange}}else{var u=parseInt(r);if(u<360&&u>0)return a(r).hueRange}return[0,360]}(r.hue),o=u(t),s=(t[1]-t[0])/n.length,l=parseInt((o-t[0])/s);!0===n[l]?l=(l+2)%n.length:n[l]=!0;var f=(t[0]+l*s)%359,c=(t[0]+(l+1)*s)%359;return(o=u(t=[f,c]))<0&&(o=360+o),o}var t=function(r){if("number"==typeof parseInt(r)){var n=parseInt(r);if(n<360&&n>0)return[n,n]}if("string"==typeof r)if(e[r]){var t=e[r];if(t.hueRange)return t.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=i(r)[0];return[a,a]}return[0,360]}(r.hue);return(o=u(t))<0&&(o=360+o),o}(o),c=function(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return u([0,100]);var n=function(r){return a(r).saturationRange}(r),t=n[0],o=n[1];switch(e.luminosity){case"bright":t=55;break;case"dark":t=o-10;break;case"light":o=55}return u([t,o])}(f,o),function(r,e,n){var t=function(r,e){for(var n=a(r).lowerBounds,t=0;t<n.length-1;t++){var u=n[t][0],o=n[t][1],s=n[t+1][0],i=n[t+1][1];if(e>=u&&e<=s){var l=(i-o)/(s-u),f=o-l*u;return l*e+f}}return 0}(r,e),o=100;switch(n.luminosity){case"dark":o=t+20;break;case"light":t=(o+t)/2;break;case"random":t=0,o=100}return u([t,o])}(f,c,o)],o)};function a(r){for(var n in r>=334&&r<=360&&(r-=360),e){var t=e[n];if(t.hueRange&&r>=t.hueRange[0]&&r<=t.hueRange[1])return e[n]}return"Color not found"}function u(e){if(null===r){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(e[0]+n*(e[1]+1-e[0]))}var t=e[1]||1,a=e[0]||0,u=(r=(9301*r+49297)%233280)/233280;return Math.floor(a+u*(t-a))}function o(r,n,t){var a=t[0][0],u=t[t.length-1][0],o=t[t.length-1][1],s=t[0][1];e[r]={hueRange:n,lowerBounds:t,saturationRange:[a,u],brightnessRange:[o,s]}}function s(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,t=r[2]/100,a=Math.floor(6*e),u=6*e-a,o=t*(1-n),s=t*(1-u*n),i=t*(1-(1-u)*n),l=256,f=256,c=256;switch(a){case 0:l=t,f=i,c=o;break;case 1:l=s,f=t,c=o;break;case 2:l=o,f=t,c=i;break;case 3:l=o,f=s,c=t;break;case 4:l=i,f=o,c=t;break;case 5:l=t,f=o,c=s}return[Math.floor(255*l),Math.floor(255*f),Math.floor(255*c)]}function i(r){r=3===(r=r.replace(/^#/,"")).length?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,n=parseInt(r.substr(2,2),16)/255,t=parseInt(r.substr(4,2),16)/255,a=Math.max(e,n,t),u=a-Math.min(e,n,t),o=a?u/a:0;switch(a){case e:return[(n-t)/u%6*60||0,o,a];case n:return[60*((t-e)/u+2)||0,o,a];case t:return[60*((e-n)/u+4)||0,o,a]}}function l(r){var e=r[0],n=r[1]/100,t=r[2]/100,a=(2-n)*t;return[e,Math.round(n*t/(a<1?a:2-a)*1e4)/100,a/2*100]}return t});
},{}]},{},["CeLM"], null)