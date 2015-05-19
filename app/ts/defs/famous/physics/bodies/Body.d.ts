/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/bodies/Body'
{
	import Vector=require('famous/math/Vector');
	import Transform=require('famous/core/Transform');
	class  Body
{constructor(ops?:Options);
	setMomentsOfInertia():void;
	updateAngularVelocity():void;
	toWorldCoordinates(localPosition:Vector):Vector;
	getEnergy():number;
	reset(p:any,v:any,q:any,L:any):void;
	setOrientation(q:any):void;
	setAngularVelocity(w:any):void;
	setAngularMomentum(L:any):void;
	applyForce(force:Vector,location:Vector):void;
	applyTorque(torque:Vector):void;
	getTransform(dt:number):Transform;
	integrateAngularMomentum(dt:number):void;
	integrateOrientation(dt:number):void;
}
 
	export = Body; }