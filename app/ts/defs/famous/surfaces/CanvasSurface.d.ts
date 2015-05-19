/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/surfaces/CanvasSurface'
{
	import Surface=require('famous/core/Surface');
	class  CanvasSurface extends Surface
{constructor(ops?:Options);
	getContext(contextId:String):void;
	setSize(size:number[]);
	setSize(size:number[],canvasSize:number[]):void;
}
 
	export = CanvasSurface; }