/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/TweenTransition'
{
	class  TweenTransition
{constructor(ops?:Options);
	Curve():void;
	registerCurve(curveName:String,curve:any):Boolean;
	unregisterCurve(curveName:String):Boolean;
	getCurve(curveName:String):any;
	getCurves():Object;
	setOptions(options:Object):void;
	set(endValue:number|Object[],transition?:Transition,callback?:any):void;
	reset(startValue:number|Object[],startVelocity:number):void;
	getVelocity():number;
	get(timestamp:number):any;
	update(timestamp:number):void;
	isActive():Boolean;
	halt():void;
}
 
	export = TweenTransition; }