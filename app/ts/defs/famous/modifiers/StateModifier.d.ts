/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/modifiers/StateModifier'
{
	import View=require('famous/core/View');
import Modifier=require('famous/core/Modifier');
import Transform=require('famous/core/Transform');
	class  StateModifier
{constructor(ops?:Options);
	setTransform(transform:Transform,transition?:Transition,callback?:any):StateModifier;
	setOpacity(opacity:number,transition?:Transition,callback?:any):StateModifier;
	setOrigin(origin:number[],transition?:Transition,callback?:any):StateModifier;
	setAlign(align:number[],transition?:Transition,callback?:any):StateModifier;
	setSize(size:number[],transition?:Transition,callback?:any):StateModifier;
	setProportions(proportions:number[],transition?:Transition,callback?:any):StateModifier;
	halt():void;
	getTransform():Object;
	getFinalTransform():Transform;
	getOpacity():Object;
	getOrigin():Object;
	getAlign():Object;
	getSize():Object;
	getProportions(target:Object):Object;
}
 
	export = StateModifier; }