/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/surfaces/TextareaSurface'
{
	import Surface=require('famous/core/Surface');
	class  TextareaSurface extends Surface
{constructor(ops?:Options);
	setPlaceholder(str:String):TextareaSurface;
	focus():TextareaSurface;
	focus():TextareaSurface;
	setValue(str:String):TextareaSurface;
	getValue():String;
	setName(str:String):TextareaSurface;
	getName():String;
	setWrap(str:String):TextareaSurface;
	setColumns(num:number):TextareaSurface;
	setRows(num:number,target:Node):TextareaSurface;
}
 
	export = TextareaSurface; }