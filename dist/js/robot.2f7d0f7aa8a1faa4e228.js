!function(n){function r(r){for(var e,i,u=r[0],s=r[1],y=r[2],l=0,f=[];l<u.length;l++)i=u[l],o[i]&&f.push(o[i][0]),o[i]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);for(c&&c(r);f.length;)f.shift()();return a.push.apply(a,y||[]),t()}function t(){for(var n,r=0;r<a.length;r++){for(var t=a[r],e=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(e=!1)}e&&(a.splice(r--,1),n=i(i.s=t[0]))}return n}var e={},o={1:0},a=[];function i(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=e,i.d=function(n,r,t){i.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,r){if(1&r&&(n=i(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)i.d(t,e,function(r){return n[r]}.bind(null,e));return t},i.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(r,"a",r),r},i.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},i.p="https://raddeana-robot.oss-cn-hangzhou.aliyuncs.com";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=r,u=u.slice();for(var y=0;y<u.length;y++)r(u[y]);var c=s;a.push(["T5aV",0]),t()}({"05SG":function(n,r,t){},T5aV:function(n,r,t){"use strict";t.r(r);t("fcRp");var e={"00":"sunny","01":"sunny-cloudy","02":"cloudy","03":"rainbow","04":"rainy-stormy","05":"rainy-stormy","06":"rainy-snowy","07":"rainy","08":"rainy","09":"rainy",10:"rainy",11:"rainy",12:"rainy",13:"snowy",14:"snowy",15:"snowy",16:"snowy",17:"snowy",18:"sunny",19:"rainy-snowy",20:"stormy",21:"rainy",22:"rainy",23:"rainy",24:"rainy",25:"rainy",26:"sunny",27:"sunny",28:"sunny",29:"stormy",30:"stormy",31:"stormy",53:"stormy"},o=new Date,a=o.getHours()>=18||o.getHours()<=6?"night_weather_code":"day_weather_code";$.ajax({url:"/api/getWeather",type:"get",contentType:"application/json",data:{ip:window.returnCitySN.cip||"47.89.194.30"},success:function(n){var r=n.showapi_res_body.f1[a];$(".weather").addClass("weather-"+e[r])}}),$("#goto-talk").click(function(){window.location.href="/talk"})},fcRp:function(n,r,t){var e=t("05SG");"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0};t("aET+")(e,o);e.locals&&(n.exports=e.locals)}});
//# sourceMappingURL=robot.2f7d0f7aa8a1faa4e228.js.map