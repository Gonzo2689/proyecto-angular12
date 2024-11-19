import './polyfills.server.mjs';
import{$ as R,A as Ce,B as o,C as s,D as v,E as Te,F as j,G as Re,H as Ge,I as a,J as b,K as z,L as Z,M as Y,N as X,O as T,P as f,Q as K,S as Be,W as Ue,Y as He,_ as be,a as Ne,aa as V,b as Oe,ba as Le,c as Pe,ca as Ve,d as ke,e as q,ea as J,f as x,fa as We,g as me,ga as y,h as M,ha as $e,i as m,ia as qe,j as fe,k as g,l as ge,la as ze,m as N,n as O,o as ve,p as P,pa as Ze,q as _e,r as A,s as l,sa as Ye,t as d,ta as Xe,u as ye,ua as Ke,v as k,va as Je,w as C,x as D,y as je,z as h}from"./chunk-KDVVM2DH.mjs";import{a as p,b as _}from"./chunk-5XUXGTUW.mjs";var St=()=>["/inicio"],It=()=>["/noticias"],xt=()=>["/contactos"],Q=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-menu"]],standalone:!0,features:[f],decls:17,vars:6,consts:[[1,"navbar","navbar-expand-lg","navbar-dark",2,"background-color","brown"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"]],template:function(e,n){e&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"El Gustito"),s(),o(4,"button",3),v(5,"span",4),s(),o(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"Inicio"),s()(),o(11,"li",7)(12,"a",8),a(13,"Noticias"),s()(),o(14,"li",7)(15,"a",8),a(16,"Contactos"),s()()()()()()),e&2&&(l(9),h("routerLink",K(3,St)),l(3),h("routerLink",K(4,It)),l(3),h("routerLink",K(5,xt)))},dependencies:[y,Je,Ye,Xe],styles:[".nav-link.active[_ngcontent-%COMP%]{color:red;font-weight:700;transition:color 1s ease}"]})};var ee=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-footer"]],standalone:!0,features:[f],decls:3,vars:0,template:function(e,n){e&1&&(o(0,"div")(1,"p"),a(2,"\xA9 2024 - GASTRONOMIA BOLIVIANA. Todos los derechos reservados."),s()())},dependencies:[y],styles:["div[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-align:center;padding:10px 0;font-size:14px}"]})};var te=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-root"]],standalone:!0,features:[f],decls:7,vars:0,consts:[["id","app-container"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"header"),v(2,"app-menu"),s(),o(3,"main"),v(4,"router-outlet"),s(),o(5,"footer"),v(6,"app-footer"),s()())},dependencies:[Q,ee,Ze]})};function Nt(i,t){if(i&1&&(o(0,"div",4)(1,"div",5),v(2,"img",6),o(3,"div",7)(4,"h5",8),a(5),s(),o(6,"p",9),a(7),s()()()()),i&2){let e=t.$implicit;l(2),h("src",e.imagen,A)("alt",e.nombre),l(3),b(e.nombre),l(2),b(e.descripcion)}}function Ot(i,t){if(i&1&&(o(0,"div",4)(1,"div",5),v(2,"img",6),o(3,"div",7)(4,"h5",8),a(5),s(),o(6,"p",9),a(7),s()()()()),i&2){let e=t.$implicit;l(2),h("src",e.imagen,A)("alt",e.nombre),l(3),b(e.nombre),l(2),b(e.descripcion)}}var ie=class i{platosConocidos=[{nombre:"Salte\xF1as",descripcion:"Empanadas tradicionales con carne o pollo.",imagen:"https://comidasbolivianas.org/wp-content/uploads/2020/06/receta-delicias-de-bolivia-saltena-tradicional.jpg"},{nombre:"Pique Macho",descripcion:"Plato con carne, papas y aj\xED.",imagen:"https://chipabythedozen.com/wp-content/uploads/2020/07/Pique-Macho-Bolivia.jpg"},{nombre:"Majadito",descripcion:"Arroz con carne deshidratada.",imagen:"https://www.cocina-boliviana.com/base/stock/Recipe/majadito-boliviano/majadito-boliviano_web.jpg.webp"}];postres=[{nombre:"Helado de Canela",descripcion:"Refrescante helado t\xEDpico.",imagen:"https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2016/05/11/2016S9042.jpg"},{nombre:"Alfajor de maicena",descripcion:"Suave y dulce.",imagen:"https://cuk-it.com/wp-content/uploads/2020/06/alfajores-maicena.webp"},{nombre:"Tawa Tawas",descripcion:"Postres tradicionales con az\xFAcar.",imagen:"https://www.cocina-boliviana.com/base/stock/Recipe/tawatawas/tawatawas_web.jpg.webp"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-inicio"]],standalone:!0,features:[f],decls:14,vars:2,consts:[[1,"container","mt-4"],[1,"row","mt-3"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"mt-5"],[1,"col-md-4"],[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h1"),a(2,"Inicio"),s(),o(3,"p"),a(4,"Bienvenido a la p\xE1gina principal."),s()(),o(5,"div",0)(6,"h2"),a(7,"Platos M\xE1s Conocidos"),s(),o(8,"div",1),D(9,Nt,8,4,"div",2),s(),o(10,"h2",3),a(11,"Postres"),s(),o(12,"div",1),D(13,Ot,8,4,"div",2),s()()),e&2&&(l(9),h("ngForOf",n.platosConocidos),l(4),h("ngForOf",n.postres))},dependencies:[y,J],styles:[".card-img-top[_ngcontent-%COMP%]{height:200px;object-fit:cover}.card[_ngcontent-%COMP%]{margin-bottom:20px}"]})};function Pt(i,t){if(i&1&&(o(0,"div",4)(1,"div",5),v(2,"img",6),o(3,"div",7)(4,"h5",8),a(5),s(),o(6,"p",9),a(7),s(),o(8,"a",10),a(9,"Leer m\xE1s"),s()()()()),i&2){let e=t.$implicit;l(2),h("src",e.imagen,A)("alt",e.titulo),l(3),b(e.titulo),l(2),b(e.descripcion),l(),h("href",e.enlace,A)}}var ne=class i{noticias=[{titulo:"Marsia Taha Mohamed: Mejor Chef Femenina de Am\xE9rica Latina 2024",descripcion:"La chef boliviana Marsia Taha Mohamed ha sido reconocida como la Mejor Chef Femenina de Am\xE9rica Latina 2024. Este galard\xF3n destaca su dedicaci\xF3n a la cocina boliviana y su compromiso con la sostenibilidad.",imagen:"https://cdn.unotv.com/images/2024/10/cocina-170415-1024x576.jpeg",enlace:"https://www.unotv.com/estilo-de-vida/gastronomia/marsia-taha-mohamed-mejor-chef-femenina-de-america-latina-2024/"},{titulo:"Bolivia entre las 100 mejores cocinas del mundo seg\xFAn TasteAtlas",descripcion:"Bolivia ha sido ubicada en el puesto 60 entre las 100 mejores cocinas del mundo por TasteAtlas. Este reconocimiento resalta la diversidad y riqueza de la gastronom\xEDa boliviana.",imagen:"https://comidasbolivianas.org/wp-content/uploads/2020/09/%F0%9F%87%A7%F0%9F%87%B4-Sopa-de-Mani-12-7-screenshot.png",enlace:"https://elpais.bo/nacional/20231222_bolivia-ocupa-un-puesto-entre-las-100-mejores-cocinas-y-platos-del-mundo-segun-el-tasteatlas.html"},{titulo:"Vinos bolivianos ganan reconocimiento internacional",descripcion:"Los vinos bolivianos han obtenido reconocimiento en competencias internacionales, destacando la calidad y el potencial de la viticultura en el pa\xEDs.",imagen:"https://brujuladigital.net/images/news/es/b_18971_cinco-vinos-bolivianos-que-debes-degustar-este-2022-1.jpg",enlace:"https://brujuladigital.net/promocion-empresarial/cinco-vinos-bolivianos-que-debes-degustar-este-2022"},{titulo:"Incorporaci\xF3n de carne de lagarto en la alta cocina boliviana",descripcion:"La chef Marsia Taha ha innovado al incluir carne de lagarto en sus preparaciones, explorando nuevos sabores y promoviendo ingredientes locales en la alta cocina.",imagen:"https://cdn.bolivia.com/sdi/2023/06/27/marsia-taha-incluyo-carne-de-lagarto-en-su-menu-1162466.webp",enlace:"https://www.bolivia.com/el-sabor-de-bolivia/noticias/marsia-taha-incluyo-carne-de-lagarto-en-su-menu-410357"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-noticias"]],standalone:!0,features:[f],decls:5,vars:1,consts:[[1,"container","mt-4"],[1,"text-center","mb-4"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card","mb-4"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["target","_blank",1,"btn","btn-primary",3,"href"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h1",1),a(2,"Noticias de la Gastronom\xEDa Boliviana"),s(),o(3,"div",2),D(4,Pt,10,5,"div",3),s()()),e&2&&(l(4),h("ngForOf",n.noticias))},dependencies:[y,J],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000001a;transition:transform .3s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.card-img-top[_ngcontent-%COMP%]{height:200px;object-fit:cover}.btn-primary[_ngcontent-%COMP%]{background-color:brown;border-color:brown;transition:background-color .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#8b0000;border-color:#8b0000}"]})};var lt=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||i)(d(ye),d(_e))}}static{this.\u0275dir=g({type:i})}}return i})(),kt=(()=>{class i extends lt{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})()}static{this.\u0275dir=g({type:i,features:[C]})}}return i})(),ct=new M("");var jt={provide:ct,useExisting:x(()=>de),multi:!0};function Tt(){let i=Ve()?Ve().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Rt=new M(""),de=(()=>{class i extends lt{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Tt())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||i)(d(ye),d(_e),d(Rt,8))}}static{this.\u0275dir=g({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&j("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},features:[T([jt]),C]})}}return i})();function Gt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var Me=new M(""),ut=new M("");function Bt(i){return Gt(i.value)?{required:!0}:null}function et(i){return null}function dt(i){return i!=null}function ht(i){return Be(i)?Oe(i):i}function pt(i){let t={};return i.forEach(e=>{t=e!=null?p(p({},t),e):t}),Object.keys(t).length===0?null:t}function mt(i,t){return t.map(e=>e(i))}function Ut(i){return!i.validate}function ft(i){return i.map(t=>Ut(t)?t:e=>t.validate(e))}function Ht(i){if(!i)return null;let t=i.filter(dt);return t.length==0?null:function(e){return pt(mt(e,t))}}function Ae(i){return i!=null?Ht(ft(i)):null}function Lt(i){if(!i)return null;let t=i.filter(dt);return t.length==0?null:function(e){let n=mt(e,t).map(ht);return ke(n).pipe(Pe(pt))}}function Ee(i){return i!=null?Lt(ft(i)):null}function tt(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Wt(i){return i._rawValidators}function $t(i){return i._rawAsyncValidators}function De(i){return i?Array.isArray(i)?i:[i]:[]}function oe(i,t){return Array.isArray(i)?i.includes(t):i===t}function it(i,t){let e=De(t);return De(i).forEach(r=>{oe(e,r)||e.push(r)}),e}function nt(i,t){return De(t).filter(e=>!oe(i,e))}var se=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Ae(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Ee(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},S=class extends se{get formDirective(){return null}get path(){return null}},$=class extends se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ae=class{constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},qt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Xi=_(p({},qt),{"[class.ng-submitted]":"isSubmitted"}),gt=(()=>{class i extends ae{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(d($,2))}}static{this.\u0275dir=g({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[C]})}}return i})(),vt=(()=>{class i extends ae{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(d(S,10))}}static{this.\u0275dir=g({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[C]})}}return i})();var B="VALID",re="INVALID",F="PENDING",U="DISABLED",I=class{},le=class extends I{constructor(t,e){super(),this.value=t,this.source=e}},L=class extends I{constructor(t,e){super(),this.pristine=t,this.source=e}},W=class extends I{constructor(t,e){super(),this.touched=t,this.source=e}},w=class extends I{constructor(t,e){super(),this.status=t,this.source=e}};function _t(i){return(he(i)?i.validators:i)||null}function zt(i){return Array.isArray(i)?Ae(i):i||null}function yt(i,t){return(he(t)?t.asyncValidators:i)||null}function Zt(i){return Array.isArray(i)?Ee(i):i||null}function he(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Yt(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new q(1e3,"");if(!n[e])throw new q(1001,"")}function Xt(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new q(1002,"")})}var ce=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=R(()=>this.statusReactive()),this.statusReactive=k(void 0),this._pristine=R(()=>this.pristineReactive()),this.pristineReactive=k(!0),this._touched=R(()=>this.touchedReactive()),this.touchedReactive=k(!1),this._events=new Ne,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return V(this.statusReactive)}set status(t){V(()=>this.statusReactive.set(t))}get valid(){return this.status===B}get invalid(){return this.status===re}get pending(){return this.status==F}get disabled(){return this.status===U}get enabled(){return this.status!==U}get pristine(){return V(this.pristineReactive)}set pristine(t){V(()=>this.pristineReactive.set(t))}get dirty(){return!this.pristine}get touched(){return V(this.touchedReactive)}set touched(t){V(()=>this.touchedReactive.set(t))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(it(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(it(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(nt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(nt(t,this._rawAsyncValidators))}hasValidator(t){return oe(this._rawValidators,t)}hasAsyncValidator(t){return oe(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(_(p({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new W(!0,n))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new W(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(_(p({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new L(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new L(!0,n))}markAsPending(t={}){this.status=F;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new w(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(_(p({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=U,this.errors=null,this._forEachChild(r=>{r.disable(_(p({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new le(this.value,n)),this._events.next(new w(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(p({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=B,this._forEachChild(n=>{n.enable(_(p({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(_(p({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===F)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new le(this.value,e)),this._events.next(new w(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(_(p({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?U:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=ht(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new w(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?U:this.errors?re:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(re)?re:B}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new L(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new W(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){he(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=zt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Zt(this._rawAsyncValidators)}},ue=class extends ce{constructor(t,e,n){super(_t(e),yt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Xt(this,!0,t),Object.keys(t).forEach(n=>{Yt(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,c)=>{n=e(n,r,c)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Fe=new M("CallSetDisabledState",{providedIn:"root",factory:()=>we}),we="always";function Kt(i,t){return[...t.path,i]}function Ct(i,t,e=we){bt(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),Qt(i,t),ti(i,t),ei(i,t),Jt(i,t)}function rt(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Jt(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function bt(i,t){let e=Wt(i);t.validator!==null?i.setValidators(tt(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=$t(i);t.asyncValidator!==null?i.setAsyncValidators(tt(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();rt(t._rawValidators,r),rt(t._rawAsyncValidators,r)}function Qt(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Vt(i,t)})}function ei(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Vt(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Vt(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ti(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ii(i,t){i==null,bt(i,t)}function ni(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function ri(i){return Object.getPrototypeOf(i.constructor)===kt}function oi(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function si(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(c=>{c.constructor===de?e=c:ri(c)?n=c:r=c}),r||n||e||null}var ai={provide:S,useExisting:x(()=>Se)},H=Promise.resolve(),Se=(()=>{class i extends S{get submitted(){return V(this.submittedReactive)}constructor(e,n,r){super(),this.callSetDisabledState=r,this._submitted=R(()=>this.submittedReactive()),this.submittedReactive=k(!1),this._directives=new Set,this.ngSubmit=new P,this.form=new ue({},Ae(e),Ee(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){H.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Ct(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){H.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){H.then(()=>{let n=this._findContainer(e.path),r=new ue({});ii(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){H.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){H.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),oi(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(n){return new(n||i)(d(Me,10),d(ut,10),d(Fe,8))}}static{this.\u0275dir=g({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&j("submit",function(u){return r.onSubmit(u)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([ai]),C]})}}return i})();function ot(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function st(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var li=class extends ce{constructor(t=null,e,n){super(_t(e),yt(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),he(e)&&(e.nonNullable||e.initialValueIsDefault)&&(st(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ot(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ot(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){st(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var ci={provide:$,useExisting:x(()=>Ie)},at=Promise.resolve(),Ie=(()=>{class i extends ${constructor(e,n,r,c,u,wt){super(),this._changeDetectorRef=u,this.callSetDisabledState=wt,this.control=new li,this._registered=!1,this.name="",this.update=new P,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=si(this,c)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ni(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ct(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){at.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&be(n);at.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Kt(e,this._parent):[e]}static{this.\u0275fac=function(n){return new(n||i)(d(S,9),d(Me,10),d(ut,10),d(ct,10),d(He,8),d(Fe,8))}}static{this.\u0275dir=g({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([ci]),C,ge]})}}return i})(),Dt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=g({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var ui=(()=>{class i{constructor(){this._validator=et}ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):et,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=g({type:i,features:[ge]})}}return i})();var di={provide:Me,useExisting:x(()=>xe),multi:!0};var xe=(()=>{class i extends ui{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=be,this.createValidator=e=>Bt}enabled(e){return e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})()}static{this.\u0275dir=g({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&je("required",r._enabled?"":null)},inputs:{required:"required"},features:[T([di]),C]})}}return i})();var hi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=fe({type:i})}static{this.\u0275inj=me({})}}return i})();var Mt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Fe,useValue:e.callSetDisabledState??we}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=fe({type:i})}static{this.\u0275inj=me({imports:[hi]})}}return i})();function mi(i,t){if(i&1&&(o(0,"div",12)(1,"h3"),a(2,"Datos enviados:"),s(),o(3,"p")(4,"strong"),a(5,"Nombre:"),s(),a(6),s(),o(7,"p")(8,"strong"),a(9,"Correo:"),s(),a(10),s(),o(11,"p")(12,"strong"),a(13,"Mensaje:"),s(),a(14),s()()),i&2){let e=Re();l(6),z(" ",e.datosFormulario.nombre,""),l(4),z(" ",e.datosFormulario.correo,""),l(4),z(" ",e.datosFormulario.mensaje,"")}}var pe=class i{datosFormulario={nombre:"",correo:"",mensaje:""};mostrarDatos=!1;enviarFormulario(){this.mostrarDatos=!0,console.log("Datos del formulario:",this.datosFormulario)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["app-contactos"]],standalone:!0,features:[f],decls:20,vars:5,consts:[["formulario","ngForm"],[1,"container","mt-4"],[3,"ngSubmit"],[1,"mb-3"],["for","nombre",1,"form-label"],["type","text","id","nombre","name","nombre","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","correo",1,"form-label"],["type","email","id","correo","name","correo","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","mensaje",1,"form-label"],["id","mensaje","name","mensaje","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","mt-4",4,"ngIf"],[1,"mt-4"]],template:function(e,n){if(e&1){let r=Te();o(0,"div",1)(1,"h1"),a(2,"Contactos"),s(),o(3,"form",2,0),j("ngSubmit",function(){return N(r),O(n.enviarFormulario())}),o(5,"div",3)(6,"label",4),a(7,"Nombre"),s(),o(8,"input",5),X("ngModelChange",function(u){return N(r),Y(n.datosFormulario.nombre,u)||(n.datosFormulario.nombre=u),O(u)}),s()(),o(9,"div",3)(10,"label",6),a(11,"Correo Electr\xF3nico"),s(),o(12,"input",7),X("ngModelChange",function(u){return N(r),Y(n.datosFormulario.correo,u)||(n.datosFormulario.correo=u),O(u)}),s()(),o(13,"div",3)(14,"label",8),a(15,"Mensaje"),s(),o(16,"textarea",9),X("ngModelChange",function(u){return N(r),Y(n.datosFormulario.mensaje,u)||(n.datosFormulario.mensaje=u),O(u)}),s()(),o(17,"button",10),a(18," Enviar "),s()(),D(19,mi,15,3,"div",11),s()}if(e&2){let r=Ge(4);l(8),Z("ngModel",n.datosFormulario.nombre),l(4),Z("ngModel",n.datosFormulario.correo),l(4),Z("ngModel",n.datosFormulario.mensaje),l(),h("disabled",r.invalid),l(2),h("ngIf",n.mostrarDatos)}},dependencies:[y,We,Mt,Dt,de,gt,vt,xe,Ie,Se],styles:[".container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.btn-primary[_ngcontent-%COMP%]{background-color:brown;border-color:brown}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#8b0000;border-color:#8b0000}.mt-4[_ngcontent-%COMP%]{margin-top:20px}"]})};var At=[{path:"",redirectTo:"inicio",pathMatch:"full"},{path:"inicio",component:ie},{path:"noticias",component:ne},{path:"contactos",component:pe}];var Et={providers:[Ue({eventCoalescing:!0}),Ke(At),qe()]};var fi={providers:[ze()]},Ft=Le(Et,fi);var gi=()=>$e(te,Ft),bn=gi;export{bn as a};