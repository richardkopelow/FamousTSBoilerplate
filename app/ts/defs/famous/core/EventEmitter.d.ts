/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/EventEmitter'
{
	import EventHandler=require('famous/core/EventHandler');
	class  EventEmitter
{constructor(ops?:Options);
	emit(type:String,event?:Object):EventHandler;
	on(type:String,fn:(param?:any)=>void):EventHandler;
	addListener():void;
	removeListener(type:String,handler:any):EventEmitter;
	bindThis(owner:Object):void;
}
 
	export = EventEmitter; }