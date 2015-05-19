/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/Context'
{
	import RenderNode=require('famous/core/RenderNode');
	import EventHandler=require('famous/core/EventHandler');
	class  Context
{constructor(ops?:Options);
	add(obj:Object):RenderNode;
	migrate(container:Node):void;
	getSize():number[];
	setSize(size:number[],contextParameters:Object):void;
	getPerspective():number;
	setPerspective(perspective:number,transition?:Object,callback?:any):void;
	emit(type:String,event?:Object):EventHandler;
	on(type:String,fn:(param?:any)=>void):EventHandler;
	removeListener(type:String,handler:any):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
 
	export = Context; }