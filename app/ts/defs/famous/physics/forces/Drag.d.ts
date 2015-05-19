/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/Drag'
{
	import Vector=require('famous/math/Vector');
	import Body=require('famous/physics/bodies/Body');
	class  Drag
{constructor(ops?:Options);
	LINEAR(velocity:Vector):Vector;
	QUADRATIC(velocity:Vector):Vector;
	strength():void;
	forceFunction():void;
	applyForce(targets:Body[]):void;
	setOptions(options:Object):void;
}
 
	export = Drag; }