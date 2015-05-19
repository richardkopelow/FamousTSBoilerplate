/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/Flipper'
{
	class  Flipper
{constructor(ops?:Options);
	flip(transition?:Object,callback?:any):void;
	setAngle(angle:number,transition?:Object,callback?:any):void;
	setOptions(options:Options):void;
	setFront(node:Object):void;
	setBack(node:Object):number;
}
 
	export = Flipper; }