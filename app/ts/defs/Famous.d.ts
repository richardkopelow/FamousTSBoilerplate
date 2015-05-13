interface Transition
{
	duration:number;
	curve:any;
}
interface Context
{
	add(obj:Object):RenderNode;
	migrate(container:Node):void;
	getSize():number[];
	setSize(size:number[],contextParameters:Object):void;
	getPerspective():number;
	setPerspective(perspective:number,transition?:Object,callback?:any):void;
	emit(type:String,event:Object):EventHandler;
	on(type:String,fn?:any):EventHandler;
	removeListener(type:String,handler:any):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
interface ElementOutput
{
	undefined():void;
	on(type:String,fn?:any):EventHandler;
	removeListener(type:String,fn:any):void;
	emit(type:String,event:Object):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
interface Engine
{
	undefined():void;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
	on(type:String,fn?:any):EventHandler;
	emit(type:String,event:Object):EventHandler;
	removeListener(type:String,handler:any):EventHandler;
	getFPS():number;
	setFPSCap(fps:number):void;
	getOptions(key:String):Object;
	setOptions(options:any):void;
	createContext(el?:Node):Context;
	registerContext(context:Context):Context;
	getContexts():any[];
	deregisterContext(context:Context):void;
	nextTick(fn:any):void;
	defer(fn:any):void;
}
interface EventEmitter
{
	emit(type:String,event:Object):EventHandler;
	on(type:String,fn?:any):EventHandler;
	addListener():void;
	removeListener(type:String,handler:any):EventEmitter;
	bindThis(owner:Object):void;
}
interface EventHandler
{
	setInputHandler(object:Object,handler:EventHandler):void;
	setOutputHandler(object:Object,handler:EventHandler):void;
	emit(type:String,event:Object):EventHandler;
	addListener():void;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
	on(type:String,fn?:any):EventHandler;
	addListener():void;
	subscribe(source:EventEmitter):EventHandler;
	unsubscribe(source:EventEmitter):EventHandler;
}
interface Group
{
	undefined(obj:Object,target:Node,context:Object):RenderNode;
}
interface Modifier
{
	transformFrom(transform:Object):Modifier;
	opacityFrom(opacity:Object):Modifier;
	originFrom(origin:Object):Modifier;
	alignFrom(align:Object):Modifier;
	sizeFrom(size:Object):Modifier;
	proportionsFrom(proportions:Object):Modifier;
	setTransform(transform:Transform,transition?:Transitionable,callback?:any):Modifier;
	setOpacity(opacity:number,transition?:Transitionable,callback?:any):Modifier;
	setOrigin(origin:number[],transition?:Transitionable,callback?:any):Modifier;
	setAlign(align:number[],transition?:Transitionable,callback?:any):Modifier;
	setSize(size:number[],transition?:Transitionable,callback?:any):Modifier;
	setProportions(proportions:number[],transition?:Transitionable,callback?:any):Modifier;
	halt():void;
	getTransform():Object;
	getFinalTransform():Transform;
	getOpacity():Object;
	getOrigin():Object;
	getAlign():Object;
	getSize():Object;
	getProportions(target:Object):Object;
}
interface OptionsManager
{
	patch(arguments:Object):OptionsManager;
	setOptions():void;
	key(identifier:String):OptionsManager;
	get(key:String):Object;
	getOptions():void;
	set(key:String,value:Object):OptionsManager;
	on(type:String,fn?:any):EventHandler;
	removeListener(type:String,handler:any):EventHandler;
	pipe(target:EventHandler):EventHandler;
	unpipe(target:EventHandler):EventHandler;
}
interface RenderNode
{
	add(child:Object):RenderNode;
	get():Object;
	set(child:Object):RenderNode;
	getSize(context:Context):number[];
}
interface Scene
{
	create():Scene;
	load(definition:Object):void;
	add(obj:Object):RenderNode;
}
interface Transform
{
	multiply4x4(a:Transform,b:Transform):Transform;
	multiply(a:Transform,b:Transform):Transform;
	thenMove(m:Transform,t:number[]):Transform;
	moveThen(v:number[],m:Transform):Transform;
	translate(x:number,y:number,z:number):Transform;
	thenScale(m:Transform,s:number[]):Transform;
	scale(x:number,y:number,z:number):Transform;
	rotateX(theta:number):Transform;
	rotateY(theta:number):Transform;
	rotateZ(theta:number):Transform;
	rotate(phi:number,theta:number,psi:number):Transform;
	rotateAxis(v:number[],theta:number):Transform;
	aboutOrigin(v:number[],m:Transform):Transform;
	skew(phi:number,theta:number,psi:number):Transform;
	skewX(angle:number):Transform;
	skewY(angle:number):Transform;
	perspective(focusZ:number):Transform;
	getTranslate(m:Transform):number[];
	inverse(m:Transform):Transform;
	transpose(m:Transform):Transform;
	interpret(M:Transform):Object;
	average(M1:Transform,M2:Transform,t:number):Transform;
	build(spec:any):Transform;
	equals(a:Transform,b:Transform):Boolean;
	notEquals(a:Transform,b:Transform):Boolean;
	normalizeRotation(rotation:number[]):number[];
	inFront():void;
	behind():void;
}
interface View
{
	getOptions(key:String):Object;
	add(child:any):RenderNode;
	getSize():number[];
}
interface ViewSequence
{
	getPrevious():ViewSequence;
	getNext():ViewSequence;
	indexOf():number;
	getIndex():number;
	toString():String;
	unshift(value:Object):void;
	push(value:Object):void;
	splice(index:number,howMany:number,value:Object):void;
	swap(other:ViewSequence):void;
	get():Object;
	getSize():number[];
}
interface EventArbiter
{
	setMode(mode:any):void;
	forMode(mode:any):EventHandler;
	emit(eventType:String,event:Object):EventHandler;
}
interface EventFilter
{
	emit(type:String,data:Object):EventHandler;
	trigger(type:String,data:Object):void;
}
interface EventMapper
{
	emit(type:String,data:Object):EventHandler;
	trigger():void;
}
interface Accumulator
{
	get():any;
	set(value:any):void;
}
interface GenericSync
{
	register(syncObject:Object):void;
	setOptions(options:Object):void;
	pipeSync(key:String):void;
	unpipeSync(key:String):void;
	addSync(syncs:String[]):void;
}
interface MouseSync
{
	getOptions():Object;
	setOptions(options:Object):void;
}
interface PinchSync
{
	getOptions():Object;
	setOptions(options:Object):void;
}
interface RotateSync
{
	getOptions():Object;
	setOptions(options:Object):void;
}
interface ScaleSync
{
	getOptions():Object;
	setOptions(options:Object):void;
}
interface ScrollSync
{
	getOptions():Object;
	setOptions(options:Object):void;
}
interface TouchSync
{
	setOptions(options:Object):void;
	getOptions():Object;
}
interface Matrix
{
	get():any[];
	set(values:any[]):void;
	vectorMultiply(v:Vector):Vector;
	multiply(M2:Matrix):Matrix;
	transpose():Matrix;
	clone():Matrix;
}
interface Quaternion
{
	add(q:Quaternion):Quaternion;
	scalarDivide(s:number):Quaternion;
	put(q:Quaternion):Quaternion;
	clone():Quaternion;
	clear():Quaternion;
	isEqual(q:Quaternion):Boolean;
	dot(q:Quaternion):number;
	normSquared():number;
	norm():number;
	isZero():Boolean;
	getTransform():Transform;
	getMatrix():Transform;
	slerp(q:Quaternion,t:number):Transform;
}
interface Random
{
	integer(min:number,max:number,dim:number):any;
	range(min:number,max:number,dim:number):number;
	sign(prob:number):number;
	bool(prob:number):Boolean;
}
interface Utilities
{
	clamp(value:number,range:number[]):void;
	length(array:number[]):void;
}
interface Vector
{
	add(v:Vector):Vector;
	sub(v:Vector):Vector;
	mult(r:number):Vector;
	div(r:number):Vector;
	cross(v:Vector):Vector;
	equals(v:Vector):Boolean;
	rotateX(theta:number):Vector;
	rotateY(theta:number):Vector;
	rotateZ(theta:number):Vector;
	dot(v:Vector):number;
	normSquared():number;
	norm():number;
	normalize(length:number):Vector;
	clone():Vector;
	isZero():Boolean;
	set(v:Object):Vector;
	put(v:Vector):Vector;
	clear():void;
	cap():Vector;
	project(n:Vector):Vector;
	reflectAcross(n:Vector):Vector;
	get():Array<number>;
}
interface Draggable
{
	setOptions(options:Object):void;
	getPosition():Array<number>;
	setRelativePosition(position:Array<number>,transition?:Transition,callback?:any):void;
	setPosition(position:Array<number>,transition?:Transition,callback?:any):void;
	activate():void;
	deactivate():void;
	toggle(target:Object):Object;
}
interface Fader
{
	setOptions(options:Object):void;
	show(transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):void;
	set(state:number,transition?:Transition,callback?:any):void;
	halt():void;
	isVisible(target:Object):Boolean;
}
interface ModifierChain
{
	addModifier(varargs:Modifier):void;
	removeModifier(modifier:Modifier,input:Object):Object;
}
interface StateModifier
{
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
interface Body
{
	setMomentsOfInertia():void;
	updateAngularVelocity():void;
	toWorldCoordinates(localPosition:Vector):Vector;
	getEnergy():number;
	reset(p:any,v:any,q:any,L:any):void;
	setOrientation(q:any):void;
	setAngularVelocity(w:any):void;
	setAngularMomentum(L:any):void;
	applyForce(force:Vector,location:Vector):void;
	applyTorque(torque:Vector):void;
	getTransform(dt:number):Transform;
	integrateAngularMomentum(dt:number):void;
	integrateOrientation(dt:number):void;
}
interface Circle
{
	setRadius(r:number):void;
}
interface Particle
{
	isBody():void;
	isActive():Boolean;
	sleep():void;
	wake():void;
	setPosition(position:any):void;
	setPosition1D(x:number):void;
	getPosition():any[];
	getPosition1D():number;
	():void;
	setVelocity1D(x:number):void;
	getVelocity():any[];
	setForce():any[];
	getVelocity1D():number;
	setMass(mass:number):void;
	getMass():number;
	reset(position:any,velocity:any):void;
	applyForce(force:Vector):void;
	applyImpulse(impulse:Vector):void;
	integrateVelocity(dt:number):void;
	integratePosition(dt:number):void;
	():void;
	getTransform():Transform;
	modify(target:any):any;
}
interface Rectangle
{
	setSize(size:any[]):void;
}
interface Collision
{
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Constraint
{
	getEnergy():number;
}
interface Curve
{
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Distance
{
	undefined():void;
	setOptions(anchor:any[]):void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Snap
{
	undefined():void;
	getEnergy(targets:Body,source:Body):number;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Surface
{
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Wall
{
	REFLECT():void;
	SILENT():void;
	applyConstraint(targets:Body[],source:Body,dt:number):void;
}
interface Walls
{
	applyConstraint(targets:Body[],source:Body,dt:number):void;
	applyConstraint(fn:any):void;
	applyConstraint(angle:any):void;
	applyConstraint(angle:any):void;
	applyConstraint(angle:any):void;
	undefined():void;
}
interface Drag
{
	LINEAR(velocity:Vector):Vector;
	QUADRATIC(velocity:Vector):Vector;
	strength():void;
	forceFunction():void;
	applyForce(targets:Body[]):void;
	setOptions(options:Object):void;
}
interface Force
{
	setOptions(options:Object):void;
	getEnergy():number;
}
interface Repulsion
{
	LINEAR(r:number,cutoff:number):void;
	MORSE(r:number,cutoff:number):void;
	INVERSE(r:number,cutoff:number):void;
	GRAVITY(r:number,cutoff:number):void;
	strength():void;
	anchor():void;
	radii():void;
	cutoff():void;
	cap():void;
	decayFunction():void;
	applyForce(targets:Body[],source:Body):void;
}
interface RotationalDrag
{
	LINEAR(angularVelocity:Vector):Vector;
	QUADRATIC(angularVelocity:Vector):Vector;
	applyForce(targets:Body[]):void;
}
interface RotationalSpring
{
	undefined():void;
	applyForce(targets:Body[]):void;
	getEnergy(targets:any):void;
}
interface Spring
{
	undefined():void;
	FENE(dist:number,rMax:number):number;
	FENE(dist:number):number;
	period():void;
	dampingRatio():void;
	length():void;
	length():void;
	anchor():void;
	forceFunction():void;
	setOptions(options:Object):void;
	applyForce(targets:Body[]):void;
	getEnergy(targets:any):number;
}
interface VectorField
{
	CONSTANT(v:Vector,options:Object):number;
	LINEAR(v:Vector):Vector;
	RADIAL(v:Vector):Vector;
	POINT_ATTRACTOR(v:Vector,options:Object):Vector;
	strength():void;
	field():void;
	setOptions(options:Object):void;
	applyForce(targets:any[]):void;
}
interface PhysicsEngine
{
	undefined():void;
	constraintSteps():void;
	sleepTolerance():void;
	velocityCap():void;
	angularVelocityCap():void;
	setOptions(opts:Object):void;
	addBody(body:Body):Body;
	removeBody(body:Body):void;
	attach(agents:any[],targets:Body[],source:Body):number;
	attachTo(agentID:any,target:Body):void;
	detach(id:any):void;
	detach(id:any,target:Body):void;
	detachAll():void;
	getAgent(id:any):void;
	getParticles():Particle[];
	getBodies():any[];
	getBodies():any[];
	forEachParticle(fn:any,dt:number):void;
	forEachBody(fn:any,dt:number):void;
	forEach(fn:any,dt:number):void;
	getAgentEnergy(agentId:number):number;
	getEnergy():number;
	step():void;
	isSleeping():Boolean;
	isActive():Boolean;
	sleep():void;
	wake():void;
}
interface CanvasSurface extends Surface
{
	setContent(target:Node):void;
	getContext(contextId:String):void;
	setSize(size:number[],canvasSize:number[]):void;
}
interface ContainerSurface extends Surface
{
	add(obj:Object,target:Node,context:Context,transform:Transform,opacity:number,origin:number[],size:number[]):RenderNode;
}
interface ImageSurface extends Surface
{
	setContent(imageUrl:String,target:Node):void;
}
interface InputSurface extends Surface
{
	setPlaceholder(str:String):InputSurface;
	focus():InputSurface;
	blur():InputSurface;
	setValue(str:String):InputSurface;
	setType(str:String):InputSurface;
	getValue():String;
	setName(str:String):InputSurface;
	getName(target:Node):String;
}
interface TextareaSurface extends Surface
{
	setPlaceholder(str:String):TextareaSurface;
	focus():TextareaSurface;
	focus():TextareaSurface;
	setValue(str:String):TextareaSurface;
	getValue():String;
	setName(str:String):TextareaSurface;
	getName():String;
	setWrap(str:String):TextareaSurface;
	setColumns(num:number):TextareaSurface;
	setRows(num:number,target:Node):TextareaSurface;
}
interface VideoSurface extends Surface
{
	setOptions(options:Object):void;
	setContent(videoUrl:String,target:Node):void;
}
interface CachedMap
{
	create(mappingFunction:any):Function;
	get(input:Object):void;
}
interface Easing
{
	inQuad():any;
	outQuad():any;
	inOutQuad():any;
	inCubic():any;
	outCubic():any;
	inOutCubic():any;
	inQuart():any;
	outQuart():any;
	inOutQuart():any;
	inQuint():any;
	outQuint():any;
	inOutQuint():any;
	inSine():any;
	outSine():any;
	inOutSine():any;
	inExpo():any;
	outExpo():any;
	inOutExpo():any;
	inCirc():any;
	outCirc():any;
	inOutCirc():any;
	inElastic():any;
	outElastic():any;
	inOutElastic():any;
	inBack():any;
	outBack():any;
	inOutBack():any;
	inBounce():any;
	outBounce():any;
	inOutBounce():any;
}
interface MultipleTransition
{
	get():any;
	set(endState:any,transition?:Object,callback?:any):void;
	reset(startState:any):void;
}
interface SnapTransition
{
	period():void;
	dampingRatio():void;
	velocity():void;
	reset(state:any,velocity:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(state:any,definition:Object,callback?:any):void;
}
interface SpringTransition
{
	period():void;
	dampingRatio():void;
	velocity():void;
	reset(pos:number[],vel:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(endState:any,definition:Object,callback?:any):void;
}
interface Transitionable
{
	set(endState:number|Object[],transition?:Transition,callback?:any):void;
	reset(startState:number|Object[]):void;
	delay(duration:number,callback?:any):void;
	get(timestamp:number):any;
	isActive():Boolean;
	halt():void;
}
interface TransitionableTransform
{
	setTranslate(translate:any[],transition?:Object,callback?:any):TransitionableTransform;
	setScale(scale:any[],transition?:Object,callback?:any):TransitionableTransform;
	setRotate(eulerAngles:any[],transition?:Object,callback?:any):TransitionableTransform;
	setSkew(skewAngles:any[],transition?:Object,callback?:any):TransitionableTransform;
	set(transform:any[],transition?:Object,callback?:any):TransitionableTransform;
	setDefaultTransition(transition?:Object):void;
	get():Transform;
	getFinal():Transform;
	isActive():Boolean;
	halt():void;
}
interface TweenTransition
{
	Curve():void;
	registerCurve(curveName:String,curve:any):Boolean;
	unregisterCurve(curveName:String):Boolean;
	getCurve(curveName:String):any;
	getCurves():Object;
	setOptions(options:Object):void;
	set(endValue:number|Object[],transition?:Transition,callback?:any):void;
	reset(startValue:number|Object[],startVelocity:number):void;
	getVelocity():number;
	get(timestamp:number):any;
	update(timestamp:number):void;
	isActive():Boolean;
	halt():void;
}
interface WallTransition
{
	period():void;
	dampingRatio():void;
	velocity():void;
	restitution():void;
	reset(state:any,velocity:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(state:any,definition:Object,callback?:any):void;
}
interface Timer
{
	setTimeout(fn:any,duration:number):Function;
	setInterval(fn:any,duration:number):Function;
	after(fn:any,numTicks:number):Function;
	every(fn:any,numTicks:number):Function;
	clear(fn:any):void;
	debounce(func:any,wait:number):Function;
}
interface Utility
{
	Direction():void;
	after(count:number,callback?:any):Function;
	loadURL(url:String,callback?:any):void;
	createDocumentFragmentFromHTML(html:String):DocumentFragment;
}
interface ContextualView
{
	setOptions(options:any):void;
	setOptions(key:String,context:Context):any;
}
interface Deck
{
	getSize():any[];
	isOpen():Boolean;
	open(callback?:any):void;
	close(callback?:any):void;
	close(callback?:any):void;
}
interface DrawerLayout
{
	setOptions(options:Object):void;
	open(transition?:any,callback?:any):void;
	close(transition?:any,callback?:any):void;
	setPosition(position:number,transition?:any,callback?:any):void;
	getPosition():number;
	setProgress(progress:number,transition?:any,callback?:any):void;
	getProgress():number;
	toggle(transition?:any):void;
	reset(transition?:any):void;
	isOpen():Boolean;
}
interface EdgeSwapper
{
	show(content:Object):void;
	setOptions(options:any,context:Context):number;
}
interface FlexibleLayout
{
	setOptions(options:any):void;
	sequenceFrom(sequence:any[]):void;
	setRatios(ratios:any[]):void;
	getSize(context:Context):any[];
}
interface Flipper
{
	flip(transition?:Object,callback?:any):void;
	setAngle(angle:number,transition?:Object,callback?:any):void;
	setOptions(options:any):void;
	setFront(node:Object):void;
	setBack(node:Object):number;
}
interface GridLayout
{
	setOptions(options:any):void;
	sequenceFrom(sequence:any):void;
	getSize(context:Context):any[];
}
interface HeaderFooterLayout
{
	setOptions(options:any,context:Context):void;
}
interface Lightbox
{
	setOptions(options:any):void;
	show(renderable:Object,transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):number;
}
interface RenderController
{
	inTransformFrom(transform:any):void;
	inOpacityFrom(opacity:any):void;
	inOriginFrom(origin:any):void;
	inAlignFrom(align:any):void;
	outTransformFrom(transform:any):void;
	outOpacityFrom(opacity:any):void;
	outOriginFrom(origin:any):void;
	outAlignFrom(align:any):void;
	show(renderable:Object,transition?:Transition,callback?:any):void;
	hide(transition?:Transition,callback?:any):number;
}
interface ScrollContainer
{
	setOptions(options:any):void;
	sequenceFrom(sequence:any):void;
	getSize():any[];
}
interface Scroller
{
	getCumulativeSize():any[];
	setOptions(options:any):void;
	onEdge():Boolean;
	outputFrom(fn:any,masterFn:any):void;
	positionFrom(position:any):void;
	sequenceFrom(node:any):void;
	getSize(context:Context):any[];
}
interface Scrollview
{
	undefined():void;
	undefined():void;
	undefined():void;
	getCurrentIndex():number;
	goToPreviousPage():ViewSequence;
	goToNextPage():ViewSequence;
	goToPage():void;
	getPosition(node:number):number;
	getAbsolutePosition():number;
	getOffset(node:number):number;
	setPosition(x:number):void;
	setPosition(x:number):void;
	getVelocity():number;
	setVelocity(v:number):void;
	setOptions(options:any):void;
	sequenceFrom(node:any):void;
	getSize():any[];
}
interface SequentialLayout
{
	getSize():any[];
	sequenceFrom(items:any):void;
	setOptions(options:any):void;
	setOutputFunction(outputFunction:any,parentSpec:Object):number;
}
interface NavigationBar
{
	setContent(content:Object):any;
}
interface ToggleButton
{
	select(suppressEvent:Boolean):void;
	deselect(suppressEvent:Boolean):void;
	isSelected():Boolean;
	setOptions(options:any):void;
	getSize():any[];
}
