/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/modifiers/ModifierChain'
{
	import Modifier=require('famous/core/Modifier');
	class  ModifierChain
{constructor(ops?:Options);
	addModifier(varargs:Modifier):void;
	removeModifier(modifier:Modifier,input:Object):Object;
}
 
	export = ModifierChain; }