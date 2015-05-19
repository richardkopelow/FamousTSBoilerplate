/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/surfaces/InputSurface'
{
	import Surface=require('famous/core/Surface');
	class  InputSurface extends Surface
{constructor(ops?:Options);
	setPlaceholder(str:String):InputSurface;
	focus():InputSurface;
	blur():InputSurface;
	setValue(str:String):InputSurface;
	setType(str:String):InputSurface;
	getValue():String;
	setName(str:String):InputSurface;
	getName(target:Node):String;
}
 
	export = InputSurface; }