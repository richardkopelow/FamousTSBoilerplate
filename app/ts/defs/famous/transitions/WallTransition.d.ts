/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/WallTransition'
{
	class  WallTransition
{constructor(ops?:Options);
	period():void;
	dampingRatio():void;
	velocity():void;
	restitution():void;
	reset(state:any,velocity:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(state:any,definition:Object,callback?:any):void;
}
 
	export = WallTransition; }