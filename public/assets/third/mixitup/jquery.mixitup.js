!function(t){function e(e,a,n,o,l){function c(){v.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),a&&i(a,n,o,l),l.startOrder=[],l.newOrder=[],l.origSort=[],l.checkSort=[],g.removeStyle(l.prefix+"filter, filter, "+l.prefix+"transform, transform, opacity, display").css(l.clean).removeAttr("data-checksum"),window.atob||g.css({display:"none",opacity:"0"});var t=l.resizeContainer?"height":"";v.removeStyle(l.prefix+"transition, transition, "+l.prefix+"perspective, perspective, "+l.prefix+"perspective-origin, perspective-origin, "+t),"list"==l.layoutMode?(m.css({display:l.targetDisplayList,opacity:"1"}),l.origDisplay=l.targetDisplayList):(m.css({display:l.targetDisplayGrid,opacity:"1"}),l.origDisplay=l.targetDisplayGrid),l.origLayout=l.layoutMode;setTimeout(function(){if(g.removeStyle(l.prefix+"transition, transition"),l.mixing=!1,"function"==typeof l.onMixEnd){var t=l.onMixEnd.call(this,l);l=t?t:l}})}if(clearInterval(l.failsafe),l.mixing=!0,l.filter=e,"function"==typeof l.onMixStart){var d=l.onMixStart.call(this,l);l=d?d:l}for(var f=l.transitionSpeed,p=0;2>p;p++){var u=0==p?u=l.prefix:"";l.transition[u+"transition"]="all "+f+"ms linear",l.transition[u+"transform"]=u+"translate3d(0,0,0)",l.perspective[u+"perspective"]=l.perspectiveDistance+"px",l.perspective[u+"perspective-origin"]=l.perspectiveOrigin}var h=l.targetSelector,g=o.find(h);g.each(function(){this.data={}});var v=g.parent();v.css(l.perspective),l.easingFallback="ease-in-out","smooth"==l.easing&&(l.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==l.easing&&(l.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==l.easing&&(l.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",l.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==l.easing&&(l.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",l.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");var y="list"==l.layoutMode&&null!=l.listEffects?l.listEffects:l.effects;Array.prototype.indexOf&&(l.fade=y.indexOf("fade")>-1?"0":"",l.scale=y.indexOf("scale")>-1?"scale(.01)":"",l.rotateZ=y.indexOf("rotateZ")>-1?"rotate(180deg)":"",l.rotateY=y.indexOf("rotateY")>-1?"rotateY(90deg)":"",l.rotateX=y.indexOf("rotateX")>-1?"rotateX(90deg)":"",l.blur=y.indexOf("blur")>-1?"blur(8px)":"",l.grayscale=y.indexOf("grayscale")>-1?"grayscale(100%)":"");var m=t(),x=t(),C=[],O=!1;"string"==typeof e?C=s(e):(O=!0,t.each(e,function(t){C[t]=s(this)})),"or"==l.filterLogic?(""==C[0]&&C.shift(),C.length<1?x=x.add(o.find(h+":visible")):g.each(function(){var e=t(this);if(O){var i=0;t.each(C,function(){this.length?e.is("."+this.join(", ."))&&i++:i>0&&i++}),i==C.length?m=m.add(e):x=x.add(e)}else e.is("."+C.join(", ."))?m=m.add(e):x=x.add(e)})):(m=m.add(v.find(h+"."+C.join("."))),x=x.add(v.find(h+":not(."+C.join(".")+"):visible")));var S=m.length,b=t(),w=t(),L=t();if(x.each(function(){var e=t(this);"none"!=e.css("display")&&(b=b.add(e),L=L.add(e))}),m.filter(":visible").length==S&&!b.length&&!a){if(l.origLayout==l.layoutMode)return c(),!1;if(1==m.length)return"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),L.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),L.css("display",l.targetDisplayGrid)),c(),!1}if(l.origHeight=v.height(),m.length){if(o.removeClass(l.failClass),m.each(function(){var e=t(this);"none"==e.css("display")?w=w.add(e):L=L.add(e)}),l.origLayout!=l.layoutMode&&0==l.animateGridList)return"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),L.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),L.css("display",l.targetDisplayGrid)),c(),!1;if(!window.atob)return c(),!1;if(g.css(l.clean),L.each(function(){this.data.origPos=t(this).offset()}),"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass),w.css("display",l.targetDisplayList)):(o.addClass(l.gridClass),o.removeClass(l.listClass),w.css("display",l.targetDisplayGrid)),w.each(function(){this.data.showInterPos=t(this).offset()}),b.each(function(){this.data.hideInterPos=t(this).offset()}),L.each(function(){this.data.preInterPos=t(this).offset()}),"list"==l.layoutMode?L.css("display",l.targetDisplayList):L.css("display",l.targetDisplayGrid),a&&i(a,n,o,l),a&&r(l.origSort,l.checkSort))return c(),!1;b.hide(),w.each(function(){this.data.finalPos=t(this).offset()}),L.each(function(){this.data.finalPrePos=t(this).offset()}),l.newHeight=v.height(),a&&i("reset",null,o,l),w.hide(),L.css("display",l.origDisplay),"block"==l.origDisplay?(o.addClass(l.listClass),w.css("display",l.targetDisplayList)):(o.removeClass(l.listClass),w.css("display",l.targetDisplayGrid)),l.resizeContainer&&v.css("height",l.origHeight+"px");for(var D={},p=0;2>p;p++){var u=0==p?u=l.prefix:"";D[u+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,D[u+"filter"]=l.blur+" "+l.grayscale}w.css(D),L.each(function(){var e=this.data,i=t(this);i.hasClass("mix_tohide")?(e.preTX=e.origPos.left-e.hideInterPos.left,e.preTY=e.origPos.top-e.hideInterPos.top):(e.preTX=e.origPos.left-e.preInterPos.left,e.preTY=e.origPos.top-e.preInterPos.top);for(var a={},r=0;2>r;r++){var s=0==r?s=l.prefix:"";a[s+"transform"]="translate("+e.preTX+"px,"+e.preTY+"px)"}i.css(a)}),"list"==l.layoutMode?(o.addClass(l.listClass),o.removeClass(l.gridClass)):(o.addClass(l.gridClass),o.removeClass(l.listClass));{setTimeout(function(){if(l.resizeContainer){for(var e={},i=0;2>i;i++){var a=0==i?a=l.prefix:"";e[a+"transition"]="all "+f+"ms ease-in-out",e.height=l.newHeight+"px"}v.css(e)}b.css("opacity",l.fade),w.css("opacity",1),w.each(function(){var e=this.data;e.tX=e.finalPos.left-e.showInterPos.left,e.tY=e.finalPos.top-e.showInterPos.top;for(var i={},a=0;2>a;a++){var r=0==a?r=l.prefix:"";i[r+"transition-property"]=r+"transform, "+r+"filter, opacity",i[r+"transition-timing-function"]=l.easing+", linear, linear",i[r+"transition-duration"]=f+"ms",i[r+"transition-delay"]="0",i[r+"transform"]="translate("+e.tX+"px,"+e.tY+"px)",i[r+"filter"]="none"}t(this).css("-webkit-transition","all "+f+"ms "+l.easingFallback).css(i)}),L.each(function(){var e=this.data;e.tX=0!=e.finalPrePos.left?e.finalPrePos.left-e.preInterPos.left:0,e.tY=0!=e.finalPrePos.left?e.finalPrePos.top-e.preInterPos.top:0;for(var i={},a=0;2>a;a++){var r=0==a?r=l.prefix:"";i[r+"transition"]="all "+f+"ms "+l.easing,i[r+"transform"]="translate("+e.tX+"px,"+e.tY+"px)"}t(this).css("-webkit-transition","all "+f+"ms "+l.easingFallback).css(i)});for(var r={},i=0;2>i;i++){var a=0==i?a=l.prefix:"";r[a+"transition"]="all "+f+"ms "+l.easing+", "+a+"filter "+f+"ms linear, opacity "+f+"ms linear",r[a+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,r[a+"filter"]=l.blur+" "+l.grayscale,r.opacity=l.fade}b.css(r),v.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1)&&(h.indexOf(".")>-1?t(e.target).hasClass(h.replace(".",""))&&c():t(e.target).is(h)&&c())})},10)}l.failsafe=setTimeout(function(){l.mixing&&c()},f+400)}else{if(l.resizeContainer&&v.css("height",l.origHeight+"px"),!window.atob)return c(),!1;b=x;{setTimeout(function(){if(v.css(l.perspective),l.resizeContainer){for(var t={},e=0;2>e;e++){var i=0==e?i=l.prefix:"";t[i+"transition"]="height "+f+"ms ease-in-out",t.height=l.minHeight+"px"}v.css(t)}g.css(l.transition);var a=x.length;if(a){for(var r={},e=0;2>e;e++){var i=0==e?i=l.prefix:"";r[i+"transform"]=l.scale+" "+l.rotateX+" "+l.rotateY+" "+l.rotateZ,r[i+"filter"]=l.blur+" "+l.grayscale,r.opacity=l.fade}b.css(r),v.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){(t.originalEvent.propertyName.indexOf("transform")>-1||t.originalEvent.propertyName.indexOf("opacity")>-1)&&(o.addClass(l.failClass),c())})}else l.mixing=!1},10)}}}function i(e,i,a,r){function s(t,i){var a=isNaN(1*t.attr(e))?t.attr(e).toLowerCase():1*t.attr(e),r=isNaN(1*i.attr(e))?i.attr(e).toLowerCase():1*i.attr(e);return r>a?-1:a>r?1:0}function n(t){"asc"==i?l.prepend(t).prepend(" "):l.append(t).append(" ")}function o(t){for(var e=t.slice(),i=e.length,a=i;a--;){var r=parseInt(Math.random()*i),s=e[a];e[a]=e[r],e[r]=s}return e}a.find(r.targetSelector).wrapAll('<div class="mix_sorter"/>');var l=a.find(".mix_sorter");if(r.origSort.length||l.find(r.targetSelector+":visible").each(function(){t(this).wrap("<s/>"),r.origSort.push(t(this).parent().html().replace(/\s+/g,"")),t(this).unwrap()}),l.empty(),"reset"==e)t.each(r.startOrder,function(){l.append(this).append(" ")});else if("default"==e)t.each(r.origOrder,function(){n(this)});else if("random"==e)r.newOrder.length||(r.newOrder=o(r.startOrder)),t.each(r.newOrder,function(){l.append(this).append(" ")});else if("custom"==e)t.each(i,function(){n(this)});else{if("undefined"==typeof r.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;r.newOrder.length||(t.each(r.origOrder,function(){r.newOrder.push(t(this))}),r.newOrder.sort(s)),t.each(r.newOrder,function(){n(this)})}r.checkSort=[],l.find(r.targetSelector+":visible").each(function(e){var i=t(this);0==e&&i.attr("data-checksum","1"),i.wrap("<s/>"),r.checkSort.push(i.parent().html().replace(/\s+/g,"")),i.unwrap()}),a.find(r.targetSelector).unwrap()}function a(t){for(var e=["Webkit","Moz","O","ms"],i=0;i<e.length;i++)if(e[i]+"Transition"in t.style)return e[i];return"transition"in t.style?"":!1}function r(t,e){if(t.length!=e.length)return!1;for(var i=0;i<e.length;i++){if(t[i].compare&&!t[i].compare(e[i]))return!1;if(t[i]!==e[i])return!1}return!0}function s(e){e=e.replace(/\s{2,}/g," ");var i=e.split(" ");return t.each(i,function(t){"all"==this&&(i[t]="mix_all")}),""==i[0]&&i.shift(),i}var n={init:function(r){return this.each(function(){var s=window.navigator.appVersion.match(/Chrome\/(\d+)\./),n=s?parseInt(s[1],10):!1,o=function(t){var e=document.getElementById(t),i=e.parentElement,a=document.createElement("div"),r=document.createDocumentFragment();i.insertBefore(a,e),r.appendChild(e),i.replaceChild(e,a),r=null,a=null};(n&&31==n||32==n)&&o(this.id);var l={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};r&&t.extend(l,r),this.config=l,t.support.touch="ontouchend"in document,t.support.touch&&(l.isTouch=!0,l.resetDelay=350),l.container=t(this);var c=l.container;if(l.prefix=a(c[0]),l.prefix=l.prefix?"-"+l.prefix.toLowerCase()+"-":"",c.find(l.targetSelector).each(function(){l.origOrder.push(t(this))}),l.sortOnLoad){var d,f;t.isArray(l.sortOnLoad)?(d=l.sortOnLoad[0],f=l.sortOnLoad[1],t(l.sortSelector+"[data-sort="+l.sortOnLoad[0]+"][data-order="+l.sortOnLoad[1]+"]").addClass("active")):(t(l.sortSelector+"[data-sort="+l.sortOnLoad+"]").addClass("active"),d=l.sortOnLoad,l.sortOnLoad="desc"),i(d,f,c,l)}for(var p=0;2>p;p++){var u=0==p?u=l.prefix:"";l.transition[u+"transition"]="all "+l.transitionSpeed+"ms ease-in-out",l.perspective[u+"perspective"]=l.perspectiveDistance+"px",l.perspective[u+"perspective-origin"]=l.perspectiveOrigin}for(var p=0;2>p;p++){var u=0==p?u=l.prefix:"";l.clean[u+"transition"]="none"}"list"==l.layoutMode?(c.addClass(l.listClass),l.origDisplay=l.targetDisplayList):(c.addClass(l.gridClass),l.origDisplay=l.targetDisplayGrid),l.origLayout=l.layoutMode;var h=l.showOnLoad.split(" ");t.each(h,function(){t(l.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),c.find(l.targetSelector).addClass("mix_all"),"all"==h[0]&&(h[0]="mix_all",l.showOnLoad="mix_all");var g=t();t.each(h,function(){g=g.add(t("."+this))}),g.each(function(){var e=t(this);"list"==l.layoutMode?e.css("display",l.targetDisplayList):e.css("display",l.targetDisplayGrid),e.css(l.transition)});setTimeout(function(){l.mixing=!0,g.css("opacity","1");setTimeout(function(){if(g.removeStyle(l.prefix+"transition, transition").css("list"==l.layoutMode?{display:l.targetDisplayList,opacity:1}:{display:l.targetDisplayGrid,opacity:1}),l.mixing=!1,"function"==typeof l.onMixLoad){var t=l.onMixLoad.call(this,l);l=t?t:l}},l.transitionSpeed)},10);l.filter=l.showOnLoad,t(l.sortSelector).bind(l.buttonEvent,function(){if(!l.mixing){var i=t(this),a=i.attr("data-sort"),r=i.attr("data-order");if(i.hasClass("active")){if("random"!=a)return!1}else t(l.sortSelector).removeClass("active"),i.addClass("active");c.find(l.targetSelector).each(function(){l.startOrder.push(t(this))}),e(l.filter,a,r,c,l)}}),t(l.filterSelector).bind(l.buttonEvent,function(){if(!l.mixing){var i=t(this);if(0==l.multiFilter)t(l.filterSelector).removeClass("active"),i.addClass("active"),l.filter=i.attr("data-filter"),t(l.filterSelector+'[data-filter="'+l.filter+'"]').addClass("active");else{var a=i.attr("data-filter");if(i.hasClass("active")){i.removeClass("active");var r=new RegExp("(\\s|^)"+a);l.filter=l.filter.replace(r,"")}else i.addClass("active"),l.filter=l.filter+" "+a}e(l.filter,null,null,c,l)}})})},toGrid:function(){return this.each(function(){var i=this.config;"grid"!=i.layoutMode&&(i.layoutMode="grid",e(i.filter,null,null,t(this),i))})},toList:function(){return this.each(function(){var i=this.config;"list"!=i.layoutMode&&(i.layoutMode="list",e(i.filter,null,null,t(this),i))})},filter:function(i){return this.each(function(){var a=this.config;a.mixing||(t(a.filterSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+i+'"]').addClass("active"),e(i,null,null,t(this),a))})},sort:function(i){return this.each(function(){var a=this.config,r=t(this);if(!a.mixing){if(t(a.sortSelector).removeClass("active"),t.isArray(i)){var s=i[0],n=i[1];t(a.sortSelector+'[data-sort="'+i[0]+'"][data-order="'+i[1]+'"]').addClass("active")}else{t(a.sortSelector+'[data-sort="'+i+'"]').addClass("active");var s=i,n="desc"}r.find(a.targetSelector).each(function(){a.startOrder.push(t(this))}),e(a.filter,s,n,r,a)}})},multimix:function(i){return this.each(function(){var a=this.config,r=t(this);multiOut={filter:a.filter,sort:null,order:"desc",layoutMode:a.layoutMode},t.extend(multiOut,i),a.mixing||(t(a.filterSelector).add(a.sortSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!=typeof multiOut.sort&&(t(a.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),r.find(a.targetSelector).each(function(){a.startOrder.push(t(this))})),a.layoutMode=multiOut.layoutMode,e(multiOut.filter,multiOut.sort,multiOut.order,r,a))})},remix:function(i){return this.each(function(){var a=this.config,r=t(this);a.origOrder=[],r.find(a.targetSelector).each(function(){var e=t(this);e.addClass("mix_all"),a.origOrder.push(e)}),a.mixing||"undefined"==typeof i||(t(a.filterSelector).removeClass("active"),t(a.filterSelector+'[data-filter="'+i+'"]').addClass("active"),e(i,null,null,r,a))})}};t.fn.mixitup=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:n.init.apply(this,arguments)},t.fn.removeStyle=function(e){return this.each(function(){var i=t(this);e=e.replace(/\s+/g,"");var a=e.split(",");t.each(a,function(){var t=new RegExp(this.toString()+"[^;]+;?","g");i.attr("style",function(e,i){return i?i.replace(t,""):void 0})})})}}(jQuery);
