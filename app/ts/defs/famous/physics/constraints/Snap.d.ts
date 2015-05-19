/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/constraints/Snap'
{
	import Body=require('famous/physics/bodies/Body');
	class  Snap
{constructor(ops?:Options);
	undefined():void;
	getEnergy(targets:Body,source:Body):number;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
 
	export = Snap; }