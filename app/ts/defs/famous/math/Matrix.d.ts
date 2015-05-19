/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/math/Matrix'
{
	import Vector=require('famous/math/Vector');
	class  Matrix
{constructor(ops?:Options);
	get():any[];
	set(values:any[]):void;
	vectorMultiply(v:Vector):Vector;
	multiply(M2:Matrix):Matrix;
	transpose():Matrix;
	clone():Matrix;
}
 
	export = Matrix; }