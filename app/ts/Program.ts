import Famous=require('./Famous');
///<reference path="Famous.ts" />
    class Program
    {
    	static Run():void{
    	'use strict';
    
        // create the main context
        var mainContext = Famous.Engine.createContext();
    
        // your app here
        mainContext.setPerspective(1000);
        
        mainContext.add(s);
        var logo = new Famous.ImageSurface({
            size: [200, 200],
            content: '/content/images/famous_logo.png',
            classes: ['backfaceVisibility']
        });
    
        var initialTime = Date.now();
        var centerSpinModifier = new Famous.Modifier({
            align: [0.5, 0.5],
            origin: [0.5, 0.5],
            transform: function() {
                return Famous.Transform.rotateY(.002 * (Date.now() - initialTime));
            }
        });
    
        mainContext.add(centerSpinModifier).add(logo);
        
    	}
    }
    export=Program;