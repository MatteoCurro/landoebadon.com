/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */(function(e){function u(){r=!1;for(var n=0;n<t.length;n++){var i=e(t[n]).filter(function(){return e(this).is(":appeared")});i.trigger("appear",[i]);if(o){var s=o.not(i);s.trigger("disappear",[s])}o=i}}var t=[],n=!1,r=!1,i={interval:250,force_process:!1},s=e(window),o;e.expr[":"].appeared=function(t){var n=e(t);if(!n.is(":visible"))return!1;var r=s.scrollLeft(),i=s.scrollTop(),o=n.offset(),u=o.left,a=o.top;return a+n.height()>=i&&a-(n.data("appear-top-offset")||0)<=i+s.height()&&u+n.width()>=r&&u-(n.data("appear-left-offset")||0)<=r+s.width()?!0:!1};e.fn.extend({appear:function(s){var o=e.extend({},i,s||{}),a=this.selector||this;if(!n){var f=function(){if(r)return;r=!0;setTimeout(u,o.interval)};e(window).scroll(f).resize(f);n=!0}o.force_process&&setTimeout(u,o.interval);t.push(a);return e(a)}});e.extend({force_appear:function(){if(n){u();return!0}return!1}})})(jQuery);