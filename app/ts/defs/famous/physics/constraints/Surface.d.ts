/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Surface'
{
	import Body=require('famous/physics/bodies/Body');
	class  SurfaceConstraint
{constructor(ops?:Options);
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = SurfaceConstraint; }