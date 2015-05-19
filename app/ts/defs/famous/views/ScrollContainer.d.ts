/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/ScrollContainer'
{
	class  ScrollContainer
{constructor(ops?:Options);
	setOptions(options:Options):void;
	sequenceFrom(sequence:any):void;
	getSize():any[];
}
 
	export = ScrollContainer; }