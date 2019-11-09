!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):e.MicroModal=o()}(this,function(){"use strict"
var e=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),t=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o]
return t}return Array.from(e)}
return function(){var i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function n(o){var i=o.targetModal,a=o.triggers,r=void 0===a?[]:a,s=o.onShow,l=void 0===s?function(){}:s,c=o.onClose,d=void 0===c?function(){}:c,u=o.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=o.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=o.disableScroll,m=void 0!==g&&g,b=o.disableFocus,y=void 0!==b&&b,w=o.awaitCloseAnimation,k=void 0!==w&&w,p=o.debugMode,E=void 0!==p&&p
e(this,n),this.modal=document.getElementById(i),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:v,onShow:l,onClose:d,awaitCloseAnimation:k,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,t(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return o(n,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i]
t.filter(Boolean).forEach(function(o){o.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal
this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1)},!1):e.classList.remove("is-open")}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body")
switch(e){case"enable":Object.assign(o.style,{overflow:"",height:""})
break
case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i)
return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes()
e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes()
if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement)
e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),n}(),a=null,r=function(e,o){var t=[]
return e.forEach(function(e){var i=e.attributes[o].value
void 0===t[i]&&(t[i]=[]),t[i].push(e)}),t},s=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},l=function(e){if(e.length<=0)return console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},c=function(e,o){if(l(e),!o)return!0
for(var t in o)s(t)
return!0}
return{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(t(document.querySelectorAll("["+o.openTrigger+"]"))),a=r(i,o.openTrigger)
if(!0!==o.debugMode||!1!==c(i,a))for(var s in a){var l=a[s]
o.targetModal=s,o.triggers=[].concat(t(l)),new n(o)}},show:function(e,o){var t=o||{}
t.targetModal=e,!0===t.debugMode&&!1===s(e)||(a=new n(t),a.showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}}}()})

function makeid(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

 var id = makeid(Math.round(10 + Math.random() * 10));
 var domainHistory = null;
 var domain = window.location.hostname

chrome.storage.sync.get(['domains'], function(result) {
	domainHistory = result.domains;
	if (!domainHistory || !domainHistory[domain]) {
		addHandlers();
	}
});

function addHandlers() {
	document.addEventListener('keydown', handleKeyDown)
}

function removeHandlers() {
	document.removeEventListener('keydown', handleKeyDown)
}

function savePreference(allow) {
	domainHistory[domain] = allow;
	chrome.storage.sync.set({domains: domainHistory});
	removeHandlers();
}

function handleKeyDown(e) {
	if (!e.metaKey && !e.ctrlKey && !e.altKey && !(e.key == 'Escape' || e.key === 'Esc')) {
		showWarning();
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
}

function showWarning() {
	var el = document.createElement('div');
	el.innerHTML = `
	<style>
	  .modal {
		all: initial;
		font-size: 16px;
		font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
	  }

	  .modal * {
		  all: unset;
	  }
	  
	  .modal__overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999;
	  }
	  
	  .modal__container {
		background-color: #fff;
		padding: 30px;
		max-width: 500px;
		max-height: 100vh;
		border-radius: 4px;
		overflow-y: auto;
		box-sizing: border-box;
	  }
	  
	  .modal__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	  }
	  
	  .modal__title {
		margin-top: 0;
		margin-bottom: 0;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		color: #00449e;
		box-sizing: border-box;
	  }
	  
	  .modal__close {
		background: transparent;
		border: 0;
	  }
	  	  
	  .modal__content {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.5;
		color: rgba(0,0,0,.8);
	  }

	  .modal p {
		  margin: 1rem 0;
		  padding: 0;
		  display: block;
	  }

	  .modal__header .modal__close:before { content: "X"; }
	  
	  .modal__btn {
		font-size: 16px;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: .5rem;
		padding-bottom: .5rem;
		background-color: #e6e6e6;
		color: rgba(0,0,0,.8);
		border-radius: .25rem;
		border-style: none;
		border-width: 0;
		cursor: pointer;
		-webkit-appearance: button;
		text-transform: none;
		overflow: visible;
		line-height: 1.15;
		margin: 0;
		will-change: transform;
		-moz-osx-font-smoothing: grayscale;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		transition: -webkit-transform .25s ease-out;
		transition: transform .25s ease-out;
		transition: transform .25s ease-out,-webkit-transform .25s ease-out;
	  }
	  
	  .modal__btn:focus, .modal__btn:hover {
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
	  }
	  
	  .modal__btn-primary {
		background-color: #00449e;
		color: #fff;
	  }
	  
	  
	  
	  /**************************\
		Demo Animation Style
	  \**************************/
	  @keyframes mmfadeIn {
		  from { opacity: 0; }
			to { opacity: 1; }
	  }
	  
	  @keyframes mmfadeOut {
		  from { opacity: 1; }
			to { opacity: 0; }
	  }
	  
	  @keyframes mmslideIn {
		from { transform: translateY(15%); }
		  to { transform: translateY(0); }
	  }
	  
	  @keyframes mmslideOut {
		  from { transform: translateY(0); }
		  to { transform: translateY(-10%); }
	  }
	  
	  .micromodal-slide {
		display: none;
	  }
	  
	  .micromodal-slide.is-open {
		display: block;
	  }
	  
	  .micromodal-slide[aria-hidden="false"] .modal__overlay {
		animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
	  }
	  
	  .micromodal-slide[aria-hidden="false"] .modal__container {
		animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);
	  }
	  
	  .micromodal-slide[aria-hidden="true"] .modal__overlay {
		animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);
	  }
	  
	  .micromodal-slide[aria-hidden="true"] .modal__container {
		animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);
	  }
	  
	  .micromodal-slide .modal__container,
	  .micromodal-slide .modal__overlay {
		will-change: transform;
	  }
	</style>
  <div class="modal micromodal-slide" id="${id}" aria-hidden="true">
    <div class="modal__overlay" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            Phishwarn: Unknown Site
		  </h2>
		  <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
          <p>
			You have typed on this page, but Phishwarn does not recognize this site. Please double check the URL and make sure it is the site you
			expected.
			</p>
			<div><div  style="margin: 10px 0px;
			font-size: 24px;
			background-color: red;
			color: white;
			padding: 5px 10px;
			font-weight: bold; display: inline-block;">${window.location.hostname}</div>
			</div>
			<p>
			If you feel the site is OK, click allow. If you don't recognize the URL, click "Get me out of here."
	  		</p>
        </main>
        <footer class="modal__footer">
          <button data-choice="reject" tabindex="-1" class="modal__btn  modal__btn-primary" data-micromodal-close>Get me out of here</button>
          <button data-choice="allow" class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Allow</button>
        </footer>
      </div>
    </div>
  </div>
		  `;
	document.body.appendChild(el);
	document.addEventListener('click', function(e) {
		if (e.target.matches(`#${id} .modal__btn`)) {
			var choice = e.target.dataset.choice === 'allow';
			savePreference(choice);
			if (!choice) {
				document.location = 'about:blank';
			}

		}
	})
	MicroModal.init();
	MicroModal.show(id);
}