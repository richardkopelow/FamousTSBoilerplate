/// <reference path="../FamousAuxDefs.d.ts" />
declare module 'famous/widgets/ToggleButton'
{
	class  ToggleButton
{constructor(ops?:Options);
	select(suppressEvent:Boolean):void;
	deselect(suppressEvent:Boolean):void;
	isSelected():Boolean;
	setOptions(options:Options):void;
	getSize():any[];
}
 
	export = ToggleButton; }