/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/transitions/MultipleTransition'
{
	class  MultipleTransition
{constructor(ops?:Options);
	get():any;
	set(endState:any,transition?:Object,callback?:any):void;
	reset(startState:any):void;
}
 
	export = MultipleTransition; }