/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/surfaces/ContainerSurface'
{
	import Surface=require('famous/core/Surface');
	import EventHandler=require('famous/core/EventHandler');
	import RenderNode=require('famous/core/RenderNode');
	class  ContainerSurface extends Surface
{constructor(ops?:Options);
	add(obj:any):RenderNode;
	pipe(target:any):EventHandler;
}
 
	export = ContainerSurface; }