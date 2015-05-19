/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/bodies/Particle'
{
	import Vector=require('famous/math/Vector');
	import Transform=require('famous/core/Transform');
	class  Particle
{constructor(ops?:Options);
	isBody():void;
	isActive():Boolean;
	sleep():void;
	wake():void;
	setPosition(position:any):void;
	setPosition1D(x:number):void;
	getPosition():any[];
	getPosition1D():number;
	setVelocity1D(x:number):void;
	getVelocity():any[];
	setForce():any[];
	getVelocity1D():number;
	setMass(mass:number):void;
	getMass():number;
	reset(position:any,velocity:any):void;
	applyForce(force:Vector):void;
	applyImpulse(impulse:Vector):void;
	integrateVelocity(dt:number):void;
	integratePosition(dt:number):void;
	getTransform():Transform;
	modify(target:any):any;
}
 
	export = Particle; }