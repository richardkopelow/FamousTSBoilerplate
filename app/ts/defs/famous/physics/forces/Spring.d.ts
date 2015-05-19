/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/Spring'
{
	import Body=require('famous/physics/bodies/Body');
	class  Spring
{constructor(ops?:Options);
	undefined():void;
	FENE(dist:number,rMax:number):number;
	FENE(dist:number):number;
	period():void;
	dampingRatio():void;
	length():void;
	length():void;
	anchor():void;
	forceFunction():void;
	setOptions(options:Object):void;
	applyForce(targets:Body[]):void;
	getEnergy(targets:any):number;
}
 
	export = Spring; }