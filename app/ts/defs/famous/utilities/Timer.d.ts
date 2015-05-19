/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/utilities/Timer'
{
	class  Timer
{constructor(ops?:Options);
	setTimeout(fn:any,duration:number):Function;
	setInterval(fn:any,duration:number):Function;
	after(fn:any,numTicks:number):Function;
	every(fn:any,numTicks:number):Function;
	clear(fn:any):void;
	debounce(func:any,wait:number):Function;
}
 
	export = Timer; }