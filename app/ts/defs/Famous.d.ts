interface Transition
{
	duration:Number;
	curve:any;
}
interface Context
{
	add(obj:Object):RenderNode;
	migrate(container:Node):void;
	getSize():Number[];
	setSize(size:Number[],contextParameters:Object):void;
	getPerspective():Number;
	setPerspective(perspective:Number,transition?:Object,callback?:any):void;
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
	getFPS():Number;
	setFPSCap(fps:Number):void;
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
	setOpacity(opacity:Number,transition?:Transitionable,callback?:any):Modifier;
	setOrigin(origin:Number[],transition?:Transitionable,callback?:any):Modifier;
	setAlign(align:Number[],transition?:Transitionable,callback?:any):Modifier;
	setSize(size:Number[],transition?:Transitionable,callback?:any):Modifier;
	setProportions(proportions:Number[],transition?:Transitionable,callback?:any):Modifier;
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
	getSize(context:Context):Number[];
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
	thenMove(m:Transform,t:Number[]):Transform;
	moveThen(v:Number[],m:Transform):Transform;
	translate(x:Number,y:Number,z:Number):Transform;
	thenScale(m:Transform,s:Number[]):Transform;
	scale(x:Number,y:Number,z:Number):Transform;
	rotateX(theta:Number):Transform;
	rotateY(theta:Number):Transform;
	rotateZ(theta:Number):Transform;
	rotate(phi:Number,theta:Number,psi:Number):Transform;
	rotateAxis(v:Number[],theta:Number):Transform;
	aboutOrigin(v:Number[],m:Transform):Transform;
	skew(phi:Number,theta:Number,psi:Number):Transform;
	skewX(angle:Number):Transform;
	skewY(angle:Number):Transform;
	perspective(focusZ:Number):Transform;
	getTranslate(m:Transform):Number[];
	inverse(m:Transform):Transform;
	transpose(m:Transform):Transform;
	interpret(M:Transform):Object;
	average(M1:Transform,M2:Transform,t:Number):Transform;
	build(spec:any):Transform;
	equals(a:Transform,b:Transform):Boolean;
	notEquals(a:Transform,b:Transform):Boolean;
	normalizeRotation(rotation:Number[]):Number[];
	inFront():void;
	behind():void;
}
interface View
{
	getOptions(key:String):Object;
	add(child:any):RenderNode;
	getSize():Number[];
}
interface ViewSequence
{
	getPrevious():ViewSequence;
	getNext():ViewSequence;
	indexOf():Number;
	getIndex():Number;
	toString():String;
	unshift(value:Object):void;
	push(value:Object):void;
	splice(index:Number,howMany:Number,value:Object):void;
	swap(other:ViewSequence):void;
	get():Object;
	getSize():Number[];
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
	scalarDivide(s:Number):Quaternion;
	put(q:Quaternion):Quaternion;
	clone():Quaternion;
	clear():Quaternion;
	isEqual(q:Quaternion):Boolean;
	dot(q:Quaternion):Number;
	normSquared():Number;
	norm():Number;
	isZero():Boolean;
	getTransform():Transform;
	getMatrix():Transform;
	slerp(q:Quaternion,t:Number):Transform;
}
interface Random
{
	integer(min:Number,max:Number,dim:Number):any;
	range(min:Number,max:Number,dim:Number):Number;
	sign(prob:Number):Number;
	bool(prob:Number):Boolean;
}
interface Utilities
{
	clamp(value:Number,range:Number[]):void;
	length(array:Number[]):void;
}
interface Vector
{
	add(v:Vector):Vector;
	sub(v:Vector):Vector;
	mult(r:Number):Vector;
	div(r:Number):Vector;
	cross(v:Vector):Vector;
	equals(v:Vector):Boolean;
	rotateX(theta:Number):Vector;
	rotateY(theta:Number):Vector;
	rotateZ(theta:Number):Vector;
	dot(v:Vector):Number;
	normSquared():Number;
	norm():Number;
	normalize(length:Number):Vector;
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
	set(state:Number,transition?:Transition,callback?:any):void;
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
	setTransform(transform:Transform,transition?:Transitionable,callback?:any):StateModifier;
	setOpacity(opacity:Number,transition?:Transitionable,callback?:any):StateModifier;
	setOrigin(origin:Number[],transition?:Transitionable,callback?:any):StateModifier;
	setAlign(align:Number[],transition?:Transitionable,callback?:any):StateModifier;
	setSize(size:Number[],transition?:Transitionable,callback?:any):StateModifier;
	setProportions(proportions:Number[],transition?:Transitionable,callback?:any):StateModifier;
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
	getEnergy():Number;
	reset(p:any,v:any,q:any,L:any):void;
	setOrientation(q:any):void;
	setAngularVelocity(w:any):void;
	setAngularMomentum(L:any):void;
	applyForce(force:Vector,location:Vector):void;
	applyTorque(torque:Vector):void;
	getTransform(dt:Number):Transform;
	integrateAngularMomentum(dt:Number):void;
	integrateOrientation(dt:Number):void;
}
interface Circle
{
	setRadius(r:Number):void;
}
interface Particle
{
	isBody():void;
	isActive():Boolean;
	sleep():void;
	wake():void;
	setPosition(position:any):void;
	setPosition1D(x:Number):void;
	getPosition():any[];
	getPosition1D():Number;
	():void;
	setVelocity1D(x:Number):void;
	getVelocity():any[];
	setForce():any[];
	getVelocity1D():Number;
	setMass(mass:Number):void;
	getMass():Number;
	reset(position:any,velocity:any):void;
	applyForce(force:Vector):void;
	applyImpulse(impulse:Vector):void;
	integrateVelocity(dt:Number):void;
	integratePosition(dt:Number):void;
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
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Constraint
{
	getEnergy():Number;
}
interface Curve
{
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Distance
{
	undefined():void;
	setOptions(anchor:any[]):void;
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Snap
{
	undefined():void;
	getEnergy(targets:Body,source:Body):Number;
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Surface
{
	undefined():void;
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Wall
{
	REFLECT():void;
	SILENT():void;
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
}
interface Walls
{
	applyConstraint(targets:Body[],source:Body,dt:Number):void;
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
	getEnergy():Number;
}
interface Repulsion
{
	LINEAR(r:Number,cutoff:Number):void;
	MORSE(r:Number,cutoff:Number):void;
	INVERSE(r:Number,cutoff:Number):void;
	GRAVITY(r:Number,cutoff:Number):void;
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
	FENE(dist:Number,rMax:Number):Number;
	FENE(dist:Number):Number;
	period():void;
	dampingRatio():void;
	length():void;
	length():void;
	anchor():void;
	forceFunction():void;
	setOptions(options:Object):void;
	applyForce(targets:Body[]):void;
	getEnergy(targets:any):Number;
}
interface VectorField
{
	CONSTANT(v:Vector,options:Object):Number;
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
	attach(agents:any[],targets:Body[],source:Body):Number;
	attachTo(agentID:any,target:Body):void;
	detach(id:any):void;
	detach(id:any,target:Body):void;
	detachAll():void;
	getAgent(id:any):void;
	getParticles():Particle[];
	getBodies():any[];
	getBodies():any[];
	forEachParticle(fn:any,dt:Number):void;
	forEachBody(fn:any,dt:Number):void;
	forEach(fn:any,dt:Number):void;
	getAgentEnergy(agentId:Number):Number;
	getEnergy():Number;
	step():void;
	isSleeping():Boolean;
	isActive():Boolean;
	sleep():void;
	wake():void;
}
interface CanvasSurface
{
	setContent(target:Node):void;
	getContext(contextId:String):void;
	setSize(size:number[],canvasSize:number[]):void;
}
interface ContainerSurface
{
	add(obj:Object,target:Node,context:Context,transform:Transform,opacity:Number,origin:Number[],size:Number[]):RenderNode;
}
interface ImageSurface
{
	setContent(imageUrl:String,target:Node):void;
}
interface InputSurface
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
interface TextareaSurface
{
	setPlaceholder(str:String):TextareaSurface;
	focus():TextareaSurface;
	focus():TextareaSurface;
	setValue(str:String):TextareaSurface;
	getValue():String;
	setName(str:String):TextareaSurface;
	getName():String;
	setWrap(str:String):TextareaSurface;
	setColumns(num:Number):TextareaSurface;
	setRows(num:Number,target:Node):TextareaSurface;
}
interface VideoSurface
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
	inQuad():void;
	outQuad():void;
	inOutQuad():void;
	inCubic():void;
	outCubic():void;
	inOutCubic():void;
	inQuart():void;
	outQuart():void;
	inOutQuart():void;
	inQuint():void;
	outQuint():void;
	inOutQuint():void;
	inSine():void;
	outSine():void;
	inOutSine():void;
	inExpo():void;
	outExpo():void;
	inOutExpo():void;
	inCirc():void;
	outCirc():void;
	inOutCirc():void;
	inElastic():void;
	outElastic():void;
	inOutElastic():void;
	inBack():void;
	outBack():void;
	inOutBack():void;
	inBounce():void;
	outBounce():void;
	inOutBounce():void;
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
	reset(pos:Number[],vel:any):void;
	getVelocity():any;
	setVelocity():any;
	isActive():Boolean;
	halt():void;
	get():any;
	set(endState:any,definition:Object,callback?:any):void;
}
interface Transitionable
{
	set(endState:Number|Object[],transition?:Transition,callback?:any):void;
	reset(startState:Number|Object[]):void;
	delay(duration:Number,callback?:any):void;
	get(timestamp:Number):any;
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
	set(endValue:Number|Object[],transition?:Transition,callback?:any):void;
	reset(startValue:Number|Object[],startVelocity:Number):void;
	getVelocity():Number;
	get(timestamp:Number):any;
	update(timestamp:Number):void;
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
	setTimeout(fn:any,duration:Number):Function;
	setInterval(fn:any,duration:Number):Function;
	after(fn:any,numTicks:Number):Function;
	every(fn:any,numTicks:Number):Function;
	clear(fn:any):void;
	debounce(func:any,wait:Number):Function;
}
interface Utility
{
	Direction():void;
	after(count:Number,callback?:any):Function;
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
	setPosition(position:Number,transition?:any,callback?:any):void;
	getPosition():Number;
	setProgress(progress:Number,transition?:any,callback?:any):void;
	getProgress():Number;
	toggle(transition?:any):void;
	reset(transition?:any):void;
	isOpen():Boolean;
}
interface EdgeSwapper
{
	show(content:Object):void;
	setOptions(options:any,context:Context):Number;
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
	setAngle(angle:Number,transition?:Object,callback?:any):void;
	setOptions(options:any):void;
	setFront(node:Object):void;
	setBack(node:Object):Number;
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
	hide(transition?:Transition,callback?:any):Number;
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
	hide(transition?:Transition,callback?:any):Number;
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
	getCurrentIndex():Number;
	goToPreviousPage():ViewSequence;
	goToNextPage():ViewSequence;
	goToPage():void;
	getPosition(node:Number):Number;
	getAbsolutePosition():Number;
	getOffset(node:Number):Number;
	setPosition(x:Number):void;
	setPosition(x:Number):void;
	getVelocity():Number;
	setVelocity(v:Number):void;
	setOptions(options:any):void;
	sequenceFrom(node:any):void;
	getSize():any[];
}
interface SequentialLayout
{
	getSize():any[];
	sequenceFrom(items:any):void;
	setOptions(options:any):void;
	setOutputFunction(outputFunction:any,parentSpec:Object):Number;
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
