window.kakao=window.kakao||{},window.kakao.maps=window.kakao.maps||{},window.daum&&window.daum.maps?window.kakao.maps=window.daum.maps:(window.daum=window.daum||{},window.daum.maps=window.kakao.maps),function(){function a(){if(d.length){t(S[d.shift()],a).start()}else e()}function t(a,t){var e=document.createElement("script");return e.charset="utf-8",e.onload=t,e.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&t()},{start:function(){e.src=a||"",
document.getElementsByTagName("head")[0].appendChild(e),e=null}}}function e(){for(;s[0];)s.shift()();n.readyState=2}var n=kakao.maps=kakao.maps||{};if(void 0===n.readyState)n.onloadcallbacks=[],n.readyState=0;else if(2===n.readyState)return;n.VERSION={ROADMAP:"2203tof",ROADMAP_SUFFIX:"",HYBRID:"2203tof",SR:"3.00",ROADVIEW:"7.00",ROADVIEW_FLASH:"200402",ROADVIEW_FLASH_LITE:"200402",BICYCLE:"6.00",
USE_DISTRICT:"2203tof",INDOOR:"2203tof",K3F:"1804vdy",SKYVIEW_VERSION:"160114",SKYVIEW_HD_VERSION:"160107"},n.RESOURCE_PATH={ROADVIEW_AJAX:"//t1.daumcdn.net/roadviewjscore/core/css3d/200204/standard/1580795088957/roadview.js",ROADVIEW_CSS:"//t1.daumcdn.net/roadviewjscore/core/openapi/standard/211122/roadview.js"};for(var o,r="https:"==location.protocol?"https:":"http:",i="",I=document.getElementsByTagName("script"),E=I.length;o=I[--E];)if(/\/map_js_init\/v3\.js\b/.test(o.src)){i=o.src;break}I=null;var s=n.onloadcallbacks,d=["v3"],S={
v3:r+"//t1.daumcdn.net/mapjsapi/js/main/4.4.3/v3.js",drawing:r+"//t1.daumcdn.net/mapjsapi/js/libs/drawing/1.2.6/drawing.js",clusterer:r+"//t1.daumcdn.net/mapjsapi/js/libs/clusterer/1.0.9/clusterer.js"};if(i){var _=function(a){var t={};return a.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,e,n){t[e]=n}),t}(i),c=_.libraries;if(c&&(d=d.concat(c.split(","))),"false"!==_.autoload){for(var E=0;E<d.length;E++)!function(a){a&&document.write('<script charset="UTF-8" src="'+a+'"><\/script>')}(S[d[E]]);n.readyState=2}}n.load=function(t){switch(s.push(t),n.readyState){case 0:n.readyState=1,a();break;case 2:e()}}}();