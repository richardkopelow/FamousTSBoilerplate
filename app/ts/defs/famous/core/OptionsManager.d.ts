/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/OptionsManager'
{
	import EventHandler=require('famous/core/EventHandler');
	class  OptionsManager
{constructor(ops?:Options);
	patch(args:Object):OptionsManager;
	setOptions():void;
	key(identifier:string):OptionsManager;
	get(key:string):Object;
	getOptions():void;
	set(key:string,value:Object):OptionsManager;
	on(type:string,fn:(param?:any)=>void):EventHandler;
	removeListener(type:string,handler:any):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
 
	export = OptionsManager; }