/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/physics/PhysicsEngine'
{
	import Body=require('famous/physics/bodies/Body');
	import Particle=require('famous/physics/bodies/Particle')
	class  PhysicsEngine
{constructor(ops?:Options);
	undefined():void;
	constraintSteps():void;
	sleepTolerance():void;
	velocityCap():void;
	angularVelocityCap():void;
	setOptions(opts:Options):void;
	addBody(body:Body):Body;
	removeBody(body:Body):void;
	attach(agents:any[],targets:Body[],source:Body):number;
	attachTo(agentID:any,target:Body):void;
	detach(id:any):void;
	detach(id:any,target:Body):void;
	detachAll():void;
	getAgent(id:any):void;
	getParticles():Particle[];
	getBodies():any[];
	getBodies():any[];
	forEachParticle(fn:any,dt:number):void;
	forEachBody(fn:any,dt:number):void;
	forEach(fn:any,dt:number):void;
	getAgentEnergy(agentId:number):number;
	getEnergy():number;
	step():void;
	isSleeping():Boolean;
	isActive():Boolean;
	sleep():void;
	wake():void;
}
 
	export = PhysicsEngine; }