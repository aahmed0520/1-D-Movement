class Movement extends Phaser.Scene {
    constructor() {
        super("movementScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/");
    
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        
    }
}