/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/EventHandler'
{
	import EventEmitter=require('famous/core/EventEmitter');
	class EventHandler
{
	constructor(ops?:Options);
	setInputHandler(object:Object,handler:EventHandler):void;
	setOutputHandler(object:Object,handler:EventHandler):void;
	emit(type:String,event?:Object):EventHandler;
	addListener():void;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
	on(type:String,fn:(param?:any)=>void):EventHandler;
	addListener():void;
	subscribe(source:EventEmitter):EventHandler;
	unsubscribe(source:EventEmitter):EventHandler;
}
 
	export = EventHandler; }