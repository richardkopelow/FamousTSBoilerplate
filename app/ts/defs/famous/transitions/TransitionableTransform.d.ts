/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/TransitionableTransform'
{
	import Transform=require('famous/core/Transform');
	class  TransitionableTransform
{constructor(ops?:Options);
	setTranslate(translate:any[],transition?:Object,callback?:any):TransitionableTransform;
	setScale(scale:any[],transition?:Object,callback?:any):TransitionableTransform;
	setRotate(eulerAngles:any[],transition?:Object,callback?:any):TransitionableTransform;
	setSkew(skewAngles:any[],transition?:Object,callback?:any):TransitionableTransform;
	set(transform:any[],transition?:Object,callback?:any):TransitionableTransform;
	setDefaultTransition(transition?:Object):void;
	get():Transform;
	getFinal():Transform;
	isActive():Boolean;
	halt():void;
}
 
	export = TransitionableTransform; }