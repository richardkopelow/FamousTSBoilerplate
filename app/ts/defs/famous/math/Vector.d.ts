/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/math/Vector'
{
	class  Vector
{constructor(ops?:Options);
	add(v:Vector):Vector;
	sub(v:Vector):Vector;
	mult(r:number):Vector;
	div(r:number):Vector;
	cross(v:Vector):Vector;
	equals(v:Vector):Boolean;
	rotateX(theta:number):Vector;
	rotateY(theta:number):Vector;
	rotateZ(theta:number):Vector;
	dot(v:Vector):number;
	normSquared():number;
	norm():number;
	normalize(length:number):Vector;
	clone():Vector;
	isZero():Boolean;
	set(v:Object):Vector;
	put(v:Vector):Vector;
	clear():void;
	cap():Vector;
	project(n:Vector):Vector;
	reflectAcross(n:Vector):Vector;
	get():Array<number>;
}
 
	export = Vector; }