/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/GridLayout'
{
	import Context=require('famous/core/Context');
	class  GridLayout
{constructor(ops?:Options);
	setOptions(options:Options):void;
	sequenceFrom(sequence:any):void;
	getSize(context:Context):any[];
}
 
	export = GridLayout; }