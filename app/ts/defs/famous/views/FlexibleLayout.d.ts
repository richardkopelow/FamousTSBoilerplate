/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/FlexibleLayout'
{
	import Context=require('famous/core/Context');
	class  FlexibleLayout
{constructor(ops?:Options);
	setOptions(options:Options):void;
	sequenceFrom(sequence:any[]):void;
	setRatios(ratios:any[]):void;
	getSize(context:Context):any[];
}
 
	export = FlexibleLayout; }