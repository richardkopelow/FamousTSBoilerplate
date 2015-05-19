/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/modifiers/Draggable'
{
	class  Draggable
{constructor(ops?:Options);
	setOptions(options:Object):void;
	getPosition():Array<number>;
	setRelativePosition(position:Array<number>,transition?:Transition,callback?:any):void;
	setPosition(position:Array<number>,transition?:Transition,callback?:any):void;
	activate():void;
	deactivate():void;
	toggle(target:Object):Object;
}
 
	export = Draggable; }