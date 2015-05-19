/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/Surface'
{
	import EventHandler=require('famous/core/EventHandler');
	class  Surface
{
	constructor(ops:Options);
	setOptions(options:Options):void;
	setProperties(properties:Properties):void;
	setContent(target:Node):void;
	setContent(body:String):void;
	setSize(size:number[]);
	on(type:String,fn:(param?:any)=>void):EventHandler;
}

 
	export = Surface; }