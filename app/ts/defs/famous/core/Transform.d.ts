/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/Transform'
{
	class  Transform
{
	static multiply4x4(a:Transform,b:Transform):Transform;
	static multiply(a:Transform,b:Transform):Transform;
	static thenMove(m:Transform,t:number[]):Transform;
	static moveThen(v:number[],m:Transform):Transform;
	static translate(x:number,y:number,z:number):Transform;
	static thenScale(m:Transform,s:number[]):Transform;
	static scale(x:number,y:number,z:number):Transform;
	static rotateX(theta:number):Transform;
	static rotateY(theta:number):Transform;
	static rotateZ(theta:number):Transform;
	static rotate(phi:number,theta:number,psi:number):Transform;
	static rotateAxis(v:number[],theta:number):Transform;
	static aboutOrigin(v:number[],m:Transform):Transform;
	static skew(phi:number,theta:number,psi:number):Transform;
	static skewX(angle:number):Transform;
	static skewY(angle:number):Transform;
	static perspective(focusZ:number):Transform;
	static getTranslate(m:Transform):number[];
	static inverse(m:Transform):Transform;
	static transpose(m:Transform):Transform;
	static interpret(M:Transform):Object;
	static average(M1:Transform,M2:Transform,t:number):Transform;
	static build(spec:any):Transform;
	static equals(a:Transform,b:Transform):Boolean;
	static notEquals(a:Transform,b:Transform):Boolean;
	static normalizeRotation(rotation:number[]):number[];
	static inFront():void;
	static behind():void;
}
 
	export = Transform; }