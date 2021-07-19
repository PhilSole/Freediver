FD.create = function() {
    console.log('create');

    //===========================
    // World
    //===========================
    let worldWidth = 640;
    let worldHeight = 360;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight, 64, true, true, false, true); 
    
    
    //===========================
    // Background
    //===========================
    // let background = this.add.image(worldWidth/2, worldHeight/2, 'water');

    // background.displayWidth = worldWidth;
    // background.displayHeight = worldHeight;


    //===========================
    // Terrain            
    //===========================


    //===========================
    // Player
    //===========================


    //===========================
    // Other characters
    //===========================


    //===========================
    // Physics experiments
    //===========================
    let circle = this.add.circle(320, 180, 15);

    FD.circle1 = this.matter.add.gameObject(circle, {
        shape: 'circle',
        frictionAir: 0.03,
        density: 0.1161
    });

    
    //===========================
    // Controls
    //===========================
    this.matter.add.mouseSpring();

    this.input.on('pointerdown', function (pointer) {
        console.log('click');
    }, this);    
         
}