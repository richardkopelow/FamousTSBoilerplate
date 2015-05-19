/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/events/EventArbiter'
{
	import EventHandler=require('famous/core/EventHandler');
	class  EventArbiter
{constructor(ops?:Options);
	setMode(mode:any):void;
	forMode(mode:any):EventHandler;
	emit(eventType:String,event?:Object):EventHandler;
}
 
	export = EventArbiter; }