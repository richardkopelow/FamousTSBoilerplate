/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Wall'
{
	import Body=require('famous/physics/bodies/Body');
	class  Wall
{constructor(ops?:Options);
	REFLECT():void;
	SILENT():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = Wall; }