/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/views/HeaderFooterLayout'
{
	import Context=require('famous/core/Context');
	import RenderNode=require('famous/core/RenderNode');
	class  HeaderFooterLayout
{constructor(ops?:Options);
	header:RenderNode;
	content:RenderNode;
	footer:RenderNode;
	setOptions(options:Options,context?:Context):void;
}
 
	export = HeaderFooterLayout; }