/// <reference path="../FamousAuxDefs.d.ts" />
/// <reference path="./EventHandler.d.ts" />
/// <reference path="./EventEmitter.d.ts" />
/// <reference path="./RenderNode.d.ts" />

declare module 'famous/core/View'
{
	import EventHandler=require('famous/core/EventHandler');
	import EventEmitter=require('famous/core/EventEmitter');
	import RenderNode=require('famous/core/RenderNode');
	class  View
{constructor(ops?:Options);
	getOptions(key:String):Object;
	add(child:any):RenderNode;
	getSize():number[];
	on(type:String,fn:(param?:any)=>void):EventHandler;
	_eventOutput:EventEmitter;
}
 
export = View; }