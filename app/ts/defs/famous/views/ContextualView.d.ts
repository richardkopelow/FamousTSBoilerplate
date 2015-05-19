/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/ContextualView'
{
	import Context=require('famous/core/Context');
	class  ContextualView
{constructor(ops?:Options);
	setOptions(options:Options):void;
	setOptions(key:String,context:Context):any;
}
 
	export = ContextualView; }