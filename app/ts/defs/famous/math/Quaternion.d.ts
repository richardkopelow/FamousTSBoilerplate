/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/math/Quaternion'
{
	import Transform=require('famous/core/Transform');
	class  Quaternion
{constructor(ops?:Options);
	add(q:Quaternion):Quaternion;
	scalarDivide(s:number):Quaternion;
	put(q:Quaternion):Quaternion;
	clone():Quaternion;
	clear():Quaternion;
	isEqual(q:Quaternion):Boolean;
	dot(q:Quaternion):number;
	normSquared():number;
	norm():number;
	isZero():Boolean;
	getTransform():Transform;
	getMatrix():Transform;
	slerp(q:Quaternion,t:number):Transform;
}
 
	export = Quaternion; }