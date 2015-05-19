import Engine=require('famous/core/Engine');
import Modifier=require('famous/core/Modifier');
import Transform=require('famous/core/Transform');
import ImageSurface=require('famous/surfaces/ImageSurface')
class Program
{
	static Run():void{
	'use strict';

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);
    
    var logo = new ImageSurface({
        size: [200, 200],
        content: '/content/images/famous_logo.png',
        classes: ['backfaceVisibility']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    mainContext.add(centerSpinModifier).add(logo);
    
	}
}
export=Program;