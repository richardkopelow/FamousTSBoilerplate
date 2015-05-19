/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/Repulsion'
{
	import Body=require('famous/physics/bodies/Body');
	class  Repulsion
{constructor(ops?:Options);
	LINEAR(r:number,cutoff:number):void;
	MORSE(r:number,cutoff:number):void;
	INVERSE(r:number,cutoff:number):void;
	GRAVITY(r:number,cutoff:number):void;
	strength():void;
	anchor():void;
	radii():void;
	cutoff():void;
	cap():void;
	decayFunction():void;
	applyForce(targets:Body[],source:Body):void;
}
 
	export = Repulsion; }