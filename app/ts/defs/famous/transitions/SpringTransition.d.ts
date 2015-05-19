/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/SpringTransition'
{
	class  SpringTransition
{constructor(ops?:Options);
	period():void;
	dampingRatio():void;
	velocity():void;
	reset(pos:number[],vel:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(endState:any,definition:Object,callback?:any):void;
}
 
	export = SpringTransition; }