/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/RenderNode'
{
	import Context=require('famous/core/Context');
	import EventHandler=require('famous/core/EventHandler');
	class  RenderNode
{constructor(ops?:Options);
	add(child:Object):RenderNode;
	get():Object;
	set(child:Object):RenderNode;
	getSize(context:Context):number[];
}
 
	export = RenderNode; }