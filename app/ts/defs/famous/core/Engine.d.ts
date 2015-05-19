/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/Engine'
{
	import EventHandler=require('famous/core/EventHandler');
	import Context=require('famous/core/Context');
	class Engine
	{
		static undefined():void;
		static pipe(target:EventHandler):EventHandler;
		static unpipe(target:EventHandler):EventHandler;
		static on(type:String,fn:(param?:any)=>void):EventHandler;
		static emit(type:String,event?:Object):EventHandler;
		static removeListener(type:String,handler:any):EventHandler;
		static getFPS():number;
		static setFPSCap(fps:number):void;
		static getOptions(key:String):Object;
		static setOptions(options:Options):void;
		static createContext(el?:Node):Context;
		static registerContext(context:Context):Context;
		static getContexts():any[];
		static deregisterContext(context:Context):void;
		static nextTick(fn:any):void;
		static defer(fn:any):void;
	}
	export = Engine;
}