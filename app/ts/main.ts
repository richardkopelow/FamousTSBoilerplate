/// <reference path="defs/require.d.ts" />
 
///<reference path='requireConfig.ts'/>
import Famous=require('./Famous');
import Program=require('./Program');

Famous.Loaded=function():void
{
	Program.Run();
}
Famous.Init();