/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/Transitionable'
{
	class  Transitionable
{constructor(ops?:Options);
	set(endState:number|Object[],transition?:Transition,callback?:any):void;
	reset(startState:number|Object[]):void;
	delay(duration:number,callback?:any):void;
	get(timestamp:number):any;
	isActive():Boolean;
	halt():void;
}
 
	export = Transitionable; }