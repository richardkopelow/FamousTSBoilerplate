interface Options //Generic options, not all fields are listed and not all objects use all fields
{
	size?:any[];
	content?:any;
	properties?:Properties;
	origin?:number[];
	align?:number[];
	transform?:any;
}
interface Properties
{
	textAlign?:String;
	verticalAlign?:String;
	color?:String;
	backgroundColor?:String;
	fontSize?:String;
	borderRadius?:String;
}
interface Transition
{
	duration?:number;
	curve?:any;
}