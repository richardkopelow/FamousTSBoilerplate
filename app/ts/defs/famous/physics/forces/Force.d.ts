/// <reference path="../../FamousAuxDefs.d.ts" />
declare module 'famous/physics/forces/Force'
{
	class  Force
{constructor(ops?:Options);
	setOptions(options:Object):void;
	getEnergy():number;
}
 
	export = Force; }