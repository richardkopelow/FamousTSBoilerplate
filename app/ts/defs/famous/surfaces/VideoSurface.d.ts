/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/surfaces/VideoSurface'
{
	import Surface=require('famous/core/Surface');
	class  VideoSurface extends Surface
{constructor(ops?:Options);
	setOptions(options:Object):void;
	setContent(videoUrl:String):void;
	setContent(target:Node):void;
}
 
	export = VideoSurface; }