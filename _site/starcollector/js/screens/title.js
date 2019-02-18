game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	

        me.audio.play("title", false);

        me.game.world.addChild(
            new me.Sprite (
                0,0,
                me.loader.getImage('title_screen')
            ),
            1
        );
        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function() {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);
                // font for the scrolling text
                this.font = new me.BitmapFont("32x32_font", 19.4);
                 
            },
             
            update : function (dt) {
                return true;
            },
             
            draw : function (context) {
                this.font.draw (context, "PRESS ENTER TO PLAY", 182, 455);
            },
            onDestroyEvent : function() {
                //just in case
                this.scrollertween.stop();
                me.audio.stop("title");
            }
        })), 2);
		// change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.mouse.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.audio.play("cling");
                me.state.change(me.state.PLAY);
            }
        });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindPointer(me.input.mouse.LEFT);
        me.event.unsubscribe(this.handler);
        	}
});
