/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/modifiers/Fader'
{
	class  Fader
{constructor(ops?:Options);
	setOptions(options:Object):void;
	show(transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):void;
	set(state:number,transition?:Transition,callback?:any):void;
	halt():void;
	isVisible(target:Object):Boolean;
}
 
	export = Fader; }