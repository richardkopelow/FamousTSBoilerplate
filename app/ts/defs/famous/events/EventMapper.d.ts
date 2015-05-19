/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/events/EventMapper'
{
	import EventHandler=require('famous/core/EventHandler');
	class  EventMapper
{constructor(ops?:Options);
	emit(type:String,data:Object):EventHandler;
	trigger():void;
}
 
	export = EventMapper; }