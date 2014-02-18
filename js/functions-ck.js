/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* version: 1.0
|* updated: October 1, 2012
|* since 2010
|* licensed under the MIT License
|* Enjoy.
|* 
|* Thanks,
|* Sean */(function(e,t){var n={ratio:16/9,videoId:"ZCAnLxRvNNc",mute:!0,repeat:!0,width:e(t).width(),wrapperZIndex:99,playButtonClass:"tubular-play",pauseButtonClass:"tubular-pause",muteButtonClass:"tubular-mute",volumeUpClass:"tubular-volume-up",volumeDownClass:"tubular-volume-down",increaseVolumeBy:10,start:0},r=function(r,i){var i=e.extend({},n,i),s=e("body");$node=e(r);var o='<div class="step" data-section="home" id="tubular-container" style="overflow: hidden; position: relative; z-index: 1; width: 100%; height: 100%" ><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';e("html,body").css({width:"100%",height:"100%"});s.prepend(o);$node.css({position:"relative","z-index":i.wrapperZIndex});t.player;t.onYouTubeIframeAPIReady=function(){player=new YT.Player("tubular-player",{width:i.width,height:Math.ceil(i.width/i.ratio),videoId:i.videoId,playerVars:{controls:0,showinfo:0,modestbranding:1,wmode:"transparent"},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})};t.onPlayerReady=function(e){u();i.mute&&e.target.mute();e.target.seekTo(i.start);e.target.playVideo()};t.onPlayerStateChange=function(e){e.data===0&&i.repeat&&player.seekTo(i.start)};var u=function(){var n=e(t).width(),r,s=e(t).height(),o,u=e("#tubular-player");if(n/i.ratio<s){r=Math.ceil(s*i.ratio);u.width(r).height(s).css({left:(n-r)/2,top:0})}else{o=Math.ceil(n/i.ratio);u.width(n).height(o).css({left:0,top:(s-o)/2})}};e(t).on("resize.tubular",function(){u()});e("body").on("click","."+i.playButtonClass,function(e){e.preventDefault();player.playVideo()}).on("click","."+i.pauseButtonClass,function(e){e.preventDefault();player.pauseVideo()}).on("click","."+i.muteButtonClass,function(e){e.preventDefault();player.isMuted()?player.unMute():player.mute()}).on("click","."+i.volumeDownClass,function(e){e.preventDefault();var t=player.getVolume();t<i.increaseVolumeBy&&(t=i.increaseVolumeBy);player.setVolume(t-i.increaseVolumeBy)}).on("click","."+i.volumeUpClass,function(e){e.preventDefault();player.isMuted()&&player.unMute();var t=player.getVolume();t>100-i.increaseVolumeBy&&(t=100-i.increaseVolumeBy);player.setVolume(t+i.increaseVolumeBy)})},i=document.createElement("script");i.src="//www.youtube.com/iframe_api";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s);e.fn.tubular=function(t){return this.each(function(){e.data(this,"tubular_instantiated")||e.data(this,"tubular_instantiated",r(this,t))})}})(jQuery,window);(function(e){function u(){r=!1;for(var n=0;n<t.length;n++){var i=e(t[n]).filter(function(){return e(this).is(":appeared")});i.trigger("appear",[i]);if(o){var s=o.not(i);s.trigger("disappear",[s])}o=i}}var t=[],n=!1,r=!1,i={interval:250,force_process:!1},s=e(window),o;e.expr[":"].appeared=function(t){var n=e(t);if(!n.is(":visible"))return!1;var r=s.scrollLeft(),i=s.scrollTop(),o=n.offset(),u=o.left,a=o.top;return a+n.height()>=i&&a-(n.data("appear-top-offset")||0)<=i+s.height()&&u+n.width()>=r&&u-(n.data("appear-left-offset")||0)<=r+s.width()?!0:!1};e.fn.extend({appear:function(s){var o=e.extend({},i,s||{}),a=this.selector||this;if(!n){var f=function(){if(r)return;r=!0;setTimeout(u,o.interval)};e(window).scroll(f).resize(f);n=!0}o.force_process&&setTimeout(u,o.interval);t.push(a);return e(a)}});e.extend({force_appear:function(){if(n){u();return!0}return!1}})})(jQuery);(function(){"use strict";var e,t,n,r,i,s,o,u,a,f,l,c,h,p;a={};n=document;l=!1;c="active";o=6e4;s=!1;t=function(){var e,t,n,r,i,s;e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};i=function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};s={};n="__ceGUID";t=function(e,t,r){e[n]=undefined;e[n]||(e[n]="ifvisible.object.event.identifier");s[e[n]]||(s[e[n]]={});s[e[n]][t]||(s[e[n]][t]=[]);return s[e[n]][t].push(r)};r=function(e,t,r){var i,o,u,a,f;if(e[n]&&s[e[n]]&&s[e[n]][t]){a=s[e[n]][t];f=[];for(o=0,u=a.length;o<u;o++){i=a[o];f.push(i(r||{}))}return f}};return{add:t,fire:r}}();e=function(){var e;e=!1;return function(t,n,r){e||(t.addEventListener?e=function(e,t,n){return e.addEventListener(t,n,!1)}:t.attachEvent?e=function(e,t,n){return e.attachEvent("on"+t,n,!1)}:e=function(e,t,n){return e["on"+t]=n});return e(t,n,r)}}();r=function(e,t){var r;if(n.createEventObject)return e.fireEvent("on"+t,r);r=n.createEvent("HTMLEvents");r.initEvent(t,!0,!0);return!e.dispatchEvent(r)};u=function(){var e,t,r,i,s;i=void 0;s=3;r=n.createElement("div");e=r.getElementsByTagName("i");t=function(){return r.innerHTML="<!--[if gt IE "+ ++s+"]><i></i><![endif]-->",e[0]};while(t())continue;return s>4?s:i}();i=!1;p=void 0;if(typeof n.hidden!="undefined"){i="hidden";p="visibilitychange"}else if(typeof n.mozHidden!="undefined"){i="mozHidden";p="mozvisibilitychange"}else if(typeof n.msHidden!="undefined"){i="msHidden";p="msvisibilitychange"}else if(typeof n.webkitHidden!="undefined"){i="webkitHidden";p="webkitvisibilitychange"}h=function(){var t,r;t=!1;r=function(){clearTimeout(t);c!=="active"&&a.wakeup();s=+(new Date);return t=setTimeout(function(){if(c==="active")return a.idle()},o)};r();e(n,"mousemove",r);e(n,"keyup",r);e(window,"scroll",r);return a.focus(r)};f=function(){var t;if(l)return!0;if(i===!1){t="blur";u<9&&(t="focusout");e(window,t,function(){return a.blur()});e(window,"focus",function(){return a.focus()})}else e(n,p,function(){return n[i]?a.blur():a.focus()},!1);l=!0;return h()};a={setIdleDuration:function(e){return o=e*1e3},getIdleDuration:function(){return o},getIdleInfo:function(){var e,t;e=+(new Date);t={};if(c==="idle"){t.isIdle=!0;t.idleFor=e-s;t.timeLeft=0;t.timeLeftPer=100}else{t.isIdle=!1;t.idleFor=e-s;t.timeLeft=s+o-e;t.timeLeftPer=(100-t.timeLeft*100/o).toFixed(2)}return t},focus:function(e){if(typeof e=="function")return this.on("focus",e);c="active";t.fire(this,"focus");t.fire(this,"wakeup");return t.fire(this,"statusChanged",{status:c})},blur:function(e){if(typeof e=="function")return this.on("blur",e);c="hidden";t.fire(this,"blur");t.fire(this,"idle");return t.fire(this,"statusChanged",{status:c})},idle:function(e){if(typeof e=="function")return this.on("idle",e);c="idle";t.fire(this,"idle");return t.fire(this,"statusChanged",{status:c})},wakeup:function(e){if(typeof e=="function")return this.on("wakeup",e);c="active";t.fire(this,"wakeup");return t.fire(this,"statusChanged",{status:c})},on:function(e,n){f();return t.add(this,e,n)},onEvery:function(e,t){var n;f();n=setInterval(function(){if(c==="active")return t()},e*1e3);return{stop:function(){return clearInterval(n)},code:n,callback:t}},now:function(){f();return c==="active"}};typeof define=="function"&&define.amd?define(function(){return a}):window.ifvisible=a}).call(this);(function(e,t){"use strict";function u(n){var n=n||location.hash,i=n.substring(1).split("|"),s=i[0],u=i[1]||e.AA_CONFIG.animationLength;if(s.charAt(0).search(/[A-Za-z]/)>-1)var a=r.find("#"+s);var f=r.find('a[name="'+s+'"]');if(f&&f.length||a&&a.length)return;var l=t(s).first();if(!l||!l.length)return;var c=l;if(c&&c.length){var h=c.offset().top;o.stop(!0,!1).animate({scrollTop:h},parseInt(u),e.AA_CONFIG.easingFunction)}}var n,r,i,s,o;e.AA_CONFIG=e.AA_CONFIG||{};e.AA_CONFIG=t.extend({animationLength:750,easingFunction:"linear"},e.AA_CONFIG);t(document).ready(function(){n=t(e);r=t(this);i=t(document.body);s=t(document.documentElement);o=i.add(s);u();r.find('a[href^="#"], a[href^="."]').on("click",function(){var e=t(this).attr("href");if(e.charAt(0)==="."){e=e.split("#");e.shift();e="#"+e.join("#")}e===location.hash&&u(e)});n.on("hashchange",function(){u()});n.on("mousewheel DOMMouseScroll touchstart mousedown MSPointerDown",function(e){o.stop(!0,!1)})})})(window,jQuery);window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}var a="2.7.1",f={},l=t.documentElement,c="modernizr",h=t.createElement(c),p=h.style,d,v={}.toString,m={},g={},y={},b=[],w=b.slice,E,S=function(e,n,r,i){var s,o,u,a,f=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:c+(r+1),f.appendChild(u);return s=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),f.id=c,(h?f:p).innerHTML+=s,p.appendChild(f),h||(p.style.background="",p.style.overflow="hidden",a=l.style.overflow,l.style.overflow="hidden",l.appendChild(p)),o=n(f,e),h?f.parentNode.removeChild(f):(p.parentNode.removeChild(p),l.style.overflow=a),!!o},x=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return S("@media "+t+" { #"+c+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},T={}.hasOwnProperty,N;!s(T,"undefined")&&!s(T.call,"undefined")?N=function(e,t){return T.call(e,t)}:N=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=w.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(w.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(w.call(arguments)))};return r});for(var C in m)N(m,C)&&(E=C.toLowerCase(),f[E]=m[C](),b.push((f[E]?"":"no-")+E));return f.addTest=function(e,t){if(typeof e=="object")for(var r in e)N(e,r)&&f.addTest(r,e[r]);else{e=e.toLowerCase();if(f[e]!==n)return f;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(l.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),h=d=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=m[e[d]];return t||(t={},v++,e[d]=v,m[v]=t),t}function s(e,n,r){n||(n=t);if(g)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():h.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!c.test(e)&&!s.tagUrn?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(g)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function a(e){e||(e=t);var r=i(e);return y.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||u(e,r),e}var f="3.7.0",l=e.html5||{},c=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,d="_html5shiv",v=0,m={},g;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,g=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){p=!0,g=!0}})();var y={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:l.shivCSS!==!1,supportsUnknownElements:g,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=y,a(t)}(this,t),f._version=a,f.mq=x,f.testStyles=S,f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(e){function d(){var e=[{stylers:[{saturation:-100},{lightness:16}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{lightness:-15}]},{featureType:"road.highway",stylers:[{lightness:28}]},{featureType:"poi",stylers:[{visibility:"off"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{lightness:30}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{lightness:21}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{lightness:-15}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{saturation:53},{hue:"#00ff4d"}]},{}],t={zoom:14,center:h,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,p]},mapTypeId:p,panControl:!1,mapTypeControl:!1,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},scaleControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0};l=new google.maps.Map(document.getElementById("map_canvas"),t);var n='<div class="info_window"><h3>LANDO E BADON Snc</h3><p>35027 Noventa Padovana (PD)<br>Via G. Marconi, 120/A int. 3<br>T/F  049 626775<br>C.F. / P. IVA 04748380286</p></div>',r=new google.maps.InfoWindow({content:n}),i=new google.maps.Marker({position:c,map:l,title:"Uluru (Ayers Rock)"});google.maps.event.addListener(i,"click",function(){r.open(l,i)});r.open(l,i);var s={name:"Custom Style"},o=new google.maps.StyledMapType(e,s);l.mapTypes.set(p,o)}var t=e("body"),n=!0,r=e("nav li");r.css({opacity:0});if(ifvisible.now()&&n){n=!1;var i=0,s=setInterval(function(){r.css({transition:"all 2s ease"}).eq(i).animate({opacity:100},{duration:1e3});i++;i>r.length&&clearInterval(s)},400)}var o=e(".video");o.css("height",e(this).height());e(window).on("resize",function(){o.css("height",e(this).height())});e(".step").appear();e(".step").on("appear",function(){var t=e(this).data("section");console.log(t);e("header").find("[data-section="+t+"]").addClass("border").parent().siblings().find("a").removeClass("border")});var u=e(window),a=window.location.pathname,f=a.substring(a.lastIndexOf("/")+1);f=="index.php"||f==""?u.scroll(function(){e(this).scrollTop()>u.height()-20?e("header").addClass("dark"):e("header").removeClass("dark")}):u.scroll(function(){e(this).scrollTop()>60?e("header").addClass("dark"):e("header").removeClass("dark")});e(".image_container_1-3").on("mouseenter",function(){e(this).siblings().addClass("opacity_6")}).on("mouseleave",function(){e(this).siblings().removeClass("opacity_6").stop()});var l,c=new google.maps.LatLng(45.413383,11.963348);if(Modernizr.mq("all and (max-width: 600px)"))var h=new google.maps.LatLng(45.417571,11.963348);else{var h=new google.maps.LatLng(45.417571,11.981029);e("header").on("mouseenter",function(){e(this).siblings().addClass("blur opacity transition")}).on("mouseleave",function(){e(this).siblings().removeClass("blur opacity")}).on("click",function(){e(this).siblings().removeClass("blur opacity")})}var p="custom_style";google.maps.event.addDomListener(window,"load",d);e("nav select").change(function(){window.location=e(this).find("option:selected").val()});var u=e(window);Modernizr.mq("only all and (min-width: 800px)")&&!Modernizr.touch&&e('[data-type="vertical_parallax"]').each(function(){var t=e(this);u.on("scroll",function(){var e=-((u.scrollTop()-t.offset().top)*t.data("speed"))/10,n="translate3d(0,"+e+"px, 0px)";t.css({WebkitTransform:n,MoxTransform:n,transform:n})})});var v=e(".tab_menu a"),m=e(".tab_content > div"),g=e(".tab_images > div");m.first().siblings().addClass("hide");g.first().siblings().addClass("visibility_hidden");v.click(function(t){t.preventDefault();var n=e(this).data("panel");m.filter("."+n).fadeIn().siblings().fadeOut();g.filter("."+n).removeClass("visibility_hidden").siblings().addClass("visibility_hidden")})})(jQuery);