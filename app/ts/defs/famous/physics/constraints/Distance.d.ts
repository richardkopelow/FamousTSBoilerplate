/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Distance'
{
	import Body=require('famous/physics/bodies/Body');
	class  Distance
{constructor(ops?:Options);
	undefined():void;
	setOptions(anchor:any[]):void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = Distance; }