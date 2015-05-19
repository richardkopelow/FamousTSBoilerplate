/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/inputs/GenericSync'
{
	class  GenericSync
{constructor(ops?:Options);
	register(syncObject:Object):void;
	setOptions(options:Object):void;
	pipeSync(key:String):void;
	unpipeSync(key:String):void;
	addSync(syncs:String[]):void;
}
 
	export = GenericSync; }