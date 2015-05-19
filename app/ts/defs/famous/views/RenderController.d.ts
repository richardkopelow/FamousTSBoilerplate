/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/RenderController'
{
	class  RenderController
{constructor(ops?:Options);
	inTransformFrom(transform:any):void;
	inOpacityFrom(opacity:any):void;
	inOriginFrom(origin:any):void;
	inAlignFrom(align:any):void;
	outTransformFrom(transform:any):void;
	outOpacityFrom(opacity:any):void;
	outOriginFrom(origin:any):void;
	outAlignFrom(align:any):void;
	show(renderable:Object,transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):number;
}
 
	export = RenderController; }