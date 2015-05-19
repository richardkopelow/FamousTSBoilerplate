/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/utilities/Utility'
{
	class  Utility
{constructor(ops?:Options);
	Direction():void;
	after(count:number,callback?:any):Function;
	loadURL(url:String,callback?:any):void;
	createDocumentFragmentFromHTML(html:String):DocumentFragment;
}
 
	export = Utility; }