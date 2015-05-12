interface Engine
{
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
	on(type:string,handler:any):EventHandler;
	emit(type:string,event:Object):EventHandler;
	removeListener(type:string,handler:any):EventHandler;
	getFPS():number;
	setFPSCap(fps:number):void;
	getOptions(key:string):Object;
	setOptions(options:Object):void;
	createContext(el?:Node):Context;
	registerContext(context:Context):Context;
	getContexts():Context[];
	deregisterContext(context:Context):void;
}
interface EventHandler
{
	setInputHandler(object:Object,handler:EventHandler):void;
	setOutputHandler(object:Object,handler:EventHandler):void;
	emit(type:string,event?:Object):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
	on(type:string,handler:any):EventHandler;
	addListener(type:string,handler:any):EventHandler;
	subscribe(source:EventEmitter):EventHandler;
	unsubscribe(source:EventEmitter):EventHandler;
}
interface EventEmitter
{
	on(type:string,handler:any):EventHandler;
	emit(type:string,event?:Object):EventHandler;
	addListener(type:string,handler:any):EventHandler;
	removeListener(type:string,handler:any):EventHandler;
	bindThis(owner:Object):void;
}
interface Context
{
	add(obj:Object):RenderNode;
	migrate(container:Node);
	getSize():number[];
	setSize(size:number[]):void;
	getPerspective():number;
	setPerspective(perspective:number,transition?:Object,callback?:any):void;
	on(type:string,handler:any):EventHandler;
	emit(type:string,event?:Object):EventHandler;
	removeListener(type:string,handler:any):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
interface RenderNode
{
	add(child:Object):RenderNode;
	get():Object;
	set(child:Object):RenderNode;
	getSize():number[];
}