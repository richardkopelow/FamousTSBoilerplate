/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/events/EventFilter'
{
	import EventHandler=require('famous/core/EventHandler');
	class  EventFilter
{constructor(ops?:Options);
	emit(type:String,data:Object):EventHandler;
	trigger(type:String,data:Object):void;
}
 
	export = EventFilter; }