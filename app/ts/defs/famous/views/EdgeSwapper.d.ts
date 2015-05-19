/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/EdgeSwapper'
{
	import Context=require('famous/core/Context');
	class  EdgeSwapper
{constructor(ops?:Options);
	show(content:Object):void;
	setOptions(options:Options,context:Context):number;
}
 
	export = EdgeSwapper; }