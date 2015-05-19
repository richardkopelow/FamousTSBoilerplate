/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Curve'
{
	import Body=require('famous/physics/bodies/Body');
	class  Curve
{constructor(ops?:Options);
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = Curve; }