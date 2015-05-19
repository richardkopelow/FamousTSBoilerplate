/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/CachedMap'
{
	class  CachedMap
{constructor(ops?:Options);
	create(mappingFunction:any):Function;
	get(input:Object):void;
}
 
	export = CachedMap; }