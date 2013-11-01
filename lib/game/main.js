ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    //Scenes
    'game.scenes.manager',
    'game.scenes.ingame'
)
.defines(function(){
'use strict';
ig.Title = ig.Game.extend({
	// Load a font
	font: new ig.Font( '/media/04b03.font.png' ),
	
	init: function() {
		// Initialize your game here; bind keys etc.
        //Cache Busting
        ig.setNocache(true);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', ig.Title, 60, 400, 240, 2 );

});