/// <reference path="../FamousAuxDefs.d.ts" />

declare module 'famous/core/Modifier'
{
	import Transform=require('famous/core/Transform');
import RenderNode=require('famous/core/RenderNode');
	class  Modifier
{constructor(ops?:Options);
	transformFrom(transform:Object):Modifier;
	opacityFrom(opacity:Object):Modifier;
	originFrom(origin:Object):Modifier;
	alignFrom(align:Object):Modifier;
	sizeFrom(size:Object):Modifier;
	proportionsFrom(proportions:Object):Modifier;
	setTransform(transform:Transform,transition?:Transition,callback?:any):Modifier;
	setOpacity(opacity:number,transition?:Transition,callback?:any):Modifier;
	setOrigin(origin:number[],transition?:Transition,callback?:any):Modifier;
	setAlign(align:number[],transition?:Transition,callback?:any):Modifier;
	setSize(size:number[],transition?:Transition,callback?:any):Modifier;
	setProportions(proportions:number[],transition?:Transition,callback?:any):Modifier;
	halt():void;
	getTransform():Object;
	getFinalTransform():Transform;
	getOpacity():Object;
	getOrigin():Object;
	getAlign():Object;
	getSize():Object;
	getProportions(target:Object):Object;
}
 
	export = Modifier; }