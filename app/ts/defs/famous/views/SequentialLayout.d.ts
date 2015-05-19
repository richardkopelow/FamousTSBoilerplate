/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/SequentialLayout'
{
	class  SequentialLayout
{constructor(ops?:Options);
	getSize():any[];
	sequenceFrom(items:any):void;
	setOptions(options:Options):void;
	setOutputFunction(outputFunction:any,parentSpec:Object):number;
}
 
	export = SequentialLayout; }