/*!************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
if(typeof s7viewers=="undefined"){s7viewers={}}else{if(typeof s7viewers!="object"){throw new Error("Cannot initialize a root 's7viewers' package. s7viewers is not an object")}}if(!s7viewers.ZoomViewer){(function(){var a;s7viewers.ZoomViewer=function(b){this.sdkBasePath="../../s7viewersdk/3.8/ZoomViewer/";this.containerId=null;this.params={};this.handlers=[];this.onInitFail=null;this.initializationComplete=false;this.initCalled=false;this.firstMediasetParsed=false;this.isDisposed=false;this.utilsScriptElm=null;this.fixinputmarker=null;this.indicatormode="page";this.numberOfItems=null;this.sdkProvided=false;if(typeof b=="object"){if(b.containerId){this.setContainerId(b.containerId)}if(b.params){for(var c in b.params){if(b.params.hasOwnProperty(c)&&b.params.propertyIsEnumerable(c)){this.setParam(c,b.params[c])}}}if(b.handlers){this.setHandlers(b.handlers)}if(b.localizedTexts){this.setLocalizedTexts(b.localizedTexts)}}};s7viewers.ZoomViewer.cssClassName="s7zoomviewer";s7viewers.ZoomViewer.prototype.modifiers={indicatorMode:{params:["indicatormode"],defaults:["page"],ranges:[["item","page"]]},swatchoverlay:{params:["enabled"],defaults:[true]}};s7viewers.ZoomViewer.prototype.setContainerId=function(b){if(this.isDisposed){return}this.containerId=b||null};s7viewers.ZoomViewer.getCodeBase=function(){var h="";var c="";var f=null;if(document.scripts){f=document.scripts}else{f=document.getElementsByTagName("script")}for(var e=0;e<f.length;e++){var g=f[e].src;var b=/^\s*(http[s]?:\/\/[^\/]*)?(.*)(\/(js|js_orig)\/ZoomViewer\.js)/.exec(g);if(b&&b.length==5){if(typeof b[1]!=="undefined"){h=b[1]}h+=b[2];c=g;break}}if((h!="")&&(h.lastIndexOf("/")!=h.length-1)){h+="/"}var d=/\/etc\/dam\/viewers\//;s7viewers.ZoomViewer.codebase={contentUrl:h,isDAM:d.test(c)}};s7viewers.ZoomViewer.getCodeBase();s7viewers.ZoomViewer.prototype.getContentUrl=function(){return s7viewers.ZoomViewer.codebase.contentUrl};s7viewers.ZoomViewer.prototype.includeViewer=function(){a.Util.lib.include("s7sdk.set.MediaSet");a.Util.lib.include("s7sdk.image.ZoomView");a.Util.lib.include("s7sdk.common.Button");a.Util.lib.include("s7sdk.common.Container");a.Util.lib.include("s7sdk.set.Swatches");a.Util.lib.include("s7sdk.set.SetIndicator");this.trackingManager=new a.TrackingManager();var d={en:{},defaultLocale:"en"};d.en["Container.LABEL"]="Zoom viewer";this.s7params=new a.ParameterManager(null,null,{asset:"MediaSet.asset"},this.getContentUrl()+"ZoomViewer_light.css");var f="";if(this.s7params.params.config&&(typeof(this.s7params.params.config)=="string")){f=",";if(this.s7params.params.config.indexOf("/")>-1){f+=this.s7params.params.config.split("/")[1]}else{f+=this.s7params.params.config}}this.s7params.setViewer("502,5.13.3"+f);this.s7params.setDefaultLocalizedTexts(d);for(var b in this.params){if(b!="localizedtexts"){this.s7params.push(b,this.params[b])}else{this.s7params.setLocalizedTexts(this.params[b])}}this.container=null;this.zoomView=null;this.zoomInButton=null;this.zoomOutButton=null;this.zoomResetButton=null;this.closeButton=null;this.mediaSet=null;this.fullScreenButton=null;this.swatches=null;this.containerHeight=null;this.singleImage=null;this.divContainer=null;this.setindicator=null;this.visibilityManagerZoom=null;this.initialFrame=0;this.setPages=true;this.isOrientationMarkerForcedChanged=false;var c=this;function g(){c.s7params.push("aemmode",s7viewers.ZoomViewer.codebase.isDAM?"1":"0");c.s7params.push("resizable","0");c.s7params.push("tmblayout","0,1");c.s7params.push("textpos","none");if(a.browser.device.name=="desktop"){c.s7params.push("ZoomView.singleclick","zoomReset")}if(a.browser.device.name=="desktop"){c.s7params.push("ZoomView.doubleclick","reset")}if(a.browser.device.name!="desktop"){c.s7params.push("enablescrollbuttons","0")}var k=c.getParam("fixinputmarker");if(k){c.fixinputmarker=(k=="s7touchinput"||k=="s7mouseinput")?c.fixinputmarker=k:null}var h=c.getURLParameter("fixinputmarker");if(h){c.fixinputmarker=(h=="s7touchinput"||h=="s7mouseinput")?c.fixinputmarker=h:null}if(c.fixinputmarker){if(c.fixinputmarker==="s7mouseinput"){c.addClass(c.containerId,"s7mouseinput")}else{if(c.fixinputmarker==="s7touchinput"){c.addClass(c.containerId,"s7touchinput")}}}else{if(a.browser.supportsTouch()){c.addClass(c.containerId,"s7touchinput")}else{c.addClass(c.containerId,"s7mouseinput")}}var j=c.getParam("indicatormode");if(j){c.indicatormode=(j=="page"||j=="item")?c.indicatormode=j:"page"}var i=c.getURLParameter("indicatormode");if(i){c.indicatormode=(i=="page"||i=="item")?c.indicatormode=i:"page"}c.parseMods();c.container=new a.common.Container(c.containerId,c.s7params,c.containerId+"_container");if(c.container.isInLayout()){e()}else{c.container.addEventListener(a.event.ResizeEvent.ADDED_TO_LAYOUT,e,false)}}function e(){var j=!(a.browser.device.name=="desktop");c.container.removeEventListener(a.event.ResizeEvent.ADDED_TO_LAYOUT,e,false);var r=document.getElementById(c.containerId);var w=r.style.minHeight;r.style.minHeight="1px";var x=document.createElement("div");x.style.position="relative";x.style.width="100%";x.style.height="100%";r.appendChild(x);var h=x.offsetHeight;if(x.offsetHeight<=1){r.style.height="100%";h=x.offsetHeight}r.removeChild(x);r.style.minHeight=w;var i=false;switch(c.s7params.get("responsive","auto")){case"fit":i=false;break;case"constrain":i=true;break;default:i=h==0;break}c.updateCSSMarkers();c.updateOrientationMarkers();if(c.container.isFixedSize()){c.viewerMode="fixed"}else{if(i){c.viewerMode="ratio"}else{c.viewerMode="free"}}c.containerHeight=c.container.getHeight();c.zoomView=new a.image.ZoomView(c.container,c.s7params,c.containerId+"_zoomView");c.trackingManager.attach(c.zoomView);if((c.s7params.get("closeButton","0")=="1")||(c.s7params.get("closeButton","0").toLowerCase()=="true")){c.closeButton=new a.common.CloseButton(c.container,c.s7params,c.containerId+"_closeButton");c.closeButton.addEventListener("click",z)}c.divContainer=document.createElement("div");c.divContainer.setAttribute("id",c.containerId+"_divcontainer");c.divContainer.style.position="absolute";var B=document.getElementById(c.container.getInnerContainerId());B.appendChild(c.divContainer);c.zoomInButton=new a.common.ZoomInButton(c.containerId+"_divcontainer",c.s7params,c.containerId+"_zoomInButton");c.zoomOutButton=new a.common.ZoomOutButton(c.containerId+"_divcontainer",c.s7params,c.containerId+"_zoomOutButton");c.zoomResetButton=new a.common.ZoomResetButton(c.containerId+"_divcontainer",c.s7params,c.containerId+"_zoomResetButton");c.fullScreenButton=new a.common.FullScreenButton(c.containerId+"_divcontainer",c.s7params,c.containerId+"_fullScreenButton");if(j){c.setindicator=new a.set.SetIndicator(c.container,c.s7params,c.containerId+"_setIndicator")}c.swatches=new a.set.Swatches(c.container,c.s7params,c.containerId+"_swatches");c.trackingManager.attach(c.swatches);c.divContainer.style.width=c.container.getWidth()+"px";c.divContainer.style.top=c.containerHeight-c.swatches.getHeight()+"px";c.divContainer.style.height="0px";c.divContainer.style.zIndex="1";n(c.container.getWidth(),c.container.getHeight(),c.container.getHeight());c.mediaSet=new a.set.MediaSet(null,c.s7params,c.containerId+"_mediaset");c.trackingManager.attach(c.mediaSet);c.notCustomSize=c.container.isPopup()&&!c.container.isFixedSize();if(c.notCustomSize&&!c.container.supportsNativeFullScreen()){c.fullScreenButton.setCSS(".s7fullscreenbutton","display","none")}c.trackingManager.setCallback(y);if((typeof(AppMeasurementBridge)=="function")&&(c.isConfig2Exist==true)){c.appMeasurementBridge=new AppMeasurementBridge(c.trackingParams)}if(c.viewerMode=="ratio"){r.style.height="auto"}if(j&&c.swatchoverlay){c.visibilityManagerZoom=new a.VisibilityManager();c.visibilityManagerZoom.reference(c.zoomView);c.visibilityManagerZoom.attach(c.closeButton);c.visibilityManagerZoom.attach(c.zoomInButton);c.visibilityManagerZoom.attach(c.zoomOutButton);c.visibilityManagerZoom.attach(c.zoomResetButton);if(!c.notCustomSize||c.container.supportsNativeFullScreen()){c.visibilityManagerZoom.attach(c.fullScreenButton)}c.visibilityManagerZoom.attach(c.swatches);c.visibilityManagerZoom.attach(c.setindicator)}c.swatches.addEventListener(a.AssetEvent.SWATCH_SELECTED_EVENT,A,false);if(j){c.swatches.addEventListener(a.event.SwatchEvent.SWATCH_PAGE_CHANGE,q,false)}c.mediaSet.addEventListener(a.AssetEvent.NOTF_SET_PARSED,u,false);c.container.addEventListener(a.event.ResizeEvent.COMPONENT_RESIZE,k,false);c.container.addEventListener(a.event.ResizeEvent.FULLSCREEN_RESIZE,l,false);c.container.addEventListener(a.event.ResizeEvent.SIZE_MARKER_CHANGE,v,false);c.zoomInButton.addEventListener("click",function(){c.zoomView.zoomIn()});c.zoomOutButton.addEventListener("click",function(){c.zoomView.zoomOut()});c.zoomResetButton.addEventListener("click",function(){c.zoomView.zoomReset()});c.fullScreenButton.addEventListener("click",m);c.zoomView.addEventListener(a.event.AssetEvent.ASSET_CHANGED,p,false);c.zoomView.addEventListener(a.event.CapabilityStateEvent.NOTF_ZOOM_CAPABILITY_STATE,function(C){if(C.s7event.state.hasCapability(a.ZoomCapabilityState.ZOOM_IN)){c.zoomInButton.activate()}else{c.zoomInButton.deactivate()}if(C.s7event.state.hasCapability(a.ZoomCapabilityState.ZOOM_OUT)){c.zoomOutButton.activate()}else{c.zoomOutButton.deactivate()}if(C.s7event.state.hasCapability(a.ZoomCapabilityState.ZOOM_RESET)){c.zoomResetButton.activate()}else{c.zoomResetButton.deactivate()}});function u(F){var C=F.s7event.asset;c.initialFrame=Math.max(0,parseInt((typeof(c.s7params.get("initialframe"))!="undefined")?c.s7params.get("initialframe"):0));if(c.initialFrame<C.items.length){}else{c.initialFrame=0}var E;if(c.viewerMode=="ratio"){var G=C.items[0];E=G.width/G.height}c.numberOfItems=C.items.length;if(C.items.length==1){c.singleImage=true;c.swatches.setCSS(".s7swatches","visibility","hidden");if(c.viewerMode=="fixed"){c.container.resize(c.container.getWidth(),c.containerHeight-c.swatches.getHeight())}else{if(c.viewerMode=="ratio"){c.container.setModifier({aspect:E})}else{n(c.container.getWidth(),c.container.getHeight(),c.container.getHeight())}}}else{c.singleImage=false;c.swatches.setCSS(".s7swatches","visibility","inherit");if(c.viewerMode=="fixed"){c.container.resize(c.container.getWidth(),c.containerHeight);n(c.container.getWidth(),c.containerHeight,c.containerHeight-c.swatches.getHeight())}else{if(c.viewerMode=="ratio"){var D=c.container.getWidth();if(a.browser.device.name=="desktop"){c.container.setModifier({aspect:D/(D/E+c.swatches.getHeight())})}else{c.container.setModifier({aspect:E})}}else{n(c.container.getWidth(),c.containerHeight,c.containerHeight-c.swatches.getHeight())}}}c.swatches.setMediaSet(C);c.swatches.selectSwatch(c.initialFrame,true);if((j)&&(c.setindicator)){o()}if((c.handlers.initComplete!=null)&&(typeof c.handlers.initComplete=="function")&&!c.firstMediasetParsed){if(typeof window.s7sdk=="undefined"){window.s7sdk=a}c.handlers.initComplete()}c.firstMediasetParsed=true}function q(C){var D=C.s7event.page.x;if(c.setindicator&&c.indicatormode==="page"){c.setindicator.setSelectedPage(D)}}function m(){if(!c.container.isFullScreen()){if(c.closeButton){c.closeButton.setCSS(".s7closebutton","display","none")}c.container.requestFullScreen()}else{if(c.closeButton){c.closeButton.setCSS(".s7closebutton","display","block")}c.container.cancelFullScreen()}}function n(E,D,C){if(a.browser.device.name!="desktop"&&c.swatchoverlay){c.zoomView.resize(E,D);c.divContainer.style.top=C+"px";c.divContainer.style.width=E+"px"}else{c.zoomView.resize(E,C);c.divContainer.style.top=C+"px";c.divContainer.style.width=E+"px"}c.swatches.resize(E,c.swatches.getHeight());if((j)&&(c.setindicator)){o();t((E*0.5)-(c.setindicator.getWidth()*0.5),C+(c.setindicator.getHeight()-10))}}function s(C,D){c.updateOrientationMarkers();var F=D;var E=C*0.5;F=c.singleImage?D:D-c.swatches.getHeight();if(c.closeButton){if(c.container.isFullScreen()){c.closeButton.setCSS(".s7closebutton","display","none")}else{c.closeButton.setCSS(".s7closebutton","display","block")}}n(C,D,F)}function k(C){if((typeof(C.target)=="undefined")||(C.target==document.getElementById(c.containerId+"_container"))){if(!c.container.isInLayout()){return}s(C.s7event.w,C.s7event.h)}}function t(D,C){c.setindicator.setCSS(".s7setindicator","top",(C-20)+"px");c.setindicator.setCSS(".s7setindicator","left",D+"px")}function o(){var D=document.getElementById(c.containerId+"_setIndicator");if(c.swatches.getPageCount().x<=1){D.style.visibility="hidden"}else{D.style.visibility="inherit"}var C=c.swatches.getPageCount();if(c.indicatormode==="item"){c.setindicator.setNumberOfPages(c.numberOfItems)}else{c.setindicator.setNumberOfPages(C.x)}}function l(C){if(c.closeButton){if(c.container.isFullScreen()){c.closeButton.setCSS(".s7closebutton","display","none")}else{c.closeButton.setCSS(".s7closebutton","display","block")}}c.fullScreenButton.setSelected(c.container.isFullScreen());s(C.s7event.w,C.s7event.h)}function v(C){c.updateCSSMarkers()}function A(D){var C=D.s7event.asset;if(c.zoomView){c.zoomView.setItem(C)}if(c.setindicator){if(c.indicatormode==="item"){c.setindicator.setSelectedPage(D.s7event.frame)}else{c.setindicator.setSelectedPage(c.swatches.getCurrentPage().x)}}}function p(C){c.swatches.selectSwatch(C.s7event.frame,true)}function z(){try{if(a.browser.name!="firefox"){window.open(c.getContentUrl()+"s7sdkclose.html","_self")}else{window.close()}}catch(C){a.Logger.log(a.Logger.WARN,"Cannot close the window")}}function y(E,D,H,C,F){if(!c.handlers.trackEvent&&c.isConfig2Exist!=true&&a.Modifier.parse(c.s7params.get("launch","true"),[true]).values[0]){if(typeof(_satellite)!="undefined"&&_satellite._dmviewers_v001){c.handlers.trackEvent=_satellite._dmviewers_v001().trackingFn}}if(c.appMeasurementBridge){c.appMeasurementBridge.track(E,D,H,C,F)}if(c.handlers.trackEvent){if(typeof window.s7sdk=="undefined"){window.s7sdk=a}var G=c.containerId;c.handlers.trackEvent(G,D,H,C,F)}if("s7ComponentEvent" in window){s7ComponentEvent(E,D,H,C,F)}}}this.s7params.addEventListener(a.Event.SDK_READY,function(){c.initSiteCatalyst(c.s7params,g)},false);this.s7params.setProvidedSdk(this.sdkProvided);this.s7params.init()};s7viewers.ZoomViewer.prototype.setParam=function(b,c){if(this.isDisposed){return}this.params[b]=c};s7viewers.ZoomViewer.prototype.getParam=function(c){var d=c.toLowerCase();for(var b in this.params){if(b.toLowerCase()==d){return this.params[b]}}return null};s7viewers.ZoomViewer.prototype.setParams=function(b){if(this.isDisposed){return}var e=b.split("&");for(var c=0;c<e.length;c++){var d=e[c].split("=");if(d.length>1){this.setParam(d[0],decodeURIComponent(e[c].split("=")[1]))}}};s7viewers.ZoomViewer.prototype.s7sdkUtilsAvailable=function(){if(s7viewers.ZoomViewer.codebase.isDAM){return typeof(s7viewers.s7sdk)!="undefined"}else{return(typeof(s7classic)!="undefined")&&(typeof(s7classic.s7sdk)!="undefined")}};s7viewers.ZoomViewer.prototype.init=function(){if(this.isDisposed){return}if(this.initCalled){return}this.initCalled=true;if(this.initializationComplete){return this}var i=document.getElementById(this.containerId);if(i.className!=""){if(i.className.indexOf(s7viewers.ZoomViewer.cssClassName)!=-1){}else{i.className+=" "+s7viewers.ZoomViewer.cssClassName}}else{i.className=s7viewers.ZoomViewer.cssClassName}this.s7sdkNamespace=s7viewers.ZoomViewer.codebase.isDAM?"s7viewers":"s7classic";var d=this.getContentUrl()+this.sdkBasePath+"js/s7sdk/utils/Utils.js?namespace="+this.s7sdkNamespace;var f=null;if(document.scripts){f=document.scripts}else{f=document.getElementsByTagName("script")}if(this.s7sdkUtilsAvailable()){a=(s7viewers.ZoomViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);this.sdkProvided=true;if(this.isDisposed){return}a.Util.init();this.includeViewer();this.initializationComplete=true}else{if(!this.s7sdkUtilsAvailable()&&(s7viewers.ZoomViewer.codebase.isDAM?s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED:s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED)){this.sdkProvided=true;var h=this;var g=setInterval(function(){if(h.s7sdkUtilsAvailable()){clearInterval(g);a=(s7viewers.ZoomViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);if(h.isDisposed){return}a.Util.init();h.includeViewer();h.initializationComplete=true}},100)}else{this.utilsScriptElm=document.createElement("script");this.utilsScriptElm.setAttribute("language","javascript");this.utilsScriptElm.setAttribute("type","text/javascript");var e=document.getElementsByTagName("head")[0];var c=this;function b(){if(!c.utilsScriptElm.executed){c.utilsScriptElm.executed=true;a=(s7viewers.ZoomViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);if(c.s7sdkUtilsAvailable()&&a.Util){if(c.isDisposed){return}a.Util.init();c.includeViewer();c.initializationComplete=true;c.utilsScriptElm.onreadystatechange=null;c.utilsScriptElm.onload=null;c.utilsScriptElm.onerror=null}}}if(typeof(c.utilsScriptElm.readyState)!="undefined"){c.utilsScriptElm.onreadystatechange=function(){if(c.utilsScriptElm.readyState=="loaded"){e.appendChild(c.utilsScriptElm)}else{if(c.utilsScriptElm.readyState=="complete"){b()}}};c.utilsScriptElm.setAttribute("src",d)}else{c.utilsScriptElm.onload=function(){b()};c.utilsScriptElm.onerror=function(){};c.utilsScriptElm.setAttribute("src",d);e.appendChild(c.utilsScriptElm);c.utilsScriptElm.setAttribute("data-src",c.utilsScriptElm.getAttribute("src"));c.utilsScriptElm.setAttribute("src","?namespace="+c.s7sdkNamespace)}if(s7viewers.ZoomViewer.codebase.isDAM){s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED=true}else{s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED=true}}}return this};s7viewers.ZoomViewer.prototype.getDomain=function(b){var c=/(^http[s]?:\/\/[^\/]+)/i.exec(b);if(c==null){return""}else{return c[1]}};s7viewers.ZoomViewer.prototype.setAsset=function(b){if(this.isDisposed){return}if(this.mediaSet){this.mediaSet.setAsset(b)}else{this.setParam("asset",b)}};s7viewers.ZoomViewer.prototype.setLocalizedTexts=function(b){if(this.isDisposed){return}if(this.s7params){this.s7params.setLocalizedTexts(b)}else{this.setParam("localizedtexts",b)}};s7viewers.ZoomViewer.prototype.initSiteCatalyst=function(i,c){var f=i.get("asset",null,"MediaSet").split(",")[0].split(":")[0];this.isConfig2Exist=false;if(f.indexOf("/")!=-1){var d=a.MediaSetParser.findCompanyNameInAsset(f);var h=i.get("config2");this.isConfig2Exist=(h!=""&&typeof h!="undefined");if(this.isConfig2Exist){this.trackingParams={siteCatalystCompany:d,config2:h,isRoot:i.get("serverurl")};var b=this.getContentUrl()+"../AppMeasurementBridge.jsp?company="+d+(h==""?"":"&preset="+h);if(i.get("serverurl",null)){b+="&isRoot="+i.get("serverurl")}var g=document.createElement("script");g.setAttribute("language","javascript");g.setAttribute("type","text/javascript");g.setAttribute("src",b);var e=document.getElementsByTagName("head");g.onload=g.onerror=function(){if(!g.executed){g.executed=true;if(typeof c=="function"){c()}g.onreadystatechange=null;g.onload=null;g.onerror=null}};g.onreadystatechange=function(){if(g.readyState=="complete"||g.readyState=="loaded"){setTimeout(function(){if(!g.executed){g.executed=true;if(typeof c=="function"){c()}}g.onreadystatechange=null;g.onload=null;g.onerror=null},0)}};e[0].appendChild(g)}else{if(typeof c=="function"){c()}}}};s7viewers.ZoomViewer.prototype.getComponent=function(b){if(this.isDisposed){return null}switch(b){case"container":return this.container||null;case"mediaSet":return this.mediaSet||null;case"zoomView":return this.zoomView||null;case"swatches":return this.swatches||null;case"setIndicator":return this.setindicator||null;case"zoomInButton":return this.zoomInButton||null;case"zoomOutButton":return this.zoomOutButton||null;case"zoomResetButton":return this.zoomResetButton||null;case"fullScreenButton":return this.fullScreenButton||null;case"closeButton":return this.closeButton||null;case"parameterManager":return this.s7params||null;default:return null}};s7viewers.ZoomViewer.prototype.setHandlers=function(c){if(this.isDisposed){return}if(this.initCalled){return}this.handlers=[];for(var b in c){if(!c.hasOwnProperty(b)){continue}if(typeof c[b]!="function"){continue}this.handlers[b]=c[b]}};s7viewers.ZoomViewer.prototype.getModifiers=function(){return this.modifiers};s7viewers.ZoomViewer.prototype.setModifier=function(f){if(this.isDisposed){return}var h,c,j,b,g,e;for(h in f){if(!this.modifiers.hasOwnProperty(h)){continue}c=this.modifiers[h];try{b=f[h];if(c.parseParams===false){g=new a.Modifier([b!=""?b:c.defaults[0]])}else{g=a.Modifier.parse(b,c.defaults,c.ranges)}if(g.values.length==1){this[h]=g.values[0];this.setModifierInternal(h)}else{if(g.values.length>1){j={};for(e=0;e<g.values.length;e++){j[c.params[e]]=g.values[e]}this[h]=j;this.setModifierInternal(h)}}}catch(d){throw new Error("Unable to process modifier: '"+h+"'. "+d)}}};s7viewers.ZoomViewer.prototype.setModifierInternal=function(b){switch(b){default:break}};s7viewers.ZoomViewer.prototype.parseMods=function(){var g,c,h,b,f,e;for(g in this.modifiers){if(!this.modifiers.hasOwnProperty(g)){continue}c=this.modifiers[g];try{b=this.s7params.get(g,"");if(c.parseParams===false){f=new a.Modifier([b!=""?b:c.defaults[0]])}else{f=a.Modifier.parse(b,c.defaults,c.ranges)}if(f.values.length==1){this[g]=f.values[0]}else{if(f.values.length>1){h={};for(e=0;e<f.values.length;e++){h[c.params[e]]=f.values[e]}this[g]=h}}}catch(d){throw new Error("Unable to process modifier: '"+g+"'. "+d)}}};s7viewers.ZoomViewer.prototype.updateCSSMarkers=function(){var c=this.container.getSizeMarker();var b;if(c==a.common.Container.SIZE_MARKER_NONE){return}if(c==a.common.Container.SIZE_MARKER_LARGE){b="s7size_large"}else{if(c==a.common.Container.SIZE_MARKER_SMALL){b="s7size_small"}else{if(c==a.common.Container.SIZE_MARKER_MEDIUM){b="s7size_medium"}}}if(this.containerId){this.setNewSizeMarker(this.containerId,b)}this.reloadInnerComponents()};s7viewers.ZoomViewer.prototype.reloadInnerComponents=function(){var c=this.s7params.getRegisteredComponents();for(var b=0;b<c.length;b++){if(c[b]&&c[b].restrictedStylesInvalidated()){c[b].reload()}}};s7viewers.ZoomViewer.prototype.setNewSizeMarker=function(f,c){var b=document.getElementById(f).className;var d=/^(.*)(s7size_small|s7size_medium|s7size_large)(.*)$/gi;var e;if(b.match(d)){e=b.replace(d,"$1"+c+"$3")}else{e=b+" "+c}if(b!=e){document.getElementById(f).className=e}};s7viewers.ZoomViewer.prototype.dispose=function(){if(this.appMeasurementBridge){this.appMeasurementBridge.dispose();this.appMeasurementBridge=null}if(this.trackingManager){this.trackingManager.dispose();this.trackingManager=null}if(this.visibilityManagerZoom){this.visibilityManagerZoom.dispose();this.visibilityManagerZoom=null}if(this.setindicator){this.setindicator.dispose();this.setindicator=null}if(this.swatches){this.swatches.dispose();this.swatches=null}if(this.zoomView){this.zoomView.dispose();this.zoomView=null}if(this.zoomInButton){this.zoomInButton.dispose();this.zoomInButton=null}if(this.zoomOutButton){this.zoomOutButton.dispose();this.zoomOutButton=null}if(this.zoomResetButton){this.zoomResetButton.dispose();this.zoomResetButton=null}if(this.fullScreenButton){this.fullScreenButton.dispose();this.fullScreenButton=null}if(this.closeButton){this.closeButton.dispose();this.closeButton=null}if(this.mediaSet){this.mediaSet.dispose();this.mediaSet=null}if(this.s7params){this.s7params.dispose();this.s7params=null}if(this.divContainer){this.divContainer.parentNode.removeChild(this.divContainer);delete this.divContainer}if(this.container){var e=[s7viewers.ZoomViewer.cssClassName,"s7touchinput","s7mouseinput","s7size_large","s7size_small","s7size_medium"];var c=document.getElementById(this.containerId).className.split(" ");for(var d=0;d<e.length;d++){var b=c.indexOf(e[d]);if(b!=-1){c.splice(b,1)}}document.getElementById(this.containerId).className=c.join(" ");this.container.dispose();this.container=null}this.handlers=[];this.isDisposed=true};s7viewers.ZoomViewer.prototype.updateOrientationMarkers=function(){if(!this.isOrientationMarkerForcedChanged){var b;if(window.innerWidth>window.innerHeight){b="s7device_landscape"}else{b="s7device_portrait"}if(document.getElementById(this.containerId).className.indexOf(b)==-1){this.setNewOrientationMarker(this.containerId,b);this.reloadInnerComponents()}}};s7viewers.ZoomViewer.prototype.setNewOrientationMarker=function(f,c){var b=document.getElementById(f).className;var d=/^(.*)(s7device_landscape|s7device_portrait)(.*)$/gi;var e;if(b.match(d)){e=b.replace(d,"$1"+c+"$3")}else{e=b+" "+c}if(b!=e){document.getElementById(f).className=e}};s7viewers.ZoomViewer.prototype.forceDeviceOrientationMarker=function(b){switch(b){case"s7device_portrait":case"s7device_landscape":this.isOrientationMarkerForcedChanged=true;if(this.containerId){this.setNewOrientationMarker(this.containerId,b)}this.reloadInnerComponents();break;case null:this.isOrientationMarkerForcedChanged=false;this.updateOrientationMarkers();break;default:break}};s7viewers.ZoomViewer.prototype.getURLParameter=function(b){return decodeURIComponent((new RegExp("[?|&]"+b+"=([^&;]+?)(&|#|;|$)","gi").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null};s7viewers.ZoomViewer.prototype.addClass=function(d,c){var b=document.getElementById(d).className.split(" ");if(b.indexOf(c)==-1){b[b.length]=c;document.getElementById(d).className=b.join(" ")}}})()};