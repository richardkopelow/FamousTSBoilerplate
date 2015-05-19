/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/Lightbox'
{
	class  Lightbox
{constructor(ops?:Options);
	setOptions(options:Options):void;
	show(renderable:Object,transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):number;
}
 
	export = Lightbox; }