"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1423],{23670:(e,t,i)=>{i.d(t,{G:()=>r});var s=i(20102);let r=class{constructor(e,t,i=""){this.major=e,this.minor=t,this._context=i}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",i=this._context&&this._context+" ";throw new s.Z(t+"unsupported-version",`Required major ${i}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new r(this.major,this.minor,this._context)}static parse(e,t=""){const[i,o]=e.split("."),n=/^\s*\d+\s*$/;if(!i?.match||!n.test(i))throw new s.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o?.match||!n.test(o))throw new s.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const l=parseInt(i,10),a=parseInt(o,10);return new r(l,a,t)}}},12501:(e,t,i)=>{i.d(t,{Z:()=>h});var s,r=i(43697),o=i(22974),n=i(5600),l=(i(75215),i(52011)),a=i(30556),u=i(69165),p=i(5499),d=i(41733),c=i(84475);let y=s=class extends((0,d.W)(p.Z)){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new c.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,i,s){s?.origin||super.writeVisualVariables(e,t,i,s)}clone(){return new s({config:(0,o.d9)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,o.d9)(this.fieldMap),url:(0,o.d9)(this.url),visualVariables:(0,o.d9)(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await(0,u.io)(e,t,this.scaleExpression);for(const i in this.fieldMap){const s=this.fieldMap[i];t.has(s)&&e.add(s)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,r._)([(0,n.Cb)({type:c.DictionaryLoader})],y.prototype,"_loader",null),(0,r._)([(0,n.Cb)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],y.prototype,"config",void 0),(0,r._)([(0,n.Cb)({type:Object,json:{write:!0}})],y.prototype,"fieldMap",void 0),(0,r._)([(0,n.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],y.prototype,"scaleExpression",void 0),(0,r._)([(0,a.c)("scaleExpression")],y.prototype,"writeData",null),(0,r._)([(0,n.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],y.prototype,"scaleExpressionTitle",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"url",void 0),(0,r._)([(0,a.c)("visualVariables")],y.prototype,"writeVisualVariables",null),y=s=(0,r._)([(0,l.j)("esri.renderers.DictionaryRenderer")],y);const h=y},28756:(e,t,i)=>{i.d(t,{Z:()=>v});var s,r=i(43697),o=i(22303),n=i(22974),l=i(5600),a=(i(75215),i(36030)),u=i(52011),p=i(69165),d=i(5499),c=i(41733),y=i(79887),h=i(96674);i(67676),i(80442);let b=s=class extends h.wq{constructor(){super(...arguments),this.unit=null}clone(){return new s({unit:this.unit})}};(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],b.prototype,"unit",void 0),b=s=(0,r._)([(0,u.j)("esri.renderers.support.DotDensityLegendOptions")],b);const m=b;var g,f=i(20256),w=i(4095);let _=g=class extends((0,c.W)(d.Z)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new o.Z([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new w.Z,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new f.Z({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce(((e,t)=>e+t.getAttributeHash()),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new g({attributes:(0,n.d9)(this.attributes),backgroundColor:(0,n.d9)(this.backgroundColor),dotBlendingEnabled:(0,n.d9)(this.dotBlendingEnabled),dotShape:(0,n.d9)(this.dotShape),dotSize:(0,n.d9)(this.dotSize),dotValue:(0,n.d9)(this.dotValue),legendOptions:(0,n.d9)(this.legendOptions),outline:(0,n.d9)(this.outline),referenceScale:(0,n.d9)(this.referenceScale),visualVariables:(0,n.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){const e=this.attributes?.map((e=>e.field||e.valueExpression||""));return`${e}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const i of this.attributes??[])i.valueExpression&&await(0,p.io)(e,t,i.valueExpression),i.field&&e.add(i.field)}};(0,r._)([(0,l.Cb)({type:[y.Z],json:{write:!0}})],_.prototype,"attributes",void 0),(0,r._)([(0,l.Cb)({type:o.Z,json:{write:!0}})],_.prototype,"backgroundColor",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],_.prototype,"dotBlendingEnabled",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!1}})],_.prototype,"dotShape",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],_.prototype,"dotSize",void 0),(0,r._)([(0,l.Cb)({type:m,json:{write:!0}})],_.prototype,"legendOptions",void 0),(0,r._)([(0,l.Cb)({type:w.Z,json:{default:null,write:!0}})],_.prototype,"outline",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],_.prototype,"dotValue",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],_.prototype,"referenceScale",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],_.prototype,"seed",void 0),(0,r._)([(0,a.J)({dotDensity:"dot-density"})],_.prototype,"type",void 0),_=g=(0,r._)([(0,u.j)("esri.renderers.DotDensityRenderer")],_);const v=_},92271:(e,t,i)=>{i.d(t,{Z:()=>R});var s,r=i(43697),o=i(22303),n=(i(9790),i(60235)),l=i(22974),a=i(92604),u=i(1654),p=i(62357),d=i(5600),c=i(75215),y=i(1153),h=i(36030),b=i(52011),m=i(69165),g=i(5499),f=i(69237),w=i(96674);i(67676),i(80442);let _=s=class extends w.wq{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new s({color:this.color,ratio:this.ratio})}};(0,r._)([(0,d.Cb)({type:o.Z,json:{type:[c.z8],default:null,write:!0}})],_.prototype,"color",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{write:!0}})],_.prototype,"ratio",void 0),_=s=(0,r._)([(0,b.j)("esri.renderers.support.HeatmapColorStop")],_);const v=_;var x=i(2368);let S=class extends((0,x.J)(w.wq)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,r._)([(0,d.Cb)({type:String,json:{write:!0}})],S.prototype,"minLabel",void 0),(0,r._)([(0,d.Cb)({type:String,json:{write:!0}})],S.prototype,"maxLabel",void 0),(0,r._)([(0,d.Cb)({type:String,json:{write:!0}})],S.prototype,"title",void 0),S=(0,r._)([(0,b.j)("esri.renderers.support.HeatmapLegendOptions")],S);var C,j=i(73572),Z=i(77987);const I="esri.renderers.HeatmapRenderer",P=a.Z.getLogger(I);function D(e){if(null!=e){const{maxDensity:t,minDensity:i,radius:s}=e;if(null!=t||null!=i||null!=s){const{blurRadius:t,maxPixelIntensity:i,minPixelIntensity:s,...r}=e;return r}}return e}let E=C=class extends g.Z{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new v({ratio:0,color:new o.Z("rgba(255, 140, 0, 0)")}),new v({ratio:.75,color:new o.Z("rgba(255, 140, 0, 1)")}),new v({ratio:.9,color:new o.Z("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return D(e)}get blurRadius(){return(0,j.AJ)(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,j.k0)(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(j.ul**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||"user"===(0,y.vw)(this).getDefaultOrigin()&&(this._warnedProps[e]=!0,(0,u.Os)((()=>{(0,n.Mr)(P,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})})))}read(e,t){e=D(e),super.read(e,t)}getSymbol(){return new Z.Z}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&(0,m.AB)(e,t,i),s&&"string"==typeof s&&await(0,m.io)(e,t,s)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new C({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,l.d9)(this.colorStops),field:this.field,legendOptions:(0,l.d9)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,r._)([(0,d.Cb)({type:f.Z,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],E.prototype,"authoringInfo",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],E.prototype,"blurRadius",null),(0,r._)([(0,d.Cb)({type:[v],json:{write:!0}})],E.prototype,"colorStops",void 0),(0,r._)([(0,d.Cb)({type:String,json:{write:!0}})],E.prototype,"field",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:(e,t,i)=>({enabled:null==i})},origins:{"web-scene":{write:!1}}}})],E.prototype,"fieldOffset",void 0),(0,r._)([(0,d.Cb)({type:S,json:{write:!0}})],E.prototype,"legendOptions",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{write:!0}})],E.prototype,"maxDensity",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],E.prototype,"maxPixelIntensity",null),(0,r._)([(0,d.Cb)({type:Number,json:{write:!0}})],E.prototype,"minDensity",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],E.prototype,"minPixelIntensity",null),(0,r._)([(0,d.Cb)({type:Number,cast:p.t_,json:{write:!0}})],E.prototype,"radius",void 0),(0,r._)([(0,d.Cb)({type:Number,range:{min:0},json:{default:0,write:!0}})],E.prototype,"referenceScale",void 0),(0,r._)([(0,h.J)({heatmap:"heatmap"})],E.prototype,"type",void 0),(0,r._)([(0,d.Cb)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],E.prototype,"valueExpression",void 0),(0,r._)([(0,d.Cb)({type:String})],E.prototype,"valueExpressionTitle",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],E.prototype,"_pixelIntensityToDensity",null),E=C=(0,r._)([(0,b.j)(I)],E);const R=E},72529:(e,t,i)=>{i.d(t,{Z:()=>x});var s=i(43697),r=i(22303),o=(i(9790),i(67676)),n=i(2368),l=i(62357),a=i(5600),u=(i(75215),i(80442),i(36030)),p=i(52011),d=i(69165),c=i(5499),y=i(41733),h=i(79887),b=i(96674);let m=class extends((0,n.J)(b.wq)){constructor(){super(...arguments),this.color=new r.Z([0,0,0,0]),this.label=null,this.threshold=0}};(0,s._)([(0,a.Cb)({type:r.Z,json:{write:!0}})],m.prototype,"color",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,s._)([(0,a.Cb)({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"threshold",void 0),m=(0,s._)([(0,p.j)("esri.renderers.support.OthersCategory")],m);let g=class extends((0,n.J)(b.wq)){constructor(){super(...arguments),this.title=null}};(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],g.prototype,"title",void 0),g=(0,s._)([(0,p.j)("esri.renderers.support.PieChartLegendOptions")],g);var f=i(77987),w=i(20256),_=i(4095);let v=class extends((0,y.W)((0,n.J)(c.Z))){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new r.Z([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new m,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){return new f.Z({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(o.pC)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const i of this.attributes)i.valueExpression&&await(0,d.io)(e,t,i.valueExpression),i.field&&e.add(i.field)}};(0,s._)([(0,a.Cb)({type:[h.Z],json:{write:!0}})],v.prototype,"attributes",void 0),(0,s._)([(0,a.Cb)({type:w.Z,json:{default:null,write:!0}})],v.prototype,"backgroundFillSymbol",void 0),(0,s._)([(0,a.Cb)({type:r.Z,json:{write:!0}})],v.prototype,"defaultColor",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],v.prototype,"defaultLabel",void 0),(0,s._)([(0,a.Cb)({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"holePercentage",void 0),(0,s._)([(0,a.Cb)({type:m,json:{write:!0}})],v.prototype,"othersCategory",void 0),(0,s._)([(0,a.Cb)({type:g,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,s._)([(0,a.Cb)({type:_.Z,json:{default:null,write:!0}})],v.prototype,"outline",void 0),(0,s._)([(0,a.Cb)({type:Number,cast:l.t_,json:{write:!0}})],v.prototype,"size",void 0),(0,s._)([(0,u.J)({pieChart:"pie-chart"})],v.prototype,"type",void 0),v=(0,s._)([(0,p.j)("esri.renderers.PieChartRenderer")],v);const x=v},84382:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(43697),o=i(22974),n=i(5600),l=(i(75215),i(36030)),a=i(52011),u=i(5499),p=i(41733),d=i(9833);let c=s=class extends((0,p.W)(u.Z)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map((i=>i.collectRequiredFields(e,t))))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new s({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,o.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,n.Cb)(d.EW)],c.prototype,"symbol",void 0),(0,r._)([(0,l.J)({simple:"simple"})],c.prototype,"type",void 0),c=s=(0,r._)([(0,a.j)("esri.renderers.SimpleRenderer")],c);const y=c},79887:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(43697),o=i(22303),n=i(96674),l=i(92604),a=i(5600),u=i(90578),p=(i(67676),i(80442),i(52011)),d=i(75215);let c=s=class extends n.wq{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(l.Z.getLogger(this).error(".field: field must be a string value"),null):(0,d.Zs)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new s({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,r._)([(0,a.Cb)({type:o.Z,json:{type:[Number],write:!0}})],c.prototype,"color",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,r._)([(0,u.p)("field")],c.prototype,"castField",null),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpressionTitle",void 0),c=s=(0,r._)([(0,p.j)("esri.renderers.support.AttributeColorInfo")],c);const y=c},84475:(e,t,i)=>{i.r(t),i.d(t,{DictionaryLoader:()=>m});var s=i(22303),r=i(3172),o=i(20102),n=(i(80442),i(92604)),l=i(13867),a=i(95330),u=i(19153),p=i(23670),d=i(99514),c=i(59266),y=i(17386);const h="esri.renderers.support.DictionaryLoader",b={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class m{constructor(e,t,i){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new l.z(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=i}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,t){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{i=await this._dictionaryPromise}catch(e){if((0,a.D_)(e))return this._dictionaryPromise=null,null}const r=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),o={};if(this.fieldMap)for(const t of this._symbolFields){const i=this._getFieldName(this.fieldMap[t]);if(i){const s=e.attributes[i];o[t]=r?s:null!=s?""+e.attributes[i]:""}else o[t]=""}let n=null;try{n=i?.(o,t)}catch(e){return null}if(!n||"string"!=typeof n)return null;const l=(0,u.hP)(n).toString(),p=this._symbolCache.get(l);if(p)return p.catch((()=>{this._symbolCache.pop(l)})),p;const d=n.split(";"),c=[],y=[];for(const e of d)if(e)if(e.includes("po:")){const t=e.substr(3).split("|");if(3===t.length){const e=t[0],i=t[1];let r=t[2];if("DashTemplate"===i)r=r.split(" ").map((e=>Number(e)));else if("Color"===i){const e=new s.Z(r).toRgba();r=[e[0],e[1],e[2],255*e[3]]}else r=Number(r);y.push({primitiveName:e,propertyName:i,value:r})}}else if(e.includes("|")){for(const t of e.split("|"))if(this._itemNames.has(t)){c.push(t);break}}else this._itemNames.has(e)&&c.push(e);const h=null==e.geometry||!e.geometry.hasZ&&"point"===e.geometry.type,b=this._cimPartsToCIMSymbol(c,y,h,t);return this._symbolCache.put(l,b,1),b}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void n.Z.getLogger(h).error("no valid URL!");const t=(0,r.Z)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:i}]=await Promise.all([t,(0,c.LC)()]);if(!i)throw this._dictionaryPromise=null,new o.Z("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:s,dictionary_version:l,expression:a,itemsNames:u}=i,y=a;let b=!1;l&&(this._dictionaryVersion=p.G.parse(l),b=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(u),this._symbolFields=s.symbol;const m={};if(this.config){const e=this.config;for(const t in e)m[t]=e[t]}if(s.configuration)for(const e of s.configuration)m.hasOwnProperty(e.name)||(m[e.name]=e.value);const g=[];if(e?.fields&&this.fieldMap)for(const t of this._symbolFields){const i=this.fieldMap[t],s=e.fields.filter((e=>e.name.toLowerCase()===i?.toLowerCase()));s.length>0&&g.push({...s[0],type:b?s[0].type:"esriFieldTypeString"})}g.length>0&&(this._fieldIndex=new d.Z(g));const f=(0,c.pp)(y,null!=e?e.spatialReference:null,g,m).then((e=>{const t={scale:0};return(i,s)=>{if(null==e)return null;const r=e.repurposeFeature({geometry:null,attributes:i});return t.scale=null!=s?s.scale??void 0:void 0,e.evaluate({$feature:r,$view:t},e.services)}})).catch((e=>(n.Z.getLogger(h).error("Creating dictinoary expression failed:",e),null)));return this._dictionaryPromise=f,f}async _cimPartsToCIMSymbol(e,t,i,s){const r=new Array(e.length);for(let t=0;t<e.length;t++)r[t]=this._getSymbolPart(e[t],s);const o=await Promise.all(r),n=this.fieldMap;if(n)for(const e of o)g(e,n);return new y.Z({data:this._combineSymbolParts(o,t,i)})}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const i=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),s=(0,r.Z)(i,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,s);try{return(await s).data}catch(t){throw this._ongoingRequests.delete(e),t}}_combineSymbolParts(e,t,i){if(!e||0===e.length)return null;const s={...e[0]};if(e.length>1){s.symbolLayers=[];for(const t of e){const e=t;s.symbolLayers.unshift(...e.symbolLayers)}}return i&&(s.callout=b),{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}}_getFieldName(e){if(null!==this._fieldIndex){const t=this._fieldIndex.get(e);return t?t.name:e}return e}}function g(e,t){if(!e)return;const i=e.symbolLayers;if(!i)return;let s=i.length;for(;s--;){const e=i[s];e&&!1!==e.enable&&"CIMVectorMarker"===e.type&&f(e,t)}}function f(e,t){const i=e.markerGraphics;if(i)for(const e of i){if(!e)continue;const i=e.symbol;if(i)switch(i.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":g(i,t);break;case"CIMTextSymbol":i.fieldMap=t}}}},91423:(e,t,i)=>{i.d(t,{a:()=>a,i:()=>n});var s=i(20941),r=i(63213),o=i(32400);function n(e,t){return a(e,null,t)}const l=(0,r.d)({types:o.A});function a(e,t,i){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(i?.messages&&i.messages.push(new s.Z("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:i})),null):l(e,t,i):null}},32400:(e,t,i)=>{i.d(t,{A:()=>c,o:()=>y});var s=i(92604),r=i(16050),o=i(12501),n=i(28756),l=i(92271),a=i(72529),u=i(5499),p=i(84382),d=i(81571);const c={key:"type",base:u.Z,typeMap:{heatmap:l.Z,simple:p.Z,"unique-value":d.Z,"class-breaks":r.Z,"dot-density":n.Z,dictionary:o.Z,"pie-chart":a.Z},errorContext:"renderer"},y={key:"type",base:u.Z,typeMap:{simple:p.Z,"unique-value":d.Z,"class-breaks":r.Z,heatmap:l.Z},errorContext:"renderer",validate:function(e){switch(e.type){case"simple":return function(e){if(e.symbol)return e;s.Z.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}(e);case"unique-value":return function(e){const t=e.uniqueValueInfos,i=t?.filter((({symbol:e,label:t},i)=>(e||s.Z.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${i}] ${t}) without a symbol from web scene.`),!!e)));return i?.length!==t?.length&&(e.uniqueValueInfos=i),e}(e);case"class-breaks":return function(e){const t=e.classBreakInfos,i=t?.filter((({symbol:e,label:t},i)=>(e||s.Z.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${i}] ${t}) without a symbol from web scene.`),!!e)));return i?.length!==t?.length&&(e.classBreakInfos=i),e}(e);case"heatmap":return e}}}}}]);