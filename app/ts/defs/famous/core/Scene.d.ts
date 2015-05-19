/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/core/Scene'
{
	import RenderNode=require('famous/core/RenderNode');
	class  Scene
{constructor(ops?:Options);
	create():Scene;
	load(definition:Object):void;
	add(obj:Object):RenderNode;
}
 
	export = Scene; }