/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/DrawerLayout'
{
	class  DrawerLayout
{constructor(ops?:Options);
	setOptions(options:Object):void;
	open(transition?:any,callback?:any):void;
	close(transition?:any,callback?:any):void;
	setPosition(position:number,transition?:any,callback?:any):void;
	getPosition():number;
	setProgress(progress:number,transition?:any,callback?:any):void;
	getProgress():number;
	toggle(transition?:any):void;
	reset(transition?:any):void;
	isOpen():Boolean;
}
 
	export = DrawerLayout; }