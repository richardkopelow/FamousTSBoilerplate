/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/surfaces/ImageSurface'
{
	import Surface=require('famous/core/Surface');
	class  ImageSurface extends Surface
{constructor(ops?:Options);
	setContent(imageUrl:string):void;
	setContent(target:Node):void;
}
 
	export = ImageSurface; }