/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/math/Random'
{
	class  Random
{constructor(ops?:Options);
	integer(min:number,max:number,dim:number):any;
	range(min:number,max:number,dim:number):number;
	sign(prob:number):number;
	bool(prob:number):Boolean;
}
 
	export = Random; }