/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/inputs/Accumulator'
{
	class  Accumulator
{constructor(ops?:Options);
	get():any;
	set(value:any):void;
}
 
	export = Accumulator; }