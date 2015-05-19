/// <reference path="defs/require.d.ts" />
 
///<reference path='requireConfig.ts'/>
import Program=require('./Program');
import Engine=require('famous/core/Engine');
//I use the main file to do init operations that I don't want cluttering
//the body of my program
Engine.nextTick(()=>{
	Program.Run();
});