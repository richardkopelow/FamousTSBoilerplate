/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/ViewSequence'
{
	class  ViewSequence
{constructor(ops?:Options);
	getPrevious():ViewSequence;
	getNext():ViewSequence;
	indexOf():number;
	getIndex():number;
	toString():String;
	unshift(value:Object):void;
	push(value:Object):void;
	splice(index:number,howMany:number,value:Object):void;
	swap(other:ViewSequence):void;
	get():Object;
	getSize():number[];
}
 
	export = ViewSequence; }