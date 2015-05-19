/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/Scrollview'
{
	import ViewSequence=require('famous/core/ViewSequence');
	class  Scrollview
{constructor(ops?:Options);
	undefined():void;
	undefined():void;
	undefined():void;
	getCurrentIndex():number;
	goToPreviousPage():ViewSequence;
	goToNextPage():ViewSequence;
	goToPage():void;
	getPosition(node:number):number;
	getAbsolutePosition():number;
	getOffset(node:number):number;
	setPosition(x:number):void;
	setPosition(x:number):void;
	getVelocity():number;
	setVelocity(v:number):void;
	setOptions(options:Options):void;
	sequenceFrom(node:any):void;
	getSize():any[];
}
 
	export = Scrollview; }