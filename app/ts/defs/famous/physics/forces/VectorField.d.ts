/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/VectorField'
{
	import Vector=require('famous/math/Vector');
	class  VectorField
{constructor(ops?:Options);
	CONSTANT(v:Vector,options:Object):number;
	LINEAR(v:Vector):Vector;
	RADIAL(v:Vector):Vector;
	POINT_ATTRACTOR(v:Vector,options:Object):Vector;
	strength():void;
	field():void;
	setOptions(options:Object):void;
	applyForce(targets:any[]):void;
}
 
	export = VectorField; }