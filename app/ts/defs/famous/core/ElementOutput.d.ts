/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/ElementOutput'
{
	import EventHandler=require('famous/core/EventHandler');
	class  ElementOutput
{constructor(ops?:Options);
	undefined():void;
	on(type:String,fn:(param?:any)=>void):EventHandler;
	removeListener(type:String,fn:any):void;
	emit(type:String,event?:Object):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
 
	export = ElementOutput; }