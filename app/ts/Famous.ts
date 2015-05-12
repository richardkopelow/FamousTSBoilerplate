	/// <reference path="defs/Famous.d.ts" />
	
	class Famous
	{
		static Engine:Engine;
		static Modifier:any;
		static Surface:any;
		static ImageSurface:any;
		static Transform:any;
		static View:any;
		static StateModifier:any;
		
		static Init()
		{
			require(
			    [
			        'famous/core/Engine',
			        'famous/core/Surface',
			        'famous/core/Modifier',
			        'famous/surfaces/ImageSurface',
			        'famous/core/Transform',
					'famous/core/View',
					'famous/modifiers/StateModifier'
			    ],
			    function(
				engine:Engine,
			    surface:any,
			    modifier:any,
			    imageSurface:any,
			    transform:any,
				view:any,
				stateModifier:any
			    ) {
					Famous.Engine=engine;
					Famous.Surface=surface;
					Famous.Modifier=modifier;
					Famous.ImageSurface=imageSurface;
					Famous.Transform=transform;
					Famous.View=view;
					Famous.StateModifier=stateModifier;
					
					Famous.Loaded();
			    }
			);
		}
		static Loaded():void
		{
			
		}
	}
	export=Famous;