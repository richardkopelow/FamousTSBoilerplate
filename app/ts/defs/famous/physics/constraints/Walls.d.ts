/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Walls'
{
	import Body=require('famous/physics/bodies/Body');
	class  Walls
{constructor(ops?:Options);
	applyConstraint(targets:Body[],source:Body,dt:number):void;
	applyConstraint(fn:any):void;
	applyConstraint(angle:any):void;
	applyConstraint(angle:any):void;
	applyConstraint(angle:any):void;
	undefined():void;
}
 
	export = Walls; }