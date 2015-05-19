/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/SnapTransition'
{
	class  SnapTransition
{constructor(ops?:Options);
	period():void;
	dampingRatio():void;
	velocity():void;
	reset(state:any,velocity:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(state:any,definition:Object,callback?:any):void;
}
 
	export = SnapTransition; }