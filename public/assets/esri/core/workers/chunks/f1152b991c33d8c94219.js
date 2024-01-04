"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1537],{92835:(e,t,r)=>{r.d(t,{Z:()=>m});var i,o=r(43697),n=r(96674),s=r(35463),a=r(5600),l=(r(75215),r(67676),r(80442),r(71715)),p=r(52011),u=r(30556),c=r(25031);let d=i=class extends n.wq{static get allTime(){return y}static get empty(){return h}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,o=e.end?.getTime()??e.end;return t===i&&r===o}expandTo(e,t=c.By){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,s.JE)(r,e,t));let o=this.end;if(o){const r=(0,s.JE)(o,e,t);o=o.getTime()===r.getTime()?r:(0,s.Nm)(r,1,e,t)}return new i({start:r,end:o})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,o=e.start?.getTime()??-1/0,n=e.end?.getTime()??1/0;let s,a;if(o>=t&&o<=r?s=o:t>=o&&t<=n&&(s=t),r>=o&&r<=n?a=r:n>=t&&n<=r&&(a=n),null!=s&&null!=a&&!isNaN(s)&&!isNaN(a)){const e=new i;return e.start=s===-1/0?null:new Date(s),e.end=a===1/0?null:new Date(a),e}return i.empty}offset(e,t,r=c.By){if(this.isEmpty||this.isAllTime)return this.clone();const o=new i,{start:n,end:a}=this;return null!=n&&(o.start=(0,s.Nm)(n,e,t,r)),null!=a&&(o.end=(0,s.Nm)(a,e,t,r)),o}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,o._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,o._)([(0,l.r)("end")],d.prototype,"readEnd",null),(0,o._)([(0,u.c)("end")],d.prototype,"writeEnd",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,o._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,o._)([(0,l.r)("start")],d.prototype,"readStart",null),(0,o._)([(0,u.c)("start")],d.prototype,"writeStart",null),d=i=(0,o._)([(0,p.j)("esri.TimeExtent")],d);const y=new d,h=new d({start:void 0,end:void 0}),m=d},10699:(e,t,r)=>{r.d(t,{IG:()=>s,iv:()=>a});var i=r(43697),o=r(52011);let n=0;const s=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+n++})}};return t=(0,i._)([(0,o.j)("esri.core.Identifiable")],t),t},a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:n++})}};return t=(0,i._)([(0,o.j)("esri.core.NumericIdentifiable")],t),t};let l=class extends(s(class{})){};l=(0,i._)([(0,o.j)("esri.core.Identifiable")],l)},44543:(e,t,r)=>{r.d(t,{F:()=>m,M:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3},o=8,n=(1<<o)-1;function s(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){const t=[];for(let r=0,i=e.length*o;r<i;r+=o)t[r>>5]|=(e.charCodeAt(r/o)&n)<<r%32;return t}function l(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=o)t.push(String.fromCharCode(e[r>>5]>>>r%32&n));return t.join("")}function p(e,t,r,i,o,n){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(i,n)),o),r)}function u(e,t,r,i,o,n,s){return p(t&r|~t&i,e,t,o,n,s)}function c(e,t,r,i,o,n,s){return p(t&i|r&~i,e,t,o,n,s)}function d(e,t,r,i,o,n,s){return p(t^r^i,e,t,o,n,s)}function y(e,t,r,i,o,n,s){return p(r^(t|~i),e,t,o,n,s)}function h(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,o=-1732584194,n=271733878;for(let t=0;t<e.length;t+=16){const a=r,l=i,p=o,h=n;r=u(r,i,o,n,e[t],7,-680876936),n=u(n,r,i,o,e[t+1],12,-389564586),o=u(o,n,r,i,e[t+2],17,606105819),i=u(i,o,n,r,e[t+3],22,-1044525330),r=u(r,i,o,n,e[t+4],7,-176418897),n=u(n,r,i,o,e[t+5],12,1200080426),o=u(o,n,r,i,e[t+6],17,-1473231341),i=u(i,o,n,r,e[t+7],22,-45705983),r=u(r,i,o,n,e[t+8],7,1770035416),n=u(n,r,i,o,e[t+9],12,-1958414417),o=u(o,n,r,i,e[t+10],17,-42063),i=u(i,o,n,r,e[t+11],22,-1990404162),r=u(r,i,o,n,e[t+12],7,1804603682),n=u(n,r,i,o,e[t+13],12,-40341101),o=u(o,n,r,i,e[t+14],17,-1502002290),i=u(i,o,n,r,e[t+15],22,1236535329),r=c(r,i,o,n,e[t+1],5,-165796510),n=c(n,r,i,o,e[t+6],9,-1069501632),o=c(o,n,r,i,e[t+11],14,643717713),i=c(i,o,n,r,e[t],20,-373897302),r=c(r,i,o,n,e[t+5],5,-701558691),n=c(n,r,i,o,e[t+10],9,38016083),o=c(o,n,r,i,e[t+15],14,-660478335),i=c(i,o,n,r,e[t+4],20,-405537848),r=c(r,i,o,n,e[t+9],5,568446438),n=c(n,r,i,o,e[t+14],9,-1019803690),o=c(o,n,r,i,e[t+3],14,-187363961),i=c(i,o,n,r,e[t+8],20,1163531501),r=c(r,i,o,n,e[t+13],5,-1444681467),n=c(n,r,i,o,e[t+2],9,-51403784),o=c(o,n,r,i,e[t+7],14,1735328473),i=c(i,o,n,r,e[t+12],20,-1926607734),r=d(r,i,o,n,e[t+5],4,-378558),n=d(n,r,i,o,e[t+8],11,-2022574463),o=d(o,n,r,i,e[t+11],16,1839030562),i=d(i,o,n,r,e[t+14],23,-35309556),r=d(r,i,o,n,e[t+1],4,-1530992060),n=d(n,r,i,o,e[t+4],11,1272893353),o=d(o,n,r,i,e[t+7],16,-155497632),i=d(i,o,n,r,e[t+10],23,-1094730640),r=d(r,i,o,n,e[t+13],4,681279174),n=d(n,r,i,o,e[t],11,-358537222),o=d(o,n,r,i,e[t+3],16,-722521979),i=d(i,o,n,r,e[t+6],23,76029189),r=d(r,i,o,n,e[t+9],4,-640364487),n=d(n,r,i,o,e[t+12],11,-421815835),o=d(o,n,r,i,e[t+15],16,530742520),i=d(i,o,n,r,e[t+2],23,-995338651),r=y(r,i,o,n,e[t],6,-198630844),n=y(n,r,i,o,e[t+7],10,1126891415),o=y(o,n,r,i,e[t+14],15,-1416354905),i=y(i,o,n,r,e[t+5],21,-57434055),r=y(r,i,o,n,e[t+12],6,1700485571),n=y(n,r,i,o,e[t+3],10,-1894986606),o=y(o,n,r,i,e[t+10],15,-1051523),i=y(i,o,n,r,e[t+1],21,-2054922799),r=y(r,i,o,n,e[t+8],6,1873313359),n=y(n,r,i,o,e[t+15],10,-30611744),o=y(o,n,r,i,e[t+6],15,-1560198380),i=y(i,o,n,r,e[t+13],21,1309151649),r=y(r,i,o,n,e[t+4],6,-145523070),n=y(n,r,i,o,e[t+11],10,-1120210379),o=y(o,n,r,i,e[t+2],15,718787259),i=y(i,o,n,r,e[t+9],21,-343485551),r=s(r,a),i=s(i,l),o=s(o,p),n=s(n,h)}return[r,i,o,n]}function m(e,t=i.Hex){const r=t||i.Base64,n=h(a(e),e.length*o);switch(r){case i.Raw:return n;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,o=4*e.length;i<o;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(n);case i.String:return l(n);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let o=0;o<4;o++)8*r+6*o>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-o)&63))}return t.join("")}(n)}}},28576:(e,t,r)=>{r.d(t,{B:()=>y});var i=r(20102),o=r(44543),n=r(81153),s=r(17452),a=r(41123),l=r(7628),p=r(31263),u=r(5600),c=r(66094),d=r(25929);function y(e){const t=e?.origins??[void 0];return(r,i)=>{const o=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const i=(0,l.Oe)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,d.r)(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,a,l){if(!l?.resources)return"string"==typeof t?void(o[a]=(0,d.t)(t,l)):void(o[a]=t.write({},l));const u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(u,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=i.type!==String&&(!(0,n.l)(this)||l?.origin&&this.originIdOf(r)>(0,p.M9)(l.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:a,context:l,params:e};l?.portalItem&&y&&!(0,s.YP)(y)?g&&e?.contentAddressed?h(v):g?function(e){const{context:t,targetUrl:r,params:i,value:o,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),p=f(o,r,t),u=(0,c.B)(p),d=(0,s.Ml)(l.path),y=i?.compress??!1;u===d?(t.resources&&m({...e,resource:l,content:p,compress:y,updates:t.resources.toUpdate}),n[a]=r):h(e)}(v):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(v):l?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.jc)(y)||g)?h(v):o[a]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.a;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=(0,u.CJ)(r,e,i);for(const e in o)t[e]=o[e]}}}function h(e){const{targetUrl:t,params:r,value:n,context:l,dest:p,targetPropertyName:u}=e;if(!l.portalItem)return;const y=(0,d.p)(t),h=f(n,t,l);if(r?.contentAddressed&&"json"!==h.type)return void l.messages?.push(new i.Z("persistable:contentAddressingUnsupported",`Property "${u}" is trying to serializing a resource with content of type ${h.type} with content addressing. Content addressing is only supported for json resources.`,{content:h}));const g=r?.contentAddressed&&"json"===h.type?(0,o.F)(h.jsonString):y?.filename??(0,a.DO)(),v=(0,s.v_)(r?.prefix??y?.prefix,g),b=`${v}.${(0,c.B)(h)}`;if(r?.contentAddressed&&l.resources&&"json"===h.type){const e=l.resources.toKeep.find((e=>e.resource.path===b))??l.resources.toAdd.find((e=>e.resource.path===b));if(e)return void(p[u]=e.resource.itemRelativeUrl)}const _=l.portalItem.resourceFromPath(b);(0,s.jc)(t)&&l.resources&&l.resources.pendingOperations.push((0,s.gi)(t).then((e=>{_.path=`${v}.${(0,c.B)({type:"blob",blob:e})}`,p[u]=_.itemRelativeUrl})).catch((()=>{})));const w=r?.compress??!1;l.resources&&m({...e,resource:_,content:h,compress:w,updates:l.resources.toAdd}),p[u]=_.itemRelativeUrl}function m({object:e,propertyName:t,updates:r,resource:i,content:o,compress:n}){r.push({resource:i,content:o,compress:n,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function f(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},17445:(e,t,r)=>{r.d(t,{N1:()=>d,YP:()=>l,Z_:()=>m,gx:()=>p,nn:()=>f,on:()=>c,tX:()=>g}),r(66643),r(46791);var i=r(91460),o=r(50758),n=r(70586),s=r(95330),a=r(26258);function l(e,t,r={}){return u(e,t,r,y)}function p(e,t,r={}){return u(e,t,r,h)}function u(e,t,r={},i){let o=null;const s=r.once?(e,r)=>{i(e)&&((0,n.hw)(o),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(o=(0,a.aQ)(e,s,r.sync,r.equals),r.initial){const t=e();s(t,t)}return o}function c(e,t,r,s={}){let a=null,p=null,u=null;function c(){a&&p&&(p.remove(),s.onListenerRemove?.(a),a=null,p=null)}function d(e){s.once&&s.once&&(0,n.hw)(u),r(e)}const y=l(e,((e,r)=>{c(),(0,i.vT)(e)&&(a=e,p=(0,i.on)(e,t,d),s.onListenerAdd?.(e))}),{sync:s.sync,initial:!0});return u=(0,o.kB)((()=>{y.remove(),c()})),u}function d(e,t){return function(e,t,r){if((0,s.Hc)(r))return Promise.reject((0,s.zE)());const i=e();if(t?.(i))return Promise.resolve(i);let a=null;function l(){a=(0,n.hw)(a)}return new Promise(((i,n)=>{a=(0,o.AL)([(0,s.fu)(r,(()=>{l(),n((0,s.zE)())})),u(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??y)])}))}(e,h,t)}function y(e){return!0}function h(e){return!!e}r(87538);const m={sync:!0},f={initial:!0},g={sync:!0,initial:!0}},41123:(e,t,r)=>{r.d(t,{DO:()=>o,dG:()=>s,zS:()=>n});const i="randomUUID"in crypto;function o(){if(i)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function n(){return`{${o().toUpperCase()}}`}function s(){return`{${o()}}`}},79235:(e,t,r)=>{r.d(t,{Z:()=>b});var i,o=r(43697),n=r(67676),s=r(35454),a=r(96674),l=r(67900),p=r(20941),u=r(5600),c=(r(75215),r(80442),r(71715)),d=r(52011),y=r(30556);const h=(0,s.w)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),m=h.jsonValues.slice();(0,n.e$)(m,"orthometric");const f=(0,s.w)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let g=i=class extends a.wq{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r?.messages&&r.messages.push(function(e,t){return new p.Z("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return f.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.$C)(e)||f.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l.cM)(t);return new i({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new i;return t.read(e,{origin:"web-scene"}),t}};function v(e,t){return new p.Z("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,o._)([(0,u.Cb)({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m,default:"ellipsoidal"}}}})],g.prototype,"heightModel",void 0),(0,o._)([(0,y.c)("web-scene","heightModel")],g.prototype,"writeHeightModel",null),(0,o._)([(0,c.r)(["web-scene","service"],"heightModel")],g.prototype,"readHeightModel",null),(0,o._)([(0,u.Cb)({type:f.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:f.jsonValues,write:f.write}}}})],g.prototype,"heightUnit",void 0),(0,o._)([(0,c.r)("web-scene","heightUnit")],g.prototype,"readHeightUnit",null),(0,o._)([(0,c.r)("service","heightUnit")],g.prototype,"readHeightUnitService",null),(0,o._)([(0,u.Cb)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],g.prototype,"vertCRS",void 0),(0,o._)([(0,c.r)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],g.prototype,"readVertCRS",null),g=i=(0,o._)([(0,d.j)("esri.geometry.HeightModelInfo")],g);const b=g},9310:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i,o=r(43697),n=r(20102),s=r(92604),a=r(16453),l=r(95330),p=r(17445),u=r(5600),c=(r(75215),r(67676),r(80442),r(71715)),d=r(52011),y=r(28576),h=r(87085),m=r(54295),f=r(17287),g=r(38009),v=r(16859),b=r(72965),_=r(37253),w=r(21506),S=r(51161),C=r(3172),I=r(46791),x=r(96674),U=r(17452),j=(r(66577),r(22974)),T=r(20941),P=r(30556),R=r(73615),N=r(38913);let M=i=class extends x.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer?.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.canProjectWithoutEngine)(e.spatialReference,i.layer.spatialReference))return void(i?.messages&&i.messages.push(new T.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new N.Z;(0,R.projectPolygon)(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new i({geometry:(0,j.d9)(this.geometry),type:this.type})}};(0,o._)([(0,u.Cb)({type:N.Z}),(0,y.B)()],M.prototype,"geometry",void 0),(0,o._)([(0,P.c)(["web-scene","portal-item"],"geometry")],M.prototype,"writeGeometry",null),(0,o._)([(0,u.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.B)()],M.prototype,"type",void 0),M=i=(0,o._)([(0,d.j)("esri.layers.support.SceneModification")],M);const E=M;var O;let A=O=class extends((0,x.eC)(I.Z.ofType(E))){constructor(e){super(e),this.url=null}clone(){return new O({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new O;for(const i of e)r.add(E.fromJSON(i,t));return r}static async fromUrl(e,t,r){const i={url:(0,U.mN)(e),origin:"service"},o=await(0,C.Z)(e,{responseType:"json",signal:r?.signal}),n=t.toJSON(),s=[];for(const e of o.data)s.push(E.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},i));return new O({url:e,items:s})}};(0,o._)([(0,u.Cb)({type:String})],A.prototype,"url",void 0),A=O=(0,o._)([(0,d.j)("esri.layers.support.SceneModifications")],A);const D=A;var Z=r(36405),L=r(25929);let k=class extends((0,_.Vt)((0,f.Y)((0,g.q)((0,v.I)((0,b.M)((0,a.R)((0,m.V)(h.Z)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,L.f)(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.r9)(e)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await D.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,Z.LR)(s.Z.getLogger(this),(0,Z.Uy)(t,"absolute-height",e)),(0,Z.LR)(s.Z.getLogger(this),(0,Z.kf)(t,e))}};(0,o._)([(0,u.Cb)({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),(0,o._)([(0,u.Cb)({type:S.U4,readOnly:!0})],k.prototype,"nodePages",void 0),(0,o._)([(0,u.Cb)({type:[S.QI],readOnly:!0})],k.prototype,"materialDefinitions",void 0),(0,o._)([(0,u.Cb)({type:[S.Yh],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,u.Cb)({type:[S.H3],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,u.Cb)({type:D}),(0,y.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),(0,o._)([(0,c.r)(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),(0,o._)([(0,u.Cb)(w.PV)],k.prototype,"elevationInfo",null),(0,o._)([(0,u.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,o._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],k);const F=k},87085:(e,t,r)=>{r.d(t,{Z:()=>b});var i=r(43697),o=(r(66577),r(3172)),n=r(20102),s=r(32448),a=r(10699),l=r(83379),p=r(92604),u=r(95330),c=r(17452),d=r(5600),y=(r(75215),r(67676),r(80442),r(52011)),h=r(68773),m=r(6570),f=r(82971);let g=0,v=class extends(s.Z.EventedMixin((0,a.IG)(l.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.Z(-180,-90,180,90,f.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(3529).then(r.bind(r,63529))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(8008).then(r.bind(r,28008));try{return await i(t)}catch(e){const r=t&&t.portalItem,i=r?.id||"unset",o=r&&r.portal&&r.portal.url||h.default.portalUrl;throw p.Z.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.D_)(e)||p.Z.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,c.mN)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,o.Z)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.Cb)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.Cb)({type:m.Z})],v.prototype,"fullExtent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,i._)([(0,d.Cb)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,i._)([(0,d.Cb)({clonable:!1})],v.prototype,"parent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,i._)([(0,d.Cb)({type:f.Z})],v.prototype,"spatialReference",void 0),(0,i._)([(0,d.Cb)({type:String})],v.prototype,"title",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,i._)([(0,d.Cb)()],v.prototype,"url",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,i._)([(0,y.j)("esri.layers.Layer")],v);const b=v},16859:(e,t,r)=>{r.d(t,{I:()=>S});var i=r(43697),o=r(68773),n=r(40330),s=r(3172),a=r(66643),l=r(20102),p=r(92604),u=r(70586),c=r(95330),d=r(17452),y=r(5600),h=(r(75215),r(67676),r(80442),r(71715)),m=r(52011),f=r(30556),g=r(84230),v=r(48522),b=r(15235),_=r(86082),w=r(14661);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.SC)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new b.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await r.e(8062).then(r.bind(r,18062));return(0,c.k_)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,c.D_)(e)||p.Z.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async setUserPrivileges(e,t){if(!o.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:o}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",o)}catch(e){(0,c.r9)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,w.Ss)(r);let o,s;if(i)o=r.portal.url;else try{o=await(0,g.oP)(this.url,t)}catch(e){(0,c.r9)(e)}if(!o||!(0,d.Zo)(o,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;s=await(n.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,c.r9)(e)}if(!s)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new b.default({id:e,portal:{url:o}}),await r.load(t)),r.portal.user)return(0,w.Ss)(r)}catch(e){(0,c.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,c.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=C.credential===t?C.user:await this._fetchEditingUser(e);return C.credential=t,C.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,o=v.Z.getDefault();if(o&&o.loaded&&(0,d.Fv)(o.restUrl)===(0,d.Fv)(i))return o.user;const l=`${i}/community/self`,p=null!=e?e.signal:null,u=await(0,a.q6)((0,s.Z)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_.Z.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.Z.getDefault());return r&&i&&!(0,d.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.Cb)({type:b.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,y.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,y.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},C={credential:null,user:null}},72965:(e,t,r)=>{r.d(t,{M:()=>s});var i=r(43697),o=r(5600),n=(r(75215),r(67676),r(80442),r(52011));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},51161:(e,t,r)=>{r.d(t,{H3:()=>g,QI:()=>c,U4:()=>l,Yh:()=>y});var i=r(43697),o=r(96674),n=r(5600),s=(r(75215),r(67676),r(80442),r(36030)),a=r(52011);let l=class extends o.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,n.Cb)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,n.Cb)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,n.Cb)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends o.wq{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,n.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,i._)([(0,n.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],p);let u=class extends o.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,n.Cb)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,i._)([(0,n.Cb)({type:p})],u.prototype,"baseColorTexture",void 0),(0,i._)([(0,n.Cb)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,n.Cb)({type:Number})],u.prototype,"metallicFactor",void 0),(0,i._)([(0,n.Cb)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let c=class extends o.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,s.J)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,i._)([(0,n.Cb)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,i._)([(0,n.Cb)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,i._)([(0,s.J)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,i._)([(0,n.Cb)({type:p})],c.prototype,"normalTexture",void 0),(0,i._)([(0,n.Cb)({type:p})],c.prototype,"occlusionTexture",void 0),(0,i._)([(0,n.Cb)({type:p})],c.prototype,"emissiveTexture",void 0),(0,i._)([(0,n.Cb)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,i._)([(0,n.Cb)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends o.wq{};(0,i._)([(0,n.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,i._)([(0,s.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,i._)([(0,a.j)("esri.layer.support.I3STextureFormat")],d);let y=class extends o.wq{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,n.Cb)({type:[d]})],y.prototype,"formats",void 0),(0,i._)([(0,n.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,i._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends o.wq{};(0,i._)([(0,s.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,i._)([(0,n.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],h);let m=class extends o.wq{};(0,i._)([(0,s.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,i._)([(0,n.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends o.wq{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,n.Cb)({type:Number})],f.prototype,"offset",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"position",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"normal",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"uv0",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"color",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"uvRegion",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"featureId",void 0),(0,i._)([(0,n.Cb)({type:h})],f.prototype,"faceRange",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],f);let g=class extends o.wq{};(0,i._)([(0,s.J)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,i._)([(0,n.Cb)()],g.prototype,"geometryBuffers",void 0),g=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],g)},66094:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(17452);function o(e){return n[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,i.Ml)(e);return l[t]||s}(e.url)}(e)]||a}const n={},s="text/plain",a=n[s],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in l)n[l[e]]=e},36405:(e,t,r)=>{function i(e,t){return t?.mode?t.mode:function(e){return e?p:u}(e).mode}function o(e,t){return i(null!=e&&e.hasZ,t)}function n(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function s(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function l(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{LR:()=>l,Uy:()=>n,VW:()=>o,Wb:()=>s,kf:()=>a}),r(12541);const p={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}}}]);