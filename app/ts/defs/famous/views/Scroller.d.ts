/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/Scroller'
{
	import Context=require('famous/core/Context');
	class  Scroller
{constructor(ops?:Options);
	getCumulativeSize():any[];
	setOptions(options:Options):void;
	onEdge():Boolean;
	outputFrom(fn:any,masterFn:any):void;
	positionFrom(position:any):void;
	sequenceFrom(node:any):void;
	getSize(context:Context):any[];
}
 
	export = Scroller; }