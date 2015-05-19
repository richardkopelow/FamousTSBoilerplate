/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/RotationalSpring'
{
	import Body=require('famous/physics/bodies/Body');
	class  RotationalSpring
{constructor(ops?:Options);
	undefined():void;
	applyForce(targets:Body[]):void;
	getEnergy(targets:any):void;
}
 
	export = RotationalSpring; }