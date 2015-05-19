/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Collision'
{
	import Body=require('famous/physics/bodies/Body');
	class  Collision
{constructor(ops?:Options);
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = Collision; }