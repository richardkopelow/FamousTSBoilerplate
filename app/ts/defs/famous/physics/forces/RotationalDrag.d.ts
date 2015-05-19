/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/RotationalDrag'
{
	import Vector=require('famous/math/Vector');
	import Body=require('famous/physics/bodies/Body');
	class  RotationalDrag
{constructor(ops?:Options);
	LINEAR(angularVelocity:Vector):Vector;
	QUADRATIC(angularVelocity:Vector):Vector;
	applyForce(targets:Body[]):void;
}
 
	export = RotationalDrag; }